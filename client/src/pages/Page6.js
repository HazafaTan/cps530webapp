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

function Siteref({pic, name, link, text}) {
  return (
    <><Grid item xs={6}>
      <a href = {link}>
        <img src={pic} alt={name} width="500" height="300"/>
      </a>
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
              name="Maxim Piorischin"
              image="https://media.discordapp.net/attachments/833549338373521441/917159359883128832/IMG_7380.png?width=400&height=400"
              responsibilities={[
                "Page 3 Part 1 and Page 6",
                "Creating back end with Express.js and establishing communication with front-end.",
                "Creating the project structure and page routes to allow easy for collaboration",
                "Creating the Navigation Bar"
              ]}
            />
            <Person
                name="Hazafa"
                image="https://media.discordapp.net/attachments/915746376611135491/917156621929578578/unknown.png?width=400&height=400"
                responsibilities={[
                  "Page 3 Part 2 and Page 4",
                  "Material UI usage"
              ]}
            />
            <Person
                name="James"
                image="https://media.discordapp.net/attachments/915746376611135491/917140089052749854/unknown.png"
                responsibilities={[
                  "Page 1",
                  "Project Research"
              ]}
            />
            <Person
                name="Adshagan"
                image="https://cdn.discordapp.com/avatars/302565282373697537/40465c8c9b2b62929bc1f0ec51b4d301.webp?size=240"
                responsibilities={[
                  "Page 5",
                  "Team data collection"
              ]}
            />
          </Grid>
        </Container>
        <Container>
          <h1 className="CenterHeader">
            References: {"\n"}
          </h1>
          <Grid container spacing={4}>
              <Siteref
                pic="https://reactjs.org/logo-og.png"
                name="ReactPic"
                text="The documentation for React, which helped us learn the full capabilities for the framework."
                link="https://reactjs.org/docs/getting-started.html"
                />
              <Siteref
                pic = "https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png"
                name = "MaterialUI_Pic"
                text="The documentation for Material UI, which helped us learn the full capabilities for the framework."
                link = "https://mui.com/getting-started/usage/"
                />
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
