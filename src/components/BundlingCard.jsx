import { Link } from "react-router-dom";

function BundlingCard({ bundle }) {
  return (
    <Link to={`/bundling/${bundle.id}`}>
      <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition">

        <div className="grid md:grid-cols-2 gap-6 items-center">

          <div className="w-full h-52 flex items-center justify-center bg-white rounded-2xl">
            <img
              src={bundle.image}
              alt={bundle.title}
              className="max-h-full max-w-full object-contain rounded-2xl"
            />
          </div>

          <div className="text-center">

            <h3 className="text-xl font-semibold">
              {bundle.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {bundle.description}
            </p>

            <p className="mt-4 text-sm text-green-700 font-semibold">
              12 Jam: Rp {(bundle.price12h || 0).toLocaleString("id-ID")}
            </p>

            <p className="text-sm text-gray-600">
              24 Jam: Rp {(bundle.price24h || 0).toLocaleString("id-ID")}
            </p>

            <button className="mt-5 w-full bg-[#B2B2B2] hover:bg-[#8f8f8f] text-white py-3 rounded-xl transition">
              Detail
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}

export default BundlingCard;