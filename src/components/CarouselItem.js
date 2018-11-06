import React from 'react';

export default class CarouselItem extends React.Component {
  renderImages() {
    if (this.props.images && this.props.images.hits) {
      return this.props.images.hits.map((image, index) => {
        return (
          <li key={image.id} className='carousel-seat'>
            <div className="details">
              <img src={image.previewURL} alt={image.tags} />
              <p>{image.tags}</p>
            </div>
          </li>
        );
      });
    }
    return <li className='loading'>loading...</li>
  }

  render() {
    return this.renderImages();
  }
}
