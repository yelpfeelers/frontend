import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, signupUser } from '../../actions';

class Form extends Component {
  constructor() {
    super();
    this.state={
      login: false,
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.state.login ? this.props.loginUser(user) : this.props.signupUser(user)
    this.setState({ login: false, username: '', password: '' });
  }

  toggleLogin = () => {
    this.setState(state => {
      return ({
        login: !state.login
      })
    });
  }

  render() {
    return (
      <form
        onSubmit={this.submit}
      >
        <input
          name="username"
          onChange={this.handleChange}
          placeholder="Username"
          type="text"
          value={this.state.username}
        />
        <input
          name="password"
          onChange={this.handleChange}
          placeholder="Password."
          type="text"
          value={this.state.password}
        />
        <button>{this.state.login ? 'Login' : 'Signup' }</button>
        <p
          onClick={this.toggleLogin}
        >
          Switch to {this.state.login ? 'Signup' : 'Login' }
        </p>
      </form>
    );
  }
}

export default connect(null, { loginUser, signupUser })(Form);
