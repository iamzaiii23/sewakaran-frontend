import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import "react-calendar/dist/Calendar.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { BookingProvider } from "./context/BookingContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <AuthProvider>

      <CartProvider>

        <BookingProvider>

          <BrowserRouter>

            <App />

          </BrowserRouter>

        </BookingProvider>

      </CartProvider>

    </AuthProvider>

  </React.StrictMode>
);