import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => (
  <ul className="navbar-nav ml-auto mt-2 mt-lg-0" data-test="signedOutLink">
    <li className="nav-item">
      <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Sign In</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
    </li>
  </ul>
);

export default SignedOutLinks;
