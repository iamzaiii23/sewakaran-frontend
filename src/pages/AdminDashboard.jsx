import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import AdminSidebar from "../components/AdminSidebar";
import BookingTable from "../components/BookingTable";
import ConfirmModal from "../components/ConfirmModal";

const fakeAPI = {
  update: (id, status) =>
    new Promise((res) => setTimeout(res, 500)),
  delete: (id) =>
    new Promise((res) => setTimeout(res, 500)),
};

function AdminDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [bookings, setBookings] = useState([]);

  const [stats, setStats] = useState({
    totalBooking: 0,
    pendingPayment: 0,
    availableItems: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const bookingRes = await axios.get(
        "http://127.0.0.1:8000/api/transaksi"
      );

      const barangRes = await axios.get(
        "http://127.0.0.1:8000/api/barang"
      );

      const bookingData = bookingRes.data.data;
      const barangData = barangRes.data.data;

      setBookings(bookingData);

      setStats({
        totalBooking: bookingData.length,

        pendingPayment: bookingData.filter(
          (item) =>
            item.status?.toLowerCase() ===
            "pending"
        ).length,

        availableItems: barangData.filter(
          (item) =>
            item.status?.toLowerCase() ===
            "tersedia"
        ).length,
      });

    } catch (error) {
      console.error(
        "Gagal mengambil dashboard data:",
        error
      );
    }
  };

  const actionMap = useMemo(
    () => ({
      approve: {
        label: "Approve Booking",
        message: "menyetujui booking",
        fn: (id) => fakeAPI.update(id, "approved"),
        toast: "success",
      },

      reject: {
        label: "Reject Booking",
        message: "menolak booking",
        fn: (id) => fakeAPI.update(id, "rejected"),
        toast: "error",
      },

      delete: {
        label: "Hapus Booking",
        message: "menghapus booking",
        fn: (id) => fakeAPI.delete(id),
        toast: "success",
      },
    }),
    []
  );

  const handleActionClick = (
    type,
    id
  ) => {
    setAction(type);
    setSelectedId(id);
    setOpenModal(true);
  };

  const handleConfirm = async () => {
    if (!action || !selectedId)
      return;

    try {
      setLoading(true);

      await actionMap[action].fn(
        selectedId
      );

      toast[
        actionMap[action].toast
      ](
        `Booking #${selectedId} berhasil ${actionMap[action].message}`
      );

      setOpenModal(false);
      setAction(null);
      setSelectedId(null);

    } catch (err) {
      toast.error(
        "Terjadi kesalahan"
      );
    } finally {
      setLoading(false);
    }
  };

  const config = action
    ? actionMap[action]
    : {
        label: "",
        message: "",
      };

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <AdminSidebar />

      <div className="flex-1 p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard Admin
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor booking dan validasi
            pembayaran
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <p className="text-gray-500">
              Total Booking
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-4">
              {stats.totalBooking}
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <p className="text-gray-500">
              Pending Payment
            </p>

            <h2 className="text-4xl font-bold text-yellow-500 mt-4">
              {stats.pendingPayment}
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <p className="text-gray-500">
              Barang Tersedia
            </p>

            <h2 className="text-4xl font-bold text-green-500 mt-4">
              {stats.availableItems}
            </h2>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-6">
            Data Booking
          </h2>

          <BookingTable
            bookings={bookings.map(
              (item) => ({
                id: item.id_transaksi,

                customer:
                  item.penyewa
                    ?.nama_penyewa,

                product:
                  item.barang
                    ?.nama_barang,

                total:
                  item.total_bayar,

                status:
                  item.status,
              })
            )}
            onActionClick={
              handleActionClick
            }
          />

        </div>

        {/* MODAL */}
        {openModal && (
          <ConfirmModal
            title={config.label}
            message={`Yakin ingin ${config.message} #${selectedId}?`}
            confirmText={
              loading
                ? "Processing..."
                : "Ya"
            }
            cancelText="Tidak"
            onClose={() =>
              setOpenModal(false)
            }
            onConfirm={
              handleConfirm
            }
          />
        )}

      </div>

    </div>
  );
}

export default AdminDashboard;