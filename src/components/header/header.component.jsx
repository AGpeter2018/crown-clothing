import React from "react";
import { Link } from "react-router-dom";

import "./header.component.style.scss";
import { ReactComponent as Logo } from "../../asset/crown.svg";

const Header = () => (
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
    </div>
  </div>
);

export default Header;
