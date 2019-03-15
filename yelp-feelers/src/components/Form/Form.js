import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, signupUser } from '../../actions';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #cddae2;
  border-radius: 10px;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 10px;
  padding: 4px 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: inherit;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  margin: auto;
  margin-top: 10px;
  width: 100px;

  @media (min-width: 800px) {
    border: 1px solid black;
    color: black;
  }
`;

const P = styled.p`
  color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;  
  font-size: 1.4rem;
  margin-top: 20px;
  text-align: center;

  @media (min-width: 800px) {
    color: black;
  }
`;

class Form extends Component {
  constructor() {
    super();
    this.state={
      login: true,
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
    this.setState({ login: false, username: '', password: '' });
    if (this.state.login) {
      this.props.loginUser(user)
        .then(res => this.props.history.push('/bookmarks'));
    } else {
      this.props.signupUser(user)
        .then(res =>  this.props.history.push('/bookmarks'))
    }
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
      <StyledForm
        onSubmit={this.submit}
      >
        <Input
          name="username"
          onChange={this.handleChange}
          placeholder="Username"
          type="text"
          value={this.state.username}
        />
        <Input
          name="password"
          onChange={this.handleChange}
          placeholder="Password."
          type="password"
          value={this.state.password}
        />
        <Button>{this.state.login ? 'Login' : 'Signup' }</Button>
        <P
          onClick={this.toggleLogin}
        >
          Switch to {this.state.login ? 'Signup' : 'Login' } 👈
        </P>
      </StyledForm>
    );
  }
}

export default connect(null, { loginUser, signupUser })(Form);
