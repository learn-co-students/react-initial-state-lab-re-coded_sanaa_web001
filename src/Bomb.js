// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props){
        super();
        this.state={
            secondsLeft :props.initialCount
        }
        
    }
    renderSentence=()=>{
        setInterval(() => {
            
            this.setState({secondsLeft:this.state.secondsLeft-1})
           
        }, this.state.secondsLeft);
        
    }
    showPhrace=()=>{
        if(this.state.secondsLeft>0)
        return  `${this.state.secondsLeft} seconds left before I go boom!`
        else return  'Boom!'
    }
    render() {
        return (
            <div>
                {this.showPhrace()}
              
             <button type="" onClick={()=>this.renderSentence()}></button>

            </div>
        );
    }
}

export default Bomb;

