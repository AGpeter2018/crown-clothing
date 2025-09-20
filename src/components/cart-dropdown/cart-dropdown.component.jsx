import React from "react";

import CustomButton from "../custom-button.component/custom-button.component";
import "./cart-dropdown.style.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-item" />
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropDown;
