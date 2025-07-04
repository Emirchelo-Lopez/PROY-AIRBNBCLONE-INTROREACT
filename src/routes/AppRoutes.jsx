import { Routes, Route } from "react-router-dom";

// Page Imports
import Accommodations from "../pages/Accommodations";
import Details from "../pages/Details";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

// Route Guard Import
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/accommodations/:id" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
