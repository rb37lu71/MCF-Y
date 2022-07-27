import { Box, Typography, Grid } from '@mui/material';
import React from 'react'

function Footer() {
  return (
    <Grid 
        container spacing={0}
        marginTop='50px'
        marginBottom='50px'>
        <Grid item xs>
            <Box>
                <Typography 
                    variant='body2' 
                    gutterBottom component='div'
                    textAlign='center'
                    arginTop='30px'>
                    몰입캠프 <br/> Mad-Camp
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box>
                <Typography 
                    variant='body2' 
                    gutterBottom component='div'
                    textAlign='center'
                    arginTop='30px'>
                    카이스트 IT융합빌딩 N1 강의실 114 <br/> 
                    대표전화 : 010-iywo-eiwi | 팩스 : 강의실 114 4분반 
                </Typography>
            </Box>
        </Grid>
        <Grid item xs>
            <Box>
                <Typography 
                    variant='body2' 
                    gutterBottom component='div'
                    textAlign='center'
                    arginTop='30px'>
                    개인정보보호방침 <br/> (주)Pmac-Dam
                </Typography>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Footer