import React, { Component } from 'react';
import IntroReward from './views/IntroReward';
import Level1 from './views/Level1';
import Level2 from './views/Level2';
import Level3 from './views/Level3';

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
      case 2:
        return <Level2 levelUp={this.levelUp} />;
      case 3:
        return <Level3 levelUp={this.levelUp} />;
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
