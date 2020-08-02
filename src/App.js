import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [currentPersonsState, setPersonsState] = useState({
    persons : [
      {name:"Maryam", age:22},
      {name:"Fati", age:30},
      {name:"Narges", age:33}
      ]
  })

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons :[
        {name:"Maryam", age:22},
        {name:newName, age:30},
        {name:"Narges", age:33}
      ]
    })
  }

  const changeNameHandler = (event) => {
    setPersonsState({
      persons :[
        {name:"Maryam", age:22},
        {name:event.target.value, age:30},
        {name:"Narges", age:33}
      ]
    })
  }

  
  return (
    <div className="App">
      <h1>Hi! I'm a react app!</h1> 
      <button onClick={() => switchNameHandler("Fatemeh")}>Switch Name</button>
      <Person 
        name={currentPersonsState.persons[0].name} 
        age={currentPersonsState.persons[0].age}/>
      <Person 
        name={currentPersonsState.persons[1].name} 
        age={currentPersonsState.persons[1].age}
        click={() => switchNameHandler("Fatiiiiii")}
        change={changeNameHandler}>My Hobbies: playing violin</Person>
      <Person 
        name={currentPersonsState.persons[2].name} 
        age={currentPersonsState.persons[2].age}/>
    </div>
    // React.createElement('div', {className:'App'}, React.createElement('h1',null, "Hi! I'm a react app!"))
  );
  
}

export default app;
