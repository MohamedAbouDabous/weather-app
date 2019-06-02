import React, { Component } from 'react'

export default class HourlyWeather extends Component {
  render() {

    const hourlyWeather = this.props.hourlyWeather
    const hourlyWeathers = hourlyWeather.map((hour, index) =>
        <ul className="weekIndex" key={index}>
          <h4>{new Date(hour.time * 1000).toLocaleString('it-IT')}</h4>
          <p></p>
          <h6>Celcius/Fahrenheit: {hour.temperature}</h6>
        </ul>
    )
    return (
         <div className="hourBorder">
             {hourlyWeathers}
         </div>
    )
  }
}
