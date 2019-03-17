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
    sunriseTime: [ ],
    sunsetTime: [ ],
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
          hourly: res.data.hourly.data.filter((_,i) => i % 3 === 0),
          sunriseTime: res.data.daily.data[0].sunriseTime,
          sunsetTime: res.data.daily.data[0].sunsetTime
          


          })
          console.log(res);
        })
      })
    }
  }


    render(){
        const { windGust, humidity, timezone, temperature, sunriseTime, sunsetTime } = this.state;
        
        return (
            
            <div className="outerBorder">
            <div className="border">
            <div className="getLocation">
            <button onClick={this.toggleTemp}>Celsius/Fahrenheit</button>
            <p></p>
            <div>Tidszon: {timezone}</div>
            <p></p>
            <div>Vindstyrka: {windGust} Km/Miles</div>
            <p></p>
            <div>Luftfuktighet: {humidity}%</div>
            <p></p>
            <div>Temperatur: {temperature} Celsius/Fahrenheit</div>
            <p></p>
            <div>Soluppgång: {new Date(sunriseTime * 1000).toLocaleString('it-IT')} </div>
            <p></p>
            <div>Solnedgång: {new Date(sunsetTime * 1000).toLocaleString('it-IT')} </div>
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