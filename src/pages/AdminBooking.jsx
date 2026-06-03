import { useEffect, useState } from "react";
import axios from "axios";

function AdminBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/transaksi"
      );

      setBookings(response.data.data);
    } catch (error) {
      console.error(
        "Gagal mengambil data booking:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-yellow-500";

      case "dibayar":
      case "approved":
        return "bg-green-500";

      case "dibatalkan":
      case "rejected":
        return "bg-red-500";

      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Manajemen Booking
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (

        <div className="overflow-x-auto">

          <table className="w-full bg-white rounded-2xl shadow overflow-hidden">

            <thead className="bg-gray-200">

              <tr>
                <th className="p-4 text-left">
                  ID
                </th>

                <th className="p-4 text-left">
                  Barang
                </th>

                <th className="p-4 text-left">
                  Penyewa
                </th>

                <th className="p-4 text-left">
                  Tanggal Sewa
                </th>

                <th className="p-4 text-left">
                  Kembali
                </th>

                <th className="p-4 text-left">
                  Qty
                </th>

                <th className="p-4 text-left">
                  Total
                </th>

                <th className="p-4 text-left">
                  Status
                </th>
              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking.id_transaksi}
                  className="border-b"
                >

                  <td className="p-4">
                    {booking.id_transaksi}
                  </td>

                  <td className="p-4">
                    {booking.barang?.nama_barang}
                  </td>

                  <td className="p-4">
                    {booking.penyewa?.nama_penyewa}
                  </td>

                  <td className="p-4">
                    {booking.tanggal_sewa}
                  </td>

                  <td className="p-4">
                    {booking.tanggal_kembali}
                  </td>

                  <td className="p-4">
                    {booking.jumlah}
                  </td>

                  <td className="p-4">
                    Rp{" "}
                    {booking.total_bayar?.toLocaleString(
                      "id-ID"
                    )}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default AdminBooking;