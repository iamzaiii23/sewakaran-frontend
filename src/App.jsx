import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProductDetail from "./pages/ProductDetail";
import BundlingDetail from "./pages/BundlingDetail";

import Checkout from "./pages/Checkout";
import BookingStatus from "./pages/BookingStatus";

import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>

      {/* USER */}
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />

      <Route
        path="/bundling/:id"
        element={<BundlingDetail />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

      <Route
        path="/booking-status"
        element={<BookingStatus />}
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

    </Routes>
  );
}

export default App;