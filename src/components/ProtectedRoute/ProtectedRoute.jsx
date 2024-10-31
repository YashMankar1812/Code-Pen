// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  // Render the protected component if authenticated
  return children;
};

export default ProtectedRoute;
