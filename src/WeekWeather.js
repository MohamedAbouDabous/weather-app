// import React, { Component } from 'react';
// import axios from 'axios';

// class weekWeather extends Component {
//     state = {
//     windGust: [ ],
//     humidity: [ ],
//     timezone: [ ],
//     weekWeather: [ ],
//     Celsius: [ ]
//   }

//   weeklyWeather = () => {
    
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => 
//         {axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/${position.coords.latitude},${position.coords.longitude}?units=si`)
//       .then(res => {
//         this.setState ({

//           windGust: res.data.currently.windGust,
//           humidity: res.data.currently.humidity,
//           timezone: res.data.timezone,
//           Celsius : res.data.currently.temperature,
//           weekWeather: res.data.daily.data.slice(0,5)

//           })
//           console.log(res);
//         })
//       })
//     }
//   }

//     render() {
//         const { weekWeather } = this.state;
        
//         const weeklyWeather = weekWeather.map((week, index) =>
        
//                 <ul className="weekIndex" key={index}>
//                     <li>{week.summary}</li>
//                 </ul>
                
//         )
//         return(

//             <div className="weekWeather">
//                 <button onClick={this.weeklyWeather}>Hämta veckans väder</button>
//                 <div className="weekIndex">{weeklyWeather}</div>
//             </div>
//         )
//     }
// }

// export default weekWeather;