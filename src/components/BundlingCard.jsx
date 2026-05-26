import { Link } from "react-router-dom";

function BundlingCard({
  id,
  title,
  items,
  price,
  image,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* CONTENT */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>

        {/* ITEMS */}
        <ul className="mt-4 space-y-2 text-gray-600">

          {items.map((item, index) => (
            <li key={index}>
              ✅ {item}
            </li>
          ))}

        </ul>

        {/* PRICE */}
        <h3 className="text-3xl font-bold text-blue-600 mt-6">
          Rp {price}
        </h3>

        <p className="text-sm text-gray-500">
          / paket
        </p>

        {/* BUTTON */}
        <Link to={`/bundling/${id}`}>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">

            Lihat Detail

          </button>

        </Link>

      </div>
    </div>
  );
}

export default BundlingCard;