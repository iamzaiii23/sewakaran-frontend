import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

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
  } = bookingData;

  const handleSubmit = async () => {
    if (!name || !phone) {
      toast.error("Lengkapi data");
      return;
    }

    if (!paymentProof) {
      toast.error("Upload bukti pembayaran");
      return;
    }

    try {
      setLoading(true);

      // ======================
      // 1. BUAT PENYEWA
      // ======================

      const penyewaRes = await axios.post(
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

      const transaksiRes = await axios.post(
        "http://127.0.0.1:8000/api/transaksi",
        {
          id_barang: product.id_barang,
          id_penyewa: idPenyewa,

          tanggal_sewa:
            selectedDate.toISOString().split("T")[0],

          tanggal_kembali:
            selectedDate.toISOString().split("T")[0],

          jumlah: qty,
          total_bayar: totalPrice,
        }
      );

      const idTransaksi =
        transaksiRes.data.data.id_transaksi;

      // ======================
      // 3. UPLOAD BUKTI
      // ======================

      const formData = new FormData();

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
        "Booking berhasil"
      );

      navigate("/booking-status");

    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Booking gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] p-6">

      <div className="max-w-md mx-auto bg-white rounded-2xl p-5">

        <h1 className="text-2xl font-bold mb-4">
          Checkout
        </h1>

        <input
          className="w-full p-3 bg-gray-100 rounded mb-3"
          placeholder="Nama"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="w-full p-3 bg-gray-100 rounded mb-3"
          placeholder="No WhatsApp"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <div className="border p-3 rounded mb-3">

          <p className="font-semibold">
            {product.nama_barang}
          </p>

          <p className="font-bold text-blue-600">
            Rp{" "}
            {totalPrice.toLocaleString(
              "id-ID"
            )}
          </p>

          <p className="text-sm text-gray-500">
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

        </div>

        <input
          type="file"
          onChange={(e) =>
            setPaymentProof(
              e.target.files[0]
            )
          }
        />

        <button
          onClick={handleSubmit}
          disabled={loading || paid}
          className="w-full mt-4 bg-[#B2B2B2] text-white py-3 rounded-xl"
        >
          {loading
            ? "Loading..."
            : paid
            ? "Sudah Dibayar"
            : "Konfirmasi"}
        </button>

      </div>

    </div>
  );
}

export default Checkout;