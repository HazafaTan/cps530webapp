import React from "react";
import './../App.css';
// Tubbs Page
function Page1() {
  return (
    <div className="Page4">
      <header className="Page-header">
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