function BookingStatus() {

  const bookings = [
    {
      id: 1,
      product: "Camera Canon EOS",
      date: "12 Mei 2026",
      total: 300000,
      status: "Pending",
    },

    {
      id: 2,
      product: "Drone DJI",
      date: "10 Mei 2026",
      total: 500000,
      status: "Disetujui",
    },

    {
      id: 3,
      product: "Laptop Gaming",
      date: "5 Mei 2026",
      total: 250000,
      status: "Ditolak",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADING */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Status Booking
          </h1>

          <p className="text-gray-500 mt-2">
            Lihat status dan riwayat booking kamu
          </p>

        </div>

        {/* BOOKING LIST */}
        <div className="space-y-6">

          {bookings.map((booking) => (

            <div
              key={booking.id}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >

              {/* LEFT */}
              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  {booking.product}
                </h2>

                <p className="text-gray-500 mt-2">
                  Tanggal Booking: {booking.date}
                </p>

                <p className="text-blue-600 font-bold text-xl mt-4">
                  Rp {booking.total.toLocaleString()}
                </p>

              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-start md:items-end gap-4">

                {/* STATUS */}
                <span
                  className={`px-5 py-2 rounded-full text-white font-semibold ${
                    booking.status === "Pending"
                      ? "bg-yellow-500"
                      : booking.status === "Disetujui"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {booking.status}
                </span>

                {/* DETAIL */}
                <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition">

                  Lihat Detail

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default BookingStatus;