import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import authStatus from '../helpers/authStatus';

const Navbar = () => {
  const links = authStatus() ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <NavLink className="navbar-brand" to="/">Ireporter</NavLink>
        { links }
      </div>
    </nav>
  );
};

export default withRouter(Navbar);