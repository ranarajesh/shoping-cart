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

export const removeItemFromCart = (cartItems, removeItem) => {
  const existingItem = cartItems.find((item) => item.id === removeItem.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingItem.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === existingItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
