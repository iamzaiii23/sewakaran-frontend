import { useState, useMemo } from "react";
import { toast } from "react-toastify";

import BookingTable from "../components/BookingTable";
import ConfirmModal from "../components/ConfirmModal";

const fakeAPI = {
  update: (id, status) =>
    new Promise((res) =>
      setTimeout(() => res({ id, status }), 500)
    ),

  delete: (id) =>
    new Promise((res) =>
      setTimeout(() => res({ id }), 500)
    ),
};

function AdminDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [stats] = useState({
    totalBooking: 120,
    pendingPayment: 15,
    availableItems: 350,
  });

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

  const handleActionClick = (type, id) => {
    setAction(type);
    setSelectedId(id);
    setOpenModal(true);
  };

  const resetState = () => {
    setOpenModal(false);
    setAction(null);
    setSelectedId(null);
  };

  const handleConfirm = async () => {
    if (!action || !selectedId) return;

    try {
      setLoading(true);

      const result = await actionMap[action].fn(selectedId);

      toast[actionMap[action].toast](
        `Booking #${result.id} berhasil ${actionMap[action].message}`
      );

      resetState();
    } catch (err) {
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const config = actionMap[action] || {};

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard Admin
        </h1>
        <p className="text-gray-500 mt-2">
          Monitor booking, pembayaran, dan stok barang
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Booking</p>
          <h2 className="text-4xl font-bold text-blue-600 mt-4">
            {stats.totalBooking}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Pending Payment</p>
          <h2 className="text-4xl font-bold text-yellow-500 mt-4">
            {stats.pendingPayment}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Barang Tersedia</p>
          <h2 className="text-4xl font-bold text-green-500 mt-4">
            {stats.availableItems}
          </h2>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-6">
          Data Booking
        </h2>

        <BookingTable onActionClick={handleActionClick} />
      </div>

      {/* MODAL */}
      {openModal && (
        <ConfirmModal
          title={config.label}
          message={`Yakin ingin ${config.message} #${selectedId}?`}
          confirmText={loading ? "Processing..." : "Ya"}
          cancelText="Tidak"
          onClose={resetState}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default AdminDashboard;