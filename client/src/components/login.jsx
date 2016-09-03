import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import CreateTrip from './createTrip.jsx';
import Signup from './signUp.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
                   password: ''};
  }

  handleChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  submitUser() {
    // console.log("newuserobject:", this.state);
    this.props.checkUser(this.state);
  }

  render() {
    return (
      <div>
        <input
          value = {this.state.username}
          placeholder = 'Username'
          className = 'form-control'
          onChange = {this.handleChange.bind(this, 'username')}/>

        <input
          value = {this.state.password}
          type = 'password'
          className = 'form-control'
          placeholder = 'Password'
          onChange = {this.handleChange.bind(this, 'password')}/>

        <input
          type = 'button'
          className = 'btn btn-primary'
          value = 'Login'
          onClick = {event => this.submitUser()}/>
      </div>
    )
  }
}

export default Login;
