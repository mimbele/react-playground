import React, { Component } from 'react';
import Styles from './App.module.css';
import Person from '../Components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sdk345', name: 'Max', age: 28 },
      { id: 'raeo34', name: 'Manu', age: 29 },
      { id: 'pvmty5', name: 'Stephanie', age: 26 }
    ],
    showPersons: false 
  }

  updatePersonName = (event, personId) => {
    const personIndex = this.state.persons.findIndex( person => {
      return person.id === personId
    } )

    const newPersons = [...this.state.persons]
    newPersons[personIndex].name = event.target.value;

    this.setState( {persons: newPersons} )
  }

  deletePerson = (person_to_be_deleted) => {
    const newPersons = [...this.state.persons]
    newPersons.splice(person_to_be_deleted, 1)
    this.setState({persons: newPersons})
  }

  togglePersonsVisibility = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const buttonStyle = {
      backgroundColor: 'green', //green means clicking button will show persons
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
            return <Person
              click={() => this.deletePerson(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              inputChanged={(event) => this.updatePersonName(event, person.id)}/>
            })
          }
        </div>
      );
      buttonStyle.backgroundColor = 'red'; //red means clicking button will hide persons
    }

    //change 'This is really working!' paragraph's css class dynamically
    let pStyle = []
    if (this.state.persons.length <=2) {
      pStyle.push(Styles.red); //pStyle = ['red']
    }
    if (this.state.persons.length <=1) {
      pStyle.push(Styles.bold); //pStyle = ['red', 'bold']
    }
    pStyle = pStyle.join(' ');

    return (
      <div className={Styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={pStyle}>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsVisibility}>Show/Hide Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;