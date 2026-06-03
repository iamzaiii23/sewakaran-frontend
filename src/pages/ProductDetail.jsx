import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import axios from "axios";

import "react-calendar/dist/Calendar.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  const [qty, setQty] = useState(1);
  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
    fetchUnavailableDates();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/barang/${id}`
      );

      setProduct(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUnavailableDates = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/barang/${id}/unavailable-dates`
      );

      setBookedDates(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

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

  const totalPrice =
    qty * product.harga_24_jam;

  return (
    <div className="min-h-screen bg-[#DEDEDE] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-10">

          {/* IMAGE */}
          <div className="flex items-center justify-center bg-white rounded-3xl p-6">
            <img
              src={`http://127.0.0.1:8000/images/${product.gambar}`}
              alt={product.nama_barang}
              className="max-h-[400px] max-w-full object-contain"
            />
          </div>

          {/* DETAIL */}
          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              {product.nama_barang}
            </h1>

            <p className="text-gray-600 mt-2">
              {product.deskripsi}
            </p>

            {/* HARGA */}
            <div className="mt-4">
              <p className="text-green-700 font-bold text-xl">
                12 Jam :
                {product.harga_12_jam === 0
                  ? " Free"
                  : ` Rp ${product.harga_12_jam.toLocaleString("id-ID")}`}
              </p>

              <p className="text-gray-700 text-lg">
                24 Jam :
                {" "}
                Rp{" "}
                {product.harga_24_jam.toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>

            {/* SPESIFIKASI */}
            <div className="mt-8">
              <h2 className="font-bold text-2xl mb-4">
                Spesifikasi
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {Object.entries(
                  product.spesifikasi || {}
                ).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-[#DEDEDE] p-3 rounded-xl text-sm"
                  >
                    <p className="font-bold">
                      {key}
                    </p>

                    <p>{value}</p>
                  </div>
                ))}
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
                      date
                        .toISOString()
                        .split("T")[0];

                    return bookedDates.includes(
                      formatted
                    )
                      ? "bg-red-500 text-white rounded-full"
                      : null;
                  }}
                />
              </div>

              <p className="mt-4 font-semibold">
                Tanggal dipilih :
                {" "}
                {selectedDate.toLocaleDateString(
                  "id-ID"
                )}
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
                    setQty(
                      qty > 1
                        ? qty - 1
                        : 1
                    )
                  }
                  className="bg-[#B2B2B2] px-4 py-2 rounded-lg"
                >
                  -
                </button>

                <span className="font-bold text-xl">
                  {qty}
                </span>

                <button
                  onClick={() =>
                    setQty(qty + 1)
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

            {/* BOOK */}
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