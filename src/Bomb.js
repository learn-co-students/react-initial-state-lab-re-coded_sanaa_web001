import React, { Component } from "react";

export class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }
  render() {
    let message;
    if (this.state.secondsLeft === 0) {
      message = "Boom!";
    } else {
      message = `${this.props.initialCount} seconds left before I go boom!`;
    }

    return <div>{message}</div>;
  }
}

export default Bomb;
