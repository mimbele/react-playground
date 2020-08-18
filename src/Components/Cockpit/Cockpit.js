import React from 'react'
import Styles from './Cockpit.css'

const cockpit = (props) => {

    //change 'This is really working!' paragraph's css class dynamically
    let pStyle = []
    if (props.persons.length <=2) {
      pStyle.push(Styles.red); //pStyle = ['red']
    }
    if (props.persons.length <=1) {
      pStyle.push(Styles.bold); //pStyle = ['red', 'bold']
    }
    pStyle = pStyle.join(' ');


    let buttonStyle = '';
    if (props.showPersons) {
        buttonStyle = Styles.Red;
    }

    return (
        <div className={Styles.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={pStyle}>This is really working!</p>
            <button
            className={buttonStyle}
            onClick={props.buttonClicked}>Show/Hide Persons</button>
        </div>
    );
}

export default cockpit;