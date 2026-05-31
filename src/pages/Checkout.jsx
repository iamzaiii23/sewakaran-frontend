import { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    alamat: "",
  });

  const [proofImage, setProofImage] =
    useState(null);

  const [previewImage, setPreviewImage] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // Dummy data dari Product Detail
  const booking = {
    product: "Earphone HT",
    quantity: 3,
    startDate: "2026-06-12",
    endDate: "2026-06-24",
    price: 3000,
  };

  const totalPrice =
    booking.quantity * booking.price;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file =
      e.target.files[0];

    if (!file) return;

    setProofImage(file);

    setPreviewImage(
      URL.createObjectURL(file)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !formData.nama ||
      !formData.noHp ||
      !formData.alamat
    ) {
      setError(
        "Lengkapi seluruh data terlebih dahulu."
      );
      return;
    }

    if (!proofImage) {
      setError(
        "Upload bukti pembayaran terlebih dahulu."
      );
      return;
    }

    try {
      setLoading(true);

      // simulasi request API
      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            2000
          )
      );

      setSuccess(
        "Booking berhasil dikirim."
      );

      console.log({
        customer: formData,
        booking,
        proofImage,
      });

    } catch (err) {
      console.log(err);

      setError(
        "Terjadi kesalahan saat mengirim booking."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Data Penyewa
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="block mb-2 font-medium">
                Nama Lengkap
              </label>

              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={
                  handleChange
                }
                className="w-full border rounded-xl p-3"
                placeholder="Masukkan nama"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Nomor HP
              </label>

              <input
                type="text"
                name="noHp"
                value={formData.noHp}
                onChange={
                  handleChange
                }
                className="w-full border rounded-xl p-3"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Alamat
              </label>

              <textarea
                name="alamat"
                rows="4"
                value={
                  formData.alamat
                }
                onChange={
                  handleChange
                }
                className="w-full border rounded-xl p-3"
                placeholder="Masukkan alamat"
              />
            </div>

            {/* Upload */}
            <div>
              <label className="block mb-2 font-medium">
                Bukti Pembayaran
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageChange
                }
                className="w-full"
              />
            </div>

            {/* Preview */}
            {previewImage && (
              <div>

                <p className="font-medium mb-2">
                  Preview Bukti Transfer
                </p>

                <img
                  src={previewImage}
                  alt="preview"
                  className="rounded-xl border h-52 object-cover"
                />

              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-3 rounded-xl font-semibold transition"
            >
              {loading
                ? "Mengirim..."
                : "Konfirmasi Booking"}
            </button>

          </form>

        </div>

        {/* RINGKASAN */}
        <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Ringkasan Pesanan
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Barang</span>
              <span>
                {booking.product}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Jumlah</span>
              <span>
                {booking.quantity} Unit
              </span>
            </div>

            <div className="flex justify-between">
              <span>Mulai</span>
              <span>
                {booking.startDate}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Selesai</span>
              <span>
                {booking.endDate}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Harga / Unit</span>
              <span>
                Rp{" "}
                {booking.price.toLocaleString(
                  "id-ID"
                )}
              </span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-xl">

              <span>Total</span>

              <span>
                Rp{" "}
                {totalPrice.toLocaleString(
                  "id-ID"
                )}
              </span>

            </div>

          </div>

          <div className="mt-8 bg-[#DEDEDE] p-4 rounded-xl">

            <h3 className="font-semibold mb-2">
              Transfer ke
            </h3>

            <p>
              BCA 1234567890
            </p>

            <p>
              a.n. Sewakaran
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;