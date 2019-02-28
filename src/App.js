import React, { Component } from 'react';
import './App.css';
import TutApp from './Components/Tutorial/TutApp';
import ELearnApp from './Components/e-Learning/ELearnApp'
import Radium, {StyleRoot} from 'radium'

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          {/*<TutApp/>*/}
          {/*<ELearnApp/> */}
          <TutApp/>
        </div>
      
      </StyleRoot>
      
    );
  }
}

export default Radium(App);
