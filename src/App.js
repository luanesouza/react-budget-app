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

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, value } = e.target;

    console.log(this.state.formData)

    e.target.value = ''

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: ''
      }
    })
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
        <h1> Budget App </h1>
        <UserForm onSubmit={this.handleSubmit}  onChange={this.handleChange} formData={this.state.formData}/>
      </div>
    );
  }
}

export default App;
