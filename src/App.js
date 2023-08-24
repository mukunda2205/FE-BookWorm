import React from "react";

import Navgation_01 from "./components/navigation/Navgation_01.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import SignUp from "./components/signup/SignUp.jsx";


import Content from "./components/content/Content.jsx";

import Cart from "./components/cart/Cart.jsx";
import Category from "./components/category/Category.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home.js";
import AudioList from "./components/List/AudioList/AudioList.jsx";

function App() {
  return (
    // <div>
    <>
      <Navgation_01 />


      <BrowserRouter>
        <Routes>

            <Route path = "/" element = {<AudioList/>}/>
            <Route path = "/home" element = {<Home/>}/>
            <Route path = "category" element = {<Category/>}/>
            <Route path = "signin" element = {<SignIn/>}/>
            <Route path = "content" element = {<Content/>}/>
            <Route path = "cart" element = {<Cart/>}/>
            <Route path = "signup" element = {<SignUp/>}/>


          {/* list */}
   
            
            

        </Routes>
        <Outlet/>
      </BrowserRouter>
      </>
    // </div>
  );
}

export default App;
