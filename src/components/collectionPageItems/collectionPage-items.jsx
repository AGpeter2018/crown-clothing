import React, { useContext } from 'react'

import CustomButton from '../custom-button.component/custom-button.component'

// import { CartContext } from '../../provider/cart/cart-context'

import './collectionPage.style.scss'

const CollectionPageItems = ({item, addItem}) => {
    // const {addItem} = useContext(CartContext)
    const {name, imageUrl,price} = item
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
  )
}

export default CollectionPageItems