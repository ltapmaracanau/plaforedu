import { useStoreActions, useStoreState } from "easy-peasy";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

import { CloseOutlined } from "@ant-design/icons";

import FAQ from "../pages/FAQ.jsx";
import Login from "../pages/Login.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import HistoryPlaforPage from "../pages/HistoryPlaforPage.jsx";
import CoursesPage from "../pages/CoursesPage.jsx";
import FaleConosco from "../pages/FaleConosco.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import MyProfile from "../components/user-settings/MyProfile.jsx";
import UpdatePassword from "../components/user-settings/UpdatePassword.jsx";
import UsersList from "../components/user-settings/UsersList.jsx";
import TemasList from "../components/user-settings/TemasList.jsx";
import CoursesList from "../components/user-settings/CoursesList.jsx";
import Denied from "../pages/Denied.jsx";
import HeaderHome from "../components/header/HeaderHome.jsx";
import VLibras from "@djpfs/react-vlibras";
import FooterGov from "../components/footer/FooterGov.jsx";
import HeaderGov from "../components/header/HeaderGov.jsx";
import { Button, ConfigProvider, Space, Typography } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import NotFound from "../pages/NotFound.jsx";
import InstitutionList from "../components/user-settings/InstitutionsList.jsx";
import CategCompList from "../components/user-settings/CategCompList.jsx";
import CompList from "../components/user-settings/CompList.jsx";
import SubtemasList from "../components/user-settings/SubtemasList.jsx";
import FormativeTrailsList from "../components/user-settings/FormativeTrailsList.jsx";
import ListSearchLogs from "../components/user-settings/ListSearchLogs.jsx";
import StudyPlans from "../components/user-settings/StudyPlans.jsx";
import StudyPlanView from "../components/user-settings/StudyPlanView.jsx";
import StudyPlanRegister from "../components/user-settings/StudyPlanRegister.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const Layout = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const logout = useStoreActions((actions) => actions.adm.logout);

  const giveConsent = (type = "all") => {
    // all or essential
    if (type === "all") {
      setCookie(
        "cookieConsent",
        JSON.stringify({
          consentType: type,
          date: new Date(),
        }),
        {
          path: "/",
          maxAge: 60 * 60 * 24 * 365, // expires in 1 year
        }
      );
      return;
    }
    setCookie(
      "cookieConsent",
      JSON.stringify({
        consentType: type,
        date: new Date(),
      }),
      {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // expires in 1 year
      }
    );
  };

  const CookieConsentModal = () => {
    const visible = useStoreState(
      (state) => state.adm.cookieConsentModalVisible
    );
    const setVisible = useStoreActions(
      (actions) => actions.adm.setCookieConsentModalVisible
    );

    useEffect(() => {
      setVisible(!cookies.cookieConsent);
    }, [setVisible]);

    return visible ? (
      <div
        style={{
          position: "fixed",
          padding: "20px 24px",
          left: 5,
          bottom: 5,
          backgroundColor: "white",
          borderRadius: "5px",
          maxWidth: "520px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography.Title level={5}>
            Diga-nos se concorda com o uso de cookies
          </Typography.Title>
          <Button
            type="text"
            shape="circle"
            icon={<CloseOutlined />}
            onClick={() => {
              setVisible(false);
            }}
          />
        </div>
        <Typography.Paragraph>
          Este site utiliza cookies para melhorar a experiência do usuário.
          Diga-nos se concorda com o uso de Cookies.
        </Typography.Paragraph>
        <Typography.Link>Política de privacidade</Typography.Link>
        <Space
          size={10}
          direction="horizontal"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              giveConsent("all");
            }}
          >
            Aceitar
          </Button>
          <Button
            type="default"
            onClick={() => {
              giveConsent("essential");
            }}
          >
            Aceitar apenas essenciais
          </Button>
          <Button
            type="default"
            onClick={() => {
              logout();
              setVisible(false);
            }}
          >
            Recusar
          </Button>
        </Space>
      </div>
    ) : null;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
      }}
    >
      <ConfigProvider locale={dayjs}>
        <HeaderGov />
        <HeaderHome />
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <Outlet />
        </div>
        <VLibras />
        <FooterGov />
        <CookieConsentModal />
      </ConfigProvider>
    </div>
  );
};

const CustomRoutes = () => {
  //Definição dos estados controladores de usuários e permissões
  const authenticated = useStoreState((state) => state.adm.isAuthenticated);
  const isAdm = useStoreState((state) => state.adm.isAdm);
  const isCoord = useStoreState((state) => state.adm.isCoord);
  const isAnalDados = useStoreState((state) => state.adm.isAnalDados);
  //const isCoordAVA = useStoreState((state) => state.adm.isCoordAVA);
  const isActive = useStoreState((state) => state.adm.isActive);

  const ProtectedRoutes = () => {
    return authenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/settings" element={<SettingsPage />}>
              <Route index element={<MyProfile />} />
              <Route
                path="/settings/update-password"
                element={<UpdatePassword />}
              />
              <Route
                element={isActive ? <Outlet /> : <Navigate to="/denied" />}
              >
                <Route path="/settings/study-plans" element={<StudyPlans />} />
                <Route
                  path="/settings/study-plans/:id"
                  element={<StudyPlanView />}
                />
                <Route
                  path="/settings/study-plans/edit/:planId"
                  element={<StudyPlanRegister />}
                />
                <Route
                  path="/settings/study-plans/new"
                  element={<StudyPlanRegister />}
                />
                <Route
                  path="/settings/users"
                  element={isAdm ? <UsersList /> : <Navigate to="/denied" />}
                />
                <Route
                  element={
                    isAdm || isAnalDados || isCoord ? (
                      <Outlet />
                    ) : (
                      <Navigate to="/denied" />
                    )
                  }
                >
                  <Route path="/settings/courses" element={<CoursesList />} />
                  <Route
                    path="/settings/institutions"
                    element={<InstitutionList />}
                  />
                  <Route
                    path="/settings/categ-comp"
                    element={<CategCompList />}
                  />
                  <Route path="/settings/competences" element={<CompList />} />
                  <Route path="/settings/themes" element={<TemasList />} />
                  <Route
                    path="/settings/subthemes"
                    element={<SubtemasList />}
                  />
                  <Route
                    path="/settings/formative-trails"
                    element={<FormativeTrailsList />}
                  />
                  <Route path="/settings/logs" element={<ListSearchLogs />} />
                </Route>
              </Route>
            </Route>
          </Route>

          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/history" element={<HistoryPlaforPage />} />
          <Route path="/faleconosco" element={<FaleConosco />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/denied" element={<Denied />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
