import { createContext, useContext, useState } from "react";

import { signInWithPopup, signOut } from "firebase/auth";

import { auth, provider } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}