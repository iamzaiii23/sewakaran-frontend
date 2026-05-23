import { Link } from "react-router-dom";

function ProductCard({
  id,
  image,
  title,
  price,
  category,
  status,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300">

      {/* IMAGE */}
      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />

        {/* STATUS */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              status === "Tersedia"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {status}
          </span>
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        <p className="text-sm text-blue-600 font-medium">
          {category}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          {title}
        </h2>

        <div className="flex items-center mt-3">
          ⭐⭐⭐⭐⭐
          <span className="ml-2 text-gray-500 text-sm">
            (120 review)
          </span>
        </div>

        <p className="text-blue-600 text-2xl font-bold mt-4">
          Rp {price}
          <span className="text-sm text-gray-500 font-normal">
            {" "} / hari
          </span>
        </p>

        <Link to={`/product/${id}`}>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Lihat Detail
          </button>
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;