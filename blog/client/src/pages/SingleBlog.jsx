import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editData, setEditData] = useState({ title: "", description: "" }); // State for edit form
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleBlog = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in. Please log in first.");
        navigate("/login");
        return;
      }
      if (!token) {
        alert("You are not logged in. Please log in first.");
        navigate("/login");
        return;
      }
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/get/singleblog/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBlog(res.data.blog);
        setEditData({ title: res.data.blog.title, description: res.data.blog.description }); 
      } catch (error) {
        console.error("Error while fetching single blog: ", error.message);
      }
    };
    fetchSingleBlog();
  }, [id, navigate]);


  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `http://localhost:3000/api/v1/get/singleblog/${id}`,
        editData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBlog(res.data.data); 
      setIsEditing(false); // Exit edit mode
      alert("Blog updated successfully!");
    } catch (error) {
      console.error("Error while updating blog: ", error.message);
      alert("Failed to update the blog.");
    }
  };

 
  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:3000/api/v1/get/singleblog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Blog deleted successfully!");
      navigate("/"); 
    } catch (error) {
      console.error("Error while deleting blog: ", error.message);
      alert("Failed to delete the blog.");
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <img
          src={`http://localhost:3000/${blog.thumbnail}`} // Replace with actual image URL
          alt="Blog Thumbnail"
          className="w-full h-auto rounded-lg"
        />

        <div className="mt-6">
          {isEditing ? (
            // Edit Form
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"
                placeholder="Edit Title"
                required
              />
              <textarea
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"
                placeholder="Edit Description"
                rows="5"
                required
              ></textarea>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)} // Cancel edit mode
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            // Display Blog Details
            <>
              <h1 className="text-3xl font-bold text-blue-700">{blog.title}</h1>
              <p className="mt-4 text-gray-700 text-lg">{blog.description}</p>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsEditing(true)} // Enable edit mode
                  className="px-4 py-2 bg-white text-blue-600 border-2 rounded  transition"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete} 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </>
          )}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;