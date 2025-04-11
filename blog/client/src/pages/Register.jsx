import React ,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:3000/api/v1/user/register",input)
      alert(res.data.message)
      
      navigate("/login")
    } catch (error) {
      alert(error.response.data.message);
      
    }
  }
  return (
    
    
    <div className="flex justify-center items-center h-[80vh] bg-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        
      
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Sign Up for Blogify
        </h2>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" 
              name="username"
              value={input.username}
              onChange={(e) => setInput({ ...input, [e.target.name]:e.target.value })}//e.target.name mein name  refersto the name of input field ..input will destructure it and e.target.value will refer to the value of input field
              placeholder="Enter your full name"
              required 
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              name="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, [e.target.name]:e.target.value })}//e.target.name mein name refers to the name of input field ..input will destructure it and e.target.value will refer to the value of input field 
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
              onChange={(e) => setInput({ ...input, [e.target.name]:e.target.value })}//e.target.name mein name refers to the name of input field ..input will destructure it and e.target.value will refer to the value of input field 
              placeholder="Enter your password"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>

       
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?  
          <a href="/login" className="text-blue-600 font-semibold ml-1 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
