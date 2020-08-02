import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    username:["Mari","Meh"]
  }

  changeUsernameHandler = (event) => {
    this.setState({
        username:[event.target.value,"Meh"]
      })
  }

  render() {
    return (
      <div>
        <UserInput  userName={this.state.username[0]} onchange={this.changeUsernameHandler}/>
        <UserOutput userName={this.state.username[0]}/>
        <UserOutput userName={this.state.username[1]}/>
      </div>
    );
  }
  
}

export default App;
