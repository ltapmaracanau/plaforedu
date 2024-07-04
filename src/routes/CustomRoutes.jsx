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
import { Button, ConfigProvider, Modal, Space, Typography } from "antd";
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
import { useEffect, useState } from "react";
import EvaluateChanges from "../components/user-settings/EvaluateChanges.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

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

    const [termVisible, setTermVisible] = useState(false);
    const [termPrivacyVisible, setTermPrivacyVisible] = useState(false);

    useEffect(() => {
      setVisible(!cookies.cookieConsent);
    }, [setVisible]);

    const TermCookiesModal = () => {
      return (
        <Modal
          width={"70%"}
          title="Política de Cookies"
          open={termVisible}
          onOk={() => setTermVisible(false)}
          onCancel={() => setTermVisible(false)}
          footer={[
            <Button
              key="ok"
              type="primary"
              onClick={() => setTermVisible(false)}
            >
              OK
            </Button>,
          ]}
        >
          <Typography.Paragraph>
            Este documento apresenta a Política de Cookies do site PlaforEDU,
            projetada para proporcionar um espaço onde servidores podem
            encontrar capacitações com a finalidade de potencializar sua atuação
            na Educação Profissional e Tecnológica, no âmbito da Rede Federal de
            Educação Profissional, Científica e Tecnológica.
          </Typography.Paragraph>

          <Typography.Title level={5}>1. Contextualização</Typography.Title>

          <Typography.Paragraph>
            A presente Política de Cookies do PlaforEDU tem como objetivo
            fornecer orientações sobre como ocorre o tratamento dos cookies
            relativos aos usuários que visitam e utilizam as funcionalidades
            disponíveis nesta plataforma. Cookies são arquivos auxiliares
            geridos pelo seu navegador para “memorizar” a visita a páginas na
            internet.
          </Typography.Paragraph>

          <Typography.Title level={5}>2. Escopo</Typography.Title>

          <Typography.Paragraph>
            A presente Política estabelece as informações relativas ao uso de
            cookies na PlaforEDU, especialmente no que concerne à relação com
            dados pessoais dos Usuários durante a sua navegação.
          </Typography.Paragraph>

          <Typography.Title level={5}>3. Aplicabilidade</Typography.Title>

          <Typography.Paragraph>
            Esta Política busca conferir a transparência e a compreensão, pelos
            usuários, sobre as possíveis maneiras como os seus dados pessoais
            são geridos, por meio dos cookies, em sua interação com a plataforma
            PlaforEDU.
          </Typography.Paragraph>

          <Typography.Title level={5}>4. Objetivos</Typography.Title>

          <Typography.Paragraph>
            São objetivos desta Política de Cookies:
          </Typography.Paragraph>

          <ul>
            <li>
              <Typography.Paragraph>
                Assegurar o compromisso com o cumprimento das legislações de
                proteção de dados pessoais aplicáveis; e
              </Typography.Paragraph>
            </li>
            <li>
              <Typography.Paragraph>
                Informar aos Usuários sobre como ocorrem os tratamentos das suas
                informações, por meio de cookies, durante a utilização da
                PlaforEDU.
              </Typography.Paragraph>
            </li>
          </ul>

          <Typography.Title level={5}>5. Política de Cookies</Typography.Title>

          <Typography.Paragraph>5.1. Definição</Typography.Paragraph>

          <Typography.Paragraph>
            Os cookies são pequenos arquivos de texto depositados por um site
            servidor no dispositivo do usuário (computador, celular, tablets,
            dentre outros) quando da sua visita. Os cookies servem para o site
            lembrar de algumas informações relativas àquela navegação, associar
            e distinguir os usuários.
          </Typography.Paragraph>

          <Typography.Text strong>
            5.2. Cookies usados na PlaforEDU
          </Typography.Text>

          <Typography.Paragraph>
            A PlaforEDU armazena 2 (dois) tipos de cookies distintos, sendo
            eles: (i) operacionais/técnicos; e (ii) analíticos. As informações
            sobre cada tipo de cookies, por categoria, se encontram abaixo.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <Typography.Text strong>1). </Typography.Text> Os cookies técnicos
            se destinam a viabilizar o ato de navegação no website, operando
            para que as funcionalidades mais básicas efetivamente sejam
            oferecidas ao Usuário, tais como:
          </Typography.Paragraph>

          <ul>
            <li>
              <Typography.Paragraph>
                ativar funcionalidades essenciais, como software e antivírus;
              </Typography.Paragraph>
            </li>

            <li>
              <Typography.Paragraph>
                dispor nosso conteúdo de forma adequada ao tamanho da sua tela,
                velocidade de conexão e tipo de navegador;
              </Typography.Paragraph>
            </li>

            <li>
              <Typography.Paragraph>
                lembrar do seu acesso; e
              </Typography.Paragraph>
            </li>

            <li>
              <Typography.Paragraph>
                compreender o seu comportamento de navegação e como a plataforma
                está sendo usada.
              </Typography.Paragraph>
            </li>
          </ul>

          <Typography.Paragraph>
            Normalmente, tais cookies só são configurados em resposta às suas
            ações que correspondem a uma solicitação de serviços, por exemplo:
            definir as suas preferências de privacidade, iniciar sessão ou
            preencher formulários.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <Typography.Text strong>2). </Typography.Text> Já os cookies
            analíticos registram os dados de uso do website para que possamos
            aprimorá-lo futuramente, como os dados de audiência da página e de
            fontes de tráfego.
          </Typography.Paragraph>

          <Typography.Paragraph>
            A PlaforEDU utiliza cookies analíticos do Google Analytics para
            geração de dados estatísticos agregados de uso, sem individualização
            desses.
          </Typography.Paragraph>

          <Typography.Text strong>5.3. Controle de Cookies</Typography.Text>

          <Typography.Paragraph>
            Caso o Usuário não deseje que os cookies mencionados sejam
            utilizados quando da sua navegação no nosso website, é possível
            optar por recusar, desabilitar, ou apagar os registros de cookies
            através das configurações do navegador utilizado. Chamamos a atenção
            para o fato de que, ao fazer isso, algumas áreas, ferramentas e
            funcionalidades poderão ser comprometidas, afetando, dessa forma, a
            experiência do usuário.
          </Typography.Paragraph>

          <Typography.Paragraph>
            É possível desabilitar os cookies diretamente no seu navegador.
          </Typography.Paragraph>
        </Modal>
      );
    };
    // Modal Política de Privacidade
    const TermPrivacyModal = () => {
      return (
        <Modal
          width={"70%"}
          title="Política de Privacidade Repositório PlaforEDU"
          open={termPrivacyVisible}
          onOk={() => setTermPrivacyVisible(false)}
          onCancel={() => setTermPrivacyVisible(false)}
          footer={[
            <Button
              key="ok"
              type="primary"
              onClick={() => setTermPrivacyVisible(false)}
            >
              OK
            </Button>,
          ]}
        >
          <Typography.Title level={5}>1. QUEM SOMOS?</Typography.Title>
          <Typography.Paragraph>
            Somos uma plataforma de ensino que tem como objetivo proporcionar um
            espaço onde os servidores podem encontrar capacitações com a
            finalidade de potencializar sua atuação na Educação Profissional e
            Tecnológica, no âmbito da Rede Federal de Educação Profissional,
            Científica e Tecnológica (RFEPCT).
          </Typography.Paragraph>

          <Typography.Paragraph>
            A PlaforEDU respeita sua privacidade e está comprometida com a
            proteção dos dados pessoais em conformidade com a Lei Geral de
            Proteção de Dados (LGPD), Lei nº 13.709/2018.
          </Typography.Paragraph>

          <Typography.Paragraph>
            Os dados coletados pela PlaforEDU são classificados como dados
            anonimizados, conforme definido pela legislação vigente. Isso
            significa que não realizamos a coleta de dados pessoais dos usuários
            que acessam o sistema.
          </Typography.Paragraph>

          <Typography.Title level={5}>
            2. USO DO GOOGLE ANALYTICS:
          </Typography.Title>

          <Typography.Paragraph>
            Utilizamos o Google Analytics para coletar informações sobre o uso
            da plataforma e para otimizar este serviço e a experiência de nossos
            usuários. O Google Analytics é um serviço de análise web fornecido
            pela Google Inc. (Google), que usa cookies para coletar dados
            anônimos. Através dele, obtemos informações sobre a sua utilização
            do nosso site, que podem ser transmitidas e armazenadas pela Google
            em seus próprios servidores.
          </Typography.Paragraph>

          <Typography.Title level={5}>3. DADOS COLETADOS:</Typography.Title>

          <Typography.Paragraph>
            Através do Google Analytics, coletamos dados de forma anônima. Isso
            inclui informações como páginas visitadas, tempo de visita,
            localização geográfica aproximada, fonte de referência, tipo de
            dispositivo, e sistema operacional. Não coletamos informações que
            permitam identificar pessoalmente o usuário (confirmar endereço de
            IP anônimo).
          </Typography.Paragraph>

          <Typography.Title level={5}>
            4. COOKIES E TECNOLOGIAS SEMELHANTES:
          </Typography.Title>

          <Typography.Paragraph>
            O uso de cookies nos permite melhorar a experiência do usuário em
            nosso site. Os cookies são pequenos arquivos de texto armazenados em
            seu dispositivo que nos ajudam a entender como os visitantes
            interagem com nosso site. Você pode configurar seu navegador para
            recusar todos os cookies ou indicar quando um cookie está sendo
            enviado. Para saber mais, acesse nossa{" "}
            <Typography.Link
              onClick={() => {
                setTermVisible(true);
                setTermPrivacyVisible(false);
              }}
            >
              política de cookies
            </Typography.Link>
            .
          </Typography.Paragraph>

          <Typography.Title level={5}>5. SEGURANÇA DOS DADOS:</Typography.Title>

          <Typography.Paragraph>
            Tomamos medidas para proteger os dados coletados contra acesso não
            autorizado, uso indevido ou divulgação. No entanto, nenhum método de
            transmissão pela internet ou de armazenamento eletrônico é
            totalmente seguro. Quaisquer usos feitos pelo Google ou seus
            parceiros dos Dados do Usuário, coletados por meio do google
            analytics será de responsabilidade única e exclusiva do Google,
            conforme sua própria política de privacidade, que você pode ter
            acesso clicando{" "}
            <Typography.Link
              href="https://policies.google.com/privacy?hl=pt-BR"
              target="_blank"
            >
              aqui
            </Typography.Link>
            .
          </Typography.Paragraph>

          <Typography.Title level={5}>
            6. ALTERAÇÕES À POLÍTICA DE PRIVACIDADE:
          </Typography.Title>

          <Typography.Paragraph>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos.
            Qualquer alteração será efetiva imediatamente após a publicação da
            versão revisada em nosso site.
          </Typography.Paragraph>

          <Typography.Title level={5}>7. CONTATO:</Typography.Title>

          <Typography.Paragraph>
            Se tiver dúvidas sobre nossa Política de Privacidade, por favor,
            entre em contato conosco pelo e-mail plafor@maracanau.ifce.edu.br
          </Typography.Paragraph>
        </Modal>
      );
    };

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
        <Space direction="vertical">
          <Typography.Link
            onClick={() => {
              setTermVisible(true);
            }}
          >
            Política de Cookies
          </Typography.Link>
          <Typography.Link
            onClick={() => {
              setTermPrivacyVisible(true);
            }}
          >
            Política de Privacidade
          </Typography.Link>
        </Space>
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
        <TermCookiesModal />
        <TermPrivacyModal />
      </div>
    ) : null;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ConfigProvider locale={dayjs}>
        <HeaderGov />
        <HeaderHome />
        <ScrollToTop />
        <div
          style={{
            flex: "1",
            display: "contents",
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
