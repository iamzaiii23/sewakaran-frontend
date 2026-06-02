function EmptyState({
  icon = "📭",
  title = "Data tidak ditemukan",
  description = "Tidak ada data yang bisa ditampilkan saat ini.",
  actionText,
  onAction,
}) {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 text-center"
      role="status"
      aria-live="polite"
    >

      <div className="text-6xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        {description}
      </p>

      {actionText && onAction && (
        <button
          onClick={onAction}
          className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-xl transition"
        >
          {actionText}
        </button>
      )}

    </div>
  );
}

export default EmptyState;