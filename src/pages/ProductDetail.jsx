import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const bookedDates = [
    "2026-06-10",
    "2026-06-11",
    "2026-06-12",
  ];

  const products = [
    {
      id: 1,
      title: "Handie Talkie",
      memberPrice: 8000,
      normalPrice: 12000,
      image:
        "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500",
      specifications: [
        "UHF 400-438MHz",
        "RF Power 2W",
        "Channel 16",
        "Battery 1500mAh",
      ],
    },
    {
      id: 2,
      title: "Sound System",
      memberPrice: 25000,
      normalPrice: 40000,
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
      specifications: [
        "High Power Audio",
        "Bluetooth Support",
        "Portable System",
      ],
    },
    {
      id: 3,
      title: "Tripod",
      memberPrice: 8000,
      normalPrice: 13000,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      specifications: [
        "Max Height 136cm",
        "Aluminium Material",
        "3-Way Head",
      ],
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // fallback kalau product tidak ada
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold">
          Produk tidak ditemukan
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

  const totalPrice = qty * product.normalPrice;

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <div className="grid md:grid-cols-2 gap-10">

          {/* IMAGE */}
          <div>
            <img
              src={product.image}
              alt={`Gambar produk ${product.title}`}
              className="w-full rounded-3xl"
            />
          </div>

          {/* DETAIL */}
          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              {product.title}
            </h1>

            {/* PRICE */}
            <div className="mt-4">

              <p className="text-green-700 font-bold text-xl">
                Member:{" "}
                {product.memberPrice === 0
                  ? "Free"
                  : `Rp ${product.memberPrice.toLocaleString("id-ID")}`}
              </p>

              <p className="text-gray-700 text-lg">
                Normal: Rp{" "}
                {product.normalPrice.toLocaleString("id-ID")}
              </p>

            </div>

            {/* SPEC */}
            <div className="mt-8">

              <h2 className="font-bold text-2xl mb-4">
                Spesifikasi
              </h2>

              <div className="grid grid-cols-2 gap-2">

                {product.specifications.map(
                  (spec, index) => (
                    <div
                      key={index}
                      className="bg-[#DEDEDE] p-3 rounded-xl text-sm"
                    >
                      {spec}
                    </div>
                  )
                )}

              </div>

            </div>

            {/* CALENDAR */}
            <div className="mt-8">

              <h2 className="font-bold text-xl mb-4">
                Kalender Ketersediaan
              </h2>

              <div className="border rounded-2xl p-4">

                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  tileClassName={({ date }) => {
                    const formatted =
                      date.toISOString().split("T")[0];

                    return bookedDates.includes(
                      formatted
                    )
                      ? "bg-red-500 text-white rounded-full"
                      : null;
                  }}
                />

              </div>

              <p className="mt-4 font-semibold">
                Tanggal dipilih:{" "}
                {selectedDate.toLocaleDateString(
                  "id-ID"
                )}
              </p>

              <div className="flex gap-6 mt-4 text-sm">

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>Tersedia</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span>Disewa</span>
                </div>

              </div>

            </div>

            {/* QTY */}
            <div className="mt-8">

              <h2 className="font-bold mb-3">
                Quantity
              </h2>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setQty(qty > 1 ? qty - 1 : 1)
                  }
                  aria-label="Kurangi quantity"
                  className="bg-[#B2B2B2] px-4 py-2 rounded-lg"
                >
                  -
                </button>

                <span className="font-bold text-xl">
                  {qty}
                </span>

                <button
                  onClick={() => setQty(qty + 1)}
                  aria-label="Tambah quantity"
                  className="bg-[#B2B2B2] px-4 py-2 rounded-lg"
                >
                  +
                </button>

              </div>

            </div>

            {/* TOTAL */}
            <div className="mt-8">

              <h2 className="font-bold text-xl">
                Total Harga
              </h2>

              <p className="text-3xl font-bold mt-2">
                Rp {totalPrice.toLocaleString("id-ID")}
              </p>

            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                navigate("/checkout", {
                  state: {
                    product,
                    qty,
                    selectedDate,
                    totalPrice,
                  },
                })
              }
              className="mt-8 w-full bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-4 rounded-2xl font-semibold transition"
            >
              Booking Sekarang
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;