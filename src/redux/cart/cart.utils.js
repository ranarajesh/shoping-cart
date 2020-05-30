export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItemInCart = cartItems.find((item) => {
    return item.id === cartItemToAdd.id;
  });

  if (existingItemInCart) {
    return cartItems.map((cart) => {
      return cart.id === cartItemToAdd.id
        ? { ...cart, quantity: cart.quantity + 1 }
        : cart;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
