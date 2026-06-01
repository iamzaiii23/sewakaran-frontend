import { useEffect } from "react";

function ConfirmModal({
  open,
  title = "Konfirmasi",
  message = "Apakah kamu yakin?",
  onClose,
  onConfirm,
  confirmText = "Ya",
  cancelText = "Batal",
}) {
  // ESC to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={onClose} // klik background untuk close
    >
      {/* MODAL BOX */}
      <div
        className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6"
        onClick={(e) => e.stopPropagation()} // biar klik dalam tidak close
      >

        {/* TITLE */}
        <h2
          id="modal-title"
          className="text-xl font-bold text-gray-800"
        >
          {title}
        </h2>

        {/* MESSAGE */}
        <p
          id="modal-description"
          className="text-gray-600 mt-3"
        >
          {message}
        </p>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border hover:bg-gray-100 transition"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
          >
            {confirmText}
          </button>

        </div>

      </div>
    </div>
  );
}

export default ConfirmModal;