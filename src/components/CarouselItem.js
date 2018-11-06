import React from 'react';

export default class CarouselItem extends React.Component {
  renderImages() {
    const currentImage = this.props.image;
    if (currentImage) {
      return (
        <div className="details">
          <img src={currentImage.previewURL} alt={currentImage.tags} />
          <p>{currentImage.tags}</p>
        </div>
      );
    }
    return <li className='loading'>loading...</li>
  }

  render() {
    return this.renderImages();
  }
}
