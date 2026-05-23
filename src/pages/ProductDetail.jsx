import { useParams } from "react-router-dom";
import { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ProductDetail() {

  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const product = {
    id,
    title: "Camera Canon EOS",
    category: "Elektronik",
    price: "150.000",
    status: "Tersedia",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description:
      "Kamera profesional dengan kualitas tinggi yang cocok untuk fotografi dan videografi.",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-10 p-8">

          {/* IMAGE */}
          <div>

            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-2xl object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            {/* CATEGORY */}
            <p className="text-blue-600 font-semibold">
              {product.category}
            </p>

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-gray-800 mt-3">
              {product.title}
            </h1>

            {/* STATUS */}
            <div className="mt-4">

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  product.status === "Tersedia"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {product.status}
              </span>

            </div>

            {/* PRICE */}
            <h2 className="text-4xl font-bold text-blue-600 mt-8">

              Rp {product.price}

              <span className="text-lg text-gray-500 font-normal">
                {" "} / hari
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed mt-8">
              {product.description}
            </p>

            {/* QUANTITY */}
            <div className="mt-8">

              <h3 className="font-semibold mb-4">
                Jumlah Sewa
              </h3>

              <div className="flex items-center gap-4">

                {/* MINUS */}
                <button
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : 1)
                  }
                  className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  -
                </button>

                {/* VALUE */}
                <span className="text-xl font-bold">
                  {quantity}
                </span>

                {/* PLUS */}
                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  +
                </button>

              </div>

            </div>

            {/* DATE PICKER */}
            <div className="mt-8">

              <h3 className="font-semibold mb-4">
                Pilih Tanggal Sewa
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {/* START DATE */}
                <div>

                  <p className="text-sm text-gray-500 mb-2">
                    Tanggal Mulai
                  </p>

                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full border border-gray-300 p-3 rounded-xl"
                  />

                </div>

                {/* END DATE */}
                <div>

                  <p className="text-sm text-gray-500 mb-2">
                    Tanggal Selesai
                  </p>

                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="w-full border border-gray-300 p-3 rounded-xl"
                  />

                </div>

              </div>

            </div>

            {/* BUTTON */}
            <button className="mt-10 w-full bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition">

              Sewa Sekarang

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;