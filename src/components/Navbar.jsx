import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#B2B2B2] shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold text-white"
          >
            Sewakaran
          </Link>

          {/* MENU */}
          <div className="flex items-center gap-6">

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

        </div>

      </div>

    </nav>
  );
}

export default Navbar;