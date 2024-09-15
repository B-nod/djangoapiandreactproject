import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const Cartitems = () => {

    // for size clikcking in cart item page

   
    

        //When you click on an option (e.g., "SM"), it updates the selectedSize state.
// The button then shows the updated size.
// The dropdown disappears on hover out, but the selected size stays updated.



        // shoopcontext bata yo sbai values haru access garna ko lagi usecontext hamile use gareko ho
        const { getTotalcartamount ,all_product, cartItem, setCartItem, addTocart, Removefromcart } = useContext(ShopContext);

        // Load cart items from localStorage when component mounts
        useEffect(() => {
            // This particular one that is useeffect  loads cart items from localStorage when the page is first loaded.
            const storedCart = JSON.parse(localStorage.getItem('cartItems'));
            //This line retrieves the cart items stored in the browser's localStorage (if there are any), and converts them from a string back to a JavaScript object using JSON.parse.
            if (storedCart) {
                setCartItem(storedCart);  // Now you can use setCartItem
            }

            // If there is a stored cart, it updates the current cart with setCartItem
        }, [setCartItem]);

        //[setCartItem]); ensures that the effect is only run when the setCartItem function is initialized or changed, 



        //Another useEffect that runs every time cartItem changes (like when you add or remove items from the cart).
        useEffect(() => {
            localStorage.setItem('cartItems', JSON.stringify(cartItem));

            //This saves the updated cartItem to localStorage converting it to a string using JSON.stringify.
        }, [cartItem]);

        ////[CartItem]); ensures that the effect is only run when the CartItem  is initialized or changed,

        // this function component is for changing size of products in cart items
        const SizeDropdown = () => {
            const [selectedSize, setSelectedSize] = useState('XL'); // Default size
        
            const handleSizeClick = (size) => {
              setSelectedSize(size);
            };
        
            return (
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                >
                  {selectedSize}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 fill-gray-500 inline ml-2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
        
                <ul className="hidden group-hover:block absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]">
                  {['SM', 'MD', 'LG', 'XL', 'XXL'].map((size) => (
                    <li
                      key={size}
                      className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer"
                      onClick={() => handleSizeClick(size)} // Handle the click event
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            );
          };

        

        return (
            <>
                <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
                            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                            <hr className="border-gray-300 mt-4 mb-8" />

                            <div className="space-y-4">
                                {all_product.map((e) => {

                                    if (cartItem[e.id] > 0) {
                                        //This checks each product in all_product and only renders it if the product exists in cartItem (i.e., if the quantity of that product in the cart is greater than 0).

                                        //If the current product (e) exists in the cart (i.e., its quantity is more than 0), the product will be displayed.
                                        return (
                                            <div key={e.id} className="grid grid-cols-3 items-center gap-4">
                                                {/* // Without the key, React would have a harder time knowing which items in the list have changed when re-rendering.  */}
                                                <div className="col-span-2 flex items-center gap-4">
                                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                                        <img src={e.image} className="w-full h-full object-contain" alt={e.name} />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-base font-bold text-gray-800">{e.name}</h3>
                                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5" onClick={() => Removefromcart(e.id)}>Remove</h6>

                                                        <div className="flex gap-4 mt-4">

                                                            <SizeDropdown/>
                                                            <div>
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                                                                // Added onClick to addTocart
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124" onClick={() => Removefromcart(e.id)}>
                                                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                                                                    </svg>

                                                                    <span className="mx-2.5">{cartItem[e.id]}</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42" onClick={() => addTocart(e.id)}>
                                                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ml-auto">
                                                    <h4 className="text-base font-bold text-gray-800">{e.new_price * cartItem[e.id]}</h4>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
                            <div className="flex border border-blue-600 overflow-hidden rounded-md">
                                <input type="email" placeholder="Promo code" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                                <button type="button" className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
                                    Apply
                                </button>
                            </div>

                            <ul className="text-gray-800 mt-8 space-y-4">
                                <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">$0.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">$2.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">$4.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">${getTotalcartamount()}</span></li>
                            </ul>

                            <div className="mt-8 space-y-2">
                               <Link to='/checkout'> <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Checkout</button></Link>
                                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    export default Cartitems;
