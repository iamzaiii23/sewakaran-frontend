import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, provider } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // LOGIN GOOGLE
  const login = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        provider
      );

      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // REGISTER EMAIL PASSWORD
  const register = async (
    email,
    password
  ) => {
    try {
      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      setUser(result.user);

      return result.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // LOGIN EMAIL PASSWORD
  const loginEmail = async (
    email,
    password
  ) => {
    try {
      const result =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      setUser(result.user);

      return result.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // LOGOUT
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,

        login,       // Google Login
        register,    // Register Email
        loginEmail,  // Login Email

        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}