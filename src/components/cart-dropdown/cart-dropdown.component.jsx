import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart-action";

import { selectItems } from "../../redux/cart/cart-selector";

import CustomButton from "../custom-button.component/custom-button.component";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const structuredSelector = createStructuredSelector({
    cart: selectItems,
  });
  const { cart } = useSelector(structuredSelector);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart.map((cartItems) => (
            <CartItem key={cartItems.id} item={cartItems} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        ;
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};
export default CartDropDown;
