import React from "react";
import './../App.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ExpressJSgrph from './../ExpressJS-Users.svg';
import ReactJSgrph from './../ReactJS-Users.svg';
import MaterialUIgrph from './../Material-UI-Users.svg';
import mui from  './../MUI.png'
import logo from './../logo.svg';
import express from './../express.png';
import theme from "../theme";
import { Container } from "@mui/material";
import { Grid} from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";

function arrayToUl (arr) {
  return (
    <ul>
      {arr.map(e => (
        <li key={e}>
          {e}
        </li>
      ))}
    </ul>
  )};

function Section({title, image, rating, pros, cons}) {
  
  return (
    <div>  
      <Typography variant="h2" color="white">{title}</Typography>
      <Box sx={{flexGrow:0.5}}>
        <Grid container spacing={2} style={{minWidth:"1200px"}}>
          <Grid item sm={6}>
            <img src={image} className="React-graph" alt={`${title} graph`} style={{width:"100%",height:"auto",minWidth:"200px"}}/>
          </Grid>
          <Grid item sm={6} className="textbox">
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h5">Average User Rating:</Typography>
              </Grid>
              <Grid item sm={8}>
                <Rating defaultValue={rating} readOnly size="medium"/> 
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h5">Pros:</Typography>
              </Grid>
              <Grid item sm={8}>
                {arrayToUl(pros)}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h5">Cons:</Typography>
              </Grid>
              <Grid item sm={8}>
                {arrayToUl(cons)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}

// Tubbs Page
function Page1() {
  return (
    <div className="Page1">
      <header className="Page-header">
        <h1>
          CPS530 React, MaterialUI, and Express WebApp! {"\n"}
        </h1>
      </header>
    
      {Section({  
        title: "ReactJS", 
        image: ReactJSgrph, 
        rating: 5, 
        pros: [
          "SEO friendly",
          "Smooth and fast performance",
          "High pace of development"
        ],
        cons: [
          "High pace of development causes rushed documentation",
          "Uses JSX which imposes a great learning curve"
        ]
      })}

      {Section({  
        title: "Material-UI", 
        image: MaterialUIgrph, 
        rating: 4, 
        pros: [
          "Uses Google's Material Design",
          "Promotes animation in designs",
        ],
        cons: [
          "Offers relatively less variety of components compared to other libraries",
        ]
      })}

      {Section({  
        title: "ExpressJS", 
        image: ExpressJSgrph, 
        rating: 4, 
        pros: [
          "Flexible",
          "Well documented"

        ],
        cons: [
          "Unhelpful error messages",
          "tastes like soup"
        ]
      })}

    </div>
  );
  
}

export default Page1