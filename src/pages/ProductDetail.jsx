import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import handieTalkie from "../assets/handie-talkie.jpeg";
import soundSystem from "../assets/sound-system.jpeg";
import tripod from "../assets/Tripod.jpeg";
import stand from "../assets/Stand.jpeg";
import mic from "../assets/Mic.jpeg";
import earphone from "../assets/earphone-ht.jpeg";
import chargerSystem from "../assets/charger-system.jpeg";

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
      price12h: 8000,
      price24h: 12000,
      image: handieTalkie,
      specifications: [
        "Frequency Range",
        "UHF 400-438MHz",
        "RF Rated Power 2W",
        "Channel Capacity 16",
        "Operated Voltage 3.7V",
        "Battery 1500mAh",
      ],
    },
    {
      id: 2,
      title: "Sound System",
      price12h: 25000,
      price24h: 40000,
      image: soundSystem,
      specifications: [
        "Frequency Range",
        "UHF 400-438MHz",
        "RF Rated Power 2W",
        "Channel Capacity 16",
        "Operated Voltage 3.7V",
        "Battery 1500mAh",
      ],
    },
    {
      id: 3,
      title: "Tripod",
      price12h: 8000,
      price24h: 13000,
      image: tripod,
      specifications: [
        "Max Height 136 cm",
        "Folded Length 52 cm",
        "Material Aluminium",
        "3-Way Pan Head",
        "Quick Release Plate",
        "Load Capacity 3 kg",
      ],
    },
    {
      id: 4,
      title: "Stand",
      price12h: 10000,
      price24h: 15000,
      image: stand,
      specifications: [
        "Adjustable Height",
        "Material Steel Iron",
        "Tripod Leg Design",
        "Strong Construction",
        "Portable",
      ],
    },
    {
      id: 5,
      title: "Mic Wireless",
      price12h: 10000,
      price24h: 15000,
      image: mic,
      specifications: [
        "Frequency Range",
        "UHF 400-438MHz",
        "RF Rated Power 2W",
        "Channel Capacity 16",
        "Operated Voltage 3.7V",
        "Battery 1500mAh",
      ],
    },
    {
      id: 6,
      title: "Earphone HT",
      price12h: 0,
      price24h: 3000,
      image: earphone,
      specifications: [
        "Frequency Range",
        "UHF 400-438MHz",
        "RF Rated Power 2W",
        "Channel Capacity 16",
        "Operated Voltage 3.7V",
        "Battery 1500mAh",
      ],
    },
    {
      id: 7,
      title: "Charger System",
      price12h: 3000,
      price24h: 5000,
      image: chargerSystem,
      specifications: [
        "Frequency Range",
        "UHF 400-438MHz",
        "RF Rated Power 2W",
        "Channel Capacity 16",
        "Operated Voltage 3.7V",
        "Battery 1500mAh",
      ],
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

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

  const totalPrice = qty * product.price24h;

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="flex items-center justify-center bg-white rounded-3xl p-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[400px] max-w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {product.title}
            </h1>

            <div className="mt-4">
              <p className="text-green-700 font-bold text-xl">
                12 Jam :
                {product.price12h === 0
                  ? " Free"
                  : ` Rp ${product.price12h.toLocaleString("id-ID")}`}
              </p>

              <p className="text-gray-700 text-lg">
                24 Jam :
                {" "}
                Rp {product.price24h.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-bold text-2xl mb-4">
                Spesifikasi
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-[#DEDEDE] p-3 rounded-xl text-sm"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>

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

                    return bookedDates.includes(formatted)
                      ? "bg-red-500 text-white rounded-full"
                      : null;
                  }}
                />
              </div>

              <p className="mt-4 font-semibold">
                Tanggal dipilih :
                {" "}
                {selectedDate.toLocaleDateString("id-ID")}
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

            <div className="mt-8">
              <h2 className="font-bold mb-3">
                Quantity
              </h2>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setQty(qty > 1 ? qty - 1 : 1)
                  }
                  className="bg-[#B2B2B2] px-4 py-2 rounded-lg"
                >
                  -
                </button>

                <span className="font-bold text-xl">
                  {qty}
                </span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="bg-[#B2B2B2] px-4 py-2 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-bold text-xl">
                Total Harga
              </h2>

              <p className="text-3xl font-bold mt-2">
                Rp {totalPrice.toLocaleString("id-ID")}
              </p>
            </div>

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