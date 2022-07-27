import React from 'react'

// Component
import { Button, Container, Box, Typography, Grid, TextField } from '@mui/material';
import Header from 'components/Header'
import Footer from 'components/Footer'

// Style 
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Icon
import BoltIcon from '@mui/icons-material/Bolt';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CheckIcon from '@mui/icons-material/Check';

// Color Button
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[700],
    },
}));


function Overview() {
    return (
        <div>
            <Header />
            <Container>
                <Typography 
                    variant='h4' 
                    gutterBottom component='div'
                    textAlign='center'
                    marginTop='150px'>
                    유튜브 악성 댓글 필터 <br/> MCF-Y
                </Typography>
                <Typography 
                    variant='body1' 
                    gutterBottom component='div'
                    textAlign='center'
                    marginTop='50px'>
                    유튜브를 운영하면서 각종 악성댓글에 상처받고 스트레스받던 날들 멈춰!<br/> 
                    악성댓글을 구분해서 정리해주는 MCF-Y를 사용해보세요.<br/> 
                    수 십만개 이상의 댓글 데이터셋으로 학습한 최첨단 AI가 당신의 고민을 해결해드립니다.<br/>
                </Typography>
                <Box 
                    textAlign='center'
                    marginTop='30px'>

                    <ColorButton
                        variant='contained'>
                        Get Started
                    </ColorButton>
                </Box>
            </Container>
            <Grid 
                container spacing={0} 
                bgcolor='#EFEFF0'  
                marginTop='200px'
                padding='50px'>
                <Grid item xs={6}>
                    <Box p={2}>
                        <Typography 
                            variant='body1' 
                            gutterBottom component='div'
                            textAlign='center'
                            marginTop='80px'
                            marginBottom='80px'>
                            오른쪽 입력창에 유튜브 영상 링크를 넣으면<br/> 
                            악성댓글을 판단해 pdf 파일로 만들어드립니다
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box 
                        p={2} 
                        marginTop='50px' 
                        marginRight='100px'>
                        <TextField 
                            id="outlined-basic" 
                            label="https://www.youtube.com/" 
                            variant="outlined"
                            fullWidth />
                        <br/><br/>
                        <ColorButton   
                            variant="contained">
                            GET STARTED
                        </ColorButton>
                    </Box>
                </Grid>           
            </Grid>
            <Grid 
                container spacing={3}
                marginTop='150px'>
                <Grid item xs={12} sm={4}>
                    <Box p={2} textAlign='center'>
                        <BoltIcon style={{ fontSize: '5rem' }}/>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='60px'>
                            신속함
                        </Typography>
                        <Typography 
                            variant='body2' 
                            gutterBottom component='div'
                            marginTop='30px'>
                            자동으로 댓글을 읽어와 <br/> 
                            신속하게 악플 여부를 판단합니다 <br/>
                            ai로 빠르게 준비하세요
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box p={2} textAlign='center'>
                        <GpsFixedIcon style={{ fontSize: '5rem' }}/>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='60px'>
                            편리함
                        </Typography>
                        <Typography 
                            variant='body2' 
                            gutterBottom component='div'
                            marginTop='30px'>
                            유튜브 영상 링크 입력 하나면 <br/> 
                            자동으로 고소 자료 준비 끝 <br/>
                            더이상 악플 보면서 상처 받지 마세요
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box p={2} textAlign='center'>
                        <CheckIcon style={{ fontSize: '5rem' }}/>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='60px'>
                            정확함
                        </Typography>
                        <Typography 
                            variant='body2' 
                            gutterBottom component='div'
                            marginTop='30px'>
                            전처리 과정을 거친 댓글 중에서 <br/> 
                            수십만 개의 데이터셋으로 학습한 <br/> 
                            ai가 악플을 선별합니다
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                bgcolor='#EFEFF0'  
                marginTop='200px'
                padding='50px'
                textAlign='center'>
                <Box p={2} 
                    marginTop='50px' 
                    marginBottom='50px'
                    marginRight='100px'>
                    <Typography 
                        variant='h6' 
                        gutterBottom component='div'
                        marginTop='30px'>
                        Pmac-Dam은 MCF-Y와 <br/> 
                        악플 없는 건강한 인터넷 문화를 꿈꿉니다
                    </Typography>
                    <br/><br/>
                    <ColorButton   
                        variant="contained">
                        Contact
                    </ColorButton>
                </Box>
            </Grid>
            <Footer />
        </div>
    )
}

export default Overview