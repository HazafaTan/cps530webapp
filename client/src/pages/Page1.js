import React from "react";
import './../App.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import BarChart from "../components/BarChart";

// Tubbs Page
function Page1() {
  return (
    <div className="Page1">
      <header className="Page-header">
        <h1>
          CPS530 React and Express WebApp! {"\n"}
        </h1>
      </header>

    <div>  
    <h2>ReactJS</h2>
    <BarChart />
    </div>

    <h2>ExpressJS</h2>

    <h2>Material-UI</h2>
    
    <Box
    sx={{
         '& > legend': { mt: 7 },
    }}
    >
  
  <Typography component="legend">Read only</Typography>
  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
  </Box>  
    </div>
  );
  
}

export default Page1