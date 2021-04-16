// your Bomb code here!
import React, { Component } from "react";

class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }
  ticktock = () => {
    this.setState({
      secondsLeft: 0,
    });
  };
  render() {
    setTimeout(this.ticktock, 12000);
    if (this.state.secondsLeft !== 0) {
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>;
    } else if (this.state.secondsLeft === 0) {
      return <div>Boom!</div>;
    }
  }
}

export default Bomb;
