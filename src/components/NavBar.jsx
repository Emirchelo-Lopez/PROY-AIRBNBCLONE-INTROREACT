import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isLoggedIn, logout, getAuthenticatedUser } from "../utils/auth";

export default function NavBar() {
  // 1. Create a state variable 'isAuthenticated' to hold the login status.
  //    Initialize it based on the isLoggedIn() function.
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());

  const navigate = useNavigate();
  const location = useLocation();

  // This effect will run when the component mounts and whenever the URL changes.
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, [location]);

  // 2. Create a function called 'handleLogout'.
  //    This function should call the logout() utility,
  //    update the 'isAuthenticated' state to false,
  //    and navigate the user back to the home page ('/').
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <Link className="text-red-500 font-bold text-xl" to="/">
          Airbnb Clone
        </Link>
      </div>
      <div>
        {/* 3. Use a ternary operator to check the 'isAuthenticated' state. */}
        {/* If true, show the logged-in links. */}
        {/* If false, show the logged-out links. */}

        {/* Your conditional rendering logic here */}
        {isAuthenticated ? (
          <>
            <Link
              className="text-gray-700 hover:text-red-500 mx-2"
              to="/accommodations"
            >
              My Accommodations
            </Link>
            <Link
              className="text-gray-700 hover:text-red-500 mx-4"
              to="/profile"
            >
              Profile
            </Link>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link className="text-gray-700 hover:text-red-500 mx-2" to="/login">
              Log In
            </Link>
            <Link
              className="text-gray-700 hover:text-red-500 mx-2"
              to="/signup"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
