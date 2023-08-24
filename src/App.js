import React from "react";

import Navgation_01 from "./components/navigation/Navgation_01.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import SignUp from "./components/signup/SignUp.jsx";

import Slider from "./components/slider/Slider.jsx";
import Content from "./components/content/Content.jsx";
import Testing from "./components/Testing.jsx";
import SideMenu from "./components/sidemenu/SideMenu.jsx";
import Cart from "./components/cart/Cart.jsx";
import Category from "./components/category/Category.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home.js";
import { ListEBook } from "./components/List/ListEBook.js";
import { EBook } from "./components/List/EBook.jsx";
import { ListAudioBook } from "./components/List/ListAudioBook.jsx";
import { ListVideoBook } from "./components/List/ListVideoBook.js";
import { VideoBook } from "./components/List/VideoBook.jsx";
import { AudioBook } from "./components/List/AudioBook.jsx";
function App() {
  return (
    // <div>
    <>
      <Navgation_01 />


      <BrowserRouter>
        <Routes>

            <Route path = "/" element = {<Home/>}/>
            <Route path = "category" element = {<Category/>}/>
            <Route path = "signin" element = {<SignIn/>}/>
            <Route path = "content" element = {<Content/>}/>
            <Route path = "cart" element = {<Cart/>}/>
            <Route path = "signup" element = {<SignUp/>}/>


          {/* list */}
          <Route path="/listebook" element={<ListEBook />} />
          <Route path="/ebook/:id" element ={<EBook/>}/>
          <Route path='/listaudiobook' element={<ListAudioBook/>}/>
          <Route path='/audiobook/:id' element={<AudioBook/>}/>
          <Route path='/listvideobook' element={<ListVideoBook/>}/>
          <Route path='/videobook/:id' element={<VideoBook/>}/>
            
            

        </Routes>
        <Outlet/>
      </BrowserRouter>
      </>
    // </div>
  );
}

export default App;
