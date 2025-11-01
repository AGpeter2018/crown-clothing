import React from "react";
import "./collection-preview.style.scss";
import CollectionItemContainer from "../collection-item/collection-item-container";
const CollectionPreview = ({collections}) => {
  return ( 
    <div className="collection-overView">
    {
      collections.map(({id, title, items}) => {
        return (
            <div className="collection-preview" id={id}>
              <h1 className="title">{title.toUpperCase()}</h1>
              <div className="preview">
        {items
          .filter((el, i) => i < 4)
          .map((item) => (
            <CollectionItemContainer key={item.id} item={item} />
          ))}
      </div>
    </div>

          
  )}) 
      }
      
     
    </div>
    
  );
};
export default CollectionPreview;
