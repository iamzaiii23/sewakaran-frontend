function Card({ title, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-blue-600 font-semibold mt-2">
          Rp {price}
        </p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Sewa
        </button>
      </div>
    </div>
  );
}

export default Card;