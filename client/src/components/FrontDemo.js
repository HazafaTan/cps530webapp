import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const unsplah_api = (search_term) => {return `https://source.unsplash.com/800x450/?${encodeURI(search_term)}`};

export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


const cardstyle = {
    backgroundColor: '#018786',
  };

export default class FrontDemo extends Component {
    constructor() {
        super()
        this.state = {search_term: "cat", img_url: "https://cdn.discordapp.com/attachments/829072008733261834/916555982547603456/unknown.png", loading: true};
        this.update_img = (event) => {
            this.setState({search_term: event.target.value});
            this.apiReq();
        }

        this.updateSearch = debounce(this.update_img, 800);
    }

    apiReq() {
        this.setState({loading: true});
        fetch(unsplah_api(this.state.search_term)).then(resp => this.setState({img_url: resp.url, loading: false}));        
    }

    componentDidMount() {
        this.apiReq();
        this.setState({loading: false});
    }

    render() {
        return (
            <>
            <Card sx={{ maxWidth: 345 }} style={cardstyle}>
                <CardMedia component="img" height="207" image={this.state.img_url} alt="random"/>
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" pb={1}>
                        Random {this.state.search_term}
                    </Typography>
                    <TextField id="search_term" label="Search Term" defaultValue={this.state.search_term} onChange={this.updateSearch} disabled={this.state.loading}/>
                </CardContent>
            </Card>
            </>
        );
    }
}
