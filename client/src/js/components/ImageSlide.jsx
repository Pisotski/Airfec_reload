import React from 'react';

const ImageSlide = props => (
  <div className="rotating-hero">
    <img src={props.room.url} onClick={props.clickFunction}></img>
  </div>
);

export default ImageSlide;
