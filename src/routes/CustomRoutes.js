import React from "react";
import { useStoreState } from "easy-peasy";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

import FAQ from "../pages/FAQ.jsx";
import Login from "../pages/Login.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import HistoryPlaforPage from "../pages/HistoryPlaforPage.jsx";
import CoursesPage from "../pages/CoursesPage.jsx";
import FaleConosco from "../pages/FaleConosco.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import ForgetPassword from "../pages/ForgetPassword.jsx";

const CustomRoutes = () => {
  const authenticated = useStoreState((state) => state.adm.isAuthenticated);

  const ProtectedRoutes = () => {
    return authenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/history" element={<HistoryPlaforPage />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
