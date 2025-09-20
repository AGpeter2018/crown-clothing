import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectItems = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectCartIconCount = createSelector([selectItems], (cartItem) =>
  cartItem.reduce((itemAccumulator, item) => itemAccumulator + item.quantity, 0)
);
