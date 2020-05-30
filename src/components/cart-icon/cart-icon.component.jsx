import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';
import { ReactComponent as ShopingIcon } from '../../assests/carticon.svg';
import toggleCartHidden from '../../redux/cart/cart.action';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
  <div className="cart-icon">
    <ShopingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count ">{cartItemsCount}</span>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItemsCount: cartItems.reduce((acc, next) => acc + next.quantity, 0),
// });

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
