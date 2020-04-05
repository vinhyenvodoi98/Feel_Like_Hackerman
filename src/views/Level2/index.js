import React, { Component } from 'react';
import InputPass from '../../components/InputPass';
import Error from '../../components/Error';

class Level2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'HackedByDoHoang',
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
        <div className='card'>レベル2</div>

        <div className='card card-body'>
          <p>このレベルに合格するために、パスワードを入力してください</p>

          {this.state.isWrong ? (
            <div className='element-margin'>
              <Error />
            </div>
          ) : (
            <></>
          )}

          <InputPass comparePassword={this.comparePassword} maxLength={6} />
        </div>

        <div className='card card-body'>
          <div className='element-margin'>ヒント</div>
          パスワード :<code>HackedByDoHoang</code>
        </div>
      </div>
    );
  }
}

export default Level2;
