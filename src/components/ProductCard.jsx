import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 h-full">

      <div className="w-full h-48 bg-white flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="p-4 md:p-5 flex flex-col justify-between h-[240px]">

        <div>

          <h2 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2">
            {product.title}
          </h2>

          <div className="mt-3 space-y-1">

            <p className="text-green-700 font-semibold text-sm md:text-base">
              12 Jam: Rp {(product.price12h || 0).toLocaleString("id-ID")}
            </p>

            <p className="text-gray-600 text-sm md:text-base">
              24 Jam: Rp {(product.price24h || 0).toLocaleString("id-ID")}
            </p>

          </div>

          <div className="mt-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                product.status === "Tersedia"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.status}
            </span>
          </div>

        </div>

        <Link
          to={`/product/${product.id}`}
          className="block mt-5 text-center bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-3 rounded-2xl transition"
        >
          Lihat Detail
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;