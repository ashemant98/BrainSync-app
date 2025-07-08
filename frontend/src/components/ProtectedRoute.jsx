// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
   const { user } = useAuth();

   // If user is NOT logged in, redirect to login page
   if (!user) {
      return <Navigate to="/" replace />;
   }

   return children;
};

export default ProtectedRoute;
