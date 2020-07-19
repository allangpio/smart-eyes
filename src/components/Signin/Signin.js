import React from 'react';
import {SigninContainer} from './style.js';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  };

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } // else {
        //   // O CODIGO ORIGINAL NÃO TEM ESSE ELSE
        //   return this.props.onRouteChange('home');
        // }
      });
  };

  render() {
    const {onRouteChange} = this.props;
    return (
      <SigninContainer>
        <div className="form">
          <h3 className="form__title">Sign In</h3>
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
            {' '}
            Sign In{' '}
          </p>

          <p
            onClick={() => onRouteChange('register')}
            className="btn btn--register"
          >
            Register
          </p>
        </div>
      </SigninContainer>
    );
  }
}

export default Signin;
