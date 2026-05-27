import { useEffect, useState } from "react";

import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import BundlingCard from "../components/BundlingCard";
import Footer from "../components/Footer";

function Home() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // FETCH PRODUCTS
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        // DUMMY DATA
        const dummyProducts = [
          {
            id: 1,
            title: "Camera Canon EOS",
            price: 150000,
            image:
              "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            status: "Tersedia",
          },
          {
            id: 2,
            title: "Laptop Gaming",
            price: 250000,
            image:
              "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
            status: "Disewa",
          },
          {
            id: 3,
            title: "Drone DJI",
            price: 300000,
            image:
              "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
            status: "Tersedia",
          },
        ];

        setProducts(dummyProducts);

      } catch (err) {

        console.log(err);

        setError(
          "Gagal mengambil data produk"
        );

      } finally {

        setLoading(false);
      }
    };

    fetchProducts();

  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">

              Sewa Barang Jadi
              <span className="text-blue-600">
                {" "}Lebih Mudah
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-600">

              Sewakaran membantu kamu menyewa berbagai barang kebutuhan harian dengan cepat, aman, dan terpercaya.

            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <Button text="Sewa Sekarang" />

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">

                Lihat Katalog

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
              alt="Rental"
              className="rounded-3xl shadow-2xl w-full max-w-lg"
            />

          </div>

        </div>

      </section>

      {/* KATALOG */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="flex justify-between items-center mb-10">

            <h2 className="text-4xl font-bold text-gray-800">
              Katalog Barang
            </h2>

          </div>

          {/* LOADING */}
          {loading && (

            <div className="text-center text-xl text-gray-500">
              Loading...
            </div>

          )}

          {/* ERROR */}
          {error && (

            <div className="bg-red-100 text-red-600 p-4 rounded-xl">
              {error}
            </div>

          )}

          {/* PRODUCT GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>

      {/* BUNDLING */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <h2 className="text-4xl font-bold text-gray-800 mb-10">

            Paket Bundling

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <BundlingCard
              title="Paket Content Creator"
              price={450000}
              items={[
                "Camera Canon",
                "Tripod",
                "Lighting",
              ]}
            />

            <BundlingCard
              title="Paket Gaming"
              price={600000}
              items={[
                "Laptop Gaming",
                "Mouse Gaming",
                "Headset",
              ]}
            />

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Home;