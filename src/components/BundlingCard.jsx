import { Link } from "react-router-dom";

function BundlingCard({ bundle }) {
  return (
    <Link to={`/bundling/${bundle.id}`}>
      <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 hover:scale-105 transition duration-300">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">

            <img
              src={bundle.image}
              alt={bundle.title}
              className="
                w-full
                max-w-[250px]
                md:max-w-[280px]
                h-48
                md:h-56
                object-cover
                rounded-2xl
              "
            />

          </div>

          {/* CONTENT */}
          <div className="text-center">

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {bundle.title}
            </h3>

            <p className="text-gray-700 mt-3 text-sm md:text-base">
              {bundle.description}
            </p>

            <div className="mt-4">

              <p className="text-sm text-gray-500">
                Harga Member / Normal
              </p>

              <p className="text-lg md:text-xl font-bold text-gray-800">
                {bundle.memberPrice} / {bundle.normalPrice}
              </p>

            </div>

            <button
              className="
                mt-5
                w-full
                md:w-auto
                bg-[#B2B2B2]
                hover:bg-[#909090]
                text-white
                px-6
                py-3
                rounded-xl
                transition
              "
            >
              Detail
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}

export default BundlingCard;