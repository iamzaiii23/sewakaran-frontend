import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [remember, setRemember] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    const savedEmail =
      localStorage.getItem(
        "remember_email"
      );

    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleLogin =
    async () => {

      if (
        !email ||
        !password
      ) {
        alert(
          "Username/Email dan Password wajib diisi!"
        );
        return;
      }

      try {
        setLoading(true);

        const response =
          await axios.post(
            "http://127.0.0.1:8000/api/login",
            {
              email,
              password,
            }
          );

        const data =
          response.data;

        // =====================
        // REMEMBER EMAIL
        // =====================
        if (remember) {
          localStorage.setItem(
            "remember_email",
            email
          );
        } else {
          localStorage.removeItem(
            "remember_email"
          );
        }

        // =====================
        // LOGIN ADMIN
        // =====================
        if (
          data.role ===
          "admin"
        ) {

          localStorage.setItem(
            "admin_token",
            data.token
          );

          localStorage.setItem(
            "admin_data",
            JSON.stringify(
              data.data
            )
          );

          alert(
            "Login Admin berhasil 🔥"
          );

          navigate(
            "/admin"
          );

          return;
        }

        // =====================
        // LOGIN USER
        // =====================
        if (
          data.role ===
          "user"
        ) {

          localStorage.setItem(
            "user_token",
            data.token || ""
          );

          localStorage.setItem(
            "user_data",
            JSON.stringify(
              data.data
            )
          );

          alert(
            "Login berhasil 🔥"
          );

          // balik homepage
          navigate("/");

          // refresh state
          window.location.reload();

          return;
        }

        alert(
          "Role tidak dikenali"
        );

      } catch (error) {

        console.error(
          error
        );

        alert(
          error.response?.data
            ?.message ||
            "Login gagal"
        );

      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-[#DEDEDE] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl bg-white">

        {/* HEADER */}
        <div className="bg-[#A9A9A9] h-[180px] flex flex-col justify-center items-center">

          <h1 className="text-5xl font-bold text-white">
            Sewakaran
          </h1>

          <p className="text-white mt-2 text-lg">
            Borrowing Services
          </p>

        </div>

        {/* CONTENT */}
        <div className="bg-white px-9 py-10">

          {/* TAB */}
          <div className="flex justify-center gap-10 mb-10">

            <button className="text-blue-500 border-b-2 border-blue-500 pb-1 text-xl">
              Login
            </button>

            <Link
              to="/register"
              className="text-gray-400 text-xl hover:text-gray-600 transition"
            >
              Register
            </Link>

          </div>

          {/* EMAIL / USERNAME */}
          <div className="mb-8">

            <input
              type="text"
              placeholder="Username / Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full border-b border-gray-300 py-3 text-lg outline-none bg-transparent"
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-6">

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full border-b border-gray-300 py-3 text-lg outline-none bg-transparent"
            />

          </div>

          {/* REMEMBER */}
          <div className="flex justify-between items-center text-sm mb-8">

            <label className="flex items-center gap-2 text-gray-600">

              <input
                type="checkbox"
                checked={
                  remember
                }
                onChange={() =>
                  setRemember(
                    !remember
                  )
                }
              />

              Remember password

            </label>

            <button className="text-blue-500 hover:underline">
              Forgot password
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={
              handleLogin
            }
            disabled={
              loading
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            {loading
              ? "Loading..."
              : "Login"}
          </button>

          {/* GOOGLE */}
          <div className="mt-10 text-center">

            <p className="text-gray-500 mb-6 text-lg">
              atau masuk menggunakan
            </p>

            <button
              onClick={() =>
                alert(
                  "Google Login Coming Soon"
                )
              }
              className="mx-auto w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Google"
                className="w-9 h-9"
              />

            </button>

          </div>

        </div>

        {/* FOOTER */}
        <div className="bg-[#A9A9A9] py-8">

          <div className="bg-white rounded-full w-[260px] h-[120px] mx-auto flex items-center justify-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User"
              className="h-24"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;