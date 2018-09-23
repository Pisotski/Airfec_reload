import React from 'react';
import axios from 'axios';
import Banner from './Banner';
import BackgroundLayout from './BackgroundLayout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      isLoading: true,
      showCarousel: false,
      roomId: window.location.pathname.split('/')[2],
    };
    this.toggleCarousel = this.toggleCarousel.bind(this);
  }

  async componentDidMount() {
    const { roomId } = this.state;
    try {
      const response = await axios.get(`/Photos/${roomId}`);
      const collection = await response;
      this.setState({
        collection: collection.data,
        isLoading: false,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  toggleCarousel() {
    const { showCarousel } = this.state;
    this.setState({
      showCarousel: !showCarousel,
    });
  }

  render() {
    const { isLoading, collection, showCarousel } = this.state;
    return (
      <div id="main-slide">
        { isLoading
          ? <div className="loading">{'I\'m loading'}</div>
          : <Banner clickFunction={this.toggleCarousel} url={collection[0].url} />
        }
        {showCarousel
          ? <BackgroundLayout clickFunction={this.toggleCarousel} collection={collection} />
          : null
        }
      </div>
    );
  }
}

export default App;
