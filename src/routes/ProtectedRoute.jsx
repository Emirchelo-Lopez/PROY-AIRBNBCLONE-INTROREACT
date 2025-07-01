import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

const ProtectedRoute = () => {
  // 1. Check if the user is logged in using the function from auth.js
  const isAuthenticated = isLoggedIn();
  // 2. If the user is NOT authenticated, return the Navigate component
  //    to redirect them to the "/login" page.
  if (!isAuthenticated) {
    // Your redirect logic here
    return <Navigate to="/login" replace />;
  }

  // 3. If the user IS authenticated, return the Outlet component.
  //    The Outlet component will render the actual page component
  //    that this route is protecting (e.g., Accomodations).
  return <Outlet />; //...
};

export default ProtectedRoute;
