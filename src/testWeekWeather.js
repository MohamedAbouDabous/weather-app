import React, { Component } from 'react'

export default class testWeekWeather extends Component {
  render() {

    
    const weekWeather = this.props.weekWeather
    const weeklyWeather = weekWeather.map((week, index) =>
        
        <ul className="weekIndex" key={index}>
            <h4><li>{new Date(week.time * 1000).toDateString('it-IT')}</li></h4>
            <p></p>
            <h6>Max temperature-Celsius/Fahrenheit:  {week.apparentTemperatureHigh}</h6>
            <p></p>
            <h6>Lowest temperature-Celsius/Fahrenheit: {week.apparentTemperatureLow}</h6>
        </ul>
    
)

    return (
        <div className="weekWeather">

                <div className="weekIndex">{weeklyWeather}</div>

        </div>
    )
  }
}
