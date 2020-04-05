import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
    };
  }

  levelUp = () => {
    this.setState({ level: this.state.level + 1 });
  };

  render() {
    return <div className='App'>Hello world</div>;
  }
}

export default App;
