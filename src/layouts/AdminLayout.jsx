import { Outlet, useLocation, Link } from "react-router-dom";

function AdminLayout() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Booking", path: "/admin/booking" },
    { name: "Payment", path: "/admin/payment" },
    { name: "Stock", path: "/admin/stock" },
  ];

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r shadow-sm">
        
        {/* HEADER SIDEBAR */}
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-500">
            Management System
          </p>
        </div>

        {/* MENU */}
        <nav className="p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-xl transition ${
                isActive(item.path)
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;