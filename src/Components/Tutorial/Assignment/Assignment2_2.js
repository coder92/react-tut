import React, { Component } from 'react'

export default class Assignment2_2 extends Component {

    state ={
        userInput:''
    }

    inputlength =(event)=>{
        this.setState({userInput:event.target.value.length});
    }

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputlength}/>
        <p>Length of text is: {this.state.userInput}</p>
      </div>
    )
  }
}
