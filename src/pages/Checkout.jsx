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
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);

  // fallback jika user akses langsung URL
  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Data booking tidak ditemukan
        </h1>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-gray-800 text-white px-5 py-2 rounded-xl"
        >
          Kembali ke Home
        </button>
      </div>
    );
  }

  const { product, qty, selectedDate, totalPrice } = bookingData;

  const handleSubmit = () => {
    // VALIDASI
    if (!name || !phone) {
      toast.error("Lengkapi data terlebih dahulu");
      return;
    }

    if (!paymentProof) {
      toast.error("Upload bukti transfer terlebih dahulu");
      return;
    }

    setLoading(true);

    // simulasi proses pembayaran
    setTimeout(() => {
      setLoading(false);
      setPaid(true);

      toast.success("Booking berhasil!");

      // lanjut ke halaman status
      navigate("/booking-status", {
        state: {
          product,
          qty,
          selectedDate,
          totalPrice,
          name,
          phone,
        },
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">

      <div className="max-w-md mx-auto">

        {/* HEADER */}
        <div className="bg-[#B2B2B2] p-4 flex items-center justify-between rounded-t-2xl">

          <h1 className="text-2xl font-bold">
            Checkout
          </h1>

          <button
            onClick={() => navigate(-1)}
            aria-label="Kembali"
          >
            ←
          </button>

        </div>

        <div className="bg-white p-5 rounded-b-2xl">

          {/* FORM */}
          <div className="border p-4 rounded-xl mb-4">

            <label htmlFor="name" className="font-semibold">
              Nama *
            </label>

            <input
              id="name"
              type="text"
              placeholder="Masukkan nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-100 p-3 rounded mt-2 mb-4"
            />

            <label htmlFor="phone" className="font-semibold">
              Nomor Whatsapp *
            </label>

            <input
              id="phone"
              type="text"
              placeholder="08xxxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-gray-100 p-3 rounded mt-2"
            />

          </div>

          {/* RINCIAN */}
          <div className="border p-4 rounded-xl mb-4">

            <h2 className="font-bold mb-4">
              Rincian Total Harga
            </h2>

            <div className="flex justify-between">
              <span>{product.title}</span>

              <span>
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              {selectedDate
                ? new Date(selectedDate).toLocaleDateString("id-ID")
                : "-"}
            </p>

            <div className="border-t mt-6 pt-4 flex justify-between font-bold">
              <span>Total Harga</span>

              <span>
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>

          </div>

          {/* PAYMENT SECTION */}
          <div className="border p-4 rounded-xl mb-4">

            <h2 className="font-bold mb-4">
              Bukti Pembayaran
            </h2>

            {!paid && (
              <>
                <p className="mb-4 text-sm text-gray-600">
                  Scan QR untuk melakukan pembayaran
                </p>

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SewakanApp"
                  alt="QR Payment"
                  className="w-40 mx-auto mb-4"
                />
              </>
            )}

            <input
              type="file"
              onChange={(e) =>
                setPaymentProof(e.target.files[0])
              }
            />

            {paymentProof && (
              <p className="text-green-600 font-semibold mt-3">
                ✓ Bukti pembayaran terupload
              </p>
            )}

          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading || paid}
            className="w-full bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading
              ? "Memproses..."
              : paid
              ? "Sudah Dibayar"
              : "Konfirmasi Pembayaran"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;