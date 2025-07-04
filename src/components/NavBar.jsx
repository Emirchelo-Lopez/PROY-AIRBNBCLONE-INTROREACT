import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";

export default function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, [location]);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link className="flex items-center text-red-500 font-bold text-xl" to="/">
        <img
          src="https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg"
          alt="Airbnb Logo"
          className="h-8 w-auto mr-2"
        />
        Airbnb Clone
      </Link>

      <div>
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
