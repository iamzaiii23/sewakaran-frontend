import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AdminPembayaran() {
  const [transaksi, setTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransaksi();
  }, []);

  const getTransaksi = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/transaksi"
      );

      setTransaksi(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  const approvePembayaran = async (id) => {
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/transaksi/${id}/approve`
      );

      toast.success("Pembayaran disetujui");

      getTransaksi();
    } catch (error) {
      console.error(error);
      toast.error("Gagal approve");
    }
  };

  const rejectPembayaran = async (id) => {
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/transaksi/${id}/reject`
      );

      toast.success("Pembayaran ditolak");

      getTransaksi();
    } catch (error) {
      console.error(error);
      toast.error("Gagal reject");
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">

      <h1 className="text-3xl font-bold mb-8">
        Validasi Pembayaran
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (

        <div className="space-y-4">

          {transaksi.map((item) => (

            <div
              key={item.id_transaksi}
              className="bg-white p-6 rounded-2xl shadow"
            >

              <div className="flex flex-col md:flex-row justify-between gap-6">

                {/* DATA TRANSAKSI */}
                <div>

                  <h2 className="text-xl font-bold">
                    {item.barang?.nama_barang}
                  </h2>

                  <p>
                    Penyewa:
                    {" "}
                    {item.penyewa?.nama_penyewa}
                  </p>

                  <p>
                    No HP:
                    {" "}
                    {item.penyewa?.no_hp}
                  </p>

                  <p>
                    Tanggal:
                    {" "}
                    {item.tanggal_sewa}
                  </p>

                  <p>
                    Qty:
                    {" "}
                    {item.jumlah}
                  </p>

                  <p className="font-bold text-blue-600 mt-2">
                    Rp{" "}
                    {item.total_bayar?.toLocaleString(
                      "id-ID"
                    )}
                  </p>

                  <p className="mt-2">
                    Status:
                    {" "}
                    <span className="font-bold">
                      {item.status}
                    </span>
                  </p>

                </div>

                {/* BUKTI PEMBAYARAN */}
                <div className="flex flex-col items-center gap-3">

                  {item.bukti_pembayaran ? (

                    <a
                      href={`http://127.0.0.1:8000/storage/bukti_pembayaran/${item.bukti_pembayaran}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`http://127.0.0.1:8000/storage/bukti_pembayaran/${item.bukti_pembayaran}`}
                        alt="Bukti Pembayaran"
                        className="w-52 h-52 object-cover rounded-xl border hover:scale-105 transition"
                      />
                    </a>

                  ) : (

                    <div className="w-52 h-52 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                      Tidak ada bukti
                    </div>

                  )}

                  {item.status === "pending" && (

                    <div className="flex gap-3">

                      <button
                        onClick={() =>
                          approvePembayaran(
                            item.id_transaksi
                          )
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          rejectPembayaran(
                            item.id_transaksi
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Reject
                      </button>

                    </div>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default AdminPembayaran;