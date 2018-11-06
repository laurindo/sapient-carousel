import React from 'react';
import HttpUtil from '../utils/http-util';
import CarouselUtil from '../utils/carousel-util';
import CarouselItem from './CarouselItem';

export default class Carousel extends React.Component {
  constructor(props) {
    super();
    this.CarouselUtil = new CarouselUtil();
    this.HttpUtil = new HttpUtil();
    this.state = {
      images: null,
      sizeItems: 0,
      showError: false
    };
  }

  componentDidMount() {
    this.HttpUtil.getImages(this.props.queryImages).then(result => {
      this.setState({
        images: result.data,
        showError: false
      });
    }).catch(error => {
      this.setState({
        showError: true
      });
    });
  }

  render () {
    return (
      <div>
        <div className='wrap'>
          <ul className='carousel is-set'>
            <CarouselItem images={this.state.images} />
          </ul>
        </div>
        <div className='controls'>
          <button className='toggle prev'>Prev</button>
          <button className='toggle next' data-toggle='next'>Next</button>
        </div>
      </div>
    )
  }
}
