import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Addblog from './pages/Addblog.jsx';
import Addcategory from './pages/Addcategory.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import ProtectedRoutes from '../services/ProtectedRoutes.jsx';
const App = () => {
  return (
    <div>
          <Navbar/> 
        <Routes>
          
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         





         {/*protected routes are here */}
          <Route path="/" element={<ProtectedRoutes/>}>






          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<Addblog/>}/>
          <Route path="/add-category" element={<Addcategory/>}/>
          <Route path="/blog/:id" element={<SingleBlog/>}/>


          
          </Route>
          
         
          
        </Routes>
        <Footer/>
     
    </div>
  );
};

export default App;