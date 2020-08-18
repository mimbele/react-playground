import React, { Component } from 'react';

import Styles from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            inputChanged={this.updatePersonName} />
    }


    return (
      <div className={Styles.App}>
        <Cockpit 
          buttonClicked={this.togglePersonsVisibility}
          persons={this.state.persons}
          showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App;
