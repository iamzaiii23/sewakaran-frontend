import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import qrisImage from "../assets/QRIS_Payment.jpeg";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentProof, setPaymentProof] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [paid, setPaid] =
    useState(false);

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h1>Data tidak ditemukan</h1>

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Home
        </button>
      </div>
    );
  }

  const {
    product,
    qty,
    selectedDate,
    totalPrice,
    selectedDuration,
  } = bookingData;

  const handleSubmit = async () => {
    if (!name || !phone) {
      toast.error(
        "Lengkapi data"
      );
      return;
    }

    if (!paymentProof) {
      toast.error(
        "Upload bukti pembayaran"
      );
      return;
    }

    try {
      setLoading(true);

      // ======================
      // 1. BUAT PENYEWA
      // ======================

      const penyewaRes =
        await axios.post(
          "http://127.0.0.1:8000/api/penyewa",
          {
            nama_penyewa: name,
            no_hp: phone,
          }
        );

      const idPenyewa =
        penyewaRes.data.data.id_penyewa;

      // ======================
      // 2. BUAT TRANSAKSI
      // ======================

      const transaksiRes =
        await axios.post(
          "http://127.0.0.1:8000/api/transaksi",
          {
            id_barang:
              product.id_barang,

            id_penyewa:
              idPenyewa,

            tanggal_sewa:
              selectedDate
                .toISOString()
                .split("T")[0],

            tanggal_kembali:
              selectedDate
                .toISOString()
                .split("T")[0],

            jumlah: qty,

            durasi_sewa:
              selectedDuration,

            total_bayar:
              totalPrice,

            status:
              "menunggu_verifikasi",
          }
        );

      const idTransaksi =
        transaksiRes.data.data
          .id_transaksi;

      // ======================
      // 3. UPLOAD BUKTI
      // ======================

      const formData =
        new FormData();

      formData.append(
        "bukti_pembayaran",
        paymentProof
      );

      await axios.post(
        `http://127.0.0.1:8000/api/transaksi/${idTransaksi}/upload-bukti`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setPaid(true);

      toast.success(
        "Pembayaran berhasil! Menunggu verifikasi admin"
      );

      navigate(
        "/booking-status",
        {
          state: {
            success: true,
          },
        }
      );
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data
          ?.message ||
          "Booking gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] p-6">

      <div className="max-w-md mx-auto bg-white rounded-2xl p-5 shadow-lg">

        <h1 className="text-3xl font-bold mb-5">
          Checkout
        </h1>

        {/* INPUT */}
        <input
          className="w-full p-3 bg-gray-100 rounded mb-3"
          placeholder="Nama"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <input
          className="w-full p-3 bg-gray-100 rounded mb-4"
          placeholder="No WhatsApp"
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
        />

        {/* DETAIL BOOKING */}
        <div className="border p-4 rounded-xl mb-4">

          <p className="font-semibold text-lg">
            {product.nama_barang}
          </p>

          <p className="font-bold text-blue-600 text-xl">
            Rp{" "}
            {totalPrice.toLocaleString(
              "id-ID"
            )}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Tanggal:
            {" "}
            {selectedDate.toLocaleDateString(
              "id-ID"
            )}
          </p>

          <p className="text-sm text-gray-500">
            Qty:
            {" "}
            {qty}
          </p>

          <p className="text-sm text-gray-500">
            Durasi:
            {" "}
            {selectedDuration} Jam
          </p>

        </div>

        {/* QRIS */}
        <div className="border rounded-xl p-4 bg-gray-50 mb-4">

          <h2 className="font-bold text-lg">
            Pembayaran QRIS
          </h2>

          <p className="text-sm text-gray-500">
            Scan QRIS lalu upload bukti pembayaran
          </p>

          <div className="flex justify-center mt-4">
            <img
              src={qrisImage}
              alt="QRIS Payment"
              className="w-56 rounded-xl border"
            />
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-500">
              Total Bayar
            </p>

            <p className="text-2xl font-bold text-green-600">
              Rp{" "}
              {totalPrice.toLocaleString(
                "id-ID"
              )}
            </p>
          </div>

        </div>

        {/* UPLOAD */}
        <div className="mb-4">

          <label className="font-medium block mb-2">
            Upload Bukti Pembayaran
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setPaymentProof(
                e.target.files[0]
              )
            }
            className="w-full"
          />

          {paymentProof && (
            <p className="text-sm text-green-600 mt-2">
              File:
              {" "}
              {
                paymentProof.name
              }
            </p>
          )}

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={
            loading || paid
          }
          className="w-full bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-4 rounded-xl transition"
        >
          {loading
            ? "Memproses..."
            : paid
            ? "Sudah Dibayar"
            : "Konfirmasi Pembayaran"}
        </button>

      </div>

    </div>
  );
}

export default Checkout;
