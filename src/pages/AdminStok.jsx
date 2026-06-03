import { useState } from "react";

function AdminStok() {
  const [items, setItems] = useState([
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

  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    stok: "",
    harga: "",
  });

  const [editId, setEditId] = useState(null);

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

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD / UPDATE ITEM
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.kategori || !form.stok || !form.harga) return;

    if (editId) {
      // UPDATE
      setItems((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                ...form,
                stok: Number(form.stok),
                harga: Number(form.harga),
              }
            : item
        )
      );
      setEditId(null);
    } else {
      // ADD
      const newItem = {
        id: Date.now(),
        ...form,
        stok: Number(form.stok),
        harga: Number(form.harga),
      };

      setItems([...items, newItem]);
    }

    setForm({ nama: "", kategori: "", stok: "", harga: "" });
  };

  // EDIT
  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  // DELETE
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        Stok & Katalog Barang
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow mb-6 grid md:grid-cols-5 gap-3"
      >
        <input
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama barang"
          className="p-2 bg-gray-100 rounded"
        />

        <input
          name="kategori"
          value={form.kategori}
          onChange={handleChange}
          placeholder="Kategori"
          className="p-2 bg-gray-100 rounded"
        />

        <input
          name="stok"
          value={form.stok}
          onChange={handleChange}
          placeholder="Stok"
          type="number"
          className="p-2 bg-gray-100 rounded"
        />

        <input
          name="harga"
          value={form.harga}
          onChange={handleChange}
          placeholder="Harga"
          type="number"
          className="p-2 bg-gray-100 rounded"
        />

        <button className="bg-blue-500 text-white rounded">
          {editId ? "Update" : "Tambah"}
        </button>
      </form>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">

          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Stok</th>
              <th className="p-4">Harga</th>
              <th className="p-4">Status</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">

                <td className="p-4 font-medium">{item.nama}</td>
                <td className="p-4">{item.kategori}</td>
                <td className="p-4">{item.stok}</td>
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

                <td className="p-4 space-x-2">

                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

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