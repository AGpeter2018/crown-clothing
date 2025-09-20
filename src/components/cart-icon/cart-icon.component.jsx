import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectCartIconCount } from "../../redux/cart/cart-selector";

import { ReactComponent as ShoppingIcon } from "../../asset/122 shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = () => {
  const itemCount = useSelector((state) => selectCartIconCount(state));
  const dispatch = useDispatch();
  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => dispatch(toggleCartHidden())}
      />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
