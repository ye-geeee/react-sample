import { RequestHeaderFieldsTooLarge } from 'http-errors';
import React, { Component } from 'react';

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={RequestHeaderFieldsTooLarge.input}></input>
      </div>
    )
  }
}

export default RefSample;