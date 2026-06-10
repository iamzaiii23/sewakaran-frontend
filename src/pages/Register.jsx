import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Semua field harus diisi");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak sama");
      return;
    }

    if (password.length < 6) {
      alert("Password minimal 6 karakter");
      return;
    }

    try {
      setLoading(true);

      await register(email, password);

      alert("Registrasi berhasil!");

      navigate("/login");
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email sudah digunakan");
          break;

        case "auth/invalid-email":
          alert("Format email tidak valid");
          break;

        case "auth/weak-password":
          alert("Password terlalu lemah");
          break;

        default:
          alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#A0A0A0] h-44 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Sewakaran
            </h1>

            <p className="text-white text-sm mt-2">
              Borrowing Services
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">

          <div className="flex justify-center gap-8 mb-8">
            <Link
              to="/login"
              className="text-gray-400 hover:text-blue-500"
            >
              Login
            </Link>

            <button className="text-blue-500 border-b-2 border-blue-500 pb-1">
              Register
            </button>
          </div>

          <form onSubmit={handleRegister}>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-300 py-3 mb-5 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 py-3 mb-5 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border-b border-gray-300 py-3 mb-6 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Sudah punya akun?
            <Link
              to="/login"
              className="text-blue-500 ml-1"
            >
              Login
            </Link>
          </p>

        </div>

        {/* FOOTER */}
        <div className="bg-[#A0A0A0] p-6">
          <div className="bg-white rounded-full w-64 h-32 mx-auto flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Illustration"
              className="h-24"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;