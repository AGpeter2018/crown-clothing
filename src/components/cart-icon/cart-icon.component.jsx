import React, { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../asset/122 shopping-bag.svg";

// import { CartContext } from "../../provider/cart/cart-context";

import "./cart-icon.style.scss";

const CartIcon = ({toggleCartHidden, cartItemCount}) => {
  // const { cartCount } = useContext(CartContext);
  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={ toggleCartHidden}
      />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
