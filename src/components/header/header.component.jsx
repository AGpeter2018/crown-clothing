import React,  { useContext }  from "react";
import { Link } from "react-router-dom";

import "./header.component.style.scss";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIconContainer from "../cart-icon/cart-icon-container";
import CartDropDownContainer from "../cart-dropdown/cart-dropdown-container";

// import { CartContext } from "../../provider/cart/cart-context";
import CurrentUser from "../../user/user.context";
import { auth } from "../../firebase/firebase.utils";

const Header = ({hidden}) => {
 const {currentUser} = useContext(CurrentUser)
  // const {hidden} = useContext(CartContext)

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>

        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signIn">
            Sign In
          </Link>
        )}
        <CartIconContainer />
      </div>
      {hidden ? null : <CartDropDownContainer />}
    </div>
  );
};

export default Header;
