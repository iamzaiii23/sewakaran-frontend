import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logoSewakaran from "../assets/logo-sewakaran.jpeg";

function About() {
  return (
    <div className="bg-[#DEDEDE] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-14">

            <div>
              <span className="inline-block bg-[#B2B2B2] px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Tentang Sewakaran
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Solusi Rental Peralatan yang Mudah dan Terpercaya
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                Sewakaran hadir untuk membantu kebutuhan penyewaan
                peralatan acara, komunikasi, audio, dokumentasi,
                dan perlengkapan pendukung lainnya dengan proses
                yang cepat, praktis, dan aman.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={logoSewakaran}
                alt="Logo Sewakaran"
                className="rounded-3xl w-full max-w-md shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Visi
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Menjadi platform penyewaan peralatan terpercaya yang
              memudahkan masyarakat memperoleh kebutuhan acara dan
              dokumentasi dengan pelayanan terbaik.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Misi
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>• Menyediakan peralatan berkualitas.</li>
              <li>• Memberikan proses booking yang mudah.</li>
              <li>• Menjamin keamanan transaksi pelanggan.</li>
              <li>• Menawarkan harga yang terjangkau.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LAYANAN */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Apa yang Bisa Disewa?
          </h2>

          <p className="text-gray-600 text-lg">
            Berbagai kebutuhan acara tersedia dalam satu platform.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-4">🎤</div>
            <h3 className="font-bold text-xl mb-2">
              Audio
            </h3>
            <p className="text-gray-600">
              Sound System, Mic, Stand.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-4">📡</div>
            <h3 className="font-bold text-xl mb-2">
              Komunikasi
            </h3>
            <p className="text-gray-600">
              Handie Talkie dan aksesorinya.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-4">📷</div>
            <h3 className="font-bold text-xl mb-2">
              Dokumentasi
            </h3>
            <p className="text-gray-600">
              Tripod dan perlengkapan pendukung.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="font-bold text-xl mb-2">
              Bundling
            </h3>
            <p className="text-gray-600">
              Paket hemat sesuai kebutuhan acara.
            </p>
          </div>

        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kenapa Memilih Sewakaran?
            </h2>

            <p className="text-gray-600">
              Kami memberikan pengalaman rental yang lebih nyaman.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-2xl mb-3">
                Cepat
              </h3>
              <p className="text-gray-600">
                Proses booking hanya beberapa langkah.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-bold text-2xl mb-3">
                Aman
              </h3>
              <p className="text-gray-600">
                Data dan transaksi pelanggan terlindungi.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-2xl mb-3">
                Berkualitas
              </h3>
              <p className="text-gray-600">
                Peralatan selalu dicek sebelum disewakan.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="bg-[#B2B2B2] rounded-3xl p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Menyewa Peralatan?
          </h2>

          <p className="text-lg mb-8">
            Temukan berbagai kebutuhan acara Anda di Sewakaran.
          </p>

          <Link
            to="/"
            className="inline-block bg-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
          >
            Lihat Katalog
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;