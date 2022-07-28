# -*- coding: utf-8 -*-

import pandas
import re
from keras_preprocessing.text import Tokenizer
from keras_preprocessing.sequence import pad_sequences
from soynlp.normalizer import *
from flask_cors import CORS
from googleapiclient.discovery import build
# from kiwipiepy import Kiwi
from keras.models import load_model

from flask import Flask, render_template, request, send_file

try:
    from werkzeug.utils import secure_filename
except:
    from werkzeug import secure_filename

import os

app = Flask(__name__)
CORS(app)

api_key = 'AIzaSyCl4YFAaMTRyGEoHW-6KRGQrJNqhBaeOyk'
_youtube = build('youtube', 'v3', developerKey=api_key)


# 업로드 HTML 렌더링
@app.route('/', methods=['POST', 'GET'])
def upload_file():
    files_list = os.listdir("./uploads")
    if request.method == 'POST':
        youtube_link = request.form['file']
        youtube_link = youtube_link[32:43]
        print(youtube_link)
        
        crawling_and_convert(_youtube, youtube_link)
        
        fileName = youtube_link + '.csv'
        # f = open("./uploads/" + fileName)
        # model = load_model('CommentClassification.h5')
        # kiwi = Kiwi()
        # sent=[]
        # while True:
        #     line = f.readline()
        #     if not line:
        #         break
        #     text = line.split(",")[-1]
        #     text = cleanse(text)
        #     text=repeat_normalize(text,num_repeats = 2)
        #     sent.append(text)
            
        # token = Tokenizer(len(sent))
        # token.fit_on_texts(sent)
        # text = token.texts_to_sequences(sent)
        # text = pad_sequences(text, 75)    
        # #특수문자 제거, spacing 제거, 띄어쓰기 
        # pred = model.predict(text)
        # # for i in pred:

        
        path = "./uploads/"
        return send_file(path + fileName,
                            download_name=(fileName),
                            as_attachment=True)
        
    return render_template('upload.html', files=files_list)


# Call the API's commentThreads.list method to list the existing comment threads.
def get_comment_threads(youtube, video_id):
    results = youtube.commentThreads().list(
        part="snippet,replies",
        videoId=video_id,
        textFormat="plainText",
        maxResults=100
    ).execute()

    comment_list = []
    while results:
        for item in results["items"]:
            comment_id = item['id']
            comment = item["snippet"]["topLevelComment"]
            author = comment["snippet"]["authorDisplayName"]
            published_at = comment['snippet']['publishedAt']
            text = comment["snippet"]["textDisplay"]
            text = text.replace('\n', '')
            text = text.replace('\t', '')
            like = comment["snippet"]["likeCount"]
            comment_list.append((comment_id, author, published_at, like, text))

            if item['snippet']['totalReplyCount'] > 0:
                replies = youtube.comments().list(
                    part="snippet",
                    parentId=item['id']
                ).execute()

                for reply in replies['items']:
                    comment_id = reply['id']
                    author = reply["snippet"]["authorDisplayName"]
                    published_at = reply['snippet']['publishedAt']
                    text = reply["snippet"]["textDisplay"]
                    like = comment["snippet"]["likeCount"]
                    text = text.replace('\n', '')
                    text = text.replace('\t', '')
                    comment_list.append((comment_id, author, published_at, like, text))

        if 'nextPageToken' in results:
            results = youtube.commentThreads().list(
                part="snippet,replies",
                videoId=video_id,
                textFormat="plainText",
                pageToken=results['nextPageToken'],
                maxResults=100
            ).execute()

        else:
            break

    return comment_list

def cleanse(text):
    pattern = re.compile(r'\s+')
    text = re.sub(pattern," ",text)
    text = re.sub('[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]',' ',text)
    return text

def crawling_and_convert(youtube, video_id):
    comments = get_comment_threads(youtube, video_id)

    print("crawling success")

    # title = get_video_title(_youtube, video_id)
    title = video_id
    print(title)

    model = load_model('CommentClassification.h5')
    # kiwi = Kiwi()
    sent=[]
    malicious =[]
    for comment in comments:
        line = comment[4]
        text = line.split(",")[-1]
        text = cleanse(text)
        text=repeat_normalize(text,num_repeats = 2)
        sent.append(text)
        
    token = Tokenizer(len(sent))
    token.fit_on_texts(sent)
    text = token.texts_to_sequences(sent)
    text = pad_sequences(text, 75)    
    #특수문자 제거, spacing 제거, 띄어쓰기 
    pred = model.predict(text)
    pred = pred.tolist()

    for i in range(len(pred)):
        if pred[i][0] < pred[i][1]:
            malicious.append(comments[i])

    
    # print(malicious)

    df = pandas.DataFrame(malicious)
    df.to_csv('uploads/' + title + '.csv', header=['comment_id', 'author', 'date', 'like', 'text'], index=False, mode='w', encoding="utf-8-sig")

    print("convert to csv success")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)
    