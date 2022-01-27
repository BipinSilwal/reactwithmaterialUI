import React, { useState }  from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import {  Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import  { Box  } from '@mui/system'

const Drawers = () => {

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const data = ['Home', 'Aboutus', 'Offers','Rooms', 'Dinining','Meeting&events' ,'services', 'gallery', 'contacts' ]


   
  return <>
  
  <Drawer  open={openDrawer} onClick={()=>setOpenDrawer(!openDrawer)} >


      <Box>
          <CloseIcon cursor="pointer" onClick={()=>setOpenDrawer(!openDrawer)}/>
      </Box>


      <List sx={style}>

        {data.map(value=>(

            <Divider>
           <ListItem button>

           <ListItemIcon>
   
               <ListItemText>{value}</ListItemText>
               
   
           </ListItemIcon>
   
                 
   
   
         </ListItem>
         </Divider>
          
          ))}

     
      </List>

    </Drawer>

 <IconButton sx={{order:{xs:3,  sm:3}}} onClick={()=>setOpenDrawer(!openDrawer)}>

        <MenuIcon  /> 

 </IconButton>
  
  </>;
};

export default Drawers;
