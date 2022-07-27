import React from 'react'

// Component
import { Button, Container, Box, Typography, Grid } from '@mui/material';
import Header from 'components/Header'
import Footer from 'components/Footer'

// Style 
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Icon
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';

// Color Button
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
        backgroundColor: grey[700],
    },
}));

function Contact() {
  	return (
		<div>
	  		<Header />
	  		<Container>
				<Typography 
					variant='h4' 
					gutterBottom component='div'
					textAlign='center'
					marginTop='150px'>
					Contact
				</Typography>
				<Typography 
					variant='body1' 
					gutterBottom component='div'
					textAlign='center'
					marginTop='50px'>
					Pmac-Dam에서 MCF-Y에 대한 다양한 제안을 기다립니다
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
                container spacing={3}
                marginTop='150px'
				marginBottom='150px'
                paddingLeft='200px'
                paddingRight='200px'>
                <Grid item xs={12} sm={4}>
                    <Box p={2} textAlign='center'>
                        <EmailIcon style={{ fontSize: '4rem' }}/>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='60px'>
                            Email
                        </Typography>
                        <Typography 
                            variant='body2' 
                            gutterBottom component='div'
                            marginTop='30px'>
                            pamc-dam@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box p={2} textAlign='center'>
                        <CallIcon style={{ fontSize: '4rem' }}/>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='60px'>
                            Call
                        </Typography>
                        <Typography 
                            variant='body2' 
                            gutterBottom component='div'
                            marginTop='30px'>
                            010-iywo-eiwi 
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box p={2} textAlign='center'>
                        <GitHubIcon style={{ fontSize: '4rem' }}/>
                        <Typography 
                            variant='h6' 
                            gutterBottom component='div'
                            marginTop='60px'>
                            GitHub
                        </Typography>
                        <Typography 
                            variant='body2' 
                            gutterBottom component='div'
                            marginTop='30px'>
                            rb37lu71 | Jhanoo | jakekang28
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
	  		<Footer />
		</div>
  	)
}

export default Contact

