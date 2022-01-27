import React from 'react';
import { Grid, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from '@mui/system';

const Cardes = styled(Card)(({theme})=>`

    max-width:345;

    @media(max-width:${theme.breakpoints.values.md}px){

        width:100%;

    }


`);

const Cards = ({thumbNailurl, title, description}) => {


  return <>

  <Grid item md={3}>
              <Cardes>
                <CardMedia
                  component="img"
                  height="140"
                  image={thumbNailurl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="text" endIcon={<ArrowForwardIcon />}>
                    Details
                  </Button>
                </CardActions>
              </Cardes>
            </Grid>
  
  </>;
};

export default Cards;
