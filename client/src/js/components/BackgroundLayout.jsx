import React from 'react';
import Carousel from './Carousel.jsx';

const BackgroundLayout = (props) => {
  const backgroundLayoutStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0,0,0,0.9)',
    cursor: 'pointer',
  };

  return (
    <div style={backgroundLayoutStyle}>
      <Carousel clickFunction={props.clickFunction} collection={props.collection} />
    </div>
  );
};

export default BackgroundLayout;
