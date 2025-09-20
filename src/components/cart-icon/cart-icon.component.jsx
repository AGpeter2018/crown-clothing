import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import { ReactComponent as ShoppingIcon } from "../../asset/122 shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => dispatch(toggleCartHidden())}
      />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
