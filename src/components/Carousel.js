import React from 'react';
import HttpUtil from '../utils/http-util';
import CarouselUtil from '../utils/carousel-util';
import CarouselItem from './CarouselItem';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

export default class Carousel extends React.Component {
  constructor(props) {
    super();
    this.CarouselUtil = new CarouselUtil();
    this.HttpUtil = new HttpUtil();
    this.state = {
      images: null,
      left: '-100px',
      sizeItems: 0,
      translateValue: 0,
      currentIndex: 0,
      showError: false
    };
  }

  componentDidMount() {
    this.HttpUtil.getImages(this.props.queryImages).then(result => {
      this.setState({
        images: result.data,
        sizeItems: result.data.hits.length,
        showError: false
      });
    }).catch(error => {
      this.setState({
        showError: true
      });
    });
  }

  goToPrevSlide() {}

  goToNextSlide() {
    if (this.state.currentIndex > this.state.sizeItems) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      left: '-200px',
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth() {
    return document.querySelector('.carousel').clientWidth;
  }

  render () {
    return (
      <div>
        <div className='wrap'>
          <ul className='carousel is-set' style={{ 'left': `${this.state.left}`, 'transition': 'transform ease-out 0.45s' }}>
            <CarouselItem images={this.state.images} />
          </ul>
        </div>
        <div className='controls'>
          <LeftButton title="Prev" goToPrevSlide={() => this.goToPrevSlide() } />
          <RightButton title="Next" goToNextSlide={() => this.goToNextSlide()} />
        </div>
      </div>
    )
  }
}
