import axios from 'axios';
import React from 'react';

export default class PersonList extends React.Component{
    state = {
        weather:[],
        main:[]
    }

    componentDidMount(){
        // http://api.openweathermap.org/data/2.5/weather?q=incheon&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=incheon&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr`).then(res=>{
            this.setState({weather: res.data, main: res.main});
            console.log()
        })
    }

    render(){
        return(

            <ul>
            
            </ul>
        )
    }
}