import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-[#DEDEDE] min-h-screen">

      {/* HERO */}
      <section className="bg-[#B2B2B2] text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Tentang Sewakaran
          </h1>

          <p className="text-xl leading-relaxed text-gray-100">

            Sewakaran adalah platform penyewaan peralatan acara,
            audio, komunikasi, dan perlengkapan pendukung lainnya
            yang membantu pelanggan mendapatkan kebutuhan mereka
            dengan mudah, cepat, dan terpercaya.

          </p>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900"
              alt="About Sewakaran"
              className="rounded-3xl shadow-2xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">

              Solusi Rental Peralatan yang Praktis

            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">

              Sewakaran hadir untuk membantu kebutuhan penyewaan
              peralatan acara, komunikasi, dan audio dengan proses
              yang lebih sederhana dan efisien.

              Pelanggan dapat melihat katalog, melakukan booking,
              mengunggah bukti pembayaran, dan memantau status
              penyewaan secara online.

            </p>

            <p className="text-gray-700 leading-relaxed">

              Mulai dari Sound System, Handie Talkie,
              Tripod, Mic Wireless, Headset, Charger,
              hingga perlengkapan pendukung acara lainnya,
              semuanya dapat disewa dengan mudah melalui
              satu platform.

            </p>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

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
            <div className="bg-[#DEDEDE] p-8 rounded-3xl shadow-md hover:shadow-xl transition">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">

                Cepat & Mudah

              </h3>

              <p className="text-gray-700">

                Proses pemesanan barang dapat dilakukan
                secara online hanya dalam beberapa langkah.

              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-[#DEDEDE] p-8 rounded-3xl shadow-md hover:shadow-xl transition">

              <div className="text-5xl mb-5">
                🔒
              </div>

              <h3 className="text-2xl font-bold mb-4">

                Aman & Terpercaya

              </h3>

              <p className="text-gray-700">

                Sistem booking dan pembayaran dirancang
                agar transaksi lebih aman dan terpercaya.

              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-[#DEDEDE] p-8 rounded-3xl shadow-md hover:shadow-xl transition">

              <div className="text-5xl mb-5">
                📦
              </div>

              <h3 className="text-2xl font-bold mb-4">

                Peralatan Lengkap

              </h3>

              <p className="text-gray-700">

                Tersedia berbagai perlengkapan acara,
                komunikasi, dan audio untuk berbagai kebutuhan.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#B2B2B2] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">

            Mulai Sewa Sekarang

          </h2>

          <p className="text-xl text-gray-100 mb-10">

            Temukan berbagai kebutuhan peralatan terbaik
            untuk acara dan aktivitas Anda hanya di Sewakaran.

          </p>

          <button className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">

            Jelajahi Katalog

          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;