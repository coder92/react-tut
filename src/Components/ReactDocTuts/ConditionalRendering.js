//https://reactjs.org/docs/conditional-rendering.html

import React, { Component } from 'react'

//when user logged in then welcome msg
function UserGreeting(props){
    return <h1>Welcome!</h1>;
}

//when user not present
function GuestGreeting(props){
    return <h1>Please sign up.</h1>
}

//this component displays whether the user is logged in or not
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>;
    }else{
        return <GuestGreeting/>;
    }
}


export default class ConditionalRendering extends Component {
  render() {
    return (
      <div>
        <Greeting isLoggedIn={false} />
      </div>
    )
  }
}


