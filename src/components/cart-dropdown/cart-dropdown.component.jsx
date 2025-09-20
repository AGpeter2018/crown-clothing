import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/cart/cart-selector";

import CustomButton from "../custom-button.component/custom-button.component";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  const cartItems = useSelector((state) => selectItems(state));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};
export default CartDropDown;
