import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const UserContext = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false); // Done loading
  }, []);

  const login = async (firebaseUser) => {
    try {
      const idToken = await firebaseUser.getIdToken(); // important

      const userInfo = {
        name: firebaseUser.displayName,
        email: firebaseUser.email,
      };

      // Store locally
      localStorage.setItem("user", JSON.stringify(userInfo));
      localStorage.setItem("token", idToken);
      setUser(userInfo);

      // Send to backend
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        userInfo,
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

    } catch (err) {
    }
  };

  const logout = () => {
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
