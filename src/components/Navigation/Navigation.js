import React from 'react';
import {NavContainer} from './style.js';

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
      <NavContainer>
        <p onClick={() => onRouteChange('signout')}>Sign Out</p>
      </NavContainer>
    );
  } else {
    return (
      <NavContainer>
        <p onClick={() => onRouteChange('signin')}>Sign In</p>
        <p className="margin-left" onClick={() => onRouteChange('register')}>
          Register
        </p>
      </NavContainer>
    );
  }
};

export default Navigation;
