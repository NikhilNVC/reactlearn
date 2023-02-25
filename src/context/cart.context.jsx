import { createContext, useEffect, useState } from "react";

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

const deleteCartItem = (cartItems, productToDelete) => {
    const existingCartItem = cartItems.find( (cartItem) => cartItem.id === productToDelete.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter( item => item.id !== productToDelete.id);
    }

    return cartItems.map( (cartItem)=> cartItem.id === productToDelete.id ? 
        {...cartItem,quantity: cartItem.quantity-1}:
        cartItem
        );

    
}

const removeCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter( item => item.id !== cartItemToClear.id);
}


export const CartProvider = ({children}) => {

    const [showCheckout, setShowCheckout] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [quantity, setQuantity] = useState(0);

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{

        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity*cartItem.price, 0);
        setCartTotal(newCartTotal);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setQuantity(quantity+1);
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const deleteItemFromCart = (productToDelete) => {
        setQuantity(quantity-1);
        setCartItems(deleteCartItem(cartItems, productToDelete));
    }

    const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const value = {showCheckout, setShowCheckout, cartItems, addItemToCart, quantity, deleteItemFromCart, clearItemFromCart, cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}