import React from "react";
import { addItems } from "../../redux/cart/cart-action";
import { useDispatch } from "react-redux";

import "./collection-item.component.style.scss";
import CustomButton from "../custom-button.component/custom-button.component";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItems(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
