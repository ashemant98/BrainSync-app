import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// 1️⃣ Create Context
const AuthContext = createContext();

// 2️⃣ useAuth hook to access auth anywhere
export const useAuth = () => useContext(AuthContext);

// 3️⃣ Provider component to wrap your app
export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null); // store user info
   const [token, setToken] = useState(null); // store token

   // 🔐 Login function
   const login = (userData, jwt) => {
      setUser(userData);
      setToken(jwt);
      localStorage.setItem("token", jwt); // Optional: store token
   };

   // 🚪 Logout function
   const logout = () => {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
   };

   // 🔁 Auto-login if token exists in localStorage
   useEffect(() => {
      const savedToken = localStorage.getItem("token");
      if (savedToken && !user) {
         setToken(savedToken);
      }
   }, [user]);

   return (
      <AuthContext.Provider value={{ user, token, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};
