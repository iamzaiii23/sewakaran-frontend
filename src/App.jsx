import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
import AdminProtectedRoute from "./routes/AdminProtectedRoute";

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

      {/* REGISTER */}
      <Route
        path="/register"
        element={<Register />}
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

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/booking"
        element={
          <AdminProtectedRoute>
            <AdminBooking />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/pembayaran"
        element={
          <AdminProtectedRoute>
            <AdminPembayaran />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/stok"
        element={
          <AdminProtectedRoute>
            <AdminStok />
          </AdminProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;