import { createContext, useEffect, useState } from "react";
import { getArray, setArray } from "../services/storage/storage";

const CartContext = createContext();
const KEY_CART = "cart";

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(getArray(KEY_CART));

    useEffect(() => {
        setArray(KEY_CART, cart);
    }, [cart]);

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd]);
    };

    const getQuantity = () => {
        let count = 0;
        cart.forEach((product) => {
            count += product.quantity;
        });

        return count;
    };

    const getTotal = () => {
        let sum = 0;
        cart.forEach((product) => {
            sum += product.price * product.quantity;
        });

        return sum;
    };

    const isEmpty = () => {
        return cart.length === 0;
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        const products = cart.filter((product) => product.id !== id);
        setCart(products);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                getQuantity,
                isInCart,
                isEmpty,
                clearCart,
                removeItem,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
