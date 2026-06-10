import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import soundSystem from "../assets/sound-system.jpeg";
import handieTalkie from "../assets/handie-talkie.jpeg";

function BundlingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] =
    useState(1);

  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const [selectedDuration,
    setSelectedDuration] =
    useState(12);

  const bundles = useMemo(
    () => ({
      1: {
        id: 1,
        nama_barang:
          "Bundle Audio",

        deskripsi:
          "Sound System, Stand, Mic",

        harga_12_jam:
          30000,

        harga_24_jam:
          50000,

        image:
          soundSystem,

        stok: 3,

        spesifikasi: {
          Speaker:
            "Sound System",

          Stand:
            "Mic Stand",

          Mic:
            "Wireless Mic",
        },
      },

      2: {
        id: 2,
        nama_barang:
          "Bundle Komunikasi",

        deskripsi:
          "HT, Earphone, Charger",

        harga_12_jam:
          10000,

        harga_24_jam:
          15000,

        image:
          handieTalkie,

        stok: 5,

        spesifikasi: {
          HT:
            "Handie Talkie",

          Earphone:
            "Earphone HT",

          Charger:
            "Fast Charger",
        },
      },
    }),
    []
  );

  const bundle =
    bundles[id];

  if (!bundle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Bundling tidak ditemukan
        </h1>
      </div>
    );
  }

  // TANGGAL TIDAK TERSEDIA
  const unavailableDates =
    useMemo(
      () => [
        "2026-06-10",
        "2026-06-11",
        "2026-06-18",
        "2026-06-25",
      ],
      []
    );

  const formatDate =
    (date) => {
      return date
        .toISOString()
        .split("T")[0];
    };

  const tileClassName =
    ({ date }) => {
      const formatted =
        formatDate(date);

      return unavailableDates.includes(
        formatted
      )
        ? "bg-red-500 text-white rounded-full"
        : null;
    };

  const tileDisabled =
    ({ date }) =>
      unavailableDates.includes(
        formatDate(date)
      );

  // HARGA BERDASARKAN DURASI
  const totalPrice =
    quantity *
    (selectedDuration === 12
      ? bundle.harga_12_jam
      : bundle.harga_24_jam);

  // BOOKING
  const handleBooking =
    () => {
      navigate(
        "/checkout",
        {
          state: {
            product: {
              id_barang:
                bundle.id,

              nama_barang:
                bundle.nama_barang,

              deskripsi:
                bundle.deskripsi,

              gambar:
                bundle.image,

              isBundle:
                true,
            },

            qty:
              quantity,

            selectedDate,

            selectedDuration,

            totalPrice,
          },
        }
      );
    };

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <div className="grid md:grid-cols-2 gap-10">

          {/* IMAGE */}
          <div className="flex items-center justify-center bg-white rounded-3xl p-6">

            <img
              src={
                bundle.image
              }
              alt={
                bundle.nama_barang
              }
              className="max-h-[400px] max-w-full object-contain"
            />

          </div>

          {/* DETAIL */}
          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              {
                bundle.nama_barang
              }
            </h1>

            <p className="text-gray-600 mt-2">
              {
                bundle.deskripsi
              }
            </p>

            {/* DURASI */}
            <div className="mt-6">

              <h2 className="font-bold text-lg mb-3">
                Pilih Durasi Sewa
              </h2>

              <div className="flex gap-3">

                {/* 12 JAM */}
                <button
                  onClick={() =>
                    setSelectedDuration(
                      12
                    )
                  }
                  className={`flex-1 p-4 rounded-2xl border transition text-left ${
                    selectedDuration ===
                    12
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <p className="font-bold text-lg">
                    12 Jam
                  </p>

                  <p>
                    Rp{" "}
                    {bundle.harga_12_jam.toLocaleString(
                      "id-ID"
                    )}
                  </p>
                </button>

                {/* 24 JAM */}
                <button
                  onClick={() =>
                    setSelectedDuration(
                      24
                    )
                  }
                  className={`flex-1 p-4 rounded-2xl border transition text-left ${
                    selectedDuration ===
                    24
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <p className="font-bold text-lg">
                    24 Jam
                  </p>

                  <p>
                    Rp{" "}
                    {bundle.harga_24_jam.toLocaleString(
                      "id-ID"
                    )}
                  </p>
                </button>

              </div>

            </div>

            {/* SPESIFIKASI */}
            <div className="mt-8">

              <h2 className="font-bold text-2xl mb-4">
                Spesifikasi
              </h2>

              <div className="grid grid-cols-2 gap-2">

                {Object.entries(
                  bundle.spesifikasi
                ).map(
                  (
                    [
                      key,
                      value,
                    ]
                  ) => (
                    <div
                      key={key}
                      className="bg-[#DEDEDE] p-3 rounded-xl text-sm"
                    >
                      <p className="font-bold">
                        {
                          key
                        }
                      </p>

                      <p>
                        {
                          value
                        }
                      </p>
                    </div>
                  )
                )}

              </div>

            </div>

            {/* KALENDER */}
            <div className="mt-8">

              <h2 className="font-bold text-xl mb-4">
                Kalender Ketersediaan
              </h2>

              <div className="border rounded-2xl p-4">

                <Calendar
                  onChange={
                    setSelectedDate
                  }
                  value={
                    selectedDate
                  }
                  tileClassName={
                    tileClassName
                  }
                  tileDisabled={
                    tileDisabled
                  }
                />

              </div>

              <p className="mt-4 font-semibold">
                Tanggal dipilih:
                {" "}
                {selectedDate.toLocaleDateString(
                  "id-ID"
                )}
              </p>

            </div>

            {/* STOCK */}
            <div className="mt-6">
              <h2 className="font-bold">
                Ketersediaan:
              </h2>

              <p
                className={`font-semibold ${
                  bundle.stok ===
                  0
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {
                  bundle.stok
                }{" "}
                tersedia
              </p>
            </div>

            {/* QUANTITY */}
            <div className="mt-8">

              <h2 className="font-bold mb-3">
                Quantity
              </h2>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setQuantity(
                      quantity >
                        1
                        ? quantity -
                            1
                        : 1
                    )
                  }
                  className="bg-[#B2B2B2] px-4 py-2 rounded-lg"
                >
                  -
                </button>

                <span className="font-bold text-xl">
                  {
                    quantity
                  }
                </span>

                <button
                  onClick={() =>
                    setQuantity(
                      quantity <
                        bundle.stok
                        ? quantity +
                            1
                        : quantity
                    )
                  }
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
                Rp{" "}
                {totalPrice.toLocaleString(
                  "id-ID"
                )}
              </p>

            </div>

            {/* BUTTON */}
            <button
              onClick={
                handleBooking
              }
              disabled={
                bundle.stok ===
                  0 ||
                quantity >
                  bundle.stok
              }
              className={`mt-8 w-full py-4 rounded-2xl font-semibold transition ${
                bundle.stok ===
                0
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white"
              }`}
            >
              {bundle.stok ===
              0
                ? "Stok Habis"
                : "Booking Sekarang"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BundlingDetail;