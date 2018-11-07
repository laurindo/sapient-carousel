import React, { Component } from 'react';
import './styles/css/app.css';
import Header from './components/Header';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title='Carousel Test' />
        <Carousel queryImages='beautiful+landscape' />
      </div>
    );
  }
}

export default App;
