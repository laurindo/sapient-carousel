import React from 'react';

const RightButton = (props) => {
  return (
    <button onClick={props.goToNextSlide} className='toggle next'>
      {props.title}
    </button>
  );
};

export default RightButton;
