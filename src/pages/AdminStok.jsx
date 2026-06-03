import { useEffect, useState } from "react";
import axios from "axios";

function AdminStok() {
  const [barang, setBarang] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nama_barang: "",
    deskripsi: "",
    harga_12_jam: "",
    harga_24_jam: "",
    stok: "",
    kategori: "barang",
    status: "tersedia",
  });

  const [gambar, setGambar] = useState(null);

  useEffect(() => {
    fetchBarang();
  }, []);

  const fetchBarang = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/barang"
      );

      setBarang(response.data.data);
    } catch (error) {
      console.error(
        "Gagal mengambil data barang:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const tambahBarang = async () => {
    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (gambar) {
        formData.append("gambar", gambar);
      }

      await axios.post(
        "http://127.0.0.1:8000/api/barang",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert("Barang berhasil ditambahkan");

      fetchBarang();

      setForm({
        nama_barang: "",
        deskripsi: "",
        harga_12_jam: "",
        harga_24_jam: "",
        stok: "",
        kategori: "barang",
        status: "tersedia",
      });

      setGambar(null);

    } catch (error) {
      console.error(error);
      alert("Gagal tambah barang");
    }
  };

  const hapusBarang = async (id) => {
    const konfirmasi = window.confirm(
      "Yakin ingin menghapus barang ini?"
    );

    if (!konfirmasi) return;

    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/barang/${id}`
      );

      alert("Barang berhasil dihapus");

      fetchBarang();

    } catch (error) {
      console.error(error);
      alert("Gagal menghapus barang");
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "tersedia":
        return "bg-green-500";

      case "disewa":
        return "bg-yellow-500";

      case "habis":
        return "bg-red-500";

      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Stok Barang
      </h1>

      {/* FORM TAMBAH BARANG */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">

        <h2 className="text-xl font-bold mb-4">
          Tambah Barang
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Nama Barang"
            value={form.nama_barang}
            onChange={(e) =>
              setForm({
                ...form,
                nama_barang: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Harga 12 Jam"
            value={form.harga_12_jam}
            onChange={(e) =>
              setForm({
                ...form,
                harga_12_jam: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Harga 24 Jam"
            value={form.harga_24_jam}
            onChange={(e) =>
              setForm({
                ...form,
                harga_24_jam: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Stok"
            value={form.stok}
            onChange={(e) =>
              setForm({
                ...form,
                stok: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Deskripsi Barang"
            value={form.deskripsi}
            onChange={(e) =>
              setForm({
                ...form,
                deskripsi: e.target.value,
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

          <input
            type="file"
            onChange={(e) =>
              setGambar(e.target.files[0])
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button
          onClick={tambahBarang}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
        >
          Simpan Barang
        </button>

      </div>

      {/* TABLE */}
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
                  Nama Barang
                </th>

                <th className="p-4 text-left">
                  Kategori
                </th>

                <th className="p-4 text-left">
                  Harga 12 Jam
                </th>

                <th className="p-4 text-left">
                  Harga 24 Jam
                </th>

                <th className="p-4 text-left">
                  Stok
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Action
                </th>
              </tr>

            </thead>

            <tbody>

              {barang.map((item) => (

                <tr
                  key={item.id_barang}
                  className="border-b"
                >

                  <td className="p-4">
                    {item.id_barang}
                  </td>

                  <td className="p-4 font-medium">
                    {item.nama_barang}
                  </td>

                  <td className="p-4">
                    {item.kategori}
                  </td>

                  <td className="p-4">
                    Rp{" "}
                    {item.harga_12_jam?.toLocaleString(
                      "id-ID"
                    )}
                  </td>

                  <td className="p-4">
                    Rp{" "}
                    {item.harga_24_jam?.toLocaleString(
                      "id-ID"
                    )}
                  </td>

                  <td className="p-4 font-bold">
                    {item.stok}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          hapusBarang(item.id_barang)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                      >
                        Hapus
                      </button>

                    </div>

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

export default AdminStok;