# -*- coding: utf-8 -*-

import pandas
import re
from googleapiclient.discovery import build

from flask import Flask, render_template, request, send_file

try:
    from werkzeug.utils import secure_filename
except:
    from werkzeug import secure_filename

import os

app = Flask(__name__)

api_key = 'AIzaSyCl4YFAaMTRyGEoHW-6KRGQrJNqhBaeOyk'
_youtube = build('youtube', 'v3', developerKey=api_key)


# 업로드 HTML 렌더링
@app.route('/', methods=['POST', 'GET'])
def upload_file():
    files_list = os.listdir("./uploads")
    if request.method == 'POST':
        
        if request.form['submit_btn'] == "Download":
            path = "./uploads/"
            return send_file(path + request.form['file'],
                             download_name=request.form['file'],
                             as_attachment=True)
            
            
        elif request.form['submit_btn'] == "Convert":
            crawling_and_convert(_youtube, request.form['file'])
            return render_template('upload.html', files=files_list)
        
        
        elif request.form['submit_btn'] == "Delete":
            path = "./uploads/"
            os.remove(path + "{}".format(request.form['file']))
            files_list = os.listdir("./uploads")
            return render_template('upload.html', files=files_list)
        
        
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


def get_video_title(youtube, video_id):
    results = youtube.videos().list(
        part="snippet",
        id=video_id
    ).execute()

    title = ""
    for item in results['items']:
        title = item['snippet']['title']

    return re.sub('[\\\/:*?"<>|]', ' ', title)


def crawling_and_convert(youtube, video_id):
    comments = get_comment_threads(youtube, video_id)

    print("crawling success")

    title = get_video_title(_youtube, video_id)
    print(title)
    if len(title) > 50:
        title = title[0:49]

    df = pandas.DataFrame(comments)
    df.to_csv('uploads/' + title + '.csv', header=['comment_id', 'author', 'date', 'like', 'text'], index=False, mode='w')

    print("convert to csv success")


if __name__ == "__main__":
    app.run(debug=True)


