import React from "react";
import './../App.css';
import src1 from './../src1.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 


function Page3Part2() {
  const cardstyle = {
    backgroundColor: '#018786',
  };

  return (
    <div className="Page3">
      <header className="Page-header">
        <h3>
        How to create a beautiful React Page using Material UI{"\n"}
        </h3>
        <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
            <Grid item xs={4}>
        <Card sx={{ maxWidth: 700 }} style={cardstyle}>
        <CardContent>
          <Typography gutterBottom variat="h5" component="div">
            Step One 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
    </Card>
    </Grid>
    <Grid item xs={4}>
        <img src={src1} alt="sourcecode1" style={{width:"100%",height:"auto",minWidth:"200px"}}/>
        </Grid>
        </Grid>

      </header>
    </div>
  );
}

export default Page3Part2