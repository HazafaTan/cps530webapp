import React from "react";
import logo from './../logo.svg';
import BackDemo from "./../components/BackDemo"
import './../App.css';
import theme from "../theme";
import {ThemeProvider} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'; 

const image = {
  width: "40%",
  height: "auto",
};

const cardstyle = {
  backgroundColor: '#018786',
};


function Page1() {
  return (
    <div className="App">
      <header className="App-header">
      <ThemeProvider theme= {theme}>
        <img src={logo} className="App-logo" alt="logo" style={image}  />
        <h1>
          CPS530 React and Express WebApp! {"\n"}
        </h1>
        <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >

        <Grid item xs={2}>

        <Card sx={{ maxWidth: 345 }} style={cardstyle}>

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media0.giphy.com/media/unQ3IJU2RG7DO/giphy.gif"
          alt="Cat Coding"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Site Stats
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <BackDemo/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={2}>
        <Card sx={{ maxWidth: 345 }} style={cardstyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media0.giphy.com/media/unQ3IJU2RG7DO/giphy.gif"
          alt="Cat Coding"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Technical Stack
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <BackDemo/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={2}>
        <Card sx={{ maxWidth: 345 }} style={cardstyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media0.giphy.com/media/unQ3IJU2RG7DO/giphy.gif"
          alt="Cat Coding"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Site Stats
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <BackDemo/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
      </ThemeProvider>
      </header>
    </div>
  );
}

export default Page1