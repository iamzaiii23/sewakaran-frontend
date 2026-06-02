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
import AdminBooking from "./pages/AdminBooking";
import AdminPembayaran from "./pages/AdminPembayaran";
import AdminStok from "./pages/AdminStok";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* PUBLIC */}
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

      {/* USER */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
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
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/booking-status"
        element={
          <ProtectedRoute>
            <BookingStatus />
          </ProtectedRoute>
        }
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/booking"
        element={<AdminBooking />}
      />

      <Route
        path="/admin/pembayaran"
        element={<AdminPembayaran />}
      />

      <Route
        path="/admin/stok"
        element={<AdminStok />}
      />

    </Routes>
  );
}

export default App;