import React, { Component } from 'react'
import Person from './Person/Person';
import Assignment2 from './Assignment/Assignment2'
import Assignment2_2 from './Assignment/Assignment2_2';

class TutApp extends Component {
    state = {
      persons: [
        { id:"000001" , name: 'Max', age: 28 },
        { id:"000002" , name: 'Manu', age: 29 },
        { id:"000003" , name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons:false,
      textLength : 0
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
    
    nameChangedHandler = (event,id) => {
      console.log(">>nameChangedHandler: event="+event+"  id="+id);
      //console.log("this.state.persons.findIndex(id)="+this.state.persons.findIndex(id));
      const personIndex = this.state.persons.findIndex(p=>{
        return p.id ===id;
      });
      console.log("personIndex="+personIndex);

      const person = {...this.state.persons[personIndex]};
      console.log("person="+person);

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      
      this.setState( {persons: persons} );
      }  
      
     togglePersonHandler =()=>{
       console.log(">>togglePersonHandler");
       const doesShow = this.state.showPersons;
       this.setState({showPersons: !doesShow});
     }
     
     deletePersonHandler = (indexPerson)=>{
       console.log(">>deletePersonHandler:indexPerson="+indexPerson);
       //const persons = this.state.persons.slice();
       //ulternate to slice();
       const persons = [...this.state.persons];
       persons.splice(indexPerson, 1);
       this.setState({persons:persons});
     }

     textCount= (event)=>{
       //window.alert(event.target.value);
       //console.log(event.target.value);
       let len = event.target.value.length;
       //window.alert(txt.length);
       this.setState({textLength : len});
     }

  render() {
    console.log(">>render");

    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'  
        }
      };  

    let persons = null;
    //console.log(">> if(this.state.showPersons)="+this.state.showPersons);
    if(this.state.showPersons){
      console.log(">> if(this.state.showPersons)");

      persons = (
        <div>
        {this.state.persons.map((person, index) =>{
          return <Person 
                    click = {()=>this.deletePersonHandler(index)} 
                    name = {person.name} 
                    age = {person.age}
                    key={person.id} 
                    changed={(event)=>this.nameChangedHandler(event,person.id)}
                  />
        })}
      </div>
      );
      
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    
   console.log(">>After Person Object");

   const  classes = [];
   console.log('>>classes='+classes);
  
   if(this.state.persons.length<=2){
     classes.push('red');
   }
   console.log('>>classes='+classes);
   if(this.state.persons.length<=1){
     classes.push('bold');
   }
   console.log('>>classes='+classes);
    return (
      <div className="TutApp">
      <p>Hii you inside the Tut App</p>
       <p className={classes.join(' ')}>This is really working </p>
      <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
      {persons}
      <Assignment2 changed={(event)=>this.textCount(event)} length={this.state.textLength}/>
      <Assignment2_2 />
      </div>
    );
    
  }
}
export default TutApp;