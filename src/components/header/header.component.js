import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utills';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo"></Logo>
    </Link>

    <div className="options">
      <div className="option">
        <Link to="/shop">SHOP</Link>
      </div>
      <div className="option">
        <Link to="/shop">CONTACT</Link>
      </div>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <div className="option">
          <Link to="/signin">SIGN IN</Link>
        </div>
      )}
    </div>
  </div>
);

export default Header;
