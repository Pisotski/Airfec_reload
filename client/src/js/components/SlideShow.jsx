import React from 'react';
import ImageSlide from './ImageSlide.jsx';

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.SlideShowFlexBox = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    };
    this.alignCenter = {
      display: 'inlineFlex',
      height: '100px',
    };
  }

  render() {
    return (
      <div style={this.SlideShowFlexBox}>
        {this.props.collection.map((room, index) => (<ul key={index} style={this.alignCenter}><ImageSlide room={room} styles={this.props.styles} /></ul>))}
      </div>
    );
  }
}
export default SlideShow;
