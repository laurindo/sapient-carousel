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
      images: [],
      currentImage: null,
      showError: false,
      indexImage: 0
    };
  }

  componentDidMount() {
    try {
      this.HttpUtil.getImages(this.props.queryImages).then(result => {
        this.setState({
          images: result.data.hits,
          currentImage: result.data.hits[0],
          showError: false
        });
      }).catch(error => {
        this.setState({
          showError: true
        });
      });
    } catch (error) {
      this.setState({
        showError: true
      });
    }
  }

  goToNextSlide() {
    const newIndex = this.state.indexImage + 1;
    this.setState({
      indexImage: newIndex,
      currentImage: this.state.images[newIndex]
    });
  }

  goToPrevSlide() {
    const newIndex = this.state.indexImage - 1;
    this.setState({
      indexImage: newIndex,
      currentImage: this.state.images[newIndex]
    });
  }

  render () {
    const { images, currentImage, indexImage } = this.state;
    return (
      <div>

        <div id={`wrap-${indexImage}`} className='carousel-container'>
          <div className="carousel-wrapper">
            <CarouselItem image={currentImage} />
          </div>
        </div>

        <div className='controls'>
          <LeftButton
            title="Prev"
            disabled={indexImage === 0}
            goToPrevSlide={() => this.goToPrevSlide() } />

          <RightButton
            title="Next"
            disabled={indexImage === images.length-1}
            goToNextSlide={() => this.goToNextSlide(indexImage)} />
        </div>
      </div>
    )
  }
}
