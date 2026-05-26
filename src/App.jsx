import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProductDetail from "./pages/ProductDetail";
import BundlingDetail from "./pages/BundlingDetail";

import Checkout from "./pages/Checkout";
import BookingStatus from "./pages/BookingStatus";

import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* USER DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* PRODUCT DETAIL */}
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

        {/* BUNDLING DETAIL */}
        <Route
          path="/bundling/:id"
          element={<BundlingDetail />}
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* BOOKING STATUS */}
        <Route
          path="/booking-status"
          element={<BookingStatus />}
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>
    </>
  );
}

export default App;