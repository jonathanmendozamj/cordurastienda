import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd]);
    };

    const getQuantity = () => {
        let count = 0;
        cart.forEach(prod => {
            count += prod.quantity;
        });

        return count;
    };

    const getTotal = () => {
        let sum = 0;
        cart.forEach(prod => {
            sum += prod.price * prod.quantity;
        });

        return sum;
    }

    const isEmpty = () => {
        return (cart.length === 0);
    };

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        const products = cart.filter(product => product.id !== id);
        setCart(products);
    };

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            isEmpty,
            clearCart,
            removeItem,
            getTotal
        }}>
            { children }
        </CartContext.Provider>
    )
};

export default CartContext;