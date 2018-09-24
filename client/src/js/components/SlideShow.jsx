import React from 'react';
import '../../css/slideshow.css';

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    const { collection } = this.props;
    this.state = {
      collection,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="slide-show-wrapper">
        {collection.map(
          (room, i) => (
            <img key={i} src={room.url} alt="some_stuff_from_description" />
          ),
        )
        }
      </div>
    );
  }
}

export default SlideShow;
