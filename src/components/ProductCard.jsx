import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-[#DEDEDE] rounded-3xl shadow-lg p-4 hover:scale-105 transition duration-300 cursor-pointer">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="text-center text-lg font-semibold text-gray-800 mt-4">
          {product.title}
        </h3>

        {/* PRICE */}
        <p className="text-center text-gray-700 mt-1">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        {/* STATUS */}
        <div className="flex justify-center mt-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              product.status === "Tersedia"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.status}
          </span>
        </div>

      </div>
    </Link>
  );
}

export default ProductCard;