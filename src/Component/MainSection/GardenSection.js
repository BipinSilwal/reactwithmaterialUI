import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { Box, styled } from "@mui/system";
import data from '../../swim.json';

const MyBox = styled(Box)(
  ({ theme }) => `

      margin-top:50px;
      width:100%;
      
 
@media(max-width: ${theme.breakpoints.values.md}px){

      display:flex;
      flex-direction:column;
      padding:0px 30px;
      
}



`
);

const GardenSection = () => {



  return (
    <>
      <MyBox>
        <Grid container>
          <Grid item md={6} xs={12} sm={12}>
            <img
              src="/Images/slider/b.jpg"
              height="100%"
              width="100%"
              alt="welcome"
            />
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            sx={{
              backgroundColor: "#8f5541",
              color: "#ffffff",
              padding: "40px",
            }}
          >
            <Typography variant="h4" component="h4">
              Swimming Pool
            </Typography>
            <Typography variant="subtitle" component="p" sx={{ mb: "20px" }}>
              Full equipment exercise
            </Typography>

            <Typography sx={{ textAlign: "justify" }}>
              We offer two swimming pools to create comfort zone - one for
              adults and one for kids, with an adjoining children’s play area
              featuring fun games. It is a great recreational activity for
              people of all ages. Being fun, swimming is a great way to keep
              physically and mentally fit.
            </Typography>
            <Typography sx={{ textAlign: "justify", color:'black',  mb:'20px'}}>
              April, 2021 for approx. 2 months. We are coming up with highly
              anticipated interior renovations, expansions and upgraded
              facilities.
            </Typography>
            <Box>
              <Grid container>
                {data.map(value=>( 
                <Grid item md={3} sm ={6} xs={6} textAlign='center'>
                  <Paper elevation={3}>
                    <img src={value.thumbNailurl} alt="welcome" width="40%" />
                    <Typography variant="body2" >{value.title}</Typography>
                  </Paper>
                </Grid>))}
               
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </MyBox>
    </>
  );
};

export default GardenSection;
