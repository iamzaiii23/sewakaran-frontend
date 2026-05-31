import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";

function ProductDetail() {
  const navigate = useNavigate();

  const product = {
    id: 1,
    title: "Earphone HT",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    status: "Tersedia",
  };

  const [qty, setQty] = useState(3);

  const [startDate, setStartDate] = useState(
    new Date()
  );

  const [endDate, setEndDate] = useState(
    new Date()
  );

  const bookedDates = [
    "2026-06-18",
    "2026-06-20",
    "2026-06-25",
  ];

  const totalPrice = qty * product.price;

  const tileClassName = ({ date }) => {
    const formatted = date
      .toISOString()
      .split("T")[0];

    if (bookedDates.includes(formatted)) {
      return "bg-red-500 text-white rounded-full";
    }

    return "text-green-700";
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">

      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6">

        {/* IMAGE */}
        <div className="flex justify-center">

          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain"
          />

        </div>

        {/* TITLE */}
        <h1 className="text-center text-2xl font-bold mt-4">
          {product.title}
        </h1>

        <p className="text-center text-lg text-gray-600">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        {/* SPESIFIKASI */}
        <div className="mt-5 text-center">

          <button className="bg-[#B2B2B2] text-white px-5 py-2 rounded-xl">
            Spesifikasi
          </button>

        </div>

        {/* DETAIL */}
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">

          <div>
            <strong>Frequency Range</strong>
            <p>UHF 400-438MHz</p>
          </div>

          <div>
            <strong>Channel Capacity</strong>
            <p>16</p>
          </div>

          <div>
            <strong>RF Rated Power</strong>
            <p>2W</p>
          </div>

          <div>
            <strong>Battery</strong>
            <p>1500mAh</p>
          </div>

          <div>
            <strong>Operating Voltage</strong>
            <p>3-7V</p>
          </div>

        </div>

        {/* KALENDER */}
        <div className="mt-8">

          <h2 className="font-semibold mb-3 text-center">
            Tanggal Ketersediaan
          </h2>

          <Calendar
            tileClassName={tileClassName}
          />

        </div>

        {/* LEGEND */}
        <div className="flex justify-center gap-6 mt-5">

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full" />
            <span className="text-sm">
              Tersedia
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full" />
            <span className="text-sm">
              Disewa
            </span>
          </div>

        </div>

        {/* TANGGAL */}
        <div className="grid grid-cols-2 gap-4 mt-6">

          <div>

            <label className="text-sm block mb-1">
              Mulai
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-2"
              onChange={(e) =>
                setStartDate(e.target.value)
              }
            />

          </div>

          <div>

            <label className="text-sm block mb-1">
              Selesai
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-2"
              onChange={(e) =>
                setEndDate(e.target.value)
              }
            />

          </div>

        </div>

        {/* QUANTITY */}
        <div className="flex justify-between items-center mt-8">

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                setQty(
                  qty > 1 ? qty - 1 : 1
                )
              }
              className="bg-[#B2B2B2] w-8 h-8 rounded"
            >
              -
            </button>

            <span className="font-semibold">
              {qty} Unit
            </span>

            <button
              onClick={() =>
                setQty(qty + 1)
              }
              className="bg-[#B2B2B2] w-8 h-8 rounded"
            >
              +
            </button>

          </div>

          <div className="font-bold text-lg">

            Rp{" "}
            {totalPrice.toLocaleString(
              "id-ID"
            )}

          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={() =>
            navigate("/checkout")
          }
          className="w-full mt-8 bg-[#B2B2B2] hover:bg-[#909090] text-white py-3 rounded-2xl font-semibold transition"
        >
          Booking Sekarang
        </button>

      </div>

    </div>
  );
}

export default ProductDetail;