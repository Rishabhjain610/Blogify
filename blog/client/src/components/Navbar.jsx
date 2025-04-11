
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <div className="text-2xl font-bold text-white">
          <Link to="/">Blogify</Link>
        </div>

     
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-blog" className="hover:text-gray-200 transition duration-300">
              Add Blog
            </Link>
          </li>
          <li>
            <Link to="/add-category" className="hover:text-gray-200 transition duration-300">
              Add Category
            </Link>
          </li>


          {token ? (
            <>
              <li>
                <span className="text-gray-200">Welcome, {username}</span>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    window.location.reload(); // Refresh the page to reflect logout
                  }}
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;