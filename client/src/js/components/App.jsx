import React from 'react';
import axios from 'axios';
import Banner from './Banner';
import Carousel from './Carousel';

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
      <div id="main-container">
        <Choose>
          <When condition={isLoading}>
            <div className="loading">{'I\'m loading'}</div>
          </When>
          <Otherwise>
            <Banner toggleCarousel={this.toggleCarousel} url={collection[0].url} />
          </Otherwise>
        </Choose>
        <If condition={showCarousel}>
          <div className="modal">
            <Carousel clickFunction={this.toggleCarousel} collection={collection} />
          </div>
        </If>
      </div>
    );
  }
}

export default App;
