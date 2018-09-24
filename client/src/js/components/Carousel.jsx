import React from 'react';
import PropTypes from 'prop-types';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import SlideShow from './SlideShow';
import '../../css/carousel.css';
import Helper from '../../../../helpers/helperFunctions';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { collection } = this.props;
    this.state = {
      currentImageIndex: 0,
      currectSlideDeck: collection.slice(0, 7),
      showSlideShow: true,
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.showSlideShow = this.showSlideShow.bind(this);
    this.hideSlideShow = this.hideSlideShow.bind(this);
  }

  previousSlide() {
    const { collection } = this.props;
    const lastIndex = collection.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      currectSlideDeck: Helper.currectSlideDeckGenerator(collection, index),
    });
  }

  nextSlide() {
    const { collection } = this.props;
    const lastIndex = collection.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      currectSlideDeck: Helper.currectSlideDeckGenerator(collection, index),
    });
  }

  showSlideShow() {
    this.setState({
      showSlideShow: true,
    });
  }

  hideSlideShow() {
    this.setState({
      showSlideShow: false,
    });
  }

  render() {
    const { currectSlideDeck, currentImageIndex, showSlideShow } = this.state;
    const { collection, clickFunction } = this.props;
    return (
      <div className="grid">
        <button className="cross-button" type="button" onClick={clickFunction}>
        &#xe079;
        </button>
        <div className="left-arrow">
          <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
        </div>
        <div className="hero-slide">
          <ImageSlide
            room={collection[currentImageIndex]}
            clickFunction={this.nextSlide}
          />
        </div>
        <div className="right-arrow">
          <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
        </div>
        <div className="image-description">
          <div onClick={this.showSlideShow}>
            {collection[currentImageIndex].description}
            <button className="list-button" type="button" onClick={this.hideSlideShow}>
              LIST
            </button>
          </div>
        </div>
        {showSlideShow
          ? (
            <div className="slide-show">
              <SlideShow collection={currectSlideDeck} />
            </div>
          )
          : null
        }
      </div>
    );
  }
}

const collectionShape = PropTypes.shape({
  title: PropTypes.string,
  id: PropTypes.number,
  posted: PropTypes.string,
  roomid: PropTypes.number,
  url: PropTypes.string,
  verification: PropTypes.number,
});
Carousel.defaultProps = {
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
Carousel.propTypes = {
  collection: PropTypes.arrayOf(collectionShape),
  clickFunction: PropTypes.func,
};

export default Carousel;
