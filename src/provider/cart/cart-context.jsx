import react, {createContext, useState, useEffect} from "react";

import { addItemToCart, removeItemFromCart } from "./cart-utils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const toggleHidden = () => setHidden(!hidden)
    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))

    useEffect(() => {
        const newCartCount = (cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity, 0))
    const newCartTotal = (cartItems.reduce(
    (itemAccumulator, item) => itemAccumulator + item.price * item.quantity,
    0
  ))

  setCartCount(newCartCount)
  setCartTotal(newCartTotal)

    }, [cartItems])

    const clearItemFromCart = item => setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))

    return(
        <CartContext.Provider value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            cartCount,
            cartTotal,
            clearItemFromCart
        }
        }>{children}</CartContext.Provider>
    )
}

export default CartProvider;