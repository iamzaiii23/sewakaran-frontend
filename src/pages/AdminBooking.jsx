import { useState } from "react";
import { toast } from "react-toastify";

function AdminBooking() {
  const [bookings, setBookings] = useState([
    { id: 1, user: "John Doe", status: "pending", date: "2026-06-01" },
    { id: 2, user: "Jane Smith", status: "approved", date: "2026-06-02" },
    { id: 3, user: "Budi Santoso", status: "rejected", date: "2026-06-03" },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "approved":
        return "text-green-700 bg-green-100";
      case "rejected":
        return "text-red-700 bg-red-100";
      default:
        return "text-yellow-700 bg-yellow-100";
    }
  };

  const handleAction = (action, id) => {
    setBookings((prev) =>
      prev
        .map((b) => {
          if (b.id !== id) return b;

          if (action === "approve") {
            return { ...b, status: "approved" };
          }

          if (action === "reject") {
            return { ...b, status: "rejected" };
          }

          return b;
        })
        .filter((b) => !(action === "delete" && b.id === id))
    );

    toast.success(`Booking #${id} ${action} berhasil`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Manajemen Booking
        </h1>
        <p className="text-gray-500 mt-2">
          Kelola semua data booking user
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">User</th>
              <th className="p-4">Tanggal</th>
              <th className="p-4">Status</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">#{b.id}</td>

                <td className="p-4">{b.user}</td>

                <td className="p-4 text-gray-500">{b.date}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      b.status
                    )}`}
                  >
                    {b.status}
                  </span>
                </td>

                <td className="p-4 space-x-2">
                  <button
                    onClick={() => handleAction("approve", b.id)}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleAction("reject", b.id)}
                    className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => handleAction("delete", b.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  Tidak ada data booking
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBooking;