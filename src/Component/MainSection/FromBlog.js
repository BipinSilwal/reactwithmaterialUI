import React from "react";
import {
  Grid,
  Typography,
  Button,
  Container,
  Paper,
  Card,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blog from "../../blog.json";

const MyBox = styled(Box)(
  ({ theme }) => `
  
  width:100%;
  padding:20px;

  @media(max-width:${theme.breakpoints.values.md}px){




  }
            
        
`
);

const Cardes = styled(Card)(
  ({ theme }) => `

    max-width:345px;


    @media(max-width:${theme.breakpoints.values.md}px){

        width:100%;

    }


`
);

const style = {
  box1: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  
};

const FromBlog = () => {
  return (
    <>
      <MyBox>
        <Container>
          <Box sx={style.box1} >
            <Typography variant="h4">From the Blog</Typography>
          </Box>

          <Box sx={{backgroundColor:'red'}}>
            <Grid container >
              {blog.map((value) => (
                <Grid item md={4} xs={6} sx={{position:'relative'}} textAlign="center">
                  <Paper elevation={3}>
                    <img src={value.thumbNailurl} alt="welcome" width="100%" />
                  </Paper>
                  <Cardes sx={{position:'absolute', left:'20px', bottom:'-15px', display:{xs:'none', md:'block', sm:'none'} }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        01 March 2020
                      </Typography>
                      <Typography variant="h5" component="div">
                        Orient BBQ Night
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="justify">
                        “Was there for the first time…can’t wait to come back!
                        Amazing job by chef and service people. 
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        variant="text"
                        endIcon={<ArrowForwardIcon />}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Cardes>
                </Grid>
              ))}
            </Grid>
          </Box>
{/* 
          <Box sx={{ mt: "-120px" }}>
            <Grid container spacing={3} paddingLeft=" 20px">
              {blog.map((value) => (
                <Grid item md={4} sm={6} xs={6} textAlign="center">
                 
                </Grid>
              ))}
            </Grid>
          </Box> */}
        </Container>
      </MyBox>
    </>
  );
};

export default FromBlog;
