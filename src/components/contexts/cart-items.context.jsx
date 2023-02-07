import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //compare productToAdd (clicked product) to what's in the cart,
    //if there is an id match, it exists already in cart
    let isCurrentItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //it exists, so update the quantity number in cart
    if (isCurrentItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //product doesn't exist in cart, so return new array with existing items (if any),
    //and append new item, also adding a quantity of 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find cart item to remove
    let currentItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    //check if quantity is equal to 1.  If so, remove item from cart
    //(filter out that item)
    if (currentItem.quantity === 1) {
        return cartItems.filter(
            (cartitem) => cartitem.id !== cartItemToRemove.id
        );
    }
    //return back cart items with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartitem) => cartitem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newPriceTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newPriceTotal);
    }, [cartItems]);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(
            addCartItem(cartItems, productToAdd, addItemToCart, cartItems)
        );
    };

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const clearItemFromCart = (CartItemToExtinguish) => {
        setCartItems(clearCartItem(cartItems, CartItemToExtinguish));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
