import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems, selectCartTotal } from "../../redux/cart/cart-selector";

import CheckoutItem from "../../components/checkout-item-component/checkout.component";

import "./checkout.style.scss";

const Checkout = () => {
  const structuredSelector = createStructuredSelector({
    cartItem: selectItems,
    total: selectCartTotal,
  });
  const { cartItem, total } = useSelector(structuredSelector);
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
      {cartItem.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

export default Checkout;
