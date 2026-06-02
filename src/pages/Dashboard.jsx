function Dashboard() {
  const stats = {
    totalBooking: 120,
    pending: 15,
    approved: 90,
    rejected: 15,
    revenue: 12500000,
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-3xl shadow">
          <p className="text-gray-500">Total Booking</p>
          <h2 className="text-3xl font-bold text-blue-600">
            {stats.totalBooking}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-500">
            {stats.pending}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <p className="text-gray-500">Approved</p>
          <h2 className="text-3xl font-bold text-green-500">
            {stats.approved}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <p className="text-gray-500">Rejected</p>
          <h2 className="text-3xl font-bold text-red-500">
            {stats.rejected}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow md:col-span-2">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-3xl font-bold text-purple-600">
            Rp {stats.revenue.toLocaleString("id-ID")}
          </h2>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;