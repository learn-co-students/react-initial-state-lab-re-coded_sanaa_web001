// your Bomb code here!
import React from 'react';


export default class Bomb extends React.Component {
state = {
          secondsLeft: this.props.initialCount,
        }
      ;
 

    render(){
    

        if(this.state.secondsLeft === 0) {
            this.message ='Boom!';
        }else
        {
            this.message = `${this.state.secondsLeft} seconds left before I go boom!`;
        }
        return(
            <p>{this.message}</p>
        );
    }
}