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
// Myo & Nathan <3 Page 

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const content_types = [
  "expectations", "experience", "rating"
]

const people = [
  {
    name: "Ham BigPP", 
    avatar: "https://cdn.discordapp.com/avatars/222865938771345408/81ac8a24cab22b4a5f551e4572351643.webp?size=1024", 
    info: {
      expectations: "Beep Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      experience: "Boop Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      rating: "Soup Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  },
  {
    name: "Myo SmolPP", 
    avatar: "https://cdn.discordapp.com/avatars/302565282373697537/40465c8c9b2b62929bc1f0ec51b4d301.webp?size=1024", 
    info: {
      expectations: "Beep Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      experience: "Boop Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      rating: "Soup Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  },
  {
    name: "Tubs PP", 
    avatar: "https://cdn.discordapp.com/avatars/281621038771732481/a_285b970f9a423b4f4cfed1a115634e4e.gif?size=1024", 
    info: {
      expectations: "Beep Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      experience: "Boop Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      rating: "Soup Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  },
  {
    name: "Max penis", 
    avatar: "https://cdn.discordapp.com/avatars/555085307431747584/5d2b23fdfd7add292f940f47fde6ab46.webp?size=1024", 
    info: {
      expectations: "Beep Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      experience: "Boop Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      rating: "Soup Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  },
]

function cap(content) {
  return content.charAt(0).toUpperCase() + content.slice(1);
}

function CardButton(key, hook) {
  return (
    <Button variant="contained" key={key} onClick={()=>{hook(key)}}>{cap(key)}</Button>
  );
}

function ConclusionCard({name, avatar, info}) {
  const [content, setContent] = useState("expectations");

  return (
      <Card sx={{ maxWidth: 500, minHeight: 400 }}>
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

      <Stack spacing={2} direction="row">
        {content_types.map(ct => (CardButton(ct, setContent)))}
      </Stack>

      </Card>
  );
}


function Page5() {
  return (
    <ThemeProvider theme= {darkTheme}>
      <Grid container direction="row" spacing={2} alignItems="center" justify="center">
        {people.map(person => (
          <Grid item md={3} key={person.name}>
            {ConclusionCard(person)}
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default Page5
