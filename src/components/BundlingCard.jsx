import { Link } from "react-router-dom";

function BundlingCard({ bundle }) {
  return (
    <Link to={`/bundling/${bundle.id}`}>
      <div className="bg-white rounded-3xl shadow-lg p-4 hover:scale-105 transition duration-300">

        <div className="grid grid-cols-2 gap-4 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">

            <img
              src={bundle.image}
              alt={bundle.title}
              className="h-40 object-contain"
            />

          </div>

          {/* CONTENT */}
          <div className="text-center">

            <h3 className="text-2xl font-semibold text-gray-800">
              {bundle.title}
            </h3>

            <p className="text-gray-700 mt-3">
              {bundle.description}
            </p>

            <p className="text-xl font-bold text-gray-800 mt-4">
              {bundle.memberPrice} / {bundle.normalPrice}
            </p>

            <button className="mt-4 bg-[#B2B2B2] hover:bg-[#909090] text-white px-5 py-2 rounded-xl transition">
              Detail
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}

export default BundlingCard;