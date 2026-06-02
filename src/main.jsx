import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { BookingProvider } from "./context/BookingContext";

import { ToastContainer } from "react-toastify";

function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        <BookingProvider>{children}</BookingProvider>
      </CartProvider>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);