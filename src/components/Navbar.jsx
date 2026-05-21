import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Sewakaran
      </h1>

      <div className="flex gap-6 items-center">
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
            className="bg-white text-blue-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;