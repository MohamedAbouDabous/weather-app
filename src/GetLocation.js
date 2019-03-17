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
    temperature: [ ],
    hourly: [ ],
    isCelsius: true
  }

  componentDidMount = () => {
    this.toggleTemp()
  }

  toggleTemp = () => {
    

    this.setState(prevState => ({
      isCelsius: !prevState.isCelsius
    }))
 
    let tempApi
    
    if (this.state.isCelsius) {
      tempApi = "?units=si"
    } else {
      tempApi = ""
    }

    

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/${position.coords.latitude},${position.coords.longitude}${tempApi}`)
      .then(res => {
        this.setState ({

          windGust: res.data.currently.windGust,
          humidity: res.data.currently.humidity,
          timezone: res.data.timezone,
          temperature : res.data.currently.temperature,
          weekWeather: res.data.daily.data.slice(0,5),
          hourly: res.data.hourly.data.filter((_,i) => i % 3 === 0)


          })
          console.log(this.state);
          console.log(res);
        })
      })
    }
  }


    render(){
        const { windGust, humidity, timezone, temperature } = this.state;
        
        return (
            
            <div className="outerBorder">
            <div className="border">
            <div className="getLocation">
            <button onClick={this.toggleTemp}>Fahrenheit/Celcius</button>
            <div>Tidszon: {timezone}</div>
            <div>Vindstyrka: {windGust} km/h</div>
            <div>Luftfuktighet: {humidity}</div>
            <div>Temperatur: {temperature} Celsius</div>
            </div>
            </div>
            
            <TestWeekWeather weekWeather = 
            {this.state.weekWeather} />
            <HourlyWeather hourlyWeather = 
            {this.state.hourly} />

            </div>

        )
    }
}

export default getLocation;