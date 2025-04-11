import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in. Please log in first.");
      navigate("/login");
      return;
    }
    const fetchAllBlogs = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/get/allblogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setblogs(res.data.blogs);
      
    };
    fetchAllBlogs();
  }, []);
  return (
    
    <div className="bg-blue-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">
          Latest Blog Posts
        </h1>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
              
                <img
                  src={`http://localhost:3000/${item.thumbnail}`}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 line-clamp-3">{item.description}</p>

           
                  <Link
                    to={`/blog/${item._id}`}
                    className="mt-5 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // If No Blogs Available
          <div className="flex justify-center items-center h-80">
            <h2 className="text-2xl text-gray-700">Please Add a Blog</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
