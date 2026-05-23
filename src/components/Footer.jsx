function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Sewakaran
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Platform rental barang modern yang membantu
            kamu menyewa berbagai kebutuhan dengan mudah
            dan terpercaya.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Menu
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Katalog</li>
            <li>Login</li>
          </ul>
        </div>

        {/* CATEGORY */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Kategori
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Elektronik</li>
            <li>Kamera</li>
            <li>Laptop</li>
            <li>Event</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Kontak
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Email: support@sewakaran.com</li>
            <li>Phone: +62 812 3456 7890</li>
            <li>Semarang, Indonesia</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 Sewakaran. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;