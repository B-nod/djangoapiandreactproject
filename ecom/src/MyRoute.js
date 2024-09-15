import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Shopcategory from './Pages/Shopcategory';
import Layouts from './Components/Layout/Layouts';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import MyProfile from './Pages/MyProfile';
import Checkout from './Pages/Checkout';
import Card from './Components/Card/Card';


const MyRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Layouts/>} >
        <Route index element={<Shop/>} />
        <Route path="/mens" element={<Shopcategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<Shopcategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<Shopcategory banner={kid_banner} category="kid" />} />
        {/* <Route path="/products/:productId" element={<Products />} /> */}
        <Route path="/products/:id" element={<Card />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<MyProfile/>} />
        <Route path="/checkout" element={<Checkout/>} />

        </Route>
    </Routes>
  );
}

export default MyRoute;
