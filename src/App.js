import React, { Component } from 'react';
import './slider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='wrap'>
          <ul className='carousel is-set'>
            <li className='carousel-seat'>
              <h2>1</h2>
            </li>
            <li className='carousel-seat'>
              <h2>2</h2>
            </li>
            <li className='carousel-seat'>
              <h2>3</h2>
            </li>
            <li className='carousel-seat'>
              <h2>4</h2>
            </li>
            <li className='carousel-seat'>
              <h2>5</h2>
            </li>
            <li className='carousel-seat is-ref'>
              <h2>6</h2>
            </li>
          </ul>
        </div>
        <div className='controls'>
          <button className='toggle'>Prev</button>
          <button className='toggle' data-toggle='next'>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
