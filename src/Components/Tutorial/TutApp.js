import React, { Component } from 'react'
import Person from './Person/Person';

class TutApp extends Component {
    state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons:false
    }
  
    switchNameHandler = (newName) => {
      console.log(">>switchNameHandler: newName="+newName);
      // console.log('Was clicked!');
      // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
      this.setState( {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      } )
    }
    
    nameChangedHandler = (event) => {
      console.log(">>nameChangedHandler: event="+event);
        this.setState( {
          persons: [
            { name: 'Max', age: 28 },
            { name: event.target.value, age: 29 },
            { name: 'Stephanie', age: 26 }
          ]
        } )
      }  
      
     togglePersonHandler =()=>{
       console.log(">>togglePersonHandler");
       const doesShow = this.state.showPersons;
       this.setState({showPersons: !doesShow});
     }
      
  render() {
    console.log(">>render");
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };  

    let persons = null;
    console.log(">> if(this.state.showPersons)="+this.state.showPersons);
    if(this.state.showPersons){
      console.log(">> if(this.state.showPersons)");
      persons = (
        <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
      );
    }
    
    console.log(">>before return");
    
    return (
      <div className="TutApp">
      <p>Hii you inside th Tut App</p>
       
      <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
      {persons}
      
      </div>
    );
    
  }
}
export default TutApp;