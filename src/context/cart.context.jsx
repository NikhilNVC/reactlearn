import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [showCheckout, setShowCheckout] = useState(false);

    const value = {showCheckout, setShowCheckout};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}