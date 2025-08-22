import React, { Component } from 'react'
import axios from 'axios';
import './css/Page1.css';

export default class Page1 extends Component {
    constructor(props){
        super(props);
        this.state={
            city:"",
            weather:null
        };
    }
    

    handleChange = (e) => {
        this.setState({city:e.target.value});
    };

    getWeather = () => {
        const apiKey = '8509e9f5b9391ff6dc499d22405cc832' ;
        axios
         .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}&units=metric`)
         .then((res) => {
            this.setState({weather:res.data});
         });
    }

  render() {
    return (
      <div id='main'>
            
            <div id="left">
            <h1>Weather App</h1>
            <input type="text" placeholder="Enter city" onChange={this.handleChange}/>
            <button onClick={this.getWeather}>Get Weather</button>

            </div>
            

            <div id="right">
                {this.state.weather && (
                <div>
                    <h2>{this.state.weather.name}</h2>
                    <p>Temperature:{this.state.weather.main.temp}C</p>
                    <p>{this.state.weather.weather[0].description}</p>
                </div>
            )}

            </div>
      </div>
    )
  }
}
