function BookingTable() {

  const bookings = [
    {
      id: 1,
      customer: "Anwar",
      product: "Camera Canon",
      total: 300000,
      status: "Pending",
    },

    {
      id: 2,
      customer: "Budi",
      product: "Drone DJI",
      total: 500000,
      status: "Disetujui",
    },

    {
      id: 3,
      customer: "Sinta",
      product: "Laptop Gaming",
      total: 250000,
      status: "Ditolak",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 overflow-x-auto">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        List Booking
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-4">
              Customer
            </th>

            <th className="text-left py-4">
              Produk
            </th>

            <th className="text-left py-4">
              Total
            </th>

            <th className="text-left py-4">
              Status
            </th>

            <th className="text-left py-4">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr
              key={booking.id}
              className="border-b"
            >

              <td className="py-4">
                {booking.customer}
              </td>

              <td className="py-4">
                {booking.product}
              </td>

              <td className="py-4">
                Rp {booking.total.toLocaleString()}
              </td>

              <td className="py-4">

                <span
                  className={`px-4 py-2 rounded-full text-white text-sm ${
                    booking.status === "Pending"
                      ? "bg-yellow-500"
                      : booking.status === "Disetujui"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {booking.status}
                </span>

              </td>

              <td className="py-4">

                <div className="flex gap-3">

                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">

                    ACC

                  </button>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">

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