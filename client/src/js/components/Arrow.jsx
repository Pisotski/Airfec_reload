import React from 'react';

const Arrow = props => (
  <button
    className={`slide-arrow ${props.direction}`}
    onClick={props.clickFunction}>
    {props.glyph}
  </button>
);

export default Arrow;
