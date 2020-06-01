import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//import './header.styles.scss';
import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  OptionLink,
} from './header.styles';

import { ReactComponent as Logo } from '../../assests/crown.svg';
//import { auth } from '../../firebase/firebase.utills';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.action';

const Header = ({ currentUser, isCartHidden, dispatch }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo></Logo>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {isCartHidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectHidden,
});
export default connect(mapStateToProps)(Header);
