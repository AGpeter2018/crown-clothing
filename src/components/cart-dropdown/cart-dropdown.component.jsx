import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button.component/custom-button.component";
import CartItem from "../cart-item/cart-item";

// import { CartContext } from "../../provider/cart/cart-context";

import "./cart-dropdown.style.scss";

const CartDropDown = ({cartItems,  toggleCartHidden }) => {
  const navigate = useNavigate();
  // const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          toggleCartHidden();
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};
export default CartDropDown;
