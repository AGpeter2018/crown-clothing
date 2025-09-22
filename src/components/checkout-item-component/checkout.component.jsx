import React from "react";
import { useDispatch } from "react-redux";
import { clearItemCart } from "../../redux/cart/cart-action";

import "./checkouts.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemCart(cartItem))}
      >
        &#10006;
      </div>
    </div>
  );
};

export default CheckoutItem;
