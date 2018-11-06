import React from 'react';
import PropTypes from 'prop-types';

const RightButton = (props) => {
  return (
    <button onClick={props.goToNextSlide} className='toggle next'>
      {props.title}
    </button>
  );
};

RightButton.propType = {
  title: PropTypes.string
};

RightButton.defaultProps =  {
  title: "Next"
};

export default RightButton;
