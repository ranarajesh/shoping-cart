import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utills';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, isCartHidden }) => (
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
      <CartIcon />
    </div>
    {isCartHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  isCartHidden: hidden,
});
export default connect(mapStateToProps)(Header);
