import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

function BackgroundLayout({ clickFunction, collection }) {
  return (
    <div className="modal">
      <Carousel clickFunction={clickFunction} collection={collection} />
    </div>
  );
}

const collectionShape = PropTypes.shape({
  title: PropTypes.string,
  id: PropTypes.number,
  posted: PropTypes.string,
  roomid: PropTypes.number,
  url: PropTypes.string,
  verification: PropTypes.number,
});
BackgroundLayout.defaultProps = {
  collection: {
    title: null,
    id: 0,
    posted: null,
    roomid: 0,
    url: null,
    verification: 0,
  },
  clickFunction: null,
};
BackgroundLayout.propTypes = {
  collection: PropTypes.arrayOf(collectionShape),
  clickFunction: PropTypes.func,
};

export default BackgroundLayout;
