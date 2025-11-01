import React from 'react'


import CollectionPageItemContainer from '../collectionPageItems/collectionPage-items-container'

import './collectionPage.style.scss'

const CollectionPage = ({collection}) => {
  const {title, items} = collection
  return ( 
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .map((item) => (
            <CollectionPageItemContainer key={item.id} item={item} />
          ))}
      </div>
    </div> 
  )  
}

export default CollectionPage