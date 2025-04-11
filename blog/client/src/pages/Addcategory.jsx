import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Addcategory = () => {
  const navigate=useNavigate();

  const [input,setinput]=useState({
    title:""
  })
  const handleSubmit=async(e)=>{
   e.preventDefault();
   const token = localStorage.getItem("token");
   if (!token) {
    alert("You are not logged in. Please log in first.");
    navigate("/login");
    return;
  }

   try {
    const res=await axios.post("http://localhost:3000/api/v1/add/category",input,{
      headers:{
       Authorization:`Bearer ${token}`// yeh protected routes pe daalna padega taki token pass ho 
      }
    })
    alert(res.data.message)//backend se message ayega
    navigate("/")
   } catch (error) {
    alert(error.response.data.message)
   }
  }
  return (
    <div className="bg-blue-100 h-[80vh] flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Add New Category
        </h2>

        
        <form className="space-y-4" onSubmit={handleSubmit}>
         
          <div>
            <label className="block text-gray-700 font-medium">Category Title</label>
            <input
              type="text"
              name="title"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input.title}
              onChange={(e)=>setinput({...input,[e.target.name]:e.target.value})}
              placeholder="Enter category title"
              required
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcategory;
