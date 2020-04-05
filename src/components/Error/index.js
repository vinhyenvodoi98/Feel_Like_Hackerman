import React, { Component } from 'react';

import './Error.css';

class Error extends Component {
  render() {
    return (
      <div className='card error'>
        <div>パスワードが間違っていますもう一度お試しください</div>
      </div>
    );
  }
  }

export default Error;
