// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
  super()
  this.state = {
    secondsLeft  :props.initialCount,
  }
}

  render() {
    return (
      <div id="matrix">
        {(this.state.secondsLeft)?`${this.state.secondsLeft} seconds left before I go boom!`:"Boom!"}
      </div>
    )
  }

}
