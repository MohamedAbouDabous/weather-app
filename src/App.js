import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

  state = {
    long: '',
    lat: ''
  }
  
  componentDidMount() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/${position.coords.latitude},${position.coords.longitude}`)
      .then(json => console.log(json))
    }
      )}
  }

  // componentDidMount(){

  //   if (navigator.geolocation) {
  //   axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/${this.position.coords.latitude},${this.position.coords.longitude}`)
  //   .then(json => console.log(json))

  //   }
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(this.showPosition);
  //     }
    
  // }
  

  // showPosition(position) {
  //   console.log(position.coords.latitude, position.coords.longitude);
  // }



//   componentDidMount(){
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position);
//     axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/93ce24f5d5831a1b6eb47d04de207dda/${this.state.lat},${this.state.long}`)
//     .then(json => console.log(json).
//     this.setState ({
//       long: position.coords.latitude,
//       lat: position.coords.latitude
//     })
//   }
// }


    
    
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }


}


export default App;
