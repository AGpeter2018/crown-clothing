import gql from "graphql-tag";

import { addItemToCart, getItemCount, getCartTotal, removeItemFromCart, clearItemFromCart } from "./cart-utils";


export const typesDefs = gql`
extend type Item{
  quantity: Int
}

extend type Mutation {
 ToggleCartHidden: Boolean!,
 AddCartItem(item: Item!): [item]!
 RemoveCartItem(item: Item!): [item]!
 ClearCartItem(item: Item!): [item]!
}
`

const GET_CART_HIDDEN = gql`
   { 
    cartHidden @client
   }
`
const GET_CART_ITEM = gql`
   { 
    cartItems @client
   }
`

const GET_ITEM_COUNT = gql`
{
    cartItemCount @client
}
`
const GET_ITEM_TOTAL = gql`
   {
      cartTotal @client
}
`

export const resolvers = {

    Mutation: {
        toggleCartHidden: (_root, _args, { cache }, _info) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            })

            cache.writeQuery({
                query:  GET_CART_HIDDEN,
                data: {cartHidden: !cartHidden}
            })
            return !cartHidden

        },

        addCartItem: (_root, {item}, {cache}) => {
              console.log('addCartItem called with:', item)
            const {cartItems} = cache.readQuery({
                query: GET_CART_ITEM,
            })

            const newCartItems = addItemToCart(cartItems, item)

            cache.writeQuery({
                query: GET_ITEM_COUNT,
                data: { cartItemCount: getItemCount(newCartItems)}
            })

            cache.writeQuery({
                query: GET_ITEM_TOTAL,
                data: {cartTotal: getCartTotal(newCartItems)}
            })

            cache.writeQuery({
                query:GET_CART_ITEM,
                data: {cartItems: newCartItems}
            })
            return newCartItems
        },

        removeCartItem: (_root, {item}, {cache}) => {
                const {cartItems} = cache.readQuery({
                    query: GET_CART_ITEM,
                })

                const newCartItems = removeItemFromCart(cartItems, item)

                cache.writeQuery({
                    query: GET_ITEM_COUNT,
                    data: { cartItemCount: getItemCount(newCartItems)}
                })

                cache.writeQuery({
                    query: GET_ITEM_TOTAL,
                    data: {cartTotal: getCartTotal(newCartItems)}
                })

            cache.writeQuery({
                query: GET_CART_ITEM,
                data: {cartItems: newCartItems}
            })
            return newCartItems
        },

        clearCartItem: (_root, {item}, {cache}) => {
            const {cartItems} = cache.readQuery({
                query: GET_CART_ITEM,  
          })

          const newCartItems = clearItemFromCart(cartItems, item)

          cache.writeQuery({
            query: GET_ITEM_COUNT,
            data: { cartItemCount: getItemCount(newCartItems)}
          })

          cache.writeQuery({
            query: GET_ITEM_TOTAL,
            data: {cartTotal: getCartTotal(newCartItems)}
          })

          cache.writeQuery({
            query: GET_CART_ITEM,
            data: {cartItems: newCartItems}
          })
          return newCartItems
        }
    }

}

