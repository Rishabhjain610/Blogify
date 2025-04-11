
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addblog = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    category: "",
    description: "",
    thumbnail: "",
  });
  const [file, setFile] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formdata = new FormData();
    formdata.append("title", input.title);
    formdata.append("category", input.category);
    formdata.append("description", input.description);
    formdata.append("thumbnail", file);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/add/newblog",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in. Please log in first.");
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/get/categories",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched Categories:", res.data); 
        setCategories(res.data.categories); 
      } catch (error) {
        console.error(
          "Error fetching categories:",
          error.response?.data?.message || error.message
        );
      } 
     
    };
    fetchAllCategories();
  }, [navigate]);

 

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Add New Blog
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input.title}
              placeholder="Enter blog title"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <select
              name="category"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input.category}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((item) => (
               
                <option key={item._id} value={item._id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input.description}
              placeholder="Write your blog description here..."
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
