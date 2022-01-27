import React from 'react';
import { Box, styled } from "@mui/system";
import { Container, Typography, Toolbar, Tabs, Tab, Grid  } from "@mui/material";

const Footer = () => {

    
const MyBox = styled(Box)(
    ({theme})=>`
  
        padding-top:50px;
        width:100%;
        background-color:#f6f6f6;
        margin-top:20px;


  
  
  `);

 const data = [ 'P.O. Box: 2141',
  'Street: Sahid Sukra Marg',
  'Ward Number: 10',
  'Municipality: Lalitpur',
  'District: Lalitpur',
  'Country: Nepal',
  'Tel: 977-1-5523900, Fax : 977-1-5523909',
  'Email : reservation@hotelhimalaya.com.np'  ];


  const values = ['Home', 'Aboutus', 'Offers','Rooms', 'Dinining','Meeting&events' ,'services', 'gallery', 'contacts' ]



  return <>
  
                <MyBox>
                        <Box>
                        <Grid container justifyContent="center">

                              <Grid  textAlign='center' item md={5} xs={12} sm={12} padding="10px" sx={{borderRight:{xs:'none', sm:'none', md:'1px solid black'}}}>
                                    {data.map(value=>(

                                                <Typography sx={{mb:'5px'}} variant="body2" component="h6">{value}</Typography>

                                    ))}


                               <img src='/Images/card/fb.png' alt="fb" />         
                               <img src='/Images/card/insta.png' alt="insta" width="15%" marginRight="5px"/>         
                               <img src='/Images/card/trip.png' alt="trip" />         
                                  

                              </Grid>

                              <Grid item md={5} xs={12} sm={12} padding="10px" sx={{display:'flex', justifyContent:"space-around",  alignItems:'center'}}>

                                                      <Typography variant="h1">12C</Typography>
                                                      <Typography variant="h5">kathmandu Nepal</Typography>
                              </Grid>

                        </Grid>
                        </Box>

                        <Box sx={{mt:'20px', backgroundColor:'#f3ede3' }}>
                              <Container width="100%" sx={{display:'flex',  justifyContent:"center", padding:'10px'}}>
                                
                                      
                                       <Tabs>
                                            {values.map(value=><Tab label={value}/>)}    

                                          </Tabs>   

                                          


                                </Container> 

                                <Container sx={{display:'flex', justifyContent:'center'}}>       
                                <Typography>
                                    Copyright © 2022 Hotel Himalaya. All Rights Reserved. Developed by Longtail e-media      
                                    </Typography>
                                    </Container> 
                        </Box>

                </MyBox>


  
  </>;
};

export default Footer;
