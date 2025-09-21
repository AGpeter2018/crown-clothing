import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectCartIconCount } from "../../redux/cart/cart-selector";

import { ReactComponent as ShoppingIcon } from "../../asset/122 shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = () => {
  const structredSelector = createStructuredSelector({
    cart: selectCartIconCount,
  });
  const { cart } = useSelector(structredSelector);
  const dispatch = useDispatch();
  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => dispatch(toggleCartHidden())}
      />
      <span className="item-count">{cart}</span>
    </div>
  );
};

export default CartIcon;
