function BookingTable({ bookings = [], onActionClick }) {
  const statusMap = {
    pending: "bg-yellow-500",
    approved: "bg-green-500",
    dibayar: "bg-green-500",
    rejected: "bg-red-500",
    dibatalkan: "bg-red-500",
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 overflow-x-auto">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        List Booking
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-4">Customer</th>
            <th className="text-left py-4">Produk</th>
            <th className="text-left py-4">Total</th>
            <th className="text-left py-4">Status</th>
            <th className="text-left py-4">Action</th>
          </tr>
        </thead>

        <tbody>

          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b">

              <td className="py-4">{booking.customer}</td>

              <td className="py-4">{booking.product}</td>

              <td className="py-4">
                Rp {(booking.total || 0).toLocaleString()}
              </td>

              <td className="py-4">
                <span
                  className={`px-4 py-2 rounded-full text-white text-sm ${
                    statusMap[booking.status] || "bg-gray-400"
                  }`}
                >
                  {booking.status}
                </span>
              </td>

              <td className="py-4">
                <div className="flex gap-3">

                  <button
                    onClick={() => onActionClick("approve", booking.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    ACC
                  </button>

                  <button
                    onClick={() => onActionClick("reject", booking.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Tolak
                  </button>

                </div>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BookingTable;