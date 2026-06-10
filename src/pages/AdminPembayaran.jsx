import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AdminPembayaran() {
  const [transaksi, setTransaksi] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    getTransaksi();
  }, []);

  const getTransaksi = async () => {
    try {
      const response =
        await axios.get(
          "http://127.0.0.1:8000/api/transaksi"
        );

      setTransaksi(
        response.data.data
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Gagal mengambil data"
      );
    } finally {
      setLoading(false);
    }
  };

  const approvePembayaran =
    async (id) => {
      try {
        await axios.post(
          `http://127.0.0.1:8000/api/transaksi/${id}/approve`
        );

        toast.success(
          "Pembayaran disetujui"
        );

        getTransaksi();
      } catch (error) {
        console.error(error);

        toast.error(
          "Gagal approve"
        );
      }
    };

  const rejectPembayaran =
    async (id) => {
      try {
        await axios.post(
          `http://127.0.0.1:8000/api/transaksi/${id}/reject`
        );

        toast.success(
          "Pembayaran ditolak"
        );

        getTransaksi();
      } catch (error) {
        console.error(error);

        toast.error(
          "Gagal reject"
        );
      }
    };

  const getStatusColor =
    (status) => {
      switch (status) {
        case "dibayar":
          return "bg-green-100 text-green-700";

        case "pending":
          return "bg-yellow-100 text-yellow-700";

        case "dibatalkan":
          return "bg-red-100 text-red-700";

        default:
          return "bg-gray-100 text-gray-700";
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
        <div className="space-y-5">

          {transaksi.map(
            (item) => {

              const imageUrl =
                item.bukti_pembayaran
                  ? `http://127.0.0.1:8000/storage/bukti_pembayaran/${encodeURIComponent(
                      item.bukti_pembayaran
                    )}`
                  : null;

              return (
                <div
                  key={
                    item.id_transaksi
                  }
                  className="bg-white p-6 rounded-3xl shadow-md"
                >

                  <div className="flex flex-col lg:flex-row justify-between gap-8">

                    {/* LEFT */}
                    <div>

                      <h2 className="text-2xl font-bold mb-2">
                        {
                          item.barang
                            ?.nama_barang
                        }
                      </h2>

                      <div className="space-y-1 text-gray-700">

                        <p>
                          <span className="font-semibold">
                            Penyewa:
                          </span>{" "}
                          {
                            item
                              .penyewa
                              ?.nama_penyewa
                          }
                        </p>

                        <p>
                          <span className="font-semibold">
                            No HP:
                          </span>{" "}
                          {
                            item
                              .penyewa
                              ?.no_hp
                          }
                        </p>

                        <p>
                          <span className="font-semibold">
                            Tanggal:
                          </span>{" "}
                          {
                            item.tanggal_sewa
                          }
                        </p>

                        <p>
                          <span className="font-semibold">
                            Qty:
                          </span>{" "}
                          {
                            item.jumlah
                          }
                        </p>

                      </div>

                      <p className="font-bold text-2xl text-blue-600 mt-4">
                        Rp{" "}
                        {
                          item.total_bayar?.toLocaleString(
                            "id-ID"
                          )
                        }
                      </p>

                      <div className="mt-4">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {
                            item.status
                          }
                        </span>
                      </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-center gap-4">

                      {item.bukti_pembayaran ? (

                        <a
                          href={imageUrl}
                          target="_blank"
                          rel="noreferrer"
                        >

                          <img
                            src={imageUrl}
                            alt="Bukti Pembayaran"
                            className="w-56 h-56 object-cover rounded-2xl border hover:scale-105 transition"
                            onError={(e) => {
                              console.log(
                                "Image gagal:",
                                imageUrl
                              );

                              e.target.src =
                                "https://placehold.co/250x250?text=No+Image";
                            }}
                          />

                        </a>

                      ) : (

                        <div className="w-56 h-56 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 border">
                          Tidak ada bukti
                        </div>

                      )}

                      {/* BUTTON */}
                      {item.status ===
                        "pending" && (

                        <div className="flex gap-3">

                          <button
                            onClick={() =>
                              approvePembayaran(
                                item.id_transaksi
                              )
                            }
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() =>
                              rejectPembayaran(
                                item.id_transaksi
                              )
                            }
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                          >
                            Reject
                          </button>

                        </div>

                      )}

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>
      )}
    </div>
  );
}

export default AdminPembayaran;
