import React, { useState } from 'react';
import  { Box  } from '@mui/system'
import { AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Drawers from '../Drawer';


const Navbar = () => {


    const theme = useTheme();
    console.log(theme);

    const datas = useMediaQuery(theme.breakpoints.down('lg'));


    
    const style = {

            

            
            background:'url(Images/slider/a.jpg)',
            height:'80vh',
            backgroundSize:'cover',
           
          
            
           

            logo:{
                    
                    height:'10vh'

            },

            appbar:{

                    backgroundColor:"rgba(145, 125, 105, 0.6)",
                    justifyContent:'space-between'
          
            }
    };


    
    const [values, setValues] = useState('');

    const data = ['Home', 'Aboutus', 'Offers','Rooms', 'Dinining','Meeting&events' ,'services', 'gallery', 'contacts' ]



  return <>
    
  
            <Box sx={style}>

                    <AppBar sx={style.appbar} elevation={0} postion='static'>

                        <Toolbar sx={style.appbar}>
                        
                            <Box component="img" sx={style.logo} src="Images/slider/logo.png"/>



{ datas ?   <Drawers/> :
                             <Tabs value={values} onChange={(e,values)=>setValues(values)} indicatorColor="secondary" >

                                        {data.map(value=><Tab sx={{color:"#eceff1"}} label={value}/>)}

                            </Tabs> }




                          

                        <Box>
                            <Button variant="outlined" sx={{ color:"#eceff1", size:{xs:'small', md:'large', sm:"small"} }} >Book Online</Button>
                        </Box>

                        </Toolbar>

                        
                    </AppBar>



            </Box>
    
  
  
  </>;
};

export default Navbar;
