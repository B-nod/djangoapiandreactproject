import React, { createContext, useState, useEffect } from 'react';
import all_product from "../Components/Assets/all_product";
import Cartitems from '../Components/CartItems/Cartitems';

export const ShopContext = createContext(null);
//This creates a new context object named ShopContext with a default value of null. Contexts in React are used to pass data through the component tree without having to pass props down manually at every level.


// // let cart = {};: Initializes an empty object to represent the cart.
// for (let index = 0; index < all_product.length + 1; index++) { ... }: Loops through the indices up to the length of all_product plus one. This is assuming the indices of all_product are continuous.

// cart[index] = 0;: Sets the quantity of each product in the cart to 0
const getDefaultcart = () => {
    let cart = {};
    for (let index = 1; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

//const savedCart = localStorage.getItem('cartItems');: Retrieves the cart items from localStorage using the key 'cartItems'.
// if (savedCart) { return JSON.parse(savedCart); }: If there are saved cart items, they are parsed from JSON and returned.
// return getDefaultcart();: If no saved cart is found, the default cart is returned.

const getInitialCart = () => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        return JSON.parse(savedCart); // Return cart from localStorage
    }
    return getDefaultcart(); // Return default cart if localStorage is empty
};


//const ShopContextProvider = ({ children }) => { ... }: This is a functional component that will provide the context to its children.

// const [cartItem, setCartItem] = useState(getInitialCart());: Initializes state with the cart items retrieved from getInitialCart. cartItem holds the current cart state, and setCartItem is a function to update it.


const ShopContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(getInitialCart());  // Initialize from localStorage

//     useEffect(() => { ... }, [cartItem]);: This hook runs the effect whenever cartItem changes.
// localStorage.setItem('cartItems', JSON.stringify(cartItem));: Updates localStorage with the latest cart state.


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
    }, [cartItem]);


    // const addTocart = (itemId) => { ... }: A function to add an item to the cart. It increments the quantity of the item identified by itemId.

    // setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));: Updates the cart state by spreading the previous cart items and incrementing the quantity of the specified item.
    // 1:0 suruma 1 vanne index yaniki item id ma 0 which is quantity thyo vane aba ...prev le chai previous cart items lai spread garea specified itemId yaniki index ma prev+1 garxa so 1 index ma 1 hunx as 1:1

    const addTocart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const Removefromcart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) })); // Prevent negative values
    };

    //setCartItem((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));: Updates the cart state by spreading the previous cart items and decrementing the quantity of the specified item. The Math.max function ensures the quantity does not go below zero.


    const getTotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartItem) { 
            //for (const item in cartItem) { ... } iterates through each key in the cartItem object. Each key (item) is a product ID, and the corresponding value is the quantity of that product in the cart. so cartItem[item] vaneko quantity
            if (cartItem[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                // yo iteminfo le chai all_product ma vako ra cartitem ma vayeko item(key) equals vako product dinxa
                totalamount += iteminfo.new_price * cartItem[item];
            }
        }
        return totalamount; // Move the return statement outside of the loop
    };
    
    // to get total cart items

    const totalcartitem = () => {
        let totalitem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalitem += cartItem[item]; // Add the quantity of each item
            }
        }
        return totalitem;
    };
    

    const contextValue = {getTotalcartamount, totalcartitem, all_product, cartItem, setCartItem, addTocart, Removefromcart };

    //const contextValue = { all_product, cartItem, setCartItem, addTocart, Removefromcart };: This object holds the values that will be provided to components consuming the context. It includes the list of products, the current cart state, and functions to manipulate the cart.

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );

    //</ShopContext.Provider>);: This renders the ShopContext.Provider component with contextValue as its value. children refers to any nested components that will have access to this context.
};

export default ShopContextProvider;
