import React from 'react';
import axios from 'axios';
import Banner from './Banner';
import BackgroundLayout from './BackgroundLayout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      showCarousel: false,
      roomId: window.location.pathname.split('/')[2],
    };
    this.toggleCarousel = this.toggleCarousel.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`/Photos/${this.state.roomId}`);
      this.setState({
        collection: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  toggleCarousel() {
    this.setState({
      showCarousel: !this.state.showCarousel,
    });
  }

  render() {
    return (
      <div id="main-slide">
      {this.state.collection.length > 0
        ? <Banner clickFunction={this.toggleCarousel} room={this.state.collection[0]} />
        : null
        }
      {this.state.showCarousel
        ? <BackgroundLayout clickFunction={this.toggleCarousel} collection={this.state.collection} />
        : null
        }
    </div>
    );
  }
}

export default App;
