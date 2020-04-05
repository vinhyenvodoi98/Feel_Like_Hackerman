import React, { Component } from 'react';
import './InputPass.css';

class InputPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  submitPass = () => {
    this.props.comparePassword(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className='row col-12'>
        <input
          className='col-9'
          placeholder='パスワード'
          value={this.state.value}
          maxLength={this.props.maxLength}
          onChange={(event) => this.setState({ value: event.target.value })}></input>
        <div className='col-1'></div>
        <button onClick={() => this.submitPass()}>送信</button>
      </div>
    );
  }
}

export default InputPass;
