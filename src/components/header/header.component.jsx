import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

import "./header.component.style.scss";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { signOutAuth } from "../../redux/user/user-action";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
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

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

export default Header;
