import { Routes, Route } from "react-router-dom";

// Page Imports
import Accommodations from "../pages/Accommodations";
import Details from "../pages/Details";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

// Route Guard Import
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* 1. Create a new Route that uses ProtectedRoute as its element. */}
      {/* This will act as a parent wrapper for all protected routes. */}

      {/* 2. Move the routes for '/alojamientos' and '/alojamientos/:id' */}
      {/* to be nested *inside* this new ProtectedRoute wrapper. */}
      {/* The path on the main accommodations route should now be 'index' */}
      {/* or you can leave it as '/alojamientos' */}

      <Route element={<ProtectedRoute />}>
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/accommodations/:id" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
