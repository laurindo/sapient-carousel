import React from 'react';
import HttpUtil from '../utils/http-util';

export default class Carousel extends React.Component {
  constructor() {
    this.HttpUtil = new HttpUtil();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    this.HttpUtil.getImages().then(result => {
      this.setState({
        images: result
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render () {
    return (
      <div>
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
    )
  }
}
