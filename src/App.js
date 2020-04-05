import React, { Component } from 'react';

import Level1 from './views/Level1';

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
  
  levelRender = () => {
    switch (this.state.level) {
      case 0:
        return <IntroReward levelUp={this.levelUp} isIntro={true} />;
      case 1:
        return <Level1 levelUp={this.levelUp} />;
      default:
        return <IntroReward levelUp={this.levelUp} isIntro={false} />;
    }
  };


  render() {
    return (
      <div className='App'>
        <div className='container'>{this.levelRender()}</div>
      </div>
    );
  }
}

export default App;
