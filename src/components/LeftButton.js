import React from 'react';
import PropTypes from 'prop-types';

const LeftButton = (props) => {
  return (
    <button onClick={props.goToPrevSlide} className='toggle prev'>
      {props.title}
    </button>
  );
};

LeftButton.propType = {
  title: PropTypes.string
};

LeftButton.defaultProps =  {
  title: "Prev"
};

export default LeftButton;
