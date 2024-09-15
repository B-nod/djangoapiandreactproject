import React, { useEffect, useState, useContext } from 'react';
import logo from '../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status suruma initially log in hudaina so false
  const [menu, setMenu] = useState("shop");
  const { totalcartitem } = useContext(ShopContext);
  const navigate = useNavigate();

 

  //useEffect with []: The effect runs once when the component is rendered and The effect does not run again unless the component is unmounted and remounted.

  // Listen for login status change
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    // Listen for login status changes via the custom event
    const handleLoginStatusChange = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      //This checks if the retrieved value is exactly equal to the string 'true'. if true xa vane that is loggedin
      // If the localStorage value for 'isLoggedIn' is 'true', then loggedIn will be true, and setIsLoggedIn(true) will be called, updating the state to true.
      setIsLoggedIn(loggedIn);
    };

    window.addEventListener('loginStatusChanged', handleLoginStatusChange);

    return () => {
      window.removeEventListener('loginStatusChanged', handleLoginStatusChange);
    };
  }, []);



    //If loginStatus === 'true'then setIsLoggedIn(true) is called, indicating the user is logged in.
// If loginStatus is anything else (e.g., 'false', null, etc.), setIsLoggedIn(false) is called, meaning the user is not logged in.

    // 'loginStatusChanged' when this event is triggered (dispatched), the setIsLoggedIn function will be executed.

    //   // window.removeEventListener('loginStatusChanged', setIslogin);: Removes the event listener when the component is destroyed.


    const handleLogout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      navigate('/login'); // Redirect to login page after logout
    };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Our Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ShoppingHub</span>
            </Link>
            <div className="flex items-center lg:order-2">
              {/* Cart items */}
              <Link to='/cart'>
                <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg">
                  <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                  </svg>
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900">{totalcartitem()}</div>
                </button>
              </Link>

              {/* User profile and logout */}
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="text-gray-800 dark:text-white hover:bg-lime-400 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue-900 focus:outline-blue-700 dark:focus:ring-blue-800">My Profile</Link>
                  <button onClick={handleLogout} className="text-gray-800 dark:text-white hover:bg-lime-400 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue-900 focus:outline-blue-700 dark:focus:ring-blue-800">Logout</button>
                </>
              ) : (
                <Link to='/login' className="text-gray-800 dark:text-white hover:bg-lime-400 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue-900 focus:outline-blue-700 dark:focus:ring-blue-800">Log in</Link>
              )}

              {/* Mobile menu button */}
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li onClick={() => setMenu("shop")}>
                  <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Shop</Link>
                  {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Men")}>
                  <Link to="/mens" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Men</Link>
                  {menu === "Men" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Women")}>
                  <Link to="/womens" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Women</Link>
                  {menu === "Women" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Kids")}>
                  <Link to="/kids" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Kids</Link>
                  {menu === "Kids" ? <hr /> : null}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  

    </>
  );
};

export default Navbar;
