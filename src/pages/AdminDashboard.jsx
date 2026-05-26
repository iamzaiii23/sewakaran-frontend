import AdminSidebar from "../components/AdminSidebar";
import BookingTable from "../components/BookingTable";

function AdminDashboard() {

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* CONTENT */}
      <div className="flex-1 p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard Admin
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor booking dan validasi pembayaran
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-6">

            <p className="text-gray-500">
              Total Booking
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-4">
              120
            </h2>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-6">

            <p className="text-gray-500">
              Pending Payment
            </p>

            <h2 className="text-4xl font-bold text-yellow-500 mt-4">
              15
            </h2>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-6">

            <p className="text-gray-500">
              Barang Tersedia
            </p>

            <h2 className="text-4xl font-bold text-green-500 mt-4">
              350
            </h2>

          </div>

        </div>

        {/* TABLE */}
        <BookingTable />

      </div>

    </div>
  );
}

export default AdminDashboard;