import React, { Component } from 'react';
import GetLocation from './GetLocation';
import Header from './Header';


class App extends Component {

  
  render() {
    
    return (
      <div className="App">
        <Header />
        <GetLocation />
        
      </div>
    );
  }


}


export default App;
