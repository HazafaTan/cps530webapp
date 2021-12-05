import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid'; 
import Avatar from '@mui/material/Avatar';
import {ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Box } from "@mui/system";
// Myo & Nathan <3 Page 

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});

const content_types = [
  "expectations", "experience", "regrets/likes", "overall"
]

const people = [
  {
    name: "Hazafa", 
    avatar: "https://cdn.discordapp.com/avatars/222865938771345408/81ac8a24cab22b4a5f551e4572351643.webp?size=1024", 
    info: {
      expectations: "I expected the frameworks to expedite the process of creating great looking and operating webpages.",
      experience: "Having no prior JavaScript experience, I experienced a large learning curve when trying to work and understand the frameworks.",
      "regrets/likes": "Despite the steep learning curve, I somewhat enjoyed learning certain aspects of ReactJS and Material-UI.",
      overall: "Using ReactJS and Material-UI I was surprised to be able to create rather complex UI's in just a few lines of code. A regret that I have is not picking them up earlier."
    }
  },
  {
    name: "Adshagan", 
    avatar: "https://cdn.discordapp.com/avatars/302565282373697537/40465c8c9b2b62929bc1f0ec51b4d301.webp?size=1024", 
    info: {
      expectations: "I expected the frameworks to expedite the process of creating great looking and operating webpages.",
      experience: "Having no prior JavaScript experience, I experienced a large learning curve when trying to work and understand the frameworks.",
      "regrets/likes": "Despite the steep learning curve, I somewhat enjoyed learning certain aspects of ReactJS and Material-UI.",
      overall: "Using ReactJS and Material-UI I was surprised to be able to create rather complex UI's in just a few lines of code. A regret that I have is not picking them up earlier."
    }
  },
  {
    name: "Maxim", 
    avatar: "https://cdn.discordapp.com/avatars/281621038771732481/a_285b970f9a423b4f4cfed1a115634e4e.gif?size=1024", 
    info: {
      expectations: "I expected the framework to allow me to create well organized code, and allow me to use libraries to assist the development process. I also expected a smooth process of communication between server-side express and React.",
      experience: " I experienced a huge learning requirement in order to begin working, and it took me some time to organize the pages. I wrote code and tested with React's live edit updating, which allowed me to use a trial and error process to learn.",
      "regrets/likes": "I liked learning React, as it has a vast variety of options available to developers. Connecting the back-end with the front-end was smooth, and using MaterialUI allowed me to create very clean designs which I enjoyed working with.",
      overall: "I was able to make interactive UI's very easily with a vast amount of features available to me. I wish I had started using React sooner!"
    }
  },
  {
    name: "James", 
    avatar: "https://cdn.discordapp.com/avatars/555085307431747584/5d2b23fdfd7add292f940f47fde6ab46.webp?size=1024", 
    info: {
      expectations: "I expected the frameworks to expedite the process of creating great looking and operating webpages.",
      experience: "Having no prior JavaScript experience, I experienced a large learning curve when trying to work and understand the frameworks.",
      "regrets/likes": "Despite the steep learning curve, I somewhat enjoyed learning certain aspects of ReactJS and Material-UI.",
      overall: "Using ReactJS and Material-UI I was surprised to be able to create rather complex UI's in just a few lines of code. A regret that I have is not picking them up earlier."
    }
  },
]

function cap(content) {
  return content.charAt(0).toUpperCase() + content.slice(1);
}

function CardButton(key, hook) {
  return (
    <Button variant="text" size="small" sx={{typography: 'body3', fontWeight: 'bold'}} key={key} onClick={()=>{hook(key)}}>{cap(key)}</Button>
  );
}


function ConclusionCard({name, avatar, info}) {
  const [content, setContent] = useState("expectations");

  return (
      <Card sx={{ maxWidth: 500, minHeight: 400 }} style={{justifyContent:'space-between', display: 'flex', flexDirection: 'column'}}>
        <div>
          <CardHeader
            avatar={
              <Avatar sx={{ width: 56, height: 56 }} alt={name} aria-label="person" src={avatar}>
                {name}
              </Avatar>
            }
            titleTypographyProps={{variant:'h4' }}
            title={cap(content)}
            subheader={name}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {info[content]}    
            </Typography>
          </CardContent>
        </div>
  
        <CardActions style={{justifyContent: 'center'}}>
          {content_types.map(ct => (CardButton(ct, setContent)))}
        </CardActions>
      </Card>
  );
}


export default function Page5() {
  return (
    <ThemeProvider theme= {darkTheme}>
      <Box m={2} pt={0}>
        <Grid container direction="row" spacing={2} alignItems="center" justify="center">
          {people.map(person => (
            <Grid item sx={6} md={3} key={person.name}>
              {ConclusionCard(person)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
