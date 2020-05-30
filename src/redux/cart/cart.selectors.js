import { createSelector } from 'reselect';

// input selector
const selectCart = (state) => state.cart;

// output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// cartItems Count selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, next) => acc + next.quantity, 0);
  }
);

// select Hidden
export const selectHidden = createSelector(selectCart, (cart) => cart.hidden);
