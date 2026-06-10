import { Routes, Route } from "react-router-dom";

/* PUBLIC */
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* USER */
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import BundlingDetail from "./pages/BundlingDetail";
import Checkout from "./pages/Checkout";
import BookingStatus from "./pages/BookingStatus";

import ProtectedRoute from "./routes/ProtectedRoute";

/* ADMIN LAYOUT */
import AdminLayout from "./layouts/AdminLayout";

/* ADMIN PAGES */
import AdminDashboard from "./pages/AdminDashboard";
import AdminBooking from "./pages/AdminBooking";
import AdminPembayaran from "./pages/AdminPembayaran";
import AdminStok from "./pages/AdminStok";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= USER PROTECTED ================= */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
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

      {/* ================= PRODUCT ================= */}
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/bundling/:id" element={<BundlingDetail />} />

      {/* ================= ADMIN ================= */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="booking" element={<AdminBooking />} />
        <Route path="payment" element={<AdminPembayaran />} />
        <Route path="stock" element={<AdminStok />} />
      </Route>

      {/* ================= 404 ================= */}
      <Route
        path="*"
        element={
          <div className="p-10 text-center text-2xl">
            404 Not Found
          </div>
        }
      />

    </Routes>
  );
}

export default App;