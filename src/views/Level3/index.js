import React, { Component } from 'react';
import InputPass from '../../components/InputPass';
import Error from '../../components/Error';

import './Level3.css';

class Level3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'HackedBy_Do_Hoang',
      isWrong: false,
    };
  }

  comparePassword = (password) => {
    if (this.state.password === password) {
      this.props.levelUp();
    } else {
      this.setState({ isWrong: true });
    }
  };

  render() {
    return (
      <div>
        <div className='card'>レベル3</div>

        <div className='card card-body'>
          <p>このレベルに合格するために、パスワードを入力してください</p>

          {this.state.isWrong ? (
            <div className='element-margin'>
              <Error />
            </div>
          ) : (
            <></>
          )}

          <div className='uppercase'>
            <InputPass comparePassword={this.comparePassword} maxLength={32676} />
          </div>
        </div>

        <div className='card card-body'>
          <div className='element-margin'>ヒント</div>
          パスワード :<code className='hidden'>HackedBy_Do_Hoang</code>
        </div>
      </div>
    );
  }
}

export default Level3;
