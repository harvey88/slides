import React, { Component } from 'react';
import Presentation from './components/Presentation'

class App extends Component {
  state={
    baseUrl: 'https://cdn.snap.menu/media/version/'
  }
  render() {
    return (
      <Presentation baseUrl={this.state.baseUrl}  />
    );
  }
}

export default App;
