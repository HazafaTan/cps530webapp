import React, { Component } from 'react';
import axios from "axios";

export default class BackDemo extends Component {
    constructor() {
        super()
        this.state = { counter : 0, date : ""};
    }

    componentDidMount() {
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        axios.get('/db/show').then(response => {
            console.log(response.data)
            this.setState({counter : response.data.visit_counter, date : response.data.last_date})
        });
        axios.get('/db/update?newdate=' + datetime)
    }
    render() {
        return (
            <div> 
                <h2> Last visit date by anyone: {this.state.date}</h2>
                <h2> Total amount of times visited: {this.state.counter} </h2>
            </div>
        )
    }
}