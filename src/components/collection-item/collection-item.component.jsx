import React, { useContext } from "react";


import "./collection-item.component.style.scss";
import CustomButton from "../custom-button.component/custom-button.component";
// import { CartContext } from "../../provider/cart/cart-context";

const CollectionItem = ({ item,  addItem }) => {
  const { name, imageUrl, price } = item;
  // const {addItem} = useContext(CartContext);
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
