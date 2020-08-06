import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    textEntered: '',
    inputTextLength : 0,
  }

    inputChangedHandler = (event) => {
      const textEntered = event.target.value;

      this.setState({textEntered: textEntered,
        inputTextLength:textEntered.length});
    }

    charClickedHandler = (index) => {
      const text = this.state.textEntered.split('');
      text.splice(index,1)
      const newText = text.join('')
      this.setState({
        textEntered: newText, inputTextLength: newText.length
      })
    }
  
  render () {

    const charList = this.state.textEntered.split('').map((ch, index) => {
      return <Char character={ch} key={index} 
        onClick={() => this.charClickedHandler(index)}/>
    })

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <input onChange={this.inputChangedHandler} value={this.state.textEntered}/>
        <p>the lenth of the input is: {this.state.inputTextLength} and chars: {this.state.chars}</p>
        <Validation textLength={this.state.inputTextLength}/>
        {charList}
      </div>
    );
  }
}

export default App;
