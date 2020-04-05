import React, { Component } from 'react';
import Intro from '../../components/Intro';
import Reward from '../../components/Reward';

class IntroReward extends Component {
  startGame = () => {
    this.props.levelUp();
  };

  render() {
    return <div>{this.props.isIntro ? <Intro startGame={this.startGame} /> : <Reward />}</div>;
  }
}

export default IntroReward;
