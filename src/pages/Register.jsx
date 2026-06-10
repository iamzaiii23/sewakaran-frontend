import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate =
    useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const handleRegister =
    async () => {

      if (
        !username ||
        !password ||
        !confirmPassword
      ) {
        alert(
          "Isi semua field"
        );
        return;
      }

      if (
        password !==
        confirmPassword
      ) {
        alert(
          "Password tidak sama"
        );
        return;
      }

      try {
        setLoading(true);

        const response =
          await axios.post(
            "http://127.0.0.1:8000/api/register",
            {
              username,
              password,
            }
          );

        alert(
          response.data
            .message
        );

        navigate(
          "/login"
        );

      } catch (error) {

        console.error(
          error
        );

        alert(
          error.response?.data
            ?.message ||
            "Register gagal"
        );

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

          {/* TAB */}
          <div className="flex justify-center gap-8 mb-8">

            <Link
              to="/login"
              className="text-gray-400"
            >
              Login
            </Link>

            <button className="text-blue-500 border-b-2 border-blue-500 pb-1">
              Register
            </button>

          </div>

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            className="w-full border-b border-gray-300 py-3 mb-5 outline-none"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border-b border-gray-300 py-3 mb-5 outline-none"
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={
              confirmPassword
            }
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="w-full border-b border-gray-300 py-3 mb-8 outline-none"
          />

          {/* REGISTER BUTTON */}
          <button
            onClick={
              handleRegister
            }
            disabled={
              loading
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            {loading
              ? "Loading..."
              : "Register"}
          </button>

          <p className="text-center text-gray-500 mt-8">

            Sudah punya akun?{" "}

            <Link
              to="/login"
              className="text-blue-500"
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