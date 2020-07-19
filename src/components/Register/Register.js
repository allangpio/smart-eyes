import React from 'react';
import {RegisterContainer} from './style.js';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  onSubmitSignIn = () => {
    fetch('https://peaceful-scrubland-25512.herokuapp.com:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <RegisterContainer>
        <form className="form">
          <h3 className="form__title">Register</h3>
          <fieldset className="form__field">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              onChange={this.onNameChange}
              type="text"
              name="name"
              id="name"
              className="form__input"
            />
          </fieldset>
          <fieldset className="form__field">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              onChange={this.onEmailChange}
              type="email"
              name="email"
              id="email"
              className="form__input"
            />
          </fieldset>
          <fieldset className="form__field">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              name="password"
              id="password"
              className="form__input"
            />
          </fieldset>
          <p
            onClick={this.onSubmitSignIn}
            // type="submit"
            className="btn btn--login"
            // value="Sign in"
          >
            Register
          </p>
        </form>
      </RegisterContainer>
    );
  }
}

export default Register;
