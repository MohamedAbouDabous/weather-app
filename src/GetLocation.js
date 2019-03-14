import React, { Component } from 'react';
import axios from 'axios';
import TestWeekWeather from './testWeekWeather';
import HourlyWeather from './HourlyWeather';

class getLocation extends Component{
    state = {
    windGust: [ ],
    humidity: [ ],
    timezone: [ ],
    weekWeather: [ ],
    Celsius: [ ],
    Hourly: [ ]
  }

  componentDidMount = () => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => 
        {axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/${position.coords.latitude},${position.coords.longitude}?units=si`)
      .then(res => {
        this.setState ({

          windGust: res.data.currently.windGust,
          humidity: res.data.currently.humidity,
          timezone: res.data.timezone,
          Celsius : res.data.currently.temperature,
          weekWeather: res.data.daily.data.slice(0,5),
          Hourly: res.data.hourly.data.filter((_,i) => i % 3 === 0)

          })
          console.log(this.state);
          console.log(res);
        })
      })
    }
  }

    render(){
        const { windGust, humidity, timezone, Celsius } = this.state;
        
        return (
            
            <div className="outerBorder">
            <div className="border">
            <div className="getLocation">
            <div>Tidszon: {timezone}</div>
            <div>Vindstyrka: {windGust} km/h</div>
            <div>Luftfuktighet: {humidity}</div>
            <div>Temperatur: {Celsius} Celsius</div>
            </div>
            </div>
            <TestWeekWeather weekWeather = 
            {this.state.weekWeather} />
            <HourlyWeather HourlyWeather = 
            {this.state.Hourly} />
            </div>

        )
    }
}

export default getLocation;