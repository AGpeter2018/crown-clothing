import React from "react";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import "./header.component.style.scss";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { useSelector, useDispatch } from "react-redux";
import { signOutAuth } from "../../redux/user/user-action";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectHidden } from "../../redux/cart/cart-selector";

const Header = () => {
  const StructuredSelector = createStructuredSelector({
    hidden: selectHidden,
    currentUser: selectCurrentUser,
  });
  const { currentUser, hidden } = useSelector(StructuredSelector);
  const dispatch = useDispatch();

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
          <div className="option" onClick={() => dispatch(signOutAuth())}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signIn">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

export default Header;
