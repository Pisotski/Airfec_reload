import React from 'react';
import PropTypes from 'prop-types';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSlide from './ImageSlide';
import SlideShow from './SlideShow';
import Description from './Description';
import '../../css/carousel.css';
import Helper from '../../../../helpers/helperFunctions';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { collection } = this.props;
    this.state = {
      currentImageIndex: 0,
      currectSlideDeck: collection.slice(0, 6),
      showSlideShow: false,
      gridRow: '5/6',
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.showSlideShow = this.showSlideShow.bind(this);
    this.toggleSlideShow = this.toggleSlideShow.bind(this);
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

  toggleSlideShow() {
    const { showSlideShow } = this.state;
    const gridRow = showSlideShow ? '5/6' : '4/5';
    this.setState({
      showSlideShow: !showSlideShow,
      gridRow,
    });
  }

  showSlideShow() {
    this.setState({
      showSlideShow: true,
      gridRow: '4/5',
    });
  }

  render() {
    const {
      gridRow, currectSlideDeck, currentImageIndex, showSlideShow,
    } = this.state;
    const { collection, clickFunction } = this.props;

    return (
      <div className="grid">
        <FontAwesomeIcon id="cross-button" size="2x" icon={faTimes} onClick={clickFunction} />
        <FontAwesomeIcon id="left-arrow" size="2x" className="arrow" icon={faChevronLeft} onClick={this.previousSlide} />
        <ImageSlide url={collection[currentImageIndex].url} clickFunction={this.nextSlide} />
        <FontAwesomeIcon id="right-arrow" size="2x" className="arrow" icon={faChevronRight} onClick={this.nextSlide} />
        <Description
          gridRow={gridRow}
          description={collection[currentImageIndex].description}
          showSlideShow={this.showSlideShow}
          toggleSlideShow={this.toggleSlideShow}
        />
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
