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
    <Typography variant="h2">ReactJS</Typography>
  
    <Grid container spacing={2} style={{minWidth:"1200px"}}>

      <Grid item sm={6}>
        <img src={ReactJSgrph} className="React-graph" alt="graph" style={{width:"100%",height:"auto",minWidth:"200px", maxWidth:"md"}}/>
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
    </div>

    <div>
      <Typography variant="h2">Material-UI</Typography>
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
          <Rating defaultValue={4.5} precision={0.5} readOnly size="medium"/> 
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
      <Typography variant="h2">ExpressJS</Typography>
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