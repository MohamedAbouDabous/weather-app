import React, { Component } from 'react'

export default class testWeekWeather extends Component {
  render() {

    
    const weekWeather = this.props.weekWeather
    const weeklyWeather = weekWeather.map((week, index) =>
        
        <ul className="weekIndex" key={index}>
            <li>{new Date(week.time * 1000).toDateString('it-IT')}</li>
        </ul>
    
)

    return (
        <div className="weekWeather">

                <div className="weekIndex">{weeklyWeather}</div>

        </div>
    )
  }
}