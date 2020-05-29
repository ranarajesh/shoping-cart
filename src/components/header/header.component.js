import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assests/crown.svg';

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo"></Logo>
    </Link>

    <div className="options">
      <div className="option">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="option">
        <Link to="/shop">Contact</Link>
      </div>
      <div className="option">
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  </div>
);

export default Header;
