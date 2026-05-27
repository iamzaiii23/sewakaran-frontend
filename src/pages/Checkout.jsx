import { useState } from "react";

import {
  submitBooking,
  uploadPaymentProof,
} from "../services/bookingService";

function Checkout() {

  const [form, setForm] =
    useState({
      name: "",
      phone: "",
      address: "",
    });

  const [paymentProof, setPaymentProof] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const order = {
    product: "Camera Canon EOS",
    quantity: 2,
    price: 150000,
  };

  const totalPrice =
    order.quantity * order.price;

  // INPUT
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  // IMAGE
  const handleImage = (e) => {

    const file =
      e.target.files[0];

    if (file) {

      setPaymentProof(file);

      setPreview(
        URL.createObjectURL(file)
      );
    }
  };

  // SUBMIT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setError("");

      // VALIDATION
      if (
        !form.name ||
        !form.phone ||
        !form.address
      ) {

        return setError(
          "Semua field wajib diisi"
        );
      }

      if (!paymentProof) {

        return setError(
          "Upload bukti pembayaran"
        );
      }

      try {

        setLoading(true);

        // FORM DATA
        const formData =
          new FormData();

        formData.append(
          "file",
          paymentProof
        );

        // UPLOAD IMAGE
        const uploadResponse =
          await uploadPaymentProof(
            formData
          );

        // SUBMIT BOOKING
        await submitBooking({
          ...form,
          order,
          totalPrice,
          paymentProof:
            uploadResponse.url,
        });

        setLoading(false);

        // REDIRECT
        window.location.href =
          "/booking-status";

      } catch (err) {

        console.log(err);

        setError(
          "Terjadi kesalahan server"
        );

        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-gray-800 mb-8">

            Checkout Booking

          </h1>

          {/* ERROR */}
          {error && (

            <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-6">

              {error}

            </div>

          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAME */}
            <div>

              <label className="block mb-2 font-medium">
                Nama Lengkap
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl"
                placeholder="Masukkan nama"
              />

            </div>

            {/* PHONE */}
            <div>

              <label className="block mb-2 font-medium">
                Nomor HP
              </label>

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl"
                placeholder="08xxxxxxxxxx"
              />

            </div>

            {/* ADDRESS */}
            <div>

              <label className="block mb-2 font-medium">
                Alamat
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl"
                rows="4"
                placeholder="Masukkan alamat lengkap"
              />

            </div>

            {/* IMAGE */}
            <div>

              <label className="block mb-2 font-medium">

                Upload Bukti Pembayaran

              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="w-full"
              />

            </div>

            {/* PREVIEW */}
            {preview && (

              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-2xl border"
              />

            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl text-white font-semibold transition ${
                loading
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >

              {loading
                ? "Memproses..."
                : "Checkout Sekarang"}

            </button>

          </form>

        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">

            Ringkasan Pesanan

          </h2>

          <div className="space-y-6">

            <div className="flex justify-between">

              <span>Produk</span>

              <span className="font-semibold">
                {order.product}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Quantity</span>

              <span className="font-semibold">
                {order.quantity}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Harga / Hari</span>

              <span className="font-semibold">
                Rp {order.price.toLocaleString()}
              </span>

            </div>

            <hr />

            <div className="flex justify-between items-center">

              <span className="text-xl font-bold">
                Total
              </span>

              <span className="text-3xl font-bold text-blue-600">

                Rp {totalPrice.toLocaleString()}

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;