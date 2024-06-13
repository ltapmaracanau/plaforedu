import { useStoreActions, useStoreState } from "easy-peasy";
import {
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
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
import SystemLog from "../components/user-settings/SystemLog.jsx";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import EvaluateChanges from "../components/user-settings/EvaluateChanges.jsx";

const Layout = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const logout = useStoreActions((actions) => actions.adm.logout);

  const giveConsent = (type = "all") => {
    // all or essential
    setCookie(
      "cookieConsent",
      JSON.stringify({
        consentType: type,
        date: new Date(),
      }),
      {
        path: "/",
        secure: true,
        httpOnly: false,
        sameSite: "none",
        maxAge: 60 * 60 * 24 * 365, // expires in 1 year
        domain: import.meta.env.PROD
          ? import.meta.env.VITE_DOMAIN_URL
          : undefined,
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
  const isAnalistaDados = useStoreState((state) => state.adm.isAnalistaDados);
  const isConsultor = useStoreState((state) => state.adm.isConsultor);
  const isServidor = useStoreState((state) => state.adm.isServidor);
  //const isCoordAVA = useStoreState((state) => state.adm.isCoordAVA);
  const isActive = useStoreState((state) => state.adm.isActive);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cursos",
          element: <CoursesPage />,
        },
        {
          path: "/history",
          element: <HistoryPlaforPage />,
        },
        {
          path: "/suporte",
          element: <FaleConosco />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forget",
          element: <ForgotPassword />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
        {
          path: "/denied",
          element: <Denied />,
        },
        {
          path: "/settings",
          element: authenticated ? <SettingsPage /> : <Navigate to="/login" />,
          children: [
            {
              path: "/settings",
              element: <MyProfile />,
            },
            {
              path: "/settings/update-password",
              element: <UpdatePassword />,
            },
            {
              element: isActive ? <Outlet /> : <Navigate to="/denied" />,
              children: [
                {
                  path: "/settings/study-plans",
                  element:
                    isAdm || isCoord || isServidor ? (
                      <StudyPlans />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/study-plans/:id",
                  element:
                    isAdm || isCoord || isServidor ? (
                      <StudyPlanView />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/study-plans/edit/:planId",
                  element:
                    isAdm || isCoord || isServidor ? (
                      <StudyPlanRegister />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/study-plans/new",
                  element:
                    isAdm || isCoord || isServidor ? (
                      <StudyPlanRegister />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/users",
                  element: isAdm ? <UsersList /> : <Navigate to="/denied" />,
                },
                {
                  path: "/settings/pendings",
                  element:
                    isAdm || isCoord || isConsultor ? (
                      <EvaluateChanges />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/courses",
                  element:
                    isAdm || isCoord || isConsultor || isAnalistaDados ? (
                      <CoursesList />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/institutions",
                  element:
                    isAdm || isCoord || isAnalistaDados ? (
                      <InstitutionList />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/categ-comp",
                  element:
                    isAdm || isCoord || isAnalistaDados ? (
                      <CategCompList />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/competences",
                  element:
                    isAdm || isCoord || isAnalistaDados ? (
                      <CompList />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/themes",
                  element:
                    isAdm || isCoord || isAnalistaDados ? (
                      <TemasList />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/subthemes",
                  element:
                    isAdm || isCoord || isAnalistaDados ? (
                      <SubtemasList />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/formative-trails",
                  element:
                    isAdm || isCoord || isAnalistaDados ? (
                      <FormativeTrailsList />
                    ) : (
                      <Navigate to="/denied" />
                    ),
                },
                {
                  path: "/settings/logs",
                  element: isAdm ? (
                    <ListSearchLogs />
                  ) : (
                    <Navigate to="/denied" />
                  ),
                },
                {
                  path: "/settings/log-courses-trails",
                  element: isAdm ? <SystemLog /> : <Navigate to="/denied" />,
                },
              ],
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default CustomRoutes;
