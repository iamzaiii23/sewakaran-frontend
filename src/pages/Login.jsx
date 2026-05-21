import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <div
          onClick={login}
          className="flex justify-center cursor-pointer"
        >
          <Button text="Login dengan Google" />
        </div>

        {user && (
          <div className="mt-6 text-center">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-16 h-16 rounded-full mx-auto mb-3"
            />

            <p className="font-semibold">
              {user.displayName}
            </p>

            <p className="text-gray-500 text-sm">
              {user.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;