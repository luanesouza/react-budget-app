import React from 'react';
// import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import UserForm from './components/UserForm';
import Profile from './components/Profile';
import getUsers from './api-helper/user';

class App extends Component {
  state = {
    formData: {
      name: '',
      username: '',
      email: ''
    }
  }

  logIn = () => {
    console.log('hey');
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, value } = e.target;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: ''
      }
    })
    this.logIn()

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/' render={ () => (
          <UserForm onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          formData={this.state.formData}/> )}/>

        <Route exact path='/profile' render={ () => (
          <Profile /> )}/>
      </div>
    );
  }
}

export default App;
