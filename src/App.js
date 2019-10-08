import React from 'react';
// import './App.css';
import { Component } from 'react';
import UserForm from './components/UserForm';
import getUsers from './api-helper/user';

class App extends Component {
  state = {
    formData: {
      name: '',
      username: '',
      email: ''
    }
  }

  logIn = () =>{
    console.log('hey');
  }

  render() {
    return (
      <div className="App">
        <h1> Budget App </h1>
        <UserForm formData={this.state.formData}/>
      </div>
    );
  }
}

export default App;
