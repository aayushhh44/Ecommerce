import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }       
    }, [])  


    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        
        if (isItemInCart) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
    }

    const deleteFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id ===  item.id);

        if (isItemInCart == 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        } else {
            setCartItems(cartItems.map((cartItem) => cartItem.id == item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
        }
    }

    const clearCart = () => {
        setCartItems([])
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, deleteFromCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    )
}