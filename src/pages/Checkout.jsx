import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

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
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  }

  const { product, qty, startDate, totalPrice } = bookingData;

  const handleSubmit = () => {
    if (!name || !phone) {
      toast.error("Lengkapi data");
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

      toast.success("Booking berhasil");

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
    <div className="min-h-screen bg-[#DEDEDE] p-6">

      <div className="max-w-md mx-auto bg-white rounded-2xl p-5">

        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

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

        <div className="border p-3 rounded mb-3">
          <p>{product.title}</p>
          <p className="font-bold">
            Rp {totalPrice.toLocaleString("id-ID")}
          </p>
          <p className="text-sm text-gray-500">
            {startDate}
          </p>
        </div>

        <input
          type="file"
          onChange={(e) => setPaymentProof(e.target.files[0])}
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