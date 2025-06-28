import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accommodations from "../pages/Accommodations";
import Details from "../pages/Details";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/accommodations/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
