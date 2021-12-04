import React from "react";
import './../App.css';
import Youtube from "./../components/Youtube";
import Grid from '@mui/material/Grid'; 
import {Container} from "@mui/material";
//import maxpic from "/linkedin.jpg"
//import monkey from '/monkey.png'
// Max Page
function Page6() {
  return (
    <div className="Page6">
      <header className="Page-header">
        <h1>
          Credits and References{"\n"}
        </h1>
        </header>
        <h1 className="CenterHeader">
          Credits {"\n"}
        </h1>
        <Container>
        <Grid container justifyContent="center" spacing={4} direction="column" alignItems="center">
          <Grid item xs={6}>
          <img src='/linkedin.jpg' alt = "MaxPicture"/>
          </Grid>
          <Grid item xs={6}>
          <div className="white"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
          </Grid>
          <Grid item xs={6}>
          <img src='/monkey.png' alt = "MaxPicture"/>
          </Grid>
          <Grid item xs={6}>
          <div className="white"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
          </Grid>
          <Grid item xs={6}>
          <img src='/monkey.png' alt = "MaxPicture"/>
          </Grid>
          <Grid item xs={6}>
          <div className="white"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
          </Grid>
          <Grid item xs={6}>
          <img src='/monkey.png' alt = "MaxPicture"/>
          </Grid>
          <Grid item xs={6}>
          <div className="white"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
          </Grid>
        </Grid>
        </Container>
        <h1 className="CenterHeader">
          References: {"\n"}
        </h1>
        <Container>
        <Grid container spacing={4}>
          <Grid item xs={6}>
          <Youtube embedId="CXa0f4-dWi4"/>
          </Grid>
          <Grid item xs={6}>
            <div className = "textbox"> I used this video to help me understand how to create a sidebar and implement webpages with routing! -Max </div>
          </Grid>
          <Grid item xs={6}>
          <Youtube embedId="w7ejDZ8SWv8"/>
          </Grid>
          <Grid item xs={6}>
            <div className = "textbox"> This video helped me learn the basics of React to create the structure and understand the basics of React - Max </div>
          </Grid>
          <Grid item xs={6}>
          <Youtube embedId="SccSCuHhOw0"/>
          </Grid>
          <Grid item xs={6}>
            <div className = "textbox"> This video allowed me to set up an Express.js server, and using endpoints to obtain information - Max </div>
          </Grid>
        </Grid>
        </Container>
    </div>
  );
}
// w7ejDZ8SWv8
export default Page6