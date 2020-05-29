import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';
import { ReactComponent as ShopingIcon } from '../../assests/carticon.svg';
import toggleCartHidden from '../../redux/cart/cart.action';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon">
    <ShopingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count ">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
