import { useState } from "react";
import { toast } from "react-toastify";

function AdminPembayaran() {
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      metode: "Transfer Bank",
      status: "pending",
      jumlah: 150000,
    },
    {
      id: 2,
      nama: "Siti Aminah",
      metode: "QRIS",
      status: "lunas",
      jumlah: 200000,
    },
  ]);

  const handleVerify = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "lunas" }
          : item
      )
    );

    toast.success(`Pembayaran #${id} berhasil diverifikasi`);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "lunas":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Validasi Pembayaran
        </h1>
        <p className="text-gray-500 mt-2">
          Kelola status pembayaran user
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Metode</th>
              <th className="p-4">Jumlah</th>
              <th className="p-4">Status</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">

                <td className="p-4 font-medium">
                  {item.nama}
                </td>

                <td className="p-4">
                  {item.metode}
                </td>

                <td className="p-4">
                  Rp {item.jumlah.toLocaleString("id-ID")}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  {item.status === "pending" ? (
                    <button
                      onClick={() => handleVerify(item.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Verifikasi
                    </button>
                  ) : (
                    <span className="text-gray-400 text-sm">
                      Sudah diverifikasi
                    </span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPembayaran;