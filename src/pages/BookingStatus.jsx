import { useBooking } from "../context/BookingContext";

function BookingStatus() {
  const { bookings } = useBooking();

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "Disetujui":
        return "bg-green-500";
      case "Ditolak":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

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

        {/* EMPTY STATE */}
        {bookings.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            Belum ada booking
          </div>
        ) : (

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

                  <span
                    className={`px-5 py-2 rounded-full text-white font-semibold ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>

                  <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition">

                    Lihat Detail

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default BookingStatus;