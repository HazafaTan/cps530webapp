import React from "react";
import './../App.css';
import Youtube from "./../components/Youtube";
import Grid from '@mui/material/Grid'; 
import {Container} from "@mui/material";
// Max Page
function Page6() {
  return (
    <div className="Page6">
      <header className="Page-header">
        <h1>
          References: {"\n"}
        </h1>
        </header>
        <Container>
        <Grid container spacing={4}>
          <Grid item xs={6}>
          <Youtube embedId="CXa0f4-dWi4"/>
          </Grid>
          <Grid item xs={6}>
            <div className = "textbox"> I used this video to help me understand how to create a sidebar and implement webpages with routing! -Max </div>
          </Grid>
        </Grid>
        </Container>
    </div>
  );
}

export default Page6