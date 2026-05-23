import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-6 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">

      <h1 className="text-2xl font-bold">
        Sewakaran
      </h1>

      <div className="flex gap-4 md:gap-6 items-center text-sm md:text-base">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        {user && (
          <Link to="/dashboard">
            Dashboard
          </Link>
        )}

        {!user ? (
          <Link to="/login">
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            className="bg-white text-blue-600 px-3 py-2 rounded-lg"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;