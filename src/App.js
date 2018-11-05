import React, { Component } from 'react';
import './slider';
import './App.css';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
