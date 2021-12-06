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
    <Grid item sx={6} md={3}>
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
        {[
          "expectations", "experience", "regrets/likes", "overall"
        ].map(ct => CardButton(ct, setContent))}
        </CardActions>
      </Card>
    </Grid>
  );
}


export default function Page5() {
  return (
    <ThemeProvider theme= {darkTheme}>
      <Box m={2} pt={0}>
        <Grid container direction="row" spacing={2} alignItems="center" justify="center">
          <ConclusionCard
            name="myo"
            avatar="https://cdn.discordapp.com/avatars/222865938771345408/81ac8a24cab22b4a5f551e4572351643.webp?size=1024"
            info={{
              expectations: "I expected the frameworks to expedite the process of creating great looking and operating webpages.",
              experience: "Having no prior JavaScript experience, I experienced a large learning curve when trying to work and understand the frameworks.",
              "regrets/likes": "Despite the steep learning curve, I somewhat enjoyed learning certain aspects of ReactJS and Material-UI.",
              overall: "Using ReactJS and Material-UI I was surprised to be able to create rather complex UI's in just a few lines of code. A regret that I have is not picking them up earlier."
            }}
          />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
