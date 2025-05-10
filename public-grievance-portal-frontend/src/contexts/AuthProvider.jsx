import { createContext, useContext, useState, useEffect } from "react";
import { loginApi, registerApi, logoutApi } from "../apis/authApi";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginApi(email, password);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.accessToken);

      setUser(data.user);
      return data;
    } 
    catch (error) {
          console.log(error);
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const data = await registerApi(userData);

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.accessToken));

      setUser(data.user);
      return data;
    } catch (error) {
          console.log(error);
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await logoutApi();

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setUser(null);
    } catch (error) {
        console.log(error);
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = () => {
    return user !== null;
  };


  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,    
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
