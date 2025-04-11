import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:3000/api/v1/user/login",input)
      // alert(res.data.message)
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("username",res.data.username)
      navigate("/")
      window.location.reload();
      
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div className="flex justify-center items-center h-[80vh] bg-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        
     
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Login to Blogify
        </h2>

       
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              name="email"
              value={input.email}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
              placeholder="Enter your email"
              required 
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" 
              name="password"
              value={input.password}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
              placeholder="Enter your password"
              required 
            />
          </div>

         
          <button 
            type="submit" 
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Login
          </button>
        </form>

        
        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?  
          <a href="/register" className="text-blue-600 font-semibold ml-1 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
