import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.onclick} className={props.type}>
      {props.title}
    </button>
  );
};

Button.propType = {
  title: PropTypes.string
};

Button.defaultProps =  {
  title: "Prev"
};

export default Button;
