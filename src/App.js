import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
    {name:"Maryam", age:22},
    {name:"Fati", age:30},
    {name:"Narges", age:33}
    ]
  }

  switchNameHandler = () => {
    //DONT DO THIS: this.state.persons[1].name = "Fateme";
    this.setState({
      persons :[
        {name:"Maryam", age:22},
        {name:"Fateme", age:30},
        {name:"Narges", age:33}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: playing violin</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      // React.createElement('div', {className:'App'}, React.createElement('h1',null, "Hi! I'm a react app!"))
    );
  }
}

export default App;
