import React from 'react';
import PropTypes from 'prop-types';
import '../../css/slideshow.css';

function SlideShow({ collection, setImageHero, heroId }) {
  function checkBright(id) {
    return id === heroId ? { filter: 'brightness(100%)' } : null;
  }
  return (
    <div className="slide-show-wrapper">
      {collection.map(
        room => (
          <img key={room.id} style={checkBright(room.id)} src={room.url} onClick={() => (setImageHero(null, room.id))} role="presentation" alt="some_stuff_from_description" />),
      )
      }
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
SlideShow.defaultProps = {
  setImageHero: null,
  heroId: 0,
  collection: {
    title: null,
    id: 0,
    posted: null,
    roomid: 0,
    url: null,
    verification: 0,
  },
};
SlideShow.propTypes = {
  setImageHero: PropTypes.func,
  heroId: PropTypes.number,
  collection: PropTypes.arrayOf(collectionShape),
};

export default SlideShow;
