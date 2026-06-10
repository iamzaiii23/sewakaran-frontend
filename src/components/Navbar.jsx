import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const userData =
      localStorage.getItem(
        "user_data"
      );

    if (userData) {
      setUser(
        JSON.parse(
          userData
        )
      );
    }

  }, []);

  const handleLogout =
    () => {

      localStorage.removeItem(
        "user_data"
      );

      localStorage.removeItem(
        "user_token"
      );

      localStorage.removeItem(
        "admin_data"
      );

      localStorage.removeItem(
        "admin_token"
      );

      window.location.href =
        "/";
    };

  useEffect(() => {
    document.body.style.overflow =
      menuOpen
        ? "hidden"
        : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [menuOpen]);

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">

        {/* HEADER */}
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() =>
              setMenuOpen(
                false
              )
            }
            className="text-xl md:text-2xl font-bold text-white"
          >
            Sewakaran
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="text-white hover:text-gray-300 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition"
            >
              About
            </Link>

            {/* USER MENU */}
            {user && (
              <>
                <Link
                  to="/booking-status"
                  className="text-white hover:text-gray-300 transition"
                >
                  Booking
                </Link>

                <span className="text-gray-300">
                  Hi,{" "}
                  {user.username ||
                    user.name}
                </span>
              </>
            )}

            {!user ? (
              <Link
                to="/login"
                className="bg-white text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={
                  handleLogout
                }
                className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
            className="md:hidden text-white text-3xl"
          >
            {menuOpen
              ? "✕"
              : "☰"}
          </button>

        </div>

        {/* OVERLAY */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 md:hidden"
            onClick={() =>
              setMenuOpen(
                false
              )
            }
          />
        )}

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 relative z-50 ${
            menuOpen
              ? "max-h-96 mt-4"
              : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-4 shadow-lg">

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                onClick={() =>
                  setMenuOpen(
                    false
                  )
                }
                className="text-gray-700 font-medium"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() =>
                  setMenuOpen(
                    false
                  )
                }
                className="text-gray-700 font-medium"
              >
                About
              </Link>

              {user && (
                <>
                  <Link
                    to="/booking-status"
                    onClick={() =>
                      setMenuOpen(
                        false
                      )
                    }
                    className="text-gray-700 font-medium"
                  >
                    Booking
                  </Link>

                  <p className="text-gray-500">
                    Hi,{" "}
                    {user.username ||
                      user.name}
                  </p>
                </>
              )}

              {!user ? (
                <Link
                  to="/login"
                  onClick={() =>
                    setMenuOpen(
                      false
                    )
                  }
                  className="bg-gray-900 text-white text-center py-2 rounded-xl"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(
                      false
                    );
                  }}
                  className="bg-red-500 text-white py-2 rounded-xl"
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