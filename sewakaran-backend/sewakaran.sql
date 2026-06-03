-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Jun 2026 pada 10.25
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sewakaran`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id_admin` bigint(20) UNSIGNED NOT NULL,
  `nama_admin` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id_admin`, `nama_admin`, `email`, `password`, `jabatan`, `created_at`, `updated_at`) VALUES
(1, '', '', '', '', NULL, NULL),
(2, 'Administrator', 'admin@gmail.com', '$2y$12$moYLc6.sclQ03C0vHoGfA.R0cpk4NUJbGPiOKp6.fi/eutyf3VAmS', 'Admin', '2026-06-03 06:18:19', '2026-06-03 06:18:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `barangs`
--

CREATE TABLE `barangs` (
  `id_barang` int(10) UNSIGNED NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `harga_12_jam` int(11) NOT NULL,
  `harga_24_jam` int(11) NOT NULL,
  `stok` int(11) NOT NULL DEFAULT 1,
  `gambar` varchar(255) DEFAULT NULL,
  `status` enum('tersedia','disewa') NOT NULL DEFAULT 'tersedia',
  `kategori` varchar(255) DEFAULT NULL,
  `spesifikasi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`spesifikasi`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `barangs`
--

INSERT INTO `barangs` (`id_barang`, `nama_barang`, `deskripsi`, `harga_12_jam`, `harga_24_jam`, `stok`, `gambar`, `status`, `kategori`, `spesifikasi`, `created_at`, `updated_at`) VALUES
(1, 'Handie Talkie', 'HT untuk komunikasi acara', 8000, 12000, 4, 'handie-talkie.jpeg', 'tersedia', 'barang', '{\"Frequency Range\":\"UHF 400-438MHz\",\"RF Rated Power\":\"2W\",\"Channel Capacity\":\"16\",\"Battery\":\"1500mAh\"}', '2026-06-02 13:16:48', '2026-06-02 22:50:51'),
(2, 'Sound System', 'Speaker acara', 25000, 40000, 2, 'sound-system.jpeg', 'tersedia', 'barang', '{\"Power\":\"300W\",\"Input\":\"Bluetooth + AUX\"}', '2026-06-02 13:16:48', '2026-06-02 22:33:49'),
(3, 'Tripod', 'Tripod kamera', 8000, 13000, 4, 'tripod.jpeg', 'tersedia', 'barang', '{\"Height\":\"180cm\",\"Material\":\"Aluminium\"}', '2026-06-02 13:16:48', '2026-06-02 13:16:48'),
(4, 'Stand', 'Stand mic', 10000, 15000, 2, NULL, 'tersedia', 'barang', '{\"Height\":\"200cm\"}', '2026-06-02 21:24:11', '2026-06-02 21:24:11'),
(5, 'Mic Wireless', 'Mic acara', 10000, 15000, 0, NULL, 'disewa', 'barang', '{\"Type\":\"Wireless\"}', '2026-06-02 21:24:39', '2026-06-02 22:03:58'),
(6, 'Earphone HT', 'Earphone komunikasi', 0, 3000, 5, NULL, 'tersedia', 'barang', '{\"Connector\":\"3.5mm\"}', '2026-06-02 21:24:46', '2026-06-02 22:03:09'),
(7, 'Charger System', 'Charger HT', 3000, 5000, 4, NULL, 'tersedia', 'barang', '{\"Power\":\"12V\"}', '2026-06-02 21:24:52', '2026-06-02 21:24:52'),
(8, 'test dulu', 'lorem ipsum', 10000, 18000, 10, 'uploads/1780471443_shiroko-coba jelaskan.jpg', 'tersedia', 'barang', NULL, '2026-06-03 00:24:03', '2026-06-03 00:24:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_05_27_221610_create_barangs_table', 1),
(5, '2026_05_27_221611_create_admins_table', 1),
(6, '2026_05_27_221611_create_penyewas_table', 1),
(7, '2026_05_27_221611_create_transaksis_table', 1),
(8, '2026_05_28_042149_create_personal_access_tokens_table', 1),
(9, '2026_06_02_204108_add_bukti_pembayaran_to_transaksis_table', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `penyewas`
--

CREATE TABLE `penyewas` (
  `id_penyewa` bigint(20) UNSIGNED NOT NULL,
  `nama_penyewa` varchar(100) NOT NULL,
  `no_hp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `penyewas`
--

INSERT INTO `penyewas` (`id_penyewa`, `nama_penyewa`, `no_hp`) VALUES
(1, 'Putra', '08123456789'),
(2, 'awawaw', '2441241412'),
(3, 'awawaw', '2441241412'),
(4, 'hahahm', '082308765443'),
(5, 'toyib', '008231234567'),
(6, 'brmm', '123456789'),
(7, 'brmm', '123456789'),
(8, 'bbnmb', '123445678910'),
(9, 'bbnmb', '123445678910'),
(10, 'bbnmb', '123445678910'),
(11, 'Farhn', '123456789');

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Admin', 2, 'auth_token', '6e25e47fb98807974519261e12e035122ce619007f71520093391304b57d1739', '[\"*\"]', NULL, NULL, '2026-06-02 23:28:45', '2026-06-02 23:28:45'),
(2, 'App\\Models\\Admin', 2, 'auth_token', '90b54d4da5e736317ba4e8d9e5ff56b3db45fa24527adb52b68a61bd447001b8', '[\"*\"]', NULL, NULL, '2026-06-02 23:51:45', '2026-06-02 23:51:45'),
(3, 'App\\Models\\Admin', 2, 'auth_token', '05d6cc749abf5e38c22f03b19119d76e195e6d820ade87287aa0ef4c828b6833', '[\"*\"]', NULL, NULL, '2026-06-02 23:56:54', '2026-06-02 23:56:54'),
(4, 'App\\Models\\Admin', 2, 'auth_token', '8eeeeb2592e6eb9db3d735e2280f54e1c5f54d5f98034d17f2573e3428a8a3c9', '[\"*\"]', NULL, NULL, '2026-06-02 23:57:43', '2026-06-02 23:57:43'),
(5, 'App\\Models\\Admin', 2, 'auth_token', '36f7d677774cd25447fc84c7cff374cd78880727e7c957805cc18d29e7853cfb', '[\"*\"]', NULL, NULL, '2026-06-03 00:19:21', '2026-06-03 00:19:21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksis`
--

CREATE TABLE `transaksis` (
  `id_transaksi` int(10) UNSIGNED NOT NULL,
  `id_barang` int(10) UNSIGNED NOT NULL,
  `id_admin` bigint(20) UNSIGNED DEFAULT NULL,
  `id_penyewa` bigint(20) UNSIGNED NOT NULL,
  `tgl_transaksi` date NOT NULL,
  `tanggal_sewa` date NOT NULL,
  `tanggal_kembali` date NOT NULL,
  `jumlah` int(11) NOT NULL DEFAULT 1,
  `total_bayar` int(11) NOT NULL,
  `tanggal_bayar` date DEFAULT NULL,
  `status` enum('pending','dibayar','selesai','dibatalkan') NOT NULL DEFAULT 'pending',
  `bukti_pembayaran` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `transaksis`
--

INSERT INTO `transaksis` (`id_transaksi`, `id_barang`, `id_admin`, `id_penyewa`, `tgl_transaksi`, `tanggal_sewa`, `tanggal_kembali`, `jumlah`, `total_bayar`, `tanggal_bayar`, `status`, `bukti_pembayaran`, `created_at`, `updated_at`) VALUES
(2, 1, NULL, 1, '2026-06-02', '2026-06-03', '2026-06-04', 1, 12000, '2026-06-02', 'dibatalkan', '1780433415_shiroko-coba jelaskan.jpg', '2026-06-02 13:22:50', '2026-06-02 14:03:34'),
(3, 1, NULL, 1, '2026-06-02', '2026-06-03', '2026-06-04', 2, 24000, NULL, 'dibatalkan', NULL, '2026-06-02 13:25:28', '2026-06-02 22:03:12'),
(4, 6, NULL, 4, '2026-06-03', '2026-06-10', '2026-06-10', 1, 3000, '2026-06-03', 'dibatalkan', '1780462809_shiroko-coba jelaskan.jpg', '2026-06-02 22:00:08', '2026-06-02 22:03:09'),
(5, 5, NULL, 5, '2026-06-03', '2026-06-29', '2026-06-29', 3, 45000, '2026-06-03', 'dibayar', '1780463038_tutup botol_real_02.jpeg', '2026-06-02 22:03:58', '2026-06-02 22:04:18'),
(6, 2, NULL, 7, '2026-06-03', '2026-06-13', '2026-06-13', 1, 40000, '2026-06-03', 'dibayar', '1780464830_shiroko-coba jelaskan.jpg', '2026-06-02 22:33:49', '2026-06-02 22:52:09'),
(7, 1, NULL, 8, '2026-06-03', '2026-06-18', '2026-06-18', 1, 12000, NULL, 'dibatalkan', NULL, '2026-06-02 22:50:05', '2026-06-02 22:50:51'),
(8, 1, NULL, 11, '2026-06-03', '2026-06-16', '2026-06-16', 1, 12000, '2026-06-03', 'dibayar', '1780465835_shiroko-coba jelaskan.jpg', '2026-06-02 22:50:35', '2026-06-02 22:52:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_admin`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indeks untuk tabel `barangs`
--
ALTER TABLE `barangs`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `penyewas`
--
ALTER TABLE `penyewas`
  ADD PRIMARY KEY (`id_penyewa`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `transaksis_id_barang_foreign` (`id_barang`),
  ADD KEY `transaksis_id_admin_foreign` (`id_admin`),
  ADD KEY `transaksis_id_penyewa_foreign` (`id_penyewa`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id_admin` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `barangs`
--
ALTER TABLE `barangs`
  MODIFY `id_barang` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `penyewas`
--
ALTER TABLE `penyewas`
  MODIFY `id_penyewa` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  MODIFY `id_transaksi` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  ADD CONSTRAINT `transaksis_id_admin_foreign` FOREIGN KEY (`id_admin`) REFERENCES `admins` (`id_admin`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaksis_id_barang_foreign` FOREIGN KEY (`id_barang`) REFERENCES `barangs` (`id_barang`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaksis_id_penyewa_foreign` FOREIGN KEY (`id_penyewa`) REFERENCES `penyewas` (`id_penyewa`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
