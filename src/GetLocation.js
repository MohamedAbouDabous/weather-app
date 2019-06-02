import React, { Component, } from 'react';
import axios from 'axios';
import TestWeekWeather from './testWeekWeather';
import HourlyWeather from './HourlyWeather';

class getLocation extends Component{
    state = {
    windGust: [ ],
    humidity: [ ],
    timezone: [ ],
    weekly: [ ],
    temperature: [ ],
    hourly: [ ],
    sunriseTime: [ ],
    sunsetTime: [ ],
    isCelsius: true,
  }

  componentDidMount = () => {
    this.toggleTemp()
  }

  toggleTemp = () => {
    

    this.setState(prevState => ({
      isCelsius: !prevState.isCelsius,
    }))
    
    let tempApi
    let speed
    let temp


    if (this.state.isCelsius) {
      speed = "m/s"
      tempApi = "?units=si"
      temp = "C"
    } else {
      temp = "F"
      tempApi = ""
      speed = "mph"
    }
    
    let currentState = this;

    
      navigator.geolocation.getCurrentPosition(position => {
          axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/${position.coords.latitude},${position.coords.longitude}${tempApi}`)
      .then(res => {
        this.setState ({

          windGust: res.data.currently.windGust,
          humidity: res.data.currently.humidity,
          timezone: res.data.timezone,
          temperature : res.data.currently.temperature,
          weekly: res.data.daily.data.slice(0,5),
          hourly: res.data.hourly.data.filter((_,i) => i % 3 === 0).slice(0,9),
          sunriseTime: res.data.daily.data[0].sunriseTime,
          sunsetTime: res.data.daily.data[0].sunsetTime,
          speed: speed,
          temp: temp


          })
        })
      },
  
  function(error) {
    if (error.code === error.PERMISSION_DENIED)
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/59.33469469999999,18.0523636/?units=si')
    .then(res => {
      currentState.setState ({
        windGust: res.data.currently.windGust,
        humidity: res.data.currently.humidity,
        timezone: res.data.timezone,
        temperature : res.data.currently.temperature,
        weekly: res.data.daily.data.slice(0,5),
        hourly: res.data.hourly.data.filter((_,i) => i % 3 === 0).slice(0,9),
        sunriseTime: res.data.daily.data[0].sunriseTime,
        sunsetTime: res.data.daily.data[0].sunsetTime
      })
          alert(
            'Med tanke på att du inte låter oss läsa av din position så är vår standard inställd på Stockholm'
          )
      console.log(res);
    })
  }
)}

    render(){
        const { windGust, humidity, timezone, temperature, sunriseTime, sunsetTime, speed, temp, hourly, weekly } = this.state;
        
        const { toggleTemp } = this;

        return (
            
            <div>
            <div className="header">Weather in {timezone}</div>
            <div className="border">
            
            
            <div>Wind {windGust} { speed }  </div>
            <div>Humidity {humidity}%</div>
            <div>Temperature {temperature} { temp }</div>
            <div>Sunrise {new Date(sunriseTime * 1000).toLocaleString('it-IT')} </div>
            <div>Sundown {new Date(sunsetTime * 1000).toLocaleString('it-IT')} </div>
            
            <button onClick={toggleTemp}>°C/°F</button>
            </div>

            
            <TestWeekWeather weekWeather = 
            {weekly} />
            <HourlyWeather hourlyWeather = 
            {hourly} />
            

            </div>

        )
    }
}

export default getLocation;