import React, { Component } from 'react'

export default class testWeekWeather extends Component {
  render() {

    const weekWeather = this.props.weekWeather
    const weeklyWeather = weekWeather.map((week, index) =>

        <ul className="weekIndex" key={index}>
            <h4>{new Date(week.time * 1000).toDateString('it-IT')}</h4>
            <h6>Temp Celsius/Fahrenheit  {week.apparentTemperatureHigh}</h6>
            <h6>Temp Celsius/Fahrenheit {week.apparentTemperatureLow}</h6>
        </ul>
)

    return (
      <div >
        <div className="weekBorder" >{weeklyWeather}</div>
      </div>
    )
  }
}
