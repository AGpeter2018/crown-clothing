import CartActionType from "./cart-type";

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItems = (items) => ({
  type: CartActionType.ADD_ITEM,
  payload: items,
});
