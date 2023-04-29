import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, ProtectedLayout } from "./layout/authLayout";
import Dashboard from "./views/app/dashboard";
import Result from "./views/app/result";
import LoginPage from "./views/user/login";

const router = createBrowserRouter([
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      // other protected routes...
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      // other auth routes...
    ],
  },
]);

export default router;
