import { createContext, useState } from "react";

export const CartContext = createContext();

const addCartItem = (cartItems, productToAdd) => {
    //find if cart contains productsToAdd
    const existingCartItem = cartItems.find( (cartItem) => cartItem.id === productToAdd.id);
    //if found, increment quantity
    if(existingCartItem){
        return cartItems.map( (cartItem)=> cartItem.id === productToAdd.id ? 
        {...cartItem,quantity: cartItem.quantity+1}:
        cartItem
        );
    }
    //return new array with modified cart items / new cart items
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartProvider = ({children}) => {

    const [showCheckout, setShowCheckout] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [quantity, setQuantity] = useState(0);

    const addItemToCart = (productToAdd) => {
        setQuantity(quantity+1);
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {showCheckout, setShowCheckout, cartItems, addItemToCart, quantity};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}