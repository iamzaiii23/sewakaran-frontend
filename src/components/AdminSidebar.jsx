import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const menu = [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/booking", label: "Booking" },
    { to: "/admin/pembayaran", label: "Pembayaran" },
    { to: "/admin/stok", label: "Stok Barang" },
  ];

  return (
    <div className="bg-blue-700 text-white w-72 min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="space-y-4">

        {menu.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block w-full text-left px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-500"
                  : "hover:bg-blue-600"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default AdminSidebar;