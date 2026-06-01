import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function BundlingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState(12);

  const bundles = {
    1: {
      id: 1,
      title: "Bundle",
      description: "Sound, Stand, Mic",
      memberPrice: 30000,
      normalPrice: 50000,
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
      specifications: [
        "Frequency Range",
        "UHF 400-438MHz",
        "RF Rated Power 2W",
      ],
    },

    2: {
      id: 2,
      title: "Bundle",
      description: "HT, Earphone, Charger",
      memberPrice: 10000,
      normalPrice: 15000,
      image:
        "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500",
      specifications: [
        "Frequency Range",
        "UHF 400-438MHz",
        "RF Rated Power 2W",
      ],
    },
  };

  const bundle = bundles[id];

  if (!bundle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Bundling tidak ditemukan
        </h1>
      </div>
    );
  }

  // Dummy tanggal yang sudah disewa
  const unavailableDates = [
    "2026-06-10",
    "2026-06-11",
    "2026-06-18",
    "2026-06-25",
  ];

  const tileClassName = ({ date }) => {
    const formatted = date.toISOString().split("T")[0];

    if (unavailableDates.includes(formatted)) {
      return "bg-red-500 text-white rounded-full";
    }

    return null;
  };

  const tileDisabled = ({ date }) => {
    const formatted = date.toISOString().split("T")[0];

    return unavailableDates.includes(formatted);
  };

  const totalPrice =
    bundle.normalPrice *
    quantity *
    (duration === 24 ? 2 : 1);

  const handleBooking = () => {
    const endDate = new Date(date);

    if (duration === 24) {
      endDate.setDate(endDate.getDate() + 1);
    }

    navigate("/checkout", {
      state: {
        product: {
          id: bundle.id,
          title: `${bundle.title} - ${bundle.description}`,
          image: bundle.image,
          normalPrice: bundle.normalPrice,
        },

        qty: quantity,

        startDate:
          date.toLocaleDateString("id-ID"),

        endDate:
          endDate.toLocaleDateString("id-ID"),

        duration,

        totalPrice,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="grid md:grid-cols-2 gap-10 p-8">

          {/* IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src={bundle.image}
              alt={bundle.title}
              className="rounded-3xl w-full max-w-md"
            />
          </div>

          {/* CONTENT */}
          <div>

            <h1 className="text-4xl font-bold mb-2">
              {bundle.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {bundle.description}
            </p>

            <div className="space-y-2">
              <p className="text-green-700 font-semibold">
                Member :
                Rp {bundle.memberPrice.toLocaleString("id-ID")}
              </p>

              <p>
                Normal :
                Rp {bundle.normalPrice.toLocaleString("id-ID")}
              </p>
            </div>

            {/* SPESIFIKASI */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">
                Spesifikasi
              </h2>

              <ul className="space-y-2">
                {bundle.specifications.map((item, index) => (
                  <li key={index}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* KALENDER */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">
                Kalender Ketersediaan
              </h2>

              <Calendar
                onChange={setDate}
                value={date}
                tileClassName={tileClassName}
                tileDisabled={tileDisabled}
              />

              <div className="mt-4 bg-gray-100 p-4 rounded-xl">
                <p>
                  Tanggal dipilih :
                  <strong>
                    {" "}
                    {date.toLocaleDateString("id-ID")}
                  </strong>
                </p>
              </div>

            </div>

            {/* DURASI */}
            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                Durasi Sewa
              </h2>

              <div className="flex gap-4">

                <button
                  onClick={() => setDuration(12)}
                  className={`px-6 py-2 rounded-xl ${
                    duration === 12
                      ? "bg-[#B2B2B2] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  12 Jam
                </button>

                <button
                  onClick={() => setDuration(24)}
                  className={`px-6 py-2 rounded-xl ${
                    duration === 24
                      ? "bg-[#B2B2B2] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  24 Jam
                </button>

              </div>

            </div>

            {/* QUANTITY */}
            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                Jumlah Paket
              </h2>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : 1)
                  }
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  +
                </button>

              </div>

            </div>

            {/* TOTAL */}
            <div className="mt-8 bg-[#B2B2B2] text-white p-6 rounded-2xl">

              <p>Total Harga</p>

              <h2 className="text-3xl font-bold">
                Rp {totalPrice.toLocaleString("id-ID")}
              </h2>

            </div>

            <button
              onClick={handleBooking}
              className="w-full mt-8 bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-4 rounded-2xl"
            >
              Booking Sekarang
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default BundlingDetail;