import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
      
        <div>
          <h2 className="text-2xl font-bold">Blogify</h2>
          <p className="text-sm opacity-80 mt-2">
            Your go-to platform for insightful blogs on various topics. Stay informed and inspired!
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300 transition duration-300">Home</a></li>
            <li><a href="/add-blog" className="hover:text-gray-300 transition duration-300">Add Blog</a></li>
            <li><a href="/add-category" className="hover:text-gray-300 transition duration-300">Categories</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition duration-300">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm opacity-80">Email: support@blogify.com</p>
          <p className="text-sm opacity-80">Phone: +91 98765 43210</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">Instagram</a>
          </div>
        </div>

      </div>


      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
        <form className="flex flex-col md:flex-row justify-center items-center gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-2 rounded-md text-black w-64"
          />
          <button 
            type="submit" 
            className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      
      <div className="mt-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Blogify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
