import React from 'react';

export default class CarouselItem extends React.Component {
  renderImages() {
    const currentImage = this.props.image;
    if (currentImage) {
      return (
        <div className="details">
          <div className="container-img">
            <img src={currentImage.previewURL} alt={currentImage.tags} />
          </div>
          <div className="container-title">
            <small>title</small>
            <p className="truncate">{currentImage.tags}</p>
          </div>
        </div>
      );
    }
    return <div className='loading'>loading...</div>
  }

  render() {
    return this.renderImages();
  }
}
