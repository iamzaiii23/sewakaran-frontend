import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              Sewakaran
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Platform penyewaan barang yang membantu
              pengguna menemukan berbagai kebutuhan
              dengan cepat, aman, dan terpercaya.
            </p>

          </div>

          {/* MENU */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Navigasi
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/booking-status"
                  className="text-gray-300 hover:text-white transition"
                >
                  Booking Status
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Kontak
            </h3>

            <div className="space-y-2 text-gray-300">

              <p>📷 @sewakaran_</p>

              <p>📞 0858-0306-5136</p>

              <p>
                📍 Sekaran, Gunungpati, Kota Semarang, Jawa Tengah
              </p>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">

          <p className="text-sm text-gray-400">
            © 2026 Sewakaran. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;