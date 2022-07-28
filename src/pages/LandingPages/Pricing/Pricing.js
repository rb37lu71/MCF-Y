import React from 'react'

// Component
import { Button, Container, Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from 'components/Header'
import Footer from 'components/Footer'

// Style 
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Color Button
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
        backgroundColor: grey[700],
    },
}));

function Pricing() {
    return (
        <div>
            <Header />
            <Container>
                <Typography 
                    variant='h4' 
                    gutterBottom component='div'
                    textAlign='center'
                    marginTop='150px'>
                    Pricing
                </Typography>
                <Typography 
                    variant='body1' 
                    gutterBottom component='div'
                    textAlign='center'
                    marginTop='50px'>
                    저렴한 요금제로 MCF-Y를 간편하게 사용해보세요
                </Typography>
                <Box 
                    textAlign='center'
                    marginTop='30px'>
                    <Link to='/mcfy'>
                        <ColorButton
                            variant='contained'>
                            Get Started
                        </ColorButton>
                    </Link>
                </Box>
            </Container>
            <Grid>
                <Typography 
                    variant='h6' 
                    gutterBottom component='div'
                    paddingLeft='150px'
                    marginTop='200px'>
                    기본 요금
                </Typography>
            </Grid>
            <Grid 
                container spacing={3}
                paddingLeft='150px'
                paddingRight='150px'>
                <Grid item xs={12} sm={3}>
                    <Box p={2} 
                        bgcolor='#EAEAEB'
                        marginTop='50px'
                        marginBottom='50px'
                        padding='20px'>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='30px'
                            marginBottom='30px'>
                            1회 체험 
                        </Typography>
                        <Typography 
                            variant='h6' 
                            marginTop='30px'
                            textAlign='right'>
                            30,000원
                        </Typography>
                        <Typography 
                            variant='body2' 
                            textAlign='right'
                            textColor='#787878'>
                            /영상 1개
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Box p={2} 
                        bgcolor='#EAEAEB'
                        marginTop='50px'
                        marginBottom='50px'
                        padding='20px'>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='30px'
                            marginBottom='30px'>
                            5회권
                        </Typography>
                        <Typography 
                            variant='h6' 
                            marginTop='30px'
                            textAlign='right'>
                            120,000원
                        </Typography>
                        <Typography 
                            variant='body2' 
                            textAlign='right'
                            textColor='#787878'>
                            /영상 5개
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Box p={2} 
                        bgcolor='#EAEAEB'
                        marginTop='50px'
                        marginBottom='50px'
                        padding='20px'>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='30px'
                            marginBottom='30px'>
                            20회권
                        </Typography>
                        <Typography 
                            variant='h6' 
                            marginTop='30px'
                            textAlign='right'>
                            320,0000원
                        </Typography>
                        <Typography 
                            variant='body2' 
                            textAlign='right'
                            textColor='#787878'>
                            /영상 20개
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Box p={2} 
                        bgcolor='#EAEAEB'
                        marginTop='50px'
                        marginBottom='50px'
                        padding='20px'>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='30px'
                            marginBottom='30px'>
                            한달 정액권  
                        </Typography>
                        <Typography 
                            variant='h6' 
                            marginTop='30px'
                            textAlign='right'>
                            480,000원
                        </Typography>
                        <Typography 
                            variant='body2' 
                            textAlign='right'
                            textColor='#787878'>
                            /최대 영상 50개
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid 
                bgcolor='#EFEFF0'  
                marginTop='200px'
                padding='50px'>
                <Box p={2}>
                    <Typography 
                        variant='body1' 
                        gutterBottom component='div'
                        paddingLeft='100px'
                        marginTop='30px'>
                        악성 댓글 캡쳐본, 악성 댓글 경향성, 작성자의 악성 댓글 빈도수, 다른 플랫폼 악성댓글 분석 등<br/> 
                        더 많은 자료가 필요하시다면,<br/>
                        Premium 이용을 위해 아래 버튼을 눌러 메일을 남겨주세요 <br/><br/>
                    </Typography>
                </Box>
                <Box 
                    p={2} 
                    marginRight='100px'
                    textAlign='center'>
                    <Link to='/contact'>
                        <ColorButton   
                            variant="contained">
                            Contact
                        </ColorButton>
                    </Link>
                </Box>         
            </Grid>
        <Footer />
    </div>
  )
}

export default Pricing