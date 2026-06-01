import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className="bg-[#B2B2B2] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">

        {/* HEADER */}
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-xl md:text-2xl font-bold text-white"
          >
            Sewakaran
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="text-white hover:text-gray-200 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition"
            >
              About
            </Link>

            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hover:text-gray-200 transition"
                >
                  Dashboard
                </Link>

                <Link
                  to="/booking-status"
                  className="text-white hover:text-gray-200 transition"
                >
                  Booking
                </Link>
              </>
            )}

            {!user ? (
              <Link
                to="/login"
                className="bg-white text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={logout}
                className="bg-white text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
              >
                Logout
              </button>
            )}

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-4 shadow-lg">

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                About
              </Link>

              {user && (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 font-medium"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/booking-status"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 font-medium"
                  >
                    Booking
                  </Link>
                </>
              )}

              {!user ? (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#B2B2B2] text-white text-center py-2 rounded-xl"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="bg-[#B2B2B2] text-white py-2 rounded-xl"
                >
                  Logout
                </button>
              )}

            </div>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;