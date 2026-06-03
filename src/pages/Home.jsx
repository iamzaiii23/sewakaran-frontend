import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import BundlingCard from "../components/BundlingCard";

import heroImage from "../assets/logo-sewakaran.jpeg";

import handieTalkie from "../assets/handie-talkie.jpeg";
import soundSystem from "../assets/sound-system.jpeg";
import tripod from "../assets/Tripod.jpeg";
import stand from "../assets/Stand.jpeg";
import mic from "../assets/Mic.jpeg";
import earphone from "../assets/earphone-ht.jpeg";
import charger from "../assets/charger-system.jpeg";

function Home() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("barang");
  const [loading, setLoading] = useState(true);

  const bundlings = [
    {
      id: 1,
      title: "Bundle Audio",
      description: "Sound System, Stand, Mic",
      price12h: 30000,
      price24h: 50000,
      image: soundSystem,
    },
    {
      id: 2,
      title: "Bundle Komunikasi",
      description: "HT, Earphone, Charger",
      price12h: 10000,
      price24h: 15000,
      image: handieTalkie,
    },
  ];

  const imageMap = {
    "Handie Talkie": handieTalkie,
    "Sound System": soundSystem,
    "Tripod": tripod,
    "Stand": stand,
    "Mic Wireless": mic,
    "Earphone HT": earphone,
    "Charger System": charger,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/barang"
      );

      const dataBarang = response.data.data.map((item) => ({
        id: item.id_barang,
        title: item.nama_barang,
        price12h: item.harga_12_jam,
        price24h: item.harga_24_jam,

        image:
          imageMap[item.nama_barang] ||
          heroImage,

        status:
          item.status === "tersedia"
            ? "Tersedia"
            : "Disewa",
      }));

      setProducts(dataBarang);
    } catch (error) {
      console.error("Gagal ambil data barang:", error);
    } finally {
      setLoading(false);
    }
  };

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
                src={heroImage}
                alt="Logo Sewakaran"
                className="w-72 md:w-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TAB */}
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

      {/* PRODUK */}
      {activeTab === "barang" && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
          {loading ? (
            <div className="text-center text-xl font-semibold">
              Loading...
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
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