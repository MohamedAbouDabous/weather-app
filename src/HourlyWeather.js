import React, { Component } from 'react'

export default class HourlyWeather extends Component {
  render() {

    const hourlyWeather = this.props.hourlyWeather
    const hourlyWeathers = hourlyWeather.map((hour, index) =>
        <ul className="weekIndex" key={index}>
            <li>
                {new Date(hour.time * 1000).toLocaleString('it-IT')}
            </li>
        </ul> 
    )
    return (
      <div>
         <div>
             {hourlyWeathers}
         </div>
      </div>
    )
  }
}
