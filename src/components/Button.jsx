function Button({
  text,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary hover:bg-dark text-white px-6 py-3 rounded-2xl transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;