import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import BundlingCard from "../components/BundlingCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("barang");

  const bundlings = [
    {
      id: 1,
      title: "Bundle",
      description: "Sound, Stand, Mic",
      memberPrice: "30K",
      normalPrice: "50K",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
    },
    {
      id: 2,
      title: "Bundle",
      description: "HT, Earphone, Charger",
      memberPrice: "10K",
      normalPrice: "15K",
      image:
        "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500",
    },
  ];

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        title: "Handie Talkie",
        memberPrice: 8000,
        normalPrice: 12000,
        image:
          "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500",
        status: "Tersedia",
      },
      {
        id: 2,
        title: "Sound System",
        memberPrice: 25000,
        normalPrice: 40000,
        image:
          "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        status: "Tersedia",
      },
      {
        id: 3,
        title: "Tripod",
        memberPrice: 8000,
        normalPrice: 13000,
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        status: "Tersedia",
      },
      {
        id: 4,
        title: "Stand",
        memberPrice: 10000,
        normalPrice: 15000,
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
        status: "Disewa",
      },
      {
        id: 5,
        title: "Mic",
        memberPrice: 10000,
        normalPrice: 15000,
        image:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500",
        status: "Tersedia",
      },
      {
        id: 6,
        title: "Earphone",
        memberPrice: 0,
        normalPrice: 3000,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        status: "Tersedia",
      },
      {
        id: 7,
        title: "Charger System",
        memberPrice: 3000,
        normalPrice: 5000,
        image:
          "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
        status: "Tersedia",
      },
    ];

    setProducts(dummyProducts);
  }, []);

  return (
    <div className="bg-[#DEDEDE] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Sewakaran
              </h1>

              <p className="text-gray-600 text-base md:text-lg">
                Sewakaran adalah jasa peminjaman alat untuk acara,
                kebutuhan dokumentasi, perlengkapan audio,
                dan berbagai kebutuhan lainnya.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700"
                alt="Rental"
                className="rounded-3xl w-full max-w-md"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TAB MENU */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => setActiveTab("barang")}
            className={`w-full sm:w-auto px-8 py-3 rounded-2xl font-semibold transition ${
              activeTab === "barang"
                ? "bg-[#B2B2B2] text-black"
                : "bg-white"
            }`}
          >
            Barang
          </button>

          <button
            onClick={() => setActiveTab("bundling")}
            className={`w-full sm:w-auto px-8 py-3 rounded-2xl font-semibold transition ${
              activeTab === "bundling"
                ? "bg-[#B2B2B2] text-black"
                : "bg-white"
            }`}
          >
            Bundling
          </button>

        </div>
      </section>

      {/* BARANG */}
      {activeTab === "barang" && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </section>
      )}

      {/* BUNDLING */}
      {activeTab === "bundling" && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {bundlings.map((bundle) => (
              <BundlingCard
                key={bundle.id}
                bundle={bundle}
              />
            ))}

          </div>

        </section>
      )}

      <Footer />
    </div>
  );
}

export default Home;