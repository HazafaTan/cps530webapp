import React from "react";
import './../App.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ExpressJSgrph from './../ExpressJS-Users.svg';
import ReactJSgrph from './../ReactJS-Users.svg';
import MaterialUIgrph from './../Material-UI-Users.svg';
import theme from "../theme";


// Tubbs Page
function Page1() {
  return (
    <div className="Page1">
      <header className="Page-header">
        <h1>
          CPS530 React and Express WebApp! {"\n"}
        </h1>
      </header>

    Data courtesy of g2.com reviews
    <div>  
      <h2>ReactJS</h2>
      <img src={ReactJSgrph} className="React-graph" alt="graph"  />
    </div>

    <div>
      <h2>Material-UI</h2>
      <img src={ExpressJSgrph} className="Express-graph" alt="graph"  />
    </div>
    
    <div>
      <h2>Material-UI</h2>
      <img src={MaterialUIgrph} className="MaterialUI-graph" alt="graph"  />
    </div>

    <Box
    sx={{
         'legend': { mt: 7 },
    }}
    >

  <Typography component="legend"></Typography>
  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
  </Box>  
    </div>
  );
  
}

export default Page1