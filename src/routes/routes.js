import React from "react";
import { useStoreState } from "easy-peasy";
import { Routes, Route, Navigate } from "react-router-dom";

import FAQ from "../pages/FAQ.jsx";
import Login from "../pages/Login.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import CoursesPage from "../pages/CoursesPage.jsx";
import FaleConosco from "../pages/FaleConosco.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import ForgetPassword from "../pages/ForgetPassword.jsx";

import { notification } from "antd";

export default function CustomRoutes() {
  const authenticated = useStoreState((state) => state.adm.isAuthenticated);
  const user = useStoreState((state) => state.adm.user);

  const RequireNoAuth = ({ children }) => {
    if (authenticated) {
      return <Navigate to={"/"} />;
    }

    return children;
  };

  const RequireAuth = ({ children }) => {
    if (authenticated) {
      return children;
    }

    return <Navigate to={"/login"} />;
  };

  /* const RequireAdmin = ({ children }) => {

        if (user.roles.includes("ADMINISTRADOR")) {
            return children
        }

        return (<Navigate to={'/'} />)

    } */

  const RequireActive = ({ children }) => {
    if (user.status !== "PENDING") {
      return children;
    }

    notification.warning({
      message: "Acesso não permitido",
      description: "Para acessar você deve alterar sua senha!",
    });

    return <Navigate to={"/settings"} />;
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faleconosco" element={<FaleConosco />} />
      <Route path="/faq" element={<FAQ />} />
      <Route
        path="/cursos"
        element={
          <RequireAuth>
            <RequireActive>
              <CoursesPage />
            </RequireActive>
          </RequireAuth>
        }
      />
      <Route
        path="/login"
        element={
          <RequireNoAuth>
            <Login />
          </RequireNoAuth>
        }
      />
      <Route
        path="/forget"
        element={
          <RequireNoAuth>
            <ForgetPassword />
          </RequireNoAuth>
        }
      />
      <Route
        path="/reset-password"
        element={
          <RequireNoAuth>
            <ResetPassword />
          </RequireNoAuth>
        }
      />
      <Route
        path="/settings"
        element={
          <RequireAuth>
            <SettingsPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
