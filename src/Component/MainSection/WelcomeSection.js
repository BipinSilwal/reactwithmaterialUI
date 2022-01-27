import React from "react";
import {Grid, Typography, Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme , responsiveFontSizes, ThemeProvider } from '@mui/material/styles';





const MyBox = styled(Box)(
  ({theme})=>`

      height: 60vh;
      margin-top:50px;
      width:100%;
      text-align:justify;
 
@media(max-width: ${theme.breakpoints.values.md}px){

      display:flex;
      flex-direction:column;
      padding:0px 30px;
      height:100%;

}



`

   

);



const WelcomeSection = () => {

  let theme = createTheme();

  theme = responsiveFontSizes(theme);



  const style = {
   

    text:{
        marginBottom:"20px"
    }
  };

  return (
    <>
      <MyBox>
        <Grid container   spacing={2} justifyContent="space-around">
          <Grid item md={5} sm={12} xs={12}>
            
        <ThemeProvider theme={theme}>
            
            <Typography variant="h4" component="h4" sx={style.text}>
              Welcome to Hotel Himalaya
            </Typography>

            <Typography sx={style.text}>
              Nestled within 10 acres of exquisitely landscaped grounds, Hotel
              Himalaya is conveniently located 8 km away from the Tribhuban
              International Airport and only 2 km from the Kathmandu city
              centre. We have always been an ideal haven for business and
              leisure travelers alike, offering resort ambience with an intimate
              touch. Since many of the distinguished NGO’s and INGO’s in
              Kathmandu are in the vicinity and the UN head office is only a few
              minutes walking distance
            </Typography>
            <Typography sx={style.text}>We provide a perfect place for our valued guests to rest, work or socialize. Come and stay with us and allow us to make you feel at home with true Nepalese hospitality!</Typography>
           
            </ThemeProvider>
            <Button variant="text" endIcon = {<ArrowForwardIcon/>} >Read More </Button>
        
          </Grid>

          <Grid item md={5} sx={{display:{xs:'none', sm:'none', md:'block'}}} >

            <img src="/Images/slider/b.jpg" height="80%" width="100%" alt="welcome"/>
          </Grid>
        </Grid>
      </MyBox>
    </>
  );
};

export default WelcomeSection;
