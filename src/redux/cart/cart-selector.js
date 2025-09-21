import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectItems = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectHidden = createSelector(
  [selectCart],
  (hidden) => hidden.hidden
);

export const selectCartIconCount = createSelector([selectItems], (cartItem) =>
  cartItem.reduce((itemAccumulator, item) => itemAccumulator + item.quantity, 0)
);
export const selectCartTotal = createSelector([selectItems], (cartTotal) =>
  cartTotal.reduce(
    (itemAccumulator, item) => itemAccumulator + item.quantity * item.price,
    0
  )
);
