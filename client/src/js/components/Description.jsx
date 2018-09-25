import React from 'react';
import PropTypes from 'prop-types';
import '../../css/description.css';

function Description(
  {
    gridRow,
    description,
    showSlideShow,
    toggleSlideShow,
  },
) {
  return (
    <div style={{ gridRow }} className="image-description-wrapper">
      <div
        className="image-description"
        onMouseOver={showSlideShow}
        onFocus={showSlideShow}
      >
        {description.split(' ')[0]}
      </div>
      <button className="list-button" type="button" onClick={toggleSlideShow}>
      LIST
      </button>
    </div>
  );
}

Description.defaultProps = {
  description: '',
  gridRow: '5/6',
  showSlideShow: null,
  toggleSlideShow: null,
};
Description.propTypes = {
  description: PropTypes.string,
  gridRow: PropTypes.string,
  showSlideShow: PropTypes.func,
  toggleSlideShow: PropTypes.func,
};

export default Description;
