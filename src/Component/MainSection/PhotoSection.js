import React from 'react';
import { Grid,  Typography, Button, Container, Paper } from "@mui/material";
import { Box, styled } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import data from '../../data.json';

const MyBox = styled(Box)(({theme})=>`


margin-top:20px;
width:100%;
padding:20px;
            
@media(max-width:${theme.breakpoints.values.md}px){

        margin-top:0px;
        
}



`);

const style = {

        box1:{

            
            display:"flex",
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:'20px'
            
            
            
        }
}


const PhotoSection = () => {

  return <>
  
            <MyBox>

                <Container>
                    <Box sx={style.box1}>

                            <Typography variant="h4">PhotoGallery</Typography>

                        <Box sx={style.box1}>

                            <Button sx={{mr:'10px'}} variant="outlined" size="large" color="secondary"><ArrowBackIosNewIcon/> </Button>
                            <Button  variant="outlined" size="large" color="secondary"><ArrowForwardIosIcon/> </Button> 

                        </Box>
                            </Box>

                   

                    <Box>
                            <Grid container spacing={3}>
                    {data.map(value=>( 
                            <Grid item md={3} sm ={6} xs={6} textAlign='center'>
                            <Paper elevation={3}>
                                    <img src={value.thumbNailurl} alt="welcome" width="100%"  />
                    
                          </Paper>
                </Grid>))}
                                        

                            </Grid>

                    </Box>

                    </Container>
            </MyBox>
  
  
  </>;
};

export default PhotoSection;
