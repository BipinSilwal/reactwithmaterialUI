import React  from 'react';
import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import data from "../../data.json";
import Cards from "../Card";


const MyBox = styled(Box)(
  ({theme})=>`

      height: 70vh;
      margin:50px 0px;
      width:100%;
 
@media(max-width: ${theme.breakpoints.values.md}px){

      text-align:center;
      height:100%;
      

}



`);

const Accodomation = () => {

  const style = {

    text: {
      paddingTop: "20px",
      marginBottom: "20px",
    },
  };


 
  return (
    <>
      <MyBox>
        <Box>

        <Typography variant="h4" sx={style.text} component="h4">
          ACCOMODATION
        </Typography>

        </Box>
        <Grid
          container
          spacing={2}
          sx={{ width: "90%", margin: "auto", }}
          justifyContent="space-around"
        >


          {data.map((value) => <Cards {...value}/>  )}
        </Grid>
      </MyBox>
    </>
  );
};

export default Accodomation;



