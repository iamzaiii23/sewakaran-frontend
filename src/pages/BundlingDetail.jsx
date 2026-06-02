import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import soundSystem from "../assets/sound-system.jpeg";
import handieTalkie from "../assets/handie-talkie.jpeg";

function BundlingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState(12);

  const bundles = useMemo(
    () => ({
      1: {
        id: 1,
        title: "Bundle Audio",
        description: "Sound System, Stand, Mic",
        price12: 30000,
        price24: 50000,
        image: soundSystem,
        specifications: [
          "Frequency Range",
          "UHF 400-438MHz",
          "RF Rated Power 2W",
        ],
      },

      2: {
        id: 2,
        title: "Bundle Komunikasi",
        description: "HT, Earphone, Charger",
        price12: 10000,
        price24: 15000,
        image: handieTalkie,
        specifications: [
          "Frequency Range",
          "UHF 400-438MHz",
          "RF Rated Power 2W",
        ],
      },
    }),
    []
  );

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

  const unavailableDates = useMemo(
    () => [
      "2026-06-10",
      "2026-06-11",
      "2026-06-18",
      "2026-06-25",
    ],
    []
  );

  const formatDate = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const tileClassName = ({ date }) =>
    unavailableDates.includes(formatDate(date))
      ? "bg-red-500 text-white rounded-full"
      : null;

  const tileDisabled = ({ date }) =>
    unavailableDates.includes(formatDate(date));

  const pricePerUnit =
    duration === 24
      ? bundle.price24
      : bundle.price12;

  const totalPrice =
    pricePerUnit * quantity;

  const handleBooking = () => {
    const endDate = new Date(date);

    if (duration === 24) {
      endDate.setDate(
        endDate.getDate() + 1
      );
    }

    navigate("/checkout", {
      state: {
        product: {
          id: bundle.id,
          title: `${bundle.title} - ${bundle.description}`,
          image: bundle.image,
          price: pricePerUnit,
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

          <div className="flex justify-center items-center bg-white rounded-3xl p-6">
            <img
              src={bundle.image}
              alt={bundle.title}
              className="max-h-[400px] max-w-full object-contain"
            />
          </div>

          <div>

            <h1 className="text-4xl font-bold mb-2">
              {bundle.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {bundle.description}
            </p>

            <div className="space-y-2">
              <p className="text-green-700 font-semibold">
                12 Jam: Rp{" "}
                {bundle.price12.toLocaleString(
                  "id-ID"
                )}
              </p>

              <p className="text-gray-700">
                24 Jam: Rp{" "}
                {bundle.price24.toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">
                Spesifikasi
              </h2>

              <ul className="space-y-2">
                {bundle.specifications.map(
                  (item, index) => (
                    <li key={index}>
                      • {item}
                    </li>
                  )
                )}
              </ul>
            </div>

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
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() =>
                  setDuration(12)
                }
                className={`px-6 py-2 rounded-xl ${
                  duration === 12
                    ? "bg-[#B2B2B2] text-white"
                    : "bg-gray-200"
                }`}
              >
                12 Jam
              </button>

              <button
                onClick={() =>
                  setDuration(24)
                }
                className={`px-6 py-2 rounded-xl ${
                  duration === 24
                    ? "bg-[#B2B2B2] text-white"
                    : "bg-gray-200"
                }`}
              >
                24 Jam
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() =>
                  setQuantity((q) =>
                    Math.max(1, q - 1)
                  )
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
                  setQuantity((q) => q + 1)
                }
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                +
              </button>
            </div>

            <div className="mt-8 bg-[#B2B2B2] text-white p-6 rounded-2xl">
              <p>Total Harga</p>

              <h2 className="text-3xl font-bold">
                Rp{" "}
                {totalPrice.toLocaleString(
                  "id-ID"
                )}
              </h2>
            </div>

            <button
              onClick={handleBooking}
              className="w-full mt-8 bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-4 rounded-2xl transition"
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