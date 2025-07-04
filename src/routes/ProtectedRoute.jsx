import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

export default function ProtectedRoute() {
  const isAuthenticated = isLoggedIn();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
