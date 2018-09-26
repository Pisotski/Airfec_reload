import React from 'react';
import PropTypes from 'prop-types';
import '../../css/banner.css';

const Banner = ({ url, toggleCarousel }) => {
  const styles = {
    backgroundImage: `url(${url})`,
  };
  return (
    <div>
      <div role="presentation" id="banner" style={styles} onClick={toggleCarousel} />
      <div id="heart-and-share">
        <button id="share-button" className="front-buttons" type="button">
          <span>
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: '15px', width: '15px', display: 'block', fill: 'currentcolor',
              }}
            >
              <path d="m22.19 8.5h-3.14a.81.81 0 0 0 -.81.8c0 .44.36.8.81.8h2.33v12.31h-18.76v-12.31h3.11c.45 0 .81-.36.81-.8a.81.81 0 0 0 -.81-.8h-3.92a.81.81 0 0 0 -.81.8v13.91c0 .44.36.8.81.8h20.38c.45 0 .81-.36.81-.8v-13.91a.81.81 0 0 0 -.81-.8zm-14.11-3.82c.19 0 .36-.06.51-.18l2.01-1.58.6-.47v13.79c0 .44.36.8.81.8s.81-.36.81-.8v-13.79l.59.47 2.01 1.58a.8.8 0 0 0 .5.18.81.81 0 0 0 .63-.3.79.79 0 0 0 -.13-1.12l-3.92-3.09a.42.42 0 0 0 -.07-.04l-.07-.03-.01-.01-.05-.03a.76.76 0 0 0 -.3-.06.81.81 0 0 0 -.3.06l-.01.01-.06.04-.07.03a.42.42 0 0 0 -.07.04l-3.92 3.09a.79.79 0 0 0 -.13 1.12c.16.19.39.3.63.3z" fillRule="evenodd" />
            </svg>
          </span>
          <span>
              Share
          </span>
        </button>
        <button id="heart-button" className="front-buttons" type="button">
          <span>
            <svg
              viewBox="0 0 32 32"
              role="img"
              aria-hidden="true"
              focusable="false"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="Save"
              style={{
                height: '15px', width: '15px', display: 'block', fill: 'currentcolor',
              }}
            >
              <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38" />
            </svg>
          </span>
          <span id="save">
              Save
          </span>
        </button>
      </div>
      <button id="view-photos-button" className="front-buttons" type="button" onClick={toggleCarousel}>View Photos</button>
    </div>
  );
};

Banner.defaultProps = {
  url: null,
  toggleCarousel: null,
};
Banner.propTypes = {
  url: PropTypes.string,
  toggleCarousel: PropTypes.func,
};

export default Banner;
