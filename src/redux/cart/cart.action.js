import cartActionTypes from './cart.types';

const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
export const addItemToCart = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export default toggleCartHidden;
