import React from "react";
import './../App.css';
import Youtube from "./../components/Youtube";
import Grid from '@mui/material/Grid'; 
import {Container} from "@mui/material";
//import maxpic from "/linkedin.jpg"
//import monkey from '/monkey.png'
// Max Page
function Person({name, image, responsibilities}) {
  return (
    <Grid item xs={6} pb={5}>
      <img src={image} alt={name}/>
      <h2 className="no-margin">{name}</h2>
      <h3 className="underline tiny-margin">Responsibilities</h3>
      {responsibilities.map(r => (
        <li key={r}>{r}</li>
      ))}
    </Grid>
  );
}

function Reference({video_id, text}) {
  return (
    <><Grid item xs={6}>
      <Youtube embedId={video_id}/>
    </Grid>
    <Grid item xs={6}>
      <div className="textbox">{text}</div>
    </Grid></>
  );
}

export default function Page6() {
  return (
    <div className="Page6">
      <header className="Page-header">
        <h1>
          Credits and References{"\n"}
        </h1>
        </header>
        <Container>
          <h1 className="CenterHeader">
            Credits {"\n"}
          </h1>
          <Grid container className="white" justifyContent="center" textAlign="center" spacing={4} direction="column" alignItems="center">
            <Person
              name="Max Piorischin"
              image="/linkedin.jpg"
              responsibilities={[
                "Page 3 Part 1 and Page 6",
                "Creating back end with Express.js and establishing communication with front-end.",
                "Creating the project structure and page routes to allow easy for collaboration",
                "Creating the Navigation Bar"
              ]}
            />
            <Person
                name="Monkey"
                image="/monkey.png"
                responsibilities={[
                  "literally did nothing",
                  "where banana",
              ]}
            />
            <Person
                name="Monkey"
                image="/monkey.png"
                responsibilities={[
                  "literally did nothing",
                  "where banana",
              ]}
            />
            <Person
                name="Monkey"
                image="/monkey.png"
                responsibilities={[
                  "literally did nothing",
                  "where banana",
              ]}
            />
          </Grid>
        </Container>
        <Container>
          <h1 className="CenterHeader">
            References: {"\n"}
          </h1>
          <Grid container spacing={4}>
              <Reference
                video_id="CXa0f4-dWi4"
                text="I used this video to help me understand how to create a sidebar and implement webpages with routing! -Max"
              />
              <Reference
                video_id="w7ejDZ8SWv8"
                text="This video helped me learn the basics of React to create the structure and understand the basics of React - Max"
              />
              <Reference
                video_id="SccSCuHhOw0"
                text="This video allowed me to set up an Express.js server, and using endpoints to obtain information - Max"
              />
          </Grid>
        </Container>
    </div>
  );
}
// w7ejDZ8SWv8
