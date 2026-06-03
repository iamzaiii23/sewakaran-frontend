import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

// QRIS IMAGE
import qrisImage from "../assets/qris.jpeg";

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
        <h1 className="text-xl font-bold mb-3">
          Data tidak ditemukan
        </h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Home
        </button>
      </div>
    );
  }

  const { product, qty, startDate, totalPrice } = bookingData;

  const handleSubmit = () => {
    if (!name || !phone) {
      toast.error("Lengkapi data terlebih dahulu");
      return;
    }

    if (!paymentProof) {
      toast.error("Upload bukti pembayaran");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPaid(true);

      toast.success("Booking berhasil dibuat");

      navigate("/booking-status", {
        state: {
          product,
          qty,
          startDate,
          totalPrice,
          name,
          phone,
        },
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">

      <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow">

        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-4">
          Checkout
        </h1>

        {/* USER INPUT */}
        <input
          className="w-full p-3 bg-gray-100 rounded mb-3"
          placeholder="Nama"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 bg-gray-100 rounded mb-3"
          placeholder="No WhatsApp"
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* PRODUCT INFO */}
        <div className="border p-4 rounded mb-4 bg-gray-50">
          <p className="font-medium">{product.title}</p>
          <p className="font-bold text-lg">
            Rp {totalPrice.toLocaleString("id-ID")}
          </p>
          <p className="text-sm text-gray-500">
            {startDate}
          </p>
        </div>

        {/* QRIS SECTION */}
        <div className="border p-4 rounded mb-4 text-center bg-white">
          <p className="font-semibold mb-3">
            Scan QRIS untuk pembayaran
          </p>

          <img
            src={qrisImage}
            alt="QRIS Payment"
            className="w-full rounded-lg"
          />
        </div>

        {/* UPLOAD PROOF */}
        <input
          type="file"
          className="mb-4"
          onChange={(e) => setPaymentProof(e.target.files[0])}
        />

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading || paid}
          className={`w-full py-3 rounded-xl text-white transition ${
            paid
              ? "bg-green-500"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          {loading
            ? "Processing..."
            : paid
            ? "Sudah Dibayar"
            : "Konfirmasi Pembayaran"}
        </button>

      </div>
    </div>
  );
}

export default Checkout;