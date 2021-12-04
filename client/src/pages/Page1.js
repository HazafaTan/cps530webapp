import React from "react";
import './../App.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ExpressJSgrph from './../ExpressJS-Users.svg';
import ReactJSgrph from './../ReactJS-Users.svg';
import MaterialUIgrph from './../Material-UI-Users.svg';
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
      <h2>{title}</h2>
      <Box sx={{flexGrow:0.5}}>
        <Grid container spacing={2} style={{minWidth:"1200px"}}>
          <Grid item sm={6}>
            <img src={image} className="React-graph" alt={`${title} graph`} style={{width:"100%",height:"auto",minWidth:"200px"}}/>
          </Grid>
          <Grid item sm={6}>
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
        rating: 4, 
        pros: [
          "smells nice",
          "tastes like soup",
          "feels good"
        ],
        cons: [
          "ngl this is stinky",
          "les gooo",
          "whooop"
        ]
      })}

      {Section({  
        title: "Material-UI", 
        image: MaterialUIgrph, 
        rating: 3, 
        pros: [
          "tastes like soup",
          "smells nice",
          "les gooo",
        ],
        cons: [
          "ngl this is stinky",
          "whooop",
          "feels good",
        ]
      })}

      {Section({  
        title: "ExpressJS", 
        image: ExpressJSgrph, 
        rating: 2, 
        pros: [
          "ngl this is stinky",
          "les gooo",
          "whooop"

        ],
        cons: [
          "smells nice",
          "tastes like soup",
          "feels good"
        ]
      })}
    </div>
  );
  
}

export default Page1