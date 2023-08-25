

import Navgation_01 from "./components/navigation/Navgation_01.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import SignUp from "./components/signup/SignUp.jsx";


import Content from "./components/content/Content.jsx";

import Cart from "./components/cart/Cart.jsx";
import Category from "./components/category/Category.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home.js";
import AudioList from "./components/List/AudioList/AudioList.jsx";

import VideoList from "./components/List/VideoList/VideoList.jsx";
import EBookList from "./components/List/EbookList/EBookList.jsx";


function App() {

  return (
 
    <>
    <Navgation_01 /> 

      <BrowserRouter>
        <Routes>

            <Route path = "/audiolist" element = {<AudioList/>}/>
            <Route path = "/ebooklist" element = {<EBookList/>}/>
           
            <Route path = "/videolist" element = {<VideoList/>}/>
        
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
