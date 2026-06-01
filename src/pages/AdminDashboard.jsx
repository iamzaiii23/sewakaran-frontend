import { useState } from "react";
import { toast } from "react-toastify";

import AdminSidebar from "../components/AdminSidebar";
import BookingTable from "../components/BookingTable";
import ConfirmModal from "../components/ConfirmModal";

function AdminDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // dummy stats (nanti ganti API)
  const stats = {
    totalBooking: 120,
    pendingPayment: 15,
    availableItems: 350,
  };

  const handleActionClick = (type, id) => {
    setActionType(type);
    setSelectedId(id);
    setOpenModal(true);
  };

  const handleConfirm = () => {
    if (actionType === "delete") {
      toast.success(`Booking #${selectedId} berhasil dihapus`);
    }

    if (actionType === "approve") {
      toast.success(`Booking #${selectedId} disetujui`);
    }

    if (actionType === "reject") {
      toast.error(`Booking #${selectedId} ditolak`);
    }

    setOpenModal(false);
    setActionType("");
    setSelectedId(null);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* CONTENT */}
      <div className="flex-1 p-8">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard Admin
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor booking dan validasi pembayaran
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <p className="text-gray-500">Total Booking</p>
            <h2 className="text-4xl font-bold text-blue-600 mt-4">
              {stats.totalBooking}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <p className="text-gray-500">Pending Payment</p>
            <h2 className="text-4xl font-bold text-yellow-500 mt-4">
              {stats.pendingPayment}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <p className="text-gray-500">Barang Tersedia</p>
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

          {/* Booking Table (harus support callback action) */}
          <BookingTable onActionClick={handleActionClick} />

        </div>

        {/* CONFIRM MODAL */}
        <ConfirmModal
          open={openModal}
          title={
            actionType === "delete"
              ? "Hapus Booking"
              : actionType === "approve"
              ? "Approve Booking"
              : "Reject Booking"
          }
          message={`Yakin ingin ${
            actionType === "delete"
              ? "menghapus"
              : actionType === "approve"
              ? "menyetujui"
              : "menolak"
          } booking #${selectedId}?`}
          confirmText="Ya, Lanjut"
          onClose={() => setOpenModal(false)}
          onConfirm={handleConfirm}
        />

      </div>

    </div>
  );
}

export default AdminDashboard;