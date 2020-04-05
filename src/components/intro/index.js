import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div>
        <h1>前書き</h1>
        <div className='card-body'>
          <p>
            画面に表示されるのは単なるhtmlとCSSであり、実際は偽物である可能性があります。
            レベルを渡すためにhtmlとcssの知識を使用してください。頑張って！！！
          </p>
        </div>
        <div className='card-body'>
          <button onClick={() => this.props.startGame()}>スタート</button>
        </div>
      </div>
    );
  }
}

export default Intro;
