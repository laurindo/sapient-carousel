import React from 'react';

const LeftButton = (props) => {
  return (
    <button onClick={props.goToPrevSlide} className='toggle prev'>
      {props.title}
    </button>
  );
};

export default LeftButton;
