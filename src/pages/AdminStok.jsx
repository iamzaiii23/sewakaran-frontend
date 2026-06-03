import { useState } from "react";

function AdminStok() {
  const [items] = useState([
    {
      id: 1,
      nama: "Handie Talkie",
      kategori: "Elektronik",
      stok: 12,
      harga: 12000,
    },
    {
      id: 2,
      nama: "Sound System",
      kategori: "Audio",
      stok: 5,
      harga: 40000,
    },
    {
      id: 3,
      nama: "Tripod",
      kategori: "Aksesoris",
      stok: 0,
      harga: 8000,
    },
  ]);

  const getStatus = (stok) => {
    if (stok === 0) return "Habis";
    if (stok <= 5) return "Menipis";
    return "Aman";
  };

  const getStatusStyle = (stok) => {
    if (stok === 0) return "bg-red-100 text-red-700";
    if (stok <= 5) return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Stok Barang
        </h1>
        <p className="text-gray-500 mt-2">
          Kelola ketersediaan barang
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">

          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Stok</th>
              <th className="p-4">Harga</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">

                <td className="p-4 font-medium">
                  {item.nama}
                </td>

                <td className="p-4">
                  {item.kategori}
                </td>

                <td className="p-4">
                  {item.stok}
                </td>

                <td className="p-4">
                  Rp {item.harga.toLocaleString("id-ID")}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      item.stok
                    )}`}
                  >
                    {getStatus(item.stok)}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default AdminStok;