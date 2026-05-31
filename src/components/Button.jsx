function Button({ text }) {
  return (
    <button className="bg-primary hover:bg-dark text-white px-6 py-3 rounded-2xl transition duration-300 shadow-md">
      {text}
    </button>
  );
}

export default Button;