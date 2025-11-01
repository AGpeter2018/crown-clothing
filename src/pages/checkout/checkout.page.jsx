import React, { useContext } from "react";

import CheckoutItemContainer from "../../components/checkout-item-component/checkout-item-container";

// import { CartContext } from "../../provider/cart/cart-context";

import "./checkout.style.scss";

const Checkout = ({cartItems, cartTotal}) => {

  // const {  cartTotal, cartItems } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
