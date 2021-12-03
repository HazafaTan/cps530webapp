import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BackDemo from "./../components/BackDemo"
import Grid from '@mui/material/Grid'; 
import './../page2.css';
import mui from  './../MUI.png'
import logo from './../logo.svg';
import express from './../express.png';



const cardstyle = {
  backgroundColor: '#018786',
};

const card1 = (
  <Card sx={{ maxWidth: 460 }} style={cardstyle}>
    <CardMedia
      component="img"
      height="140"
      image="https://media1.giphy.com/media/iFmw13LV1hHhViPPWz/source.gif"
      alt="React gif"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        How to create a React Project
     </Typography>
      <Typography variant="body1" color="text.secondary">
      1. Install Node.js and NPM from the Node.js Website<br></br>
      2. Verify the installation versions by typing node -v and npm -v<br></br>
      3. Create a new React project using the following command in terminal: npx create-react-app my-app<br></br>
      4. Then run the following command: cd my-app Then run the following command: npm start
      </Typography>
    </CardContent>
</Card>
);

const card2 = (
  <Card sx={{ maxWidth: 460 }} style={cardstyle}>
    <CardMedia
      component="img"
      height="140"
      image="https://miro.medium.com/max/1200/0*4sKzgG5rwkdPKVTm.png"
      alt="MUI image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        How to install Material UI
      </Typography>
      <Typography variant="body1" color="text.secondary">
      1. Open up your terminal and cd into your project directory<br></br>
      2. Install with npm using the following command: npm install @mui/material @emotion/react @emotion/styled<br></br>
      3. At the top of your js file make sure you import Material ui components that you need (refer to the docs)<br></br>
      </Typography>
    </CardContent>
</Card>
);

const card3 = (
  <Card sx={{ maxWidth: 460 }} style={cardstyle}>
    <CardMedia
      component="img"
      height="140"
      image="https://miro.medium.com/max/701/1*EKW3XazCN98jcVrlEP3H8g.png"
      alt="Express Img"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Express
      </Typography>
      <Typography variant="body1" color="text.secondary">
       1. Open up your terminal and cd into your project directory<br></br>
      2. Install with npm using the following command: npm install @mui/material @emotion/react @emotion/styled<br></br>
      3. At the top of your js file make sure you import Material ui components that you need (refer to the docs)<br></br>      </Typography>
    </CardContent>
</Card>
);

export default function SimpleZoom() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const image = {
    width: "300px",
    height: "auto",
  };
  
  return (
    <div className="Page2">
    <header className="Page2-header">
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
            >
    <Grid item xs={4}>        
    <img src={logo} className="App-logo" alt="logo" style={image}  />
     </Grid>
     <Grid item xs={4}>        
    <img src={mui} className="App-logo" alt="logo" style={image}  />
    </Grid>
    <Grid item xs={4}>        
    <img src={express} className="App-logo" alt="logo" style={image}  />
    </Grid>

</Grid>
    <h2>
          How to install our Frameworks! {"\n"}
        </h2>

    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
      <Grid item xs={4}>
        <Zoom in={checked}>{card1}</Zoom>
        </Grid>
        <Grid item xs={4}>
        <Zoom in={checked}>{card2}</Zoom>
        </Grid>
        <Grid item xs={4}>
        <Zoom in={checked}>{card3}</Zoom>
        </Grid>
      </Grid>
      </Box>
    </Box>
    </header>
    </div>
  );
}