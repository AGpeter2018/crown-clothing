import React, { useContext } from "react";

import { CartContext } from "../../provider/cart/cart-context";

import "./checkouts.style.scss";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  // const {clearItemFromCart, removeItem, addItem} = useContext(CartContext);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItem(cartItem)}
      >
        &#10006;
      </div>
    </div>
  );
};

export default CheckoutItem;
