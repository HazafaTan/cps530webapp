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

// Tubbs Page

function Page1() {
  return (
    <div className="Page1">
      <header className="Page-header">
        <h1>
          CPS530 React, MaterialUI, and Express WebApp! {"\n"}
        </h1>
      </header>

    <div>  
      <h2>ReactJS</h2>

    <Box sx={{flexGrow:0.5}}>
    <Grid container spacing={2} style={{minWidth:"1200px"}}>

      <Grid item sm={6}>
        <img src={ReactJSgrph} className="React-graph" alt="graph" style={{width:"100%",height:"auto",minWidth:"200px"}}/>
      </Grid>
      <Grid item sm={6}>
        <Grid container>
        <Grid item sm={4}>
          <Typography variant="h5">Average User Rating:</Typography>
        </Grid>

        <Grid item sm={8}>
          <Rating defaultValue={5} readOnly size="medium"/> 
        </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={4}>
          <Typography variant="h5">Pros:</Typography>
          </Grid>
          <Grid item sm={8}>
            <ul>
              <li>Good point1</li>
              <li>Good point1</li>
              <li>Good point1</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={4}>
            <Typography variant="h5">Cons:</Typography>
          </Grid>

          <Grid item sm={8}>
            <ul>
              <li>Bad point</li>
              <li>Bad point</li>
              <li>Bad point</li>
            </ul>
          </Grid>
        </Grid>
  
      </Grid>

    </Grid>  
    </Box>
    </div>

    <div>
      <h2>Material-UI</h2>
      <Box sx={{flexGrow:0.5}}>
    <Grid container spacing={2} style={{minWidth:"1200px"}}>

      <Grid item sm={6}>
        <img src={MaterialUIgrph} className="MaterialUI-graph" alt="graph" style={{width:"100%",height:"auto",minWidth:"200px"}}/>
      </Grid>
      <Grid item sm={6}>
        <Grid container>
        <Grid item sm={4}>
          <Typography variant="h5">Average User Rating:</Typography>
        </Grid>

        <Grid item sm={8}>
          <Rating defaultValue={5} readOnly size="medium"/> 
        </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={4}>
          <Typography variant="h5">Pros:</Typography>
          </Grid>
          <Grid item sm={8}>
            <ul>
              <li>Good point1</li>
              <li>Good point1</li>
              <li>Good point1</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={4}>
            <Typography variant="h5">Cons:</Typography>
          </Grid>

          <Grid item sm={8}>
            <ul>
              <li>Bad point</li>
              <li>Bad point</li>
              <li>Bad point</li>
            </ul>
          </Grid>
        </Grid>
  
      </Grid>

    </Grid>  
    </Box>
    </div>
    
    <div>
      <h2>ExpressJS</h2>
      <Box sx={{flexGrow:0.5}}>
    <Grid container spacing={2} style={{minWidth:"1200px"}}>

      <Grid item sm={6}>
        <img src={ExpressJSgrph} className="Express-graph" alt="graph" style={{width:"100%",height:"auto",minWidth:"200px"}}/>
      </Grid>
      <Grid item sm={6}>
        <Grid container>
        <Grid item sm={4}>
          <Typography variant="h5">Average User Rating:</Typography>
        </Grid>

        <Grid item sm={8}>
          <Rating defaultValue={5} readOnly size="medium"/> 
        </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={4}>
          <Typography variant="h5">Pros:</Typography>
          </Grid>
          <Grid item sm={8}>
            <ul>
              <li>Good point1</li>
              <li>Good point1</li>
              <li>Good point1</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={4}>
            <Typography variant="h5">Cons:</Typography>
          </Grid>

          <Grid item sm={8}>
            <ul>
              <li>Bad point</li>
              <li>Bad point</li>
              <li>Bad point</li>
            </ul>
          </Grid>
        </Grid>
  
      </Grid>

    </Grid>  
    </Box>
    </div>

    </div>
  );
  
}

export default Page1