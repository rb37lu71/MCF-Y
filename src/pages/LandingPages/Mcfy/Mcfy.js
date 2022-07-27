import React from 'react'

// Component
import { Button, Container, Box, Typography, Grid, TextField } from '@mui/material';
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

function Mcfy() {
    return (
        <div>
            <Header />
            <Container>
				<Typography 
					variant='h4' 
					gutterBottom component='div'
					textAlign='center'
					marginTop='150px'>
					MCF-Y
				</Typography>
				<Typography 
					variant='body1' 
					gutterBottom component='div'
					textAlign='center'
					marginTop='50px'>
					8/1까지는 Beta 기간으로 무료로 사용이 가능합니다<br/>
                    MCF-Y의 놀라운 기능들을 직접 체험해 보세요
				</Typography>
			</Container>
			<Grid
				bgcolor='#EFEFF0'>
				<Box 
					p={2} 
					marginTop='250px' 
					paddingTop='100px'
					paddingBottom='100px'
					paddingRight='250px'
					paddingLeft='250px'
					textAlign='center'>
					<TextField 
						id="outlined-basic" 
						label="https://www.youtube.com/" 
						variant="outlined"
						fullWidth />
					<br/><br/><br/>
					<ColorButton
						variant="contained">
						v
					</ColorButton>
					<Typography 
						variant='body1' 
						gutterBottom component='div'
						textAlign='center'
						marginTop='50px'>
						다운로드 링크
					</Typography>
				</Box>
			</Grid>
            <Footer />
        </div>
    )
}

export default Mcfy