import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../helpers/sessionStorageUtil";
import Dashboard from "../views/app/dashboard";

const ProtectedLayout = () => {
  const currentUser = getCurrentUser();
  return !currentUser ? <Navigate to="/login" /> : <Dashboard />;
};

const AuthLayout = () => {
  const currentUser = getCurrentUser();
  return currentUser ? <Navigate to="/dashboard" /> : <Outlet />;
};

export { ProtectedLayout, AuthLayout };
