import React from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import SlideShow from './SlideShow';
import FlexBox from '../../css/carouselStyles';
import Helper from '../../../../helpers/helperFunctions';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      currectSlideDeck: this.props.collection.slice(0, 7),
      showSlideShow: false,
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.showSlideShow = this.showSlideShow.bind(this);
    this.hideSlideShow = this.hideSlideShow.bind(this);
  }

  previousSlide() {
    const imgUrls = this.props.collection;
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      currectSlideDeck: Helper.currectSlideDeckGenerator(imgUrls, index),
    });
  }

  nextSlide() {
    const imgUrls = this.props.collection;
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      currectSlideDeck: Helper.currectSlideDeckGenerator(imgUrls, index),
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
    return (
      <div style={FlexBox.FlexCol}>
        <div style={FlexBox.CrossButtonStyles}>
          <button onClick={this.props.clickFunction}>
          &#xe079;
          </button>
        </div>
        <div style={FlexBox.FlexRow}>
          <div style={FlexBox.LeftArrowButtonStyles}>
            <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
          </div>
          <div style={FlexBox.ImageSlidePosition}>
              <ImageSlide styles={FlexBox.MainSlide} room={this.props.collection[this.state.currentImageIndex]} clickFunction={this.nextSlide} />
          </div>
          <div style={FlexBox.RightArrowButtonStyles}>
            <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
          </div>
        </div>
        <div style={ FlexBox.DescriptionPosition }>
            <div style={ FlexBox.DescriptionStyles } onMouseEnter={ this.showSlideShow }>
              {this.props.collection[this.state.currentImageIndex].description}
              <button style={ FlexBox.DescriptionButton } onClick={ this.hideSlideShow }>
                LIST
              </button>
            </div>
        </div>
        {this.state.showSlideShow ?
          <div style={FlexBox.SlideShowFlexBox}>
            <SlideShow styles={FlexBox.SmallSlideStyles} collection={this.state.currectSlideDeck} />
        </div> :
          null
        }
      </div>
    );
  }
}

export default Carousel;
