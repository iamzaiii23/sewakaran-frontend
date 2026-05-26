import { useParams } from "react-router-dom";
import { useState } from "react";

function BundlingDetail() {

  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const bundle = {
    id,
    title: "Content Creator Package",
    price: 350000,
    items: [
      "Camera Canon",
      "Tripod",
      "Lighting Kit",
    ],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
  };

  const totalPrice = bundle.price * quantity;

  return (
    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-10 p-8">

          {/* IMAGE */}
          <div>

            <img
              src={bundle.image}
              alt={bundle.title}
              className="w-full rounded-2xl object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-blue-600 font-semibold">
              Bundling Package
            </p>

            <h1 className="text-4xl font-bold text-gray-800 mt-3">
              {bundle.title}
            </h1>

            {/* ITEMS */}
            <div className="mt-8">

              <h3 className="font-semibold text-lg mb-4">
                Isi Paket
              </h3>

              <ul className="space-y-3">

                {bundle.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-3 rounded-xl"
                  >
                    ✅ {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* PRICE */}
            <div className="mt-8">

              <h2 className="text-4xl font-bold text-blue-600">
                Rp {bundle.price.toLocaleString()}
              </h2>

              <p className="text-gray-500">
                / paket
              </p>

            </div>

            {/* QUANTITY */}
            <div className="mt-8">

              <h3 className="font-semibold mb-4">
                Jumlah Paket
              </h3>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : 1)
                  }
                  className="bg-gray-200 px-4 py-2 rounded-lg"
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
                  className="bg-gray-200 px-4 py-2 rounded-lg"
                >
                  +
                </button>

              </div>

            </div>

            {/* TOTAL */}
            <div className="mt-10 bg-blue-50 p-6 rounded-2xl">

              <p className="text-gray-500">
                Total Harga
              </p>

              <h2 className="text-4xl font-bold text-blue-600 mt-2">
                Rp {totalPrice.toLocaleString()}
              </h2>

            </div>

            {/* BUTTON */}
            <button className="mt-8 w-full bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition">

              Sewa Bundling

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BundlingDetail;