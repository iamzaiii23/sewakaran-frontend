import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingAdmin, setLoadingAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleAdminLogin = async () => {
    try {
      setLoadingAdmin(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "admin_token",
        response.data.token
      );

      localStorage.setItem(
        "admin_data",
        JSON.stringify(response.data.data)
      );

      navigate("/admin");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login gagal"
      );
    } finally {
      setLoadingAdmin(false);
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
            <button className="text-blue-500 border-b-2 border-blue-500 pb-1">
              Login
            </button>

            <button className="text-gray-400">
              Register
            </button>
          </div>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border-b border-gray-300 py-3 mb-5 outline-none"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border-b border-gray-300 py-3 mb-5 outline-none"
          />

          <div className="flex justify-between text-sm mb-6">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember password
            </label>

            <span className="text-blue-500 cursor-pointer">
              Forgot password
            </span>
          </div>

          {/* LOGIN ADMIN */}
          <button
            onClick={handleAdminLogin}
            disabled={loadingAdmin}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition mb-4"
          >
            {loadingAdmin
              ? "Loading..."
              : "Login Admin"}
          </button>

          {/* LOGIN GOOGLE */}
          <button
            onClick={login}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Login with Google
          </button>

          {/* GOOGLE ICON */}
          <div className="mt-8 text-center">

            <p className="text-gray-500 mb-4">
              or connect with
            </p>

            <button
              onClick={login}
              className="mx-auto w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Google"
                className="w-8 h-8"
              />
            </button>

          </div>

          {user && (
            <div className="mt-8 text-center">

              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />

              <h3 className="font-bold">
                {user.displayName}
              </h3>

              <p className="text-gray-500 text-sm">
                {user.email}
              </p>

              <Link
                to="/dashboard"
                className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-lg"
              >
                Masuk Dashboard
              </Link>

            </div>
          )}

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

export default Login;