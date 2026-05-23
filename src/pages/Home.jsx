import { useState } from "react";

import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("Semua");

  const products = [
    {
      id: 1,
      title: "Camera Canon",
      category: "Elektronik",
      price: "150.000",
      status: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },

    {
      id: 2,
      title: "Laptop Gaming",
      category: "Gaming",
      price: "250.000",
      status: "Disewa",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      id: 3,
      title: "Drone DJI",
      category: "Fotografi",
      price: "300.000",
      status: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
    },
  ];

  const filteredProducts = products.filter((product) => {

    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Semua" ||
      product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div>

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-blue-600 font-semibold mb-4">
              Platform Rental Barang Modern
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Sewa Barang Jadi
              <span className="text-blue-600">
                {" "}Lebih Mudah
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Sewakaran membantu kamu menyewa berbagai barang kebutuhan harian,
              elektronik, dan perlengkapan lainnya dengan cepat, aman,
              dan terpercaya.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button text="Sewa Sekarang" />

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                Lihat Katalog
              </button>
            </div>

            {/* STATS */}
            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  500+
                </h2>

                <p className="text-gray-500">
                  Barang Tersedia
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  1K+
                </h2>

                <p className="text-gray-500">
                  Penyewa Aktif
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  24/7
                </h2>

                <p className="text-gray-500">
                  Support
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Rental"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* KATALOG */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* HEADING */}
          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-gray-800">
              Katalog Barang
            </h2>

            <p className="text-gray-500 mt-4">
              Temukan berbagai barang terbaik untuk disewa
            </p>

          </div>

          {/* FILTER */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Cari barang..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-96 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-60 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="Semua">
                Semua Kategori
              </option>

              <option value="Elektronik">
                Elektronik
              </option>

              <option value="Gaming">
                Gaming
              </option>

              <option value="Fotografi">
                Fotografi
              </option>

            </select>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
                status={product.status}
              />

            ))}

          </div>

        </div>
      </section>

      {/* BUNDLING */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Paket Bundling Hemat
            </h2>

            <p className="mt-4 text-blue-100">
              Dapatkan paket sewa lebih murah dan praktis
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-xl">

              <h3 className="text-2xl font-bold">
                Content Creator
              </h3>

              <p className="mt-4 text-gray-500">
                Kamera + Tripod + Lighting
              </p>

              <h2 className="text-4xl font-bold text-blue-600 mt-6">
                Rp 350K
              </h2>

              <p className="text-sm text-gray-400">
                / hari
              </p>

              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Ambil Paket
              </button>

            </div>

            {/* CARD 2 */}
            <div className="bg-yellow-400 text-gray-800 rounded-3xl p-8 shadow-2xl scale-105">

              <p className="bg-white inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Paling Populer
              </p>

              <h3 className="text-2xl font-bold">
                Gaming Setup
              </h3>

              <p className="mt-4 text-gray-700">
                Laptop Gaming + Headset + Mouse
              </p>

              <h2 className="text-4xl font-bold mt-6">
                Rp 500K
              </h2>

              <p className="text-sm text-gray-700">
                / hari
              </p>

              <button className="mt-8 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-black transition">
                Ambil Paket
              </button>

            </div>

            {/* CARD 3 */}
            <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-xl">

              <h3 className="text-2xl font-bold">
                Event Package
              </h3>

              <p className="mt-4 text-gray-500">
                Speaker + Mic + Projector
              </p>

              <h2 className="text-4xl font-bold text-blue-600 mt-6">
                Rp 700K
              </h2>

              <p className="text-sm text-gray-400">
                / hari
              </p>

              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Ambil Paket
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Home;