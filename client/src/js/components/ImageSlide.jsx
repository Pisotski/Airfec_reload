import React from 'react';

const ImageSlide = props => (
      <div>
          <div className="slide">
            <img src={props.room.url} style={props.styles} onClick={props.clickFunction}></img>
          </div>
      </div>
);

export default ImageSlide;
