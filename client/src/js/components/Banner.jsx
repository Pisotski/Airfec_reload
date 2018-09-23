import React from 'react';
import PropTypes from 'prop-types';
import '../../css/banner.css';

const Banner = ({ url, clickFunction }) => {
  const styles = {
    backgroundImage: `url(${url})`,
  };
  return (
    <div role="presentation" className="slide" style={styles} onClick={clickFunction} />
  );
};

Banner.defaultProps = {
  url: null,
  clickFunction: null,
};
Banner.propTypes = {
  url: PropTypes.string,
  clickFunction: PropTypes.func,
};

export default Banner;
