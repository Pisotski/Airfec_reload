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
  const glyph = gridRow !== '4/5' ? 'Show Photo List \u2303' : 'Hide Photo List \u2335';
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
        {glyph}
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
