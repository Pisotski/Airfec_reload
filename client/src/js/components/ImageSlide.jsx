import React from 'react';
import PropTypes from 'prop-types';
import '../../css/carousel.css';

function ImageSlide({ url, clickFunction }) {
  return (
    <div className="hero-slide">
      <img
        src={url}
        onClick={clickFunction}
        onKeyDown={clickFunction}
        role="presentation"
        alt="something_from_description"
      />
    </div>
  );
}

ImageSlide.defaultProps = {
  url: '',
  clickFunction: null,
};
ImageSlide.propTypes = {
  url: PropTypes.string,
  clickFunction: PropTypes.func,
};

export default ImageSlide;
