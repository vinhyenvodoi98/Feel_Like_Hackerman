import React, { Component } from 'react';
import InputPass from '../../components/InputPass';
import Error from '../../components/Error';

import './Level1.css';

class Level1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password:
        'adxi5d8hoelkjfsdfs324fg5gd3fg4gfd354g54b53sd4dg534er65g341fd35g_Hacked_By_Do_Hoang_df3g2fdg5sqrwefrg98df6516e5r4f2d186a5rwe4reg6df5gfd327fuef58f',
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
        <div className='card'>レベル1</div>

        <div className='card card-body'>
          <p>このレベルに合格するために、パスワードを入力してください</p>

          {this.state.isWrong ? (
            <div className='element-margin'>
              <Error />
            </div>
          ) : (
            <></>
          )}

          <InputPass comparePassword={this.comparePassword} maxLength={32676} />
        </div>

        <div className='card card-body'>
          <div className='element-margin'>ヒント</div>
          パスワード :
          <code className='noselect'>
            adxi5d8hoelkjfsdfs324fg5gd3fg4gfd354g54b53sd4dg534er65g341fd35g_Hacked_By_Do_Hoang_df3g2fdg5sqrwefrg98df6516e5r4f2d186a5rwe4reg6df5gfd327fuef58f
          </code>
        </div>
      </div>
    );
  }
}

export default Level1;
