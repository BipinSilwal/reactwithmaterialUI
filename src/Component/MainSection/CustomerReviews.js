import React from "react";
import { Grid, Typography  } from "@mui/material";
import { Box, styled } from "@mui/system";


const MyBox = styled(Box)(
  ({ theme }) => `

            
 
            
            width:100%;
            padding:40px;
            height:auto'

    @media(max-width:${theme.breakpoints.values.md}px){

        margin-top:0px;
        padding:0px;
       

    } 
            

`
);

const CustomerReviews = () => {
  return (
    <>
      <MyBox>
         
        <Grid container sx={{ justifyContent: "space-around"}}>
          <Grid item md={7} textAlign= 'justify'>
            <Typography variant="h4" sx={{mb:'20px'}}>Customer services</Typography>
            <Box sx={{ display: "flex" }}>
              <Box sx={{mr:'20px', backgroundColor:'#dedede', padding:'20px', borderRadius:"3%"}}>
                <Typography >
                  Himalaya Hotel is my most favoured place to stay when I arrive
                  at Kathmandu for various reasons. First, it's one of the
                  cleanest property around, with great ambience - including
                  clean rooms, toilets and swimming pool. Secondly, the staff is
                  extremely polite and helpful. They are always so homecoming
                  and supportive. They will talk to you and connect on a
                  personal level - be it the security staff at gate or
                  restaurant staff or reception. Food is excellent, the
                  breakfast has a lot of varieties.
                </Typography>
                </Box>

                <Box  sx={{ display:{xs:'none', md:'block', sm:'none'}, backgroundColor:'#dedede', padding:'20px', borderRadius:"3%"}}>
                <Typography >
                They will talk to you and connect on a
                  personal level - be it the security staff at gate or
                  restaurant staff or reception. Food is excellent, the
                  breakfast has a lot of varieties.
                </Typography>
              
                </Box>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h4" sx={{mb:'20px'}}>Speical Offers</Typography>
            <Box>
                <img src="/Images/swim/a.jpg" alt="offers" width="100%"  height='260px'/>
            </Box>
          </Grid>
        </Grid>
        
       

      </MyBox>
    </>
  );
};

export default CustomerReviews;
