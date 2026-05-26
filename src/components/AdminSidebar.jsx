function AdminSidebar() {
  return (
    <div className="bg-blue-700 text-white w-72 min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="space-y-4">

        <button className="w-full text-left bg-blue-600 px-4 py-3 rounded-xl">
          Dashboard
        </button>

        <button className="w-full text-left hover:bg-blue-600 px-4 py-3 rounded-xl transition">
          Booking
        </button>

        <button className="w-full text-left hover:bg-blue-600 px-4 py-3 rounded-xl transition">
          Pembayaran
        </button>

        <button className="w-full text-left hover:bg-blue-600 px-4 py-3 rounded-xl transition">
          Stok Barang
        </button>

      </div>

    </div>
  );
}

export default AdminSidebar;