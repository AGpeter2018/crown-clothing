import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const match = useMatch("/"); // You may want to adjust this depending on your routing structure

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${match.pathname}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
