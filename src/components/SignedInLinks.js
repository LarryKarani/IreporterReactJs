import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {
  handleLogout = () => {
    localStorage.clear();
  };

  render() {
    return (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0" data-test="signedInLink">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/incidents">
            Incidents
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;