import React, { Component } from 'react';
import './App.css';
import TutApp from './Components/Tutorial/TutApp';
import ELearnApp from './Components/e-Learning/ELearnApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<TutApp/>*/}
        {/*<ELearnApp/> */}
        <TutApp/>
      </div>
    );
  }
}

export default App;
