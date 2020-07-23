import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <Person name="Maryam" age="22"/>
        <Person name="Fati" age="30">My Hobbies: playing violin</Person>
        <Person name="Narges" age="33"/>
      </div>
      // React.createElement('div', {className:'App'}, React.createElement('h1',null, "Hi! I'm a react app!"))
    );
  }
}

export default App;
