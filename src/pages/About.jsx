import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <section className="bg-blue-600 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Tentang Sewakaran
          </h1>

          <p className="text-xl leading-relaxed text-blue-100">

            Sewakaran adalah platform penyewaan barang modern
            yang membantu pengguna menemukan dan menyewa
            berbagai kebutuhan harian dengan mudah,
            cepat, dan terpercaya.

          </p>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="About"
              className="rounded-3xl shadow-2xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">

              Solusi Rental Barang Masa Kini

            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">

              Dengan perkembangan teknologi digital,
              kebutuhan penyewaan barang kini dapat dilakukan
              secara online tanpa proses yang rumit.

              Sewakaran hadir untuk memberikan pengalaman
              penyewaan barang yang aman, praktis,
              dan efisien bagi semua pengguna.

            </p>

            <p className="text-gray-600 leading-relaxed">

              Mulai dari kamera, laptop, drone,
              hingga perlengkapan event,
              semuanya dapat disewa dengan mudah
              melalui satu platform.

            </p>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-800 mb-4">

              Kenapa Memilih Sewakaran?

            </h2>

            <p className="text-gray-600 text-lg">

              Kami memberikan layanan terbaik untuk kebutuhan rental Anda.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-gray-100 p-8 rounded-3xl shadow-md">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">

                Cepat & Mudah

              </h3>

              <p className="text-gray-600">

                Proses booking barang hanya dalam beberapa menit
                tanpa prosedur yang rumit.

              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-gray-100 p-8 rounded-3xl shadow-md">

              <div className="text-5xl mb-5">
                🔒
              </div>

              <h3 className="text-2xl font-bold mb-4">

                Aman & Terpercaya

              </h3>

              <p className="text-gray-600">

                Sistem validasi dan pembayaran yang aman
                membuat transaksi lebih terpercaya.

              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-gray-100 p-8 rounded-3xl shadow-md">

              <div className="text-5xl mb-5">
                📦
              </div>

              <h3 className="text-2xl font-bold mb-4">

                Banyak Pilihan Barang

              </h3>

              <p className="text-gray-600">

                Tersedia berbagai kategori barang
                sesuai kebutuhan harian maupun profesional.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">

            Mulai Sewa Sekarang

          </h2>

          <p className="text-xl text-blue-100 mb-10">

            Temukan berbagai kebutuhan rental terbaik
            hanya di Sewakaran.

          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">

            Jelajahi Katalog

          </button>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default About;