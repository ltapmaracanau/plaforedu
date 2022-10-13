import AuthAxios from "./AuthAxios";

export const login = (payload = { username: "", password: "" }) =>
  AuthAxios.post("/sessions", {
    email: payload.username,
    password: payload.password,
  })
    .then((response) => response.data)
    .catch((error) => ({
      error: true,
      message: error.response.data
        ? error.response.data.message
        : "Usuário e/ou senha incorretos!",
    }));

export const createUser = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post("/users/new", {
      cpf: payload.cpf,
      email: payload.email,
      institution: payload.institution,
      name: payload.name,
      phone: payload.phone,
      roles: payload.roles,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const resendCredentials = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post(`/users/${payload.id}/resend-credentials`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const updateUser = (payload) =>
  new Promise((resolve) => {
    AuthAxios.put(`/profile/${payload.id}/update`, {
      cpf: payload.cpf,
      email: payload.email,
      institution: payload.institution,
      name: payload.name,
      phone: payload.phone,
      roles: payload.roles,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const blockUser = (payload) =>
  new Promise((resolve) => {
    AuthAxios.patch(`/users/${payload.id}/block`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const archiveUser = (payload) =>
  new Promise((resolve) => {
    AuthAxios.patch(`/users/${payload.id}/archive`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const activeUser = (payload) =>
  new Promise((resolve) => {
    AuthAxios.patch(`/users/${payload.id}/active`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const registerCourse = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post("/courses/new", {
      name: payload.name,
      description: payload.description,
      hours: payload.hours,
      link: payload.link,
      institutionId: payload.institutionId,
      accessibilities: payload.accessibilities,
      itineraries: payload.itineraries,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const registerCatComp = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post("/competencies-category/new", {
      name: payload.name,
      description: payload.description,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const registerComp = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post("/competencies/new", {
      name: payload.name,
      competenciesCategoryIds: payload.competenciesCategoryIds,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const registerTheme = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post("/themes/new", {
      name: payload.name,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const registerSubtheme = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post("/sub-themes/new", {
      name: payload.name,
      themeIds: payload.themeIds,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const updateCourse = (payload) =>
  new Promise((resolve) => {
    AuthAxios.put(`/courses/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
      hours: payload.hours,
      link: payload.link,
      institutionId: payload.institutionId,
      accessibilities: payload.accessibilities,
      itineraries: payload.itineraries,
    })
      .then(() => {
        resolve({});
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const registerInstitution = (payload) =>
  new Promise((resolve) => {
    AuthAxios.post("/institutions/new", {
      name: payload.name,
      abbreviation: payload.abbreviation,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const updateInstitution = (payload) =>
  new Promise((resolve) => {
    AuthAxios.put(`/institutions/${payload.id}/update`, {
      name: payload.name,
      abbreviation: payload.abbreviation,
    })
      .then(() => {
        resolve({});
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const forgetPassword = (payload = { username: "" }) =>
  new Promise((resolve) => {
    AuthAxios.post("/password/forgot", {
      email: payload.username,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const resetPassword = (payload = { token: "", password: "" }) =>
  new Promise((resolve) => {
    AuthAxios.post("/password/reset", {
      token: payload.token,
      password: payload.password,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const updatePassword = (
  payload = { oldPassword: "", newPassword: "" }
) =>
  new Promise((resolve) => {
    AuthAxios.patch("/password/update", {
      oldPassword: payload.oldPassword,
      newPassword: payload.newPassword,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getRoles = () =>
  new Promise((resolve) => {
    AuthAxios.get("/roles/list")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getItinerarios = () =>
  new Promise((resolve) => {
    AuthAxios.get("/itineraries/list")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getAcessibilidades = () =>
  new Promise((resolve) => {
    AuthAxios.get("/accessibilities/list")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getInstituicoes = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/institutions/all?search=${payload.query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getThemes = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/themes/list?search=${payload.query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });
export const getSubthemes = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/sub-themes/list?search=${payload.query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });
export const getCompetencias = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/competencies/list?search=${payload.query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getCatComp = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/competencies-category/list?search=${payload.query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getCursos = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/courses/all?search=${payload.query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getUsers = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/users/all?search=${payload.query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getUniqueUser = (payload) =>
  new Promise((resolve) => {
    AuthAxios.get(`/profile/${payload.id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const getMyProfile = () =>
  new Promise((resolve) => {
    AuthAxios.get("/profile/me")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve({
          error: true,
          message: error.response.data
            ? error.response.data.message
            : "Algo deu errado!",
        });
      });
  });

export const cursosDefault = [
  {
    id: 1,
    itinerario: 1,
    title: "APRESENTAÇÃO DA SETEC/MEC",
    descricao:
      "Apresentação da Setec/MEC (Secretário, Diretores e Coordenadores-Gerais): Boas-vindas da Setec; principais programas e ações desenvolvidos pela Secretaria.",
    cargaHoraria: 40,
    instCert: 1,
    possuiAcessibilidade: "Não",
    link: "",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [260],
    },
  },
  {
    id: 2,
    itinerario: 1,
    title: "Iniciação ao Serviço Público nos Institutos Federais ",
    descricao:
      "Conheça os Institutos Federais e os conceitos básicos que todo servidor público precisa saber.",
    cargaHoraria: 80,
    instCert: 2,
    possuiAcessibilidade: "Não",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4393ex",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [260],
    },
  },
  {
    id: 3,
    itinerario: 1,
    title: "As cotas raciais como direito de reparação",
    descricao:
      "Neste MOOC serão apresetandas as temáticas relacionada a Grupos sociais alijados ao longo dos tempo; Mito da democracia racial; Estatística da segregação e a lei 12.711 enquanto medida de reparação",
    cargaHoraria: 20,
    instCert: 3,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 4,
    itinerario: 1,
    title: "Por que as cotas raciais são necessárias?",
    descricao:
      "Neste MOOC será discutido o porquê as cotas raciais são necessárias.",
    cargaHoraria: 20,
    instCert: 3,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 5,
    itinerario: 1,
    title: "Introdução à modalidade EaD",
    descricao:
      "Ementa: Introdução à Educação a Distância. Definição de Ambiente Virtual de Ensino e Aprendizagem de conceitos e configurações importantes do Moodle. Conhecer as principais características da sala de aula virtual e se familiarizar com as principais atividades oferecidas pelo Moodle. Conhecer os principais recursos de feedback e como ter acesso às suas notas.",
    cargaHoraria: 20,
    instCert: 4,
    possuiAcessibilidade: "Não",
    link: "https://virtual.ifg.edu.br/local/staticpage/view.php?page=cursos%0d",
    obs: "",
    filter: {
      competencias: [54],
      subtemas: [236],
    },
  },
  {
    id: 6,
    itinerario: 1,
    title: "Desmistificando o SIGAA: Orientações Básicas",
    descricao:
      "O curso Desmistificando do SIGAA: Orientações Básicas disponibiliza tutoriais em vídeo que auxiliam no acesso ao Sistema Integrado de Gestão de Atividades Acadêmicas . Esse sistema possibilita aos docentes acessar a Turma Virtual, plataforma on-line que será utilizada para disponibilizar os cursos técnicos e de graduação aprovados como Atividades Pedagógicas Não Presenciais (ANPNs).",
    cargaHoraria: 20,
    instCert: 5,
    possuiAcessibilidade: "Não",
    link: "https://moodle.ifrj.edu.br/enrol/index.php?id=393",
    obs: "Apenas Servidores do IFRJ poderão se inscrever, verificar abertura para todos os usuarios do Plafor.",
    filter: {
      competencias: [54],
      subtemas: [233],
    },
  },
  {
    id: 7,
    itinerario: 1,
    title: "Trabalho Remoto e Teletrabalho",
    descricao:
      'O trabalho remoto já é uma realidade, pensando nisso, a Enap e a Endeavor prepararam este curso para apresentar diversas estratégias e dicas que facilitam o seu dia a dia, a organização do trabalho individual e do trabalho em equipe. Quer saber mais? Você pode ser inscrever neste curso gratuito e aberto na EVG, assistir o vídeo do GNPapo promovido pelo laboratório de inovação da Enap, disponível com acesso livre em "Conteúdo Relacionado" ou, ainda, acessar a página da Campanha #contecomigo #suavizeacurva que é uma iniciativa da Secretaria de Gestão e Desempenho de Pessoal (SGP).',
    cargaHoraria: 10,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/293/",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [261],
    },
  },
  {
    id: 8,
    itinerario: 1,
    title: "Teletrabalho e Educação a Distância ",
    descricao:
      "O desafio de transformação da realidade de trabalho está fazendo com que pessoas e organizações adaptem seus processos de trabalho. Pensando nisso, a Enap traz mais uma oportunidade de capacitação com este curso desenvolvido pelo CEPERJ, instituição parceria da EV.G.",
    cargaHoraria: 80,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/301",
    obs: "",
    filter: {
      competencias: [54],
      subtemas: [362],
    },
  },
  {
    id: 9,
    itinerario: 1,
    title: "Uso do SEI",
    descricao:
      "Este curso apresenta as principais funcionalidades do Sistema Eletrônico de Informações (SEI), utilizado na Administração Pública federal para aprimorar a gestão documental e facilitar o acesso de servidores e cidadãos às informações institucionais, propiciando celeridade, segurança e economicidade. O objetivo do curso é capacitar as pessoas que atuam na gestão de documentos para utilizar o SEI e usufruir dos seus benefícios no dia a dia de trabalho.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/74/",
    obs: "",
    filter: {
      competencias: [54],
      subtemas: [233],
    },
  },
  {
    id: 10,
    itinerario: 1,
    title:
      "Sistemas governamentais- Sistema de Concessão de Diárias e Passagens - SCDP",
    descricao:
      "Os cursos busca capacitar os profissionais que atuam na administração pública federal, direta, autarquias, fundações e profissionais da administração pública federal indireta (empresa pública) a efetuarem os procedimentos relacionados ao deslocamento de pessoal no Sistema de Concessão de Diárias e Passagens (SCDP).",
    cargaHoraria: 25,
    instCert: 7,
    possuiAcessibilidade: "Não",
    link: "https://cursos.poca.ufscar.br/course/search.php?search=SCDP",
    obs: "Fechar acordo com a UFSCAR",
    filter: {
      competencias: [54],
      subtemas: [233],
    },
  },
  {
    id: 11,
    itinerario: 1,
    title: "Ética e Serviço Público",
    descricao:
      "Neste curso, serão apresentados os principais fundamentos de ética e suas relações com os desafios enfrentados pelo setor público. A conduta das pessoas interfere no funcionamento das organizações e traz impactos para a sociedade. Por essa razão, o desenvolvimento da consciência ética é fundamental para garantir o respeito ao interesse público, à cidadania, ao estado de direito e à democracia. A proposta central do curso é capacitar as pessoas para que tenham conduta ética ao oferecerem e utilizarem serviços públicos.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/4",
    obs: "",
    filter: {
      competencias: [32],
      subtemas: [241],
    },
  },
  {
    id: 12,
    itinerario: 1,
    title: "Ética e Administração Pública",
    descricao:
      "Objetivo: Conceituar ética e cidadania e propor uma reflexão sobre a importância dos temas para o indivíduo, o cidadão e a Administração Pública.",
    cargaHoraria: 40,
    instCert: 8,
    possuiAcessibilidade: "Não",
    link: "https://saberes.senado.leg.br/course/index.php?categoryid=260",
    obs: "Solicitar a escola do senado a oferta por tempo indeterminado ao curso",
    filter: {
      competencias: [32],
      subtemas: [241],
    },
  },
  {
    id: 13,
    itinerario: 1,
    title: "Assédio Moral e Sexual no Trabalho",
    descricao:
      "Objetivo: Debater abertamente sobre Assédio Moral e Sexual no Trabalho visa melhorar as condições de trabalho e as relações entra os trabalhadores, melhorando, assim a qualidade de vida dos indivíduos e a sua produtividade. Tornar o ambiente de trabalho livre de qualquer prática ofensiva é a meta principal.",
    cargaHoraria: 60,
    instCert: 8,
    possuiAcessibilidade: "Não",
    link: "https://saberes.senado.leg.br/",
    obs: "Solicitar a escola do senado a oferta por tempo indeterminado ao curso",
    filter: {
      competencias: [32],
      subtemas: [241],
    },
  },
  {
    id: 14,
    itinerario: 1,
    title: "Cidadania e Direitos Humanos",
    descricao:
      "O curso busca contribuir para uma formação básica em direitos humanos e cidadania, proporcionando treinamento e ambientação em temas introdutórios de direitos humanos e convergindo para conselhos de políticas públicas. Os conceitos básicos desse campo são discutidos com referências constantes às instituições participativas e às interfaces socioestatais. Por ser um curso introdutório, não há pretensão de esgotar debates ou promover visão abrangente sobre todas as variantes da literatura na área.",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/134",
    obs: "",
    filter: {
      competencias: [32],
      subtemas: [241],
    },
  },
  {
    id: 15,
    itinerario: 1,
    title:
      "Noções da Lei nº 8.112/90 e alterações (direitos, deveres e benefícios)",
    descricao:
      "A Lei nº 8.112/90, conhecida como Regime Jurídico Único dos servidores da União, das autarquias e das fundações públicas federais, sofreu diversas alterações com o passar dos anos. Busca-se, com este curso, instruir os interessados quanto aos direitos e deveres dos servidores públicos federais, dirimir possíveis dúvidas e apresentar algumas peculiaridades sobre os temas abordados na legislação.",
    cargaHoraria: 40,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/405/",
    obs: "",
    filter: {
      competencias: [1],
      subtemas: [227],
    },
  },
  {
    id: 16,
    itinerario: 1,
    title:
      "Plano de Carreira dos Cargos Técnico-Administrativo em Educação - PCCTAE",
    descricao:
      "Este curso pretende apresentar o Plano de Carreira dos Técnicos-Administrativos em Educação, explicitando os níveis de classificação, padrão de vencimento, cargo, nível de capacitação, ambiente organizacional, os tipos de progressão e ações de desenvolvimento vinculadas ao PCCTAE.",
    cargaHoraria: 20,
    instCert: 9,
    possuiAcessibilidade: "Não",
    link: "https://cursoslivres.unifap.br/course/plano-de-carreira-dos-cargos-tecnico-administrativo-em-educacao-pcctae/intro",
    obs: "O curso atende parcialmente, o módulo 3 é muito específico para a Universidade Federal do Amapá",
    filter: {
      competencias: [1],
      subtemas: [227],
    },
  },
  {
    id: 17,
    itinerario: 1,
    title: "PROCESSO ADMINISTRATIVO DISCIPLINAR NA PRÁTICA",
    descricao:
      "Este curso pretende apresentar o Plano de Carreira dos Técnicos-Administrativos em Educação, explicitando os níveis de classificação, padrão de vencimento, cargo, nível de capacitação, ambiente organizacional, os tipos de progressão e ações de desenvolvimento vinculadas ao PCCTAE.",
    cargaHoraria: 20,
    instCert: 9,
    possuiAcessibilidade: "Não",
    link: "https://cursoslivres.unifap.br/course/processo-administrativo-disciplinar-na-pratica/intro",
    obs: "",
    filter: {
      competencias: [1],
      subtemas: [242],
    },
  },
  {
    id: 18,
    itinerario: 1,
    title: "Introdução à Libras",
    descricao:
      "Este curso busca proporcionar ao estudante um conhecimento introdutório acerca das Libras (Língua Brasileira de Sinais) e dos aspectos culturais da concepção social da surdez, trazendo conceitos gerais sobre a comunidade surda, o uso da língua de sinais, bem como contextualização geral do funcionamento gramatical de uma língua visuo-gestual como é a Libras.",
    cargaHoraria: 30,
    instCert: 7,
    possuiAcessibilidade: "Não",
    link: "https://cursos.poca.ufscar.br/login/index.php",
    obs: "",
    filter: {
      competencias: [32],
      subtemas: [378],
    },
  },
  {
    id: 19,
    itinerario: 1,
    title: "INTRODUÇÃO AO ORÇAMENTO PÚBLICO, LICITAÇÕES E FINANÇAS PÚBLICAS",
    descricao:
      'Nesse módulo você conhecerá os conceitos básicos de orçamento, licitações e contratos aplicados à realidade do serviço público. O módulo utiliza os seguintes materiais "Noções de Contabilidade Pública" de Carlos Alberto de Ávila, Ciro Bächtold, e Sérgio de Jesus Vieira; "Licitações" de Luciane Schulz Fonseca; "Contratos e Convênios" de Luciane Schulz Fonseca; e "Prestação de Contas" de Heloísa Caldas Ferreira; todos produzidos para a Rede e-Tec Brasil e disponível no Proedu.',
    cargaHoraria: 40,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/116",
    obs: "",
    filter: {
      competencias: [27],
      subtemas: [264],
    },
  },
  {
    id: 20,
    itinerario: 1,
    title: "Gestão Pública na Qualidade do atendimento ao cidadão",
    descricao:
      "Este curso apresenta a contextualização e os principais modelos da avaliação de qualidade de serviços que podem contribuir para a melhoria da gestão dos serviços públicos, sejam eles presenciais ou digitais. O conteúdo ainda aborda alguns dos instrumentos brasileiros de avaliação aplicados aos serviços públicos.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/368/",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [243],
    },
  },
  {
    id: 21,
    itinerario: 1,
    title: "Princípios da Lei de Responsabilidade Fiscal",
    descricao:
      "Os principais pontos da Lei de Responsabilidade Fiscal (LRF) são tratados neste curso com a finalidade de esclarecer aos participantes sobre a aplicabilidade, os fundamentos e os instrumentos que colaboram para a efetividade dessa lei. Além disso, são apresentadas questões importantes trazidas pela Emenda Constitucional n.º 95/2016, conhecida como Novo Regime Fiscal (NRF).",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/341/",
    obs: "",
    filter: {
      competencias: [27],
      subtemas: [264],
    },
  },
  {
    id: 22,
    itinerario: 1,
    title: "Elaboração de Indicadores de Desempenho Institucional",
    descricao:
      "O curso integra o Programa de Desenvolvimento de Gerentes Operacionais (PDGO) e tem como objetivo capacitar os servidores públicos para estruturar sistemas de medição do desempenho institucional, dos pontos de vista estratégico e gerencial.",
    cargaHoraria: 25,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/604",
    obs: "",
    filter: {
      competencias: [25],
      subtemas: [247],
    },
  },
  {
    id: 23,
    itinerario: 1,
    title: "Educação Especial e Inclusão",
    descricao:
      "Este curso apresenta as principais leis sobre inclusão de alunos com deficiência no ensino regular. Aponta a definição de integração, inclusão, síndrome, doenças, distúrbios e transtornos. Demonstra o conceito de deficiência intelectual, síndrome de Down, autismo, surdez, cegueira, deficiência física ou motora e a paralisia cerebral. Considera escola para todos, princípios da cultura inclusiva, formação do professor, sala de aula inclusiva, família na educação escolar dos alunos com deficiência e educação inclusiva na educação infantil.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Não",
    link: "https://mundi.ifsul.edu.br/portal/educacao-especial-e-inclusao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 24,
    itinerario: 1,
    title: "Educação Especial: histórico, políticas e práticas",
    descricao:
      "O curso busca proporcionar um conhecimento introdutório acerca dos aspectos historicos, políticos e práticos da Educação Especial. Do mesmo modo, tem a intenção de desconstruir alguns aspectos relacionados a preconceitos prévios a pessoas com deficiências, transtorno do espectro do autismo, altas habilidades/ superdotação para tentar reconhecer as suas diferenças e suas potencialidades.",
    cargaHoraria: 30,
    instCert: 11,
    possuiAcessibilidade: "parcial",
    link: "https://cursos.poca.ufscar.br/login/index.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 25,
    itinerario: 1,
    title: "ASSÉDIO MORAL! - CARTILHA INFORMATIVA",
    descricao:
      "Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Moral.",
    cargaHoraria: 0,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [241, 320],
    },
  },
  {
    id: 26,
    itinerario: 1,
    title: "ASSÉDIO SEXUAL - CARTILHA INFORMATIVA",
    descricao:
      "Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Sexual.",
    cargaHoraria: 0,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [241, 320],
    },
  },
  {
    id: 27,
    itinerario: 1,
    title: "Manual de Conduta do Servidor Público Federal",
    descricao:
      "Este manual tem por finalidade: a) organizar as disposições relacionadas à conduta profissional, buscando trazer uma abordagem atualizada, clara e objetiva sobre os temas relacionados; b) disseminar boas práticas que se constituem no padrão de comportamento que é esperado do servidor; e c) auxiliar no aprimoramento de uma cultura organizacional fundamentada no princípio da integridade e na busca constante de alto desempenho nos órgãos e entidades do Poder Executivo Federal. ",
    cargaHoraria: 0,
    instCert: 38,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [354],
    },
  },
  {
    id: 28,
    itinerario: 1,
    title: "Gerenciamento de Projetos e Portfólios de Projetos - Guia",
    descricao:
      "Guia Referencial para Gerenciamento de Projetos e Portfólios de Projetos Este guia orienta a utilização da abordagem de gerenciamento de projetos baseada nas características de cada projeto, no ambiente no qual está contido, nas habilidades da equipe e em outros parâmetros. O documento compila conceitos, modelos e indicações das melhores práticas atuais e amplamente disseminadas a respeito de gerenciamento de projetos e de portfólios de projetos.",
    cargaHoraria: 0,
    instCert: 38,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/extensao/enrol/index.php?id=21",
    obs: "Trata-se de manual de orientações",
    filter: {
      competencias: [28],
      subtemas: [264],
    },
  },
  {
    id: 29,
    itinerario: 2,
    title: "Introdução à Lei Brasileira de Proteção de Dados Pessoais",
    descricao:
      "O curso apresenta um panorama sobre a nova legislação brasileira de proteção de dados pessoais (Lei 13.709/18), compreendendo os temas mais importantes para a sua implementação, como: fundamentos e campo de aplicação, princípios e direitos do titular, responsabilidades dos agentes, aspectos internacionais, segurança e a Autoridade Nacional de Proteção de Dados, entre outros. O objetivo do curso é capacitar as pessoas para entenderem, de forma rápida e acessível, o funcionamento e diretrizes básicas expostas na nova lei geral de proteção de dados do Brasil.",
    cargaHoraria: 10,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/153",
    obs: "",
    filter: {
      competencias: [31],
      subtemas: [271],
    },
  },
  {
    id: 30,
    itinerario: 2,
    title: "Introdução ao Sistema Sigepe - AFD",
    descricao:
      "Apresenta conceitos e diretrizes relativas ao Assentamento Funcional Digital e o fluxo operacional de manutenção do Sistema. Esse curso apresenta noções básicas de gestão de documentação: conceitos, normativos legais, tratamento documental, entre outros. É voltado para a capacitação de servidores das Unidades de Recursos Humanos (UPAGs) que são os responsáveis pela execução das atividades diárias relacionadas a documentação dos servidores lotados nos órgãos.",
    cargaHoraria: 10,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/153",
    obs: "",
    filter: {
      competencias: [27],
      subtemas: [233],
    },
  },
  {
    id: 31,
    itinerario: 2,
    title: "As cotas raciais como direito de reparação",
    descricao:
      "Neste MOOC serão apresetandas as temáticas relacionada a Grupos sociais alijados ao longo dos tempo; Mito da democracia racial; Estatística da segregação e a lei 12.711 enquanto medida de reparação",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 32,
    itinerario: 2,
    title: "Por que as cotas raciais são necessárias?",
    descricao:
      "Neste MOOC será discutido o porquê as cotas raciais são necessárias.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 33,
    itinerario: 2,
    title: "A invisibilidade da mulher negra no contexto acadêmico",
    descricao:
      'Neste MOOC serão apresentadas as temáticas relacionadas ao "protagonismos" da mulher negra; a invisibilidade e violência simbólica; o silenciamento e a solidão; a importância do trabalho das comissões de Heteroidentificação e Ubuntu: Eu sou porque nós somos, a luta é de todos!',
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 34,
    itinerario: 2,
    title: "Acesso e representatividade nos espaços acadêmicos",
    descricao:
      "Neste MOOC serão apresentadas as temáticas relacionadas a atuação em atividade de ações afirmativas; Representatividade; Tipos de acesso ao Ensino Superior na UFPel; PAVE - Por mais vagas para as Escolas Públicas e os Dados dos cotistas do Centro de Engenharias",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 35,
    itinerario: 2,
    title: "A valorização da cultura afro-brasileira na sala de aula",
    descricao:
      "Neste MOOC será discutido avalorização da cultura afro-brasileira na sala de aula",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 36,
    itinerario: 2,
    title: "Como elaborar editais e construir pareceres",
    descricao:
      "Neste MOOC serão apresentadas as temáticas relacionadas a introdução aos pareceres; Parecer de provimento – análise das razões do candidato; Contextualização sócio-histórica; Contextualização jurídica e o Amparo constitucional e finalização do parecer",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 37,
    itinerario: 2,
    title: "Elaboração de Indicadores de Desempenho Institucional",
    descricao:
      "O curso integra o Programa de Desenvolvimento de Gerentes Operacionais (PDGO) e tem como objetivo capacitar os servidores públicos para estruturar sistemas de medição do desempenho institucional, dos pontos de vista estratégico e gerencial.",
    cargaHoraria: 25,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/604",
    obs: "",
    filter: {
      competencias: [31],
      subtemas: [247],
    },
  },
  {
    id: 38,
    itinerario: 2,
    title: "Redação Oficial: Tópicos Essenciais",
    descricao:
      "Este curso apresenta reflexão sobre a arte de escrever bem, enfatiza a leitura e a escrita, regras básicas da gramática, tipologia e planejamento textual. Traz os conceitos de redação oficial contidos no Manual de Redação oficial da Presidência da República e boas práticas de redação que servem para qualquer gênero textual. O objetivo do curso é capacitar os agentes públicos da administração pública federal.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/452",
    obs: "",
    filter: {
      competencias: [57],
      subtemas: [378],
    },
  },
  {
    id: 39,
    itinerario: 2,
    title: "Gestão de Conflitos e Negociação",
    descricao:
      "Resolver diferenças e divergências, e tomar decisões de forma colaborativa são formas efetivas de preservar e ampliar os objetivos a serem alcançados nas organizações. A temática é relevante uma vez que o desenvolvimento das competências de resolução de conflitos e de negociação tem se mostrado fundamental para o adequado desempenho e atuação de gestores e servidores em suas rotinas de trabalho.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/372",
    obs: "",
    filter: {
      competencias: [10, 30, 35, 59],
      subtemas: [354],
    },
  },
  {
    id: 40,
    itinerario: 2,
    title: "Ética e Serviço Público",
    descricao:
      "Neste curso, serão apresentados os principais fundamentos de ética e suas relações com os desafios enfrentados pelo setor público. A conduta das pessoas interfere no funcionamento das organizações e traz impactos para a sociedade. Por essa razão, o desenvolvimento da consciência ética é fundamental para garantir o respeito ao interesse público, à cidadania, ao estado de direito e à democracia. A proposta central do curso é capacitar as pessoas para que tenham conduta ética ao oferecerem e utilizarem serviços públicos.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/4",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [241, 320],
    },
  },
  {
    id: 41,
    itinerario: 2,
    title: "Introdução à Libras",
    descricao:
      "Aprenda a utilizar a Língua Brasileira de Sinais (Libras) e garanta o atendimento e o tratamento adequado às pessoas com deficiência auditiva. A Lei nº 10.436/2002 legitima a Libras como idioma advindo das Comunidades Surdas Brasileiras e obriga o poder público em geral a adotar formas institucionalizadas de apoiar o uso e a difusão dessa língua como meio de comunicação.",
    cargaHoraria: 60,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/11",
    obs: "",
    filter: {
      competencias: [32],
      subtemas: [378],
    },
  },
  {
    id: 42,
    itinerario: 2,
    title:
      "Políticas étnico-raciais: conceitos e métodos na superação do racismo e desigualdades",
    descricao:
      "O curso foi desenvolvido em 2021 pela Enap em parceria com o Ministério da Mulher, da Família e dos Direitos Humanos (MMFDH) visando apresentar histórico e atuais políticas étnico-raciais, contemplando conceitos e métodos que auxiliam na superação do racismo e desigualdades raciais.",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/417",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [354],
    },
  },
  {
    id: 43,
    itinerario: 2,
    title: "Noções Básicas do Trabalho Remoto",
    descricao:
      'O trabalho remoto já é uma realidade, pensando nisso, a Enap e a Endeavor prepararam este curso para apresentar diversas estratégias e dicas que facilitam o seu dia a dia, a organização do trabalho individual e do trabalho em equipe. Quer saber mais? Você pode ser inscrever neste curso gratuito e aberto na EVG, assistir o vídeo do GNPapo promovido pelo laboratório de inovação da Enap, disponível com acesso livre em "Conteúdo Relacionado" ou, ainda, acessar a página da Campanha #contecomigo #suavizeacurva que é uma iniciativa da Secretaria de Gestão e Desempenho de Pessoal (SGP).',
    cargaHoraria: 10,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/293",
    obs: "",
    filter: {
      competencias: [36, 37],
      subtemas: [233],
    },
  },
  {
    id: 44,
    itinerario: 2,
    title: "Gestão de Equipes em Trabalho Remoto",
    descricao:
      "Este curso apresenta diversas contribuições para a gestão de equipes em trabalho remoto. O conteúdo traz dicas e ferramentas interessantes, além de abordar pontos importantes relacionados à gestão de pessoas. Trata-se de um curso necessário, criado a partir dos desafios que afetaram as instituições nos últimos tempos. Que tal conhecer um pouco mais desse assunto? Inscreva-se.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não sei informar",
    link: "https://www.escolavirtual.gov.br/curso/334",
    obs: "",
    filter: {
      competencias: [37],
      subtemas: [261],
    },
  },
  {
    id: 45,
    itinerario: 2,
    title: "Educação Especial e Inclusão",
    descricao:
      "Este curso apresenta as principais leis sobre inclusão de alunos com deficiência no ensino regular. Aponta a definição de integração, inclusão, síndrome, doenças, distúrbios e transtornos. Demonstra o conceito de deficiência intelectual, síndrome de Down, autismo, surdez, cegueira, deficiência física ou motora e a paralisia cerebral. Considera escola para todos, princípios da cultura inclusiva, formação do professor, sala de aula inclusiva, família na educação escolar dos alunos com deficiência e educação inclusiva na educação infantil.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mundi.ifsul.edu.br/portal/educacao-especial-e-inclusao.php",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [354, 362],
    },
  },
  {
    id: 46,
    itinerario: 2,
    title: "Logística e Administração de Materiais",
    descricao:
      "Este curso apresenta os conceitos e fundamentos de logística, não só para o aprimoramento dos processos bem como para a compreensão dos conceitos básicos e de sua importância no cenário atual. Dá ênfase para a apresentação dos principais conceitos, técnicas e ferramentas para gestão de compras, distribuição, armazenagem e transportes na cadeia de suprimentos. Pretende-se não só entender a utilização correta de embalagens bem como mostrar o ciclo de materiais e estoques dos produtos necessários para atender à demanda produtiva.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mundi.ifsul.edu.br/portal/logistica-e-administracao-de-materiais.php",
    obs: "",
    filter: {
      competencias: [27],
      subtemas: [264],
    },
  },
  {
    id: 47,
    itinerario: 2,
    title: "Educação Financeira",
    descricao:
      "O curso Educação Financeira tem como objetivo promover e impulsionar a importância desta temática, trazendo estratégias e conhecimentos que venham tornar a tomada de decisão de suas finanças cada vez mais segura e responsável. As informações apresentadas terão o intuito de fazer com que você reflita sobre seus comportamentos básicos de consumo e relacionamento com o dinheiro, contribuindo para promover atitudes com vista no consumo consciente, busca de maior qualidade de vida e visão de futuro próspero e digno.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mundi.ifsul.edu.br/portal/educacao-financeira.php",
    obs: "",
    filter: {
      competencias: [35],
      subtemas: [261],
    },
  },
  {
    id: 48,
    itinerario: 2,
    title: "ASSÉDIO MORAL! - CARTILHA INFORMATIVA",
    descricao:
      "Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Moral.",
    cargaHoraria: 0,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [241, 320],
    },
  },
  {
    id: 49,
    itinerario: 2,
    title: "ASSÉDIO SEXUAL - CARTILHA INFORMATIVA",
    descricao:
      "Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Sexual.",
    cargaHoraria: 0,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [241, 320],
    },
  },
  {
    id: 50,
    itinerario: 2,
    title: "Manual de Conduta do Servidor Público Federal",
    descricao:
      "Este manual tem por finalidade: a) organizar as disposições relacionadas à conduta profissional, buscando trazer uma abordagem atualizada, clara e objetiva sobre os temas relacionados; b) disseminar boas práticas que se constituem no padrão de comportamento que é esperado do servidor; e c) auxiliar no aprimoramento de uma cultura organizacional fundamentada no princípio da integridade e na busca constante de alto desempenho nos órgãos e entidades do Poder Executivo Federal. ",
    cargaHoraria: 0,
    instCert: 38,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [354],
    },
  },
  {
    id: 51,
    itinerario: 2,
    title: "Gerenciamento de Projetos e Portfólios de Projetos - Guia",
    descricao:
      "Guia Referencial para Gerenciamento de Projetos e Portfólios de Projetos Este guia orienta a utilização da abordagem de gerenciamento de projetos baseada nas características de cada projeto, no ambiente no qual está contido, nas habilidades da equipe e em outros parâmetros. O documento compila conceitos, modelos e indicações das melhores práticas atuais e amplamente disseminadas a respeito de gerenciamento de projetos e de portfólios de projetos.",
    cargaHoraria: 0,
    instCert: 38,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/extensao/enrol/index.php?id=21",
    obs: "Trata-se de manual de orientações",
    filter: {
      competencias: [28],
      subtemas: [264],
    },
  },
  {
    id: 52,
    itinerario: 2,
    title: "Administrador de Organizações Civis: Direitos Humanos e Justiça",
    descricao:
      "Qualificar pessoas para agirem na defesa dos valores e princípios gerais dos direitos humanos, objetivando a justiça, a ética, a moral, a equidade, a igualdade e a liberdade.",
    cargaHoraria: 20,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=51",
    obs: "",
    filter: {
      competencias: [36],
      subtemas: [213, 258],
    },
  },
  {
    id: 53,
    itinerario: 2,
    title:
      "Educação Inclusiva: Introdução ao Transtorno do Espectro Autista (TEA)",
    descricao:
      "Conhecer aspectos introdutórios sobre o Transtorno do espectro autista (TEA), assim como um pouco da sua história. Pontuar conceitos para a inclusão de estudantes com TEA e o papel do professor nesse processo. Identificar alguns dos materiais didáticos e metodologias de ensino e mais conhecidas para estudantes com TEA.",
    cargaHoraria: 20,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=36",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [354, 362],
    },
  },
  {
    id: 54,
    itinerario: 2,
    title: "Introdução à Gestão de Projetos",
    descricao:
      "ste curso foi feito com o objetivo de apresentar os conceitos fundamentais referentes ao tema gestão de projetos, com destaque para a definição e caracterização do termo “projeto” e da apresentação do ciclo de vida dos projetos e das dez áreas do conhecimento, definidas pelo Project Management Institute (PMI), instituição internacional que se dedica ao estudo e à disseminação dos melhores métodos e técnicas de gerenciamento de projetos.",
    cargaHoraria: 20,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=25",
    obs: "",
    filter: {
      competencias: [28],
      subtemas: [264],
    },
  },
  {
    id: 55,
    itinerario: 2,
    title: "Segurança do Trabalho",
    descricao:
      "Ementa: Introdução, história e conceitos básicos. Legislação e procedimentos específicos. Fundamentos das Normas Técnicas de Segurança. Medidas de proteção coletiva e individual. Objetivos gerais: Desenvolver conhecimentos necessários para o trabalho seguro. Objetivos específicos: Analisar/conhecer os princípios das Normas Regulamentadoras de segurança. Entender a importância dos Equipamentos de Proteção Individual e medidas de proteção coletivas nos ambientes de trabalho",
    cargaHoraria: 40,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=40",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [174],
    },
  },
  {
    id: 56,
    itinerario: 2,
    title: "Boas Práticas de Segurança do Trabalho em Laboratórios",
    descricao:
      "Ementa: Introdução a Segurança do Trabalho: Conceitos básicos de Segurança do Trabalho. Equipamentos de Proteção Coletiva e Equipamentos de Proteção Individual e Coletiva. Produtos Químicos. Equipamentos, vidrarias e  utensílios de laboratório. Mapa de Riscos. Manual de Segurança para Laboratórios. Situações de Emergência. Objetivos gerais: O curso se destina a capacitar os usuários de laboratórios (alunos, egressos, docentes, técnicos e auxiliares de laboratório) sobre as orientações básicas de segurança do trabalho aplicáveis aos laboratórios.",
    cargaHoraria: 40,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=17",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [174],
    },
  },
  {
    id: 57,
    itinerario: 2,
    title: "Prazer e Sofrimento no Trabalho",
    descricao:
      "Ementa: Aspectos conceituais da dinâmica de prazer e sofrimento no trabalho: Organização do trabalho como fonte de sofrimento. Sofrimento no trabalho e estratégias de defesa. Do sofrimento ao prazer no trabalho. Proteção Jurídica no Brasil acerca da relação entre saúde mental e trabalho: Legislação brasileira quanto a proteção da relação entre trabalho a saúde mental: Constituição Federal, Consolidação das Leis Trabalhistas (CLT) e Normas Regulamentadoras (NRs). Patologias e formas de violência associadas a saúde mental e trabalho: Principais patologias que podem ser desenvolvidas nos indivíduos relacionados a saúde mental e trabalho tais como transtornos de humor (transtornos de ansiedade, transtornos de depressão) e desordens musculoesqueléticas (LERT, DORT). Violências no trabalho que estão relacionados a saúde mental e trabalho: assédio moral e assédio sexual.",
    cargaHoraria: 40,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=38",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [354],
    },
  },
  {
    id: 58,
    itinerario: 2,
    title: "Aprendizagem Organizacional e Trilhas de Aprendizagem",
    descricao:
      "Este curso apresenta capacitação e conhecimento de boas práticas de desenvolvimento de competências das organizações contemporâneas e a importância da aprendizagem baseada no autodesenvolvimento.",
    cargaHoraria: 30,
    instCert: 15,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/423",
    obs: "O curso fica disponível 30 dias após o cadastro. Para continuar o acesso ao Curso é necessário matricular-se no curso novamente. As turmas e matrículas são mensais.",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 59,
    itinerario: 2,
    title: "Comunicação oral e escrita",
    descricao:
      "Proporcionar melhorias, pessoais e profissionais, a partir de conhecimentos específicos sobre Comunicação Oral e Escrita.",
    cargaHoraria: 30,
    instCert: 12,
    possuiAcessibilidade: "Não",
    link: "https://mais.ifmg.edu.br/enrol/index.php?id=48",
    obs: "As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [2],
      subtemas: [357],
    },
  },
  {
    id: 60,
    itinerario: 2,
    title: "Fundamentos da linguagem visual",
    descricao:
      "Esse curso desenvolve princípios da linguagem visual. Apresenta elementos e técnicas visuais essenciais para o conhecimento da gramática visual, aplicáveis em situações cotidianas em que se estabelece a comunicação visual como a expressão visual de ideias, a elaboração de apresentações e até a criação de layouts mais complexos.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "http://mundi.ifsul.edu.br/portal/fundamentos-da-linguagem-visual.php",
    obs: "Todos os vídeos contam com a intérprete de Libras em ótimo tamanho de visualização. Contudo, as legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 61,
    itinerario: 2,
    title: "Análise e melhoria de processos",
    descricao:
      "O objetivo do curso é oferecer aos participantes a compreensão do funcionamento e do gerenciamento de processos em instituições públicas e a promoção de melhorias em processos institucionais.",
    cargaHoraria: 20,
    instCert: 15,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/424 ",
    obs: "O curso fica disponível 20 dias após o cadastro. Para continuar o acesso ao Curso é necessário matricular-se no curso novamente. As turmas e matrículas são mensais.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 62,
    itinerario: 2,
    title:
      "Desenvolvendo competências em informações acadêmicas e profissionais.",
    descricao:
      "A busca, avaliação e uso estratégico, ético e responsável da informação são requisitos fundamentais a indivíduos que estão percorrendo o caminho acadêmico ou se preparando para o mercado de trabalho. Importante, nesse contexto, o desenvolvimento de habilidades no trato da informação, disponível em meios impressos e digitais, de forma a estarem mais capacitados para enfrentar os desafios do século XXI.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=136",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [4],
      subtemas: [359],
    },
  },
  {
    id: 63,
    itinerario: 2,
    title: "Estratégias Flexíveis de Ensino em Tempos de Pandemia",
    descricao:
      "Este curso tem como objetivo auxiliar profissionais da área de educação e demais profissionais a conhecerem as possibilidades oferecidas pelo Ensino Híbrido e como este pode estar presente em suas práticas pedagógicas em tempos de pandemia.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=177 ",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [4],
      subtemas: [359],
    },
  },
  {
    id: 64,
    itinerario: 2,
    title: "Google Drive: Colaboração na prática",
    descricao:
      "Este curso cobre uma introdução à colaboração e aspectos colaborativos no Google Drive, focando em trabalhos em grupo, tanto para a versão para computador quanto para dispositivos móveis.",
    cargaHoraria: 80,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=144",
    obs: "O curso só tem 8h, mas é objetivo e direto. A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 65,
    itinerario: 2,
    title: "Documentos Google: editor de textos",
    descricao:
      "Neste curso você vai aprender como criar documentos de texto de uma forma versátil e prática utilizando a ferramenta Documentos Google.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4389",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 66,
    itinerario: 2,
    title: "Planilhas Google: Planilha Eletrônica",
    descricao:
      "Neste curso você aprenderá a acessar e a utilizar os principais elementos da Planilha Google.",
    cargaHoraria: 60,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4391",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 67,
    itinerario: 2,
    title: "Google Drive",
    descricao:
      "Nesse curso você vai conhecer e aprender sobre o Google Drive, ferramenta utilizada para o armazenamento de arquivos.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4390",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 68,
    itinerario: 2,
    title: "HTML: Introdução ao desenvolvimento de páginas web",
    descricao:
      "Aprenda a criar páginas web do zero e conhecer como funciona a internet para o desenvolvimento de sites. Também criaremos as primeiras páginas. Vamos formatá-las, inserir links, listas, imagens, arquivos de áudio e vídeo. Conheça alguns comandos avançados e dicas especiais de compatibilidade e acessibilidade.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4975",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 69,
    itinerario: 2,
    title: "Produção de Vídeos usando OBS Studio e Kdenlive",
    descricao:
      "O curso aborda de forma objetiva, técnicas e ferramentas para produção de vídeos utilizando a captura de tela do computador, gravação de som e imagem. Os softwares utilizados serão o OBS Studio (Open Broadcaster Software) e o Kdenlive, ambos de código aberto e gratuitos. ",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4991",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 70,
    itinerario: 2,
    title: "Iniciação ao serviço Público nos Institutos Federais",
    descricao:
      "Este curso apresenta informações e orienta os servidores em início de carreira nos Institutos Federais e aborda os seguinte temas: Institutos Federais; Ensino; Extensão; Pesquisa e Inovação; Pós-Graduação; Comunicação e Redação Oficial; Ética e Cidadania; Legislação de Pessoal; Protocolo; Orçamento, Licitações e Contratos; Saúde do Servidor; Inclusão.",
    cargaHoraria: 80,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=5004",
    obs: "Os vídeos disponíveis não contam com Libras, mas apresenta Legenda e Transcrição acessível por link próprio. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 71,
    itinerario: 2,
    title: "Inclusão Sociodigital para Multiplicadores",
    descricao:
      "Por meio deste curso o multiplicador aprenderá a planejar um curso de inclusão sociodigital e ensinar aos discentes os aplicativos de smartphones úteis no dia a dia, utilizando aplicativos tais como redes sociais, e-mail, aplicativos de localização e mobilidade, fotos e backup de contatos e aplicativos de utilidade pública.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=167",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [3],
      subtemas: [359],
    },
  },
  {
    id: 72,
    itinerario: 2,
    title: "Moodle para Educadores",
    descricao:
      "O curso proporciona o conhecimento básico necessário para a edição de salas virtuais para cursos ou disciplinas na modalidade à distância ou para apoio à modalidade presencial. Apresenta a parte instrucional que orienta à produção da sala virtual com inserção de recursos e atividades e também busca levar o educador a uma reflexão sobre o potencial construcionista do Moodle como suas potencialidades para a realização de aulas com atividades colaborativas, bem como as possibilidades de acompanhamento e avaliação da aprendizagem. O curso foi elaborado em nível básico e a partir da versão Moodle 3.1 (Tema Essential)",
    cargaHoraria: 60,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=141",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [3],
      subtemas: [359],
    },
  },
  {
    id: 73,
    itinerario: 2,
    title: "Acessibilidade e Tecnologia",
    descricao:
      "O curso tem como objetivos apresentar os conceitos relacionados à inclusão e acessibilidade, destacar os tipos de acessibilidade e a tecnologia assistiva, bem como apresentar algumas tecnologias para a produção de materiais digitais acessíveis.",
    cargaHoraria: 60,
    instCert: 19,
    possuiAcessibilidade: "Sim",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=151",
    obs: "O curso tem diversas aulas em Libras e conta com Transcrição em Português. A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [4],
      subtemas: [359],
    },
  },
  {
    id: 74,
    itinerario: 2,
    title: "Ferramentas Digitais para Curadoria Educacional",
    descricao:
      "Este curso tem como proposta a apresentação sobre os conceitos básicos sobre Curadoria Educacional e apresentar seis ferramentas digitais gratuitas disponíveis na web utilizadas para prática da curadoria",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=161 ",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [5],
      subtemas: [359],
    },
  },
  {
    id: 75,
    itinerario: 2,
    title: "Introdução a projetos",
    descricao:
      "O curso proporciona ao aluno a aplicação dos conceitos básicos e necessários relativos a projetos, garantindo o entendimento inicial para o sucesso de um projeto. face a carência destes, no que diz respeito aos principais fundamentos associados a projetos.",
    cargaHoraria: 20,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=169 ",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 76,
    itinerario: 2,
    title: "Projetos Educacionais e Interdisciplinares",
    descricao:
      'Neste curso aprenderemos um pouco mais sobre Projetos Educacionais e Interdisciplinares. O curso utiliza como base o material "Projetos educacionais " de Elisa Maria Gomide e Denise Mendes França e "Tipos de Projetos" de Denise Mendes França e Marcos Antonio Almeida de Oliveira produzidos para a Rede e-Tec Brasil.',
    cargaHoraria: 30,
    instCert: 14,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4948",
    obs: "Os vídeos possuem Libras ou Transcrição completa. O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 77,
    itinerario: 2,
    title: "Auxiliar Pedagógico",
    descricao:
      "No curso de Auxiliar Pedagógico você vai ser preparado para auxiliar na elaboração de projetos pedagógicos e planos de cursos. Vai aprender a como colaborar com a organização didática e metodológica das atividades pedagógicas, além de poder auxiliar nos processos de avaliação do ensino e da aprendizagem na educação e na relação pedagógica entre docentes e estudantes. Vai estar preparado para contribuir para o desenvolvimento de ações integradas no âmbito escolar.",
    cargaHoraria: 200,
    instCert: 14,
    possuiAcessibilidade: "Não",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4899",
    obs: "O curso possui 200h. O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 78,
    itinerario: 2,
    title: "Software de Apresentação",
    descricao:
      "O curso irá introduzir os conceitos de softwares de apresentação, assim como mostrar exemplos de softwares que podem ser utilizados para criação de apresentações. Serão mostrados recursos básicos e avançados no software PowerPoint para que se possa criar uma apresentação usando os recursos desse software. Além disso, será explorado o uso do software de apresentação online Prezi, que se constitui em uma ótima opção para se desenvolver apresentações dinâmicas e diferentes.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/software-de-apresentacao.php",
    obs: "Todos os vídeos contam com a intérprete de Libras em ótimo tamanho de visualização. Contudo, as legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 79,
    itinerario: 2,
    title: "Fundamentos da LGPD",
    descricao:
      "O curso foi desenvolvido com foco na apresentação de conceitos gerais da LGPD e nos impactos desta Lei em processos rotineiros de pessoas e empresas. Também pretende-se fomentar o debate sobre a proteção de dados pessoais e a segurança da informação, em face das bases legais existentes.",
    cargaHoraria: 15,
    instCert: 15,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/603",
    obs: "O curso fica disponível 20 dias após o cadastro. Para continuar o acesso ao Curso é necessário matricular-se no curso novamente. As turmas e matrículas são mensais.",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 80,
    itinerario: 2,
    title: "Repositórios de Materiais Didáticos Digitais e Direitos de Uso",
    descricao:
      "O curso oferece a possibilidade de conhecimento acerca de uso de materiais didáticos digitais, locais de repositórios, criação, uso e orienta sobre os direitos de uso destes materiais",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4918",
    obs: "",
    filter: {
      competencias: [6],
      subtemas: [357],
    },
  },
  {
    id: 81,
    itinerario: 2,
    title: "Ferramentas Digitais para Curadoria Educacional",
    descricao:
      "Este curso tem como proposta a apresentação sobre os conceitos básicos sobre Curadoria Educacional e apresentar seis ferramentas digitais gratuitas disponíveis na web utilizadas para prática da curadoria",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=161",
    obs: "Apesar da carga horária baixa o curso atende muito bem a necessidade de se capacitar para curadoria de objetos de aprendizagem. Os cursos mudam anualmente o link",
    filter: {
      competencias: [6],
      subtemas: [357],
    },
  },
  {
    id: 82,
    itinerario: 2,
    title: "Gamificação para Educação",
    descricao:
      "O curso visa introduzir o conceito das mecânicas e das narrativas dos jogos em sistemas educacionais e suas princiais característiacs para educadores e profissionais da educação ",
    cargaHoraria: 15,
    instCert: 7,
    possuiAcessibilidade: "Sim",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=35",
    obs: "A plaforma possui software VLibras para auxiliar na acessibiliade",
    filter: {
      competencias: [7],
      subtemas: [359],
    },
  },
  {
    id: 83,
    itinerario: 2,
    title: "Videoaula - Da concepção à postagem",
    descricao:
      "Passo-a-passo da criação de videoaula usando a linguagem audiovisual; Conceitos da aprendizagem multimídia para criação do conteúdo e conhecimento técnico para a produção, gravação e edição da videoaula",
    cargaHoraria: 60,
    instCert: 20,
    possuiAcessibilidade: "Parcial",
    link: "https://cursoslivres.ifms.edu.br/course/view.php?id=154",
    obs: "",
    filter: {
      competencias: [7],
      subtemas: [359],
    },
  },
  {
    id: 84,
    itinerario: 2,
    title: "Wiki: produção colaborativa de conhecimento",
    descricao:
      "O curso aborda a colaboração e aprendizgem colaborativa em ambientes virtuais de aprendizagens, com destaque para o potencial da wiki na educação",
    cargaHoraria: 10,
    instCert: 7,
    possuiAcessibilidade: "Sim",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=17",
    obs: "A plaforma possui software VLibras para auxiliar na acessibiliade",
    filter: {
      competencias: [8],
      subtemas: [359],
    },
  },
  {
    id: 85,
    itinerario: 2,
    title: "Introdução a criação de sites",
    descricao:
      "O curso permite a compreensão de como criar sites para que possa ser realizado o compartilhamento de informações",
    cargaHoraria: 30,
    instCert: 21,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.ifro.edu.br/course/introducao-a-criacao-de-sites/intro  ",
    obs: "",
    filter: {
      competencias: [8],
      subtemas: [362],
    },
  },
  {
    id: 86,
    itinerario: 2,
    title: "Introdução ao Google Classroom",
    descricao:
      "O curso traz possibilidades da utilização do Google Classroom por professores, desde como criar uma turma, convidar alunos, convidar professores parceiros, até criar atividades e atribuir notas. ",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=152",
    obs: "O curso muda o link anualmente de acordo com a criação da turma. Esta na seleção da Vanessa também",
    filter: {
      competencias: [7],
      subtemas: [358],
    },
  },
  {
    id: 87,
    itinerario: 2,
    title: "Fundamentos da Lei Geral de Proteção de Dados",
    descricao:
      "O curso foi desenvolvido com foco na apresentação de conceitos gerais da LGPD e nos impactos desta Lei em processos rotineiros de pessoas e empresas. Também pretende-se fomentar o debate sobre a proteção de dados pessoais e a segurança da informação, em face das bases legais existentes. Foi desenvolvido pelo Serpro - Serviço Federal de Processamento de Dados, em 2020, originalmente para a capacitação do corpo funcional. Agora é ofertado ao público em geral, por meio de parceria com a Escola Nacional de Administração Pública - Enap.",
    cargaHoraria: 15,
    instCert: 22,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/603/",
    obs: "Esta na seleção no Paulo Evaristo também",
    filter: {
      competencias: [8],
      subtemas: [359],
    },
  },
  {
    id: 88,
    itinerario: 2,
    title: "HTML: Introdução ao desenvolvimento de páginas web",
    descricao:
      "Aprenda a criar páginas web do zero e conhecer como funciona a internet para o desenvolvimento de sites. Também criaremos as primeiras páginas. Vamos formatá-las, inserir links, listas, imagens, arquivos de áudio e vídeo. Conheça alguns comandos avançados e dicas especiais de compatibilidade e acessibilidade.",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4975",
    obs: "",
    filter: {
      competencias: [7],
      subtemas: [362],
    },
  },
  {
    id: 89,
    itinerario: 2,
    title: "Design Instrucional e Tecnologia com Articulate StoryLine 360",
    descricao:
      "Este curso foi elaborado para ajudar os alunos a compreender a estrutura teórica do design instrucional, a teoria, os métodos, a prática do design instrucional usando vídeo ou storyboards. Também aborda o uso do Articulate Storyline 360 como uma ferramenta de e-Learning para criar um produto completo de design instrucional",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://escolavirtual.gov.br/curso/630",
    obs: "",
    filter: {
      competencias: [7],
      subtemas: [362],
    },
  },
  {
    id: 90,
    itinerario: 2,
    title: "Estratégias Flexíveis em Tempos de Pandemia",
    descricao:
      "Este curso tem como objetivo auxiliar profissionais da área de educação e demais profissionais a conhecerem as possibilidades oferecidas pelo Ensino Híbrido e como este pode estar presente em suas práticas pedagógicas em tempos de pandemia.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/mod/page/view.php?id=30898",
    obs: "O link é para o curso com Oferta semestral. O curso apresenta uma abordagem mais teórica. Os conteúdos se mostraram relevantes para o contexto atual e de pós pandemia.",
    filter: {
      competencias: [10],
      subtemas: [359],
    },
  },
  {
    id: 91,
    itinerario: 2,
    title: "Gamificação no Moodle",
    descricao:
      "O curso visa orientar professores e demais profissionais da educação interessados a compreender e implementar algumas formas e técnicas de gamificar um curso em um ambiente virtual de aprendizagem. ",
    cargaHoraria: 50,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/mod/page/view.php?id=30510",
    obs: "O link é para o curso com Oferta semestral. O curso apresenta um interessante enfoque em atividades para tornar as atividades mais dinâmicas com a utilização de metodologias gamificadas.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 92,
    itinerario: 2,
    title: "Realidade Virtual como apoio ao ensino",
    descricao:
      "O curso aberto de Realidade Virtual como apoio ao ensino é uma iniciativa do Instituto Federal do Espírito Santo (Ifes), por meio do Centro de Referência em Formação e em Educação a Distância (Cefor). O curso compreende em apresentar a história e evolução da tecnologia de realidade virtual, os diferentes tipos de equipamentos, como instalar, bem como mostrar algumas capacidades da tecnologia e possibilidades de seu uso em sala de aula.",
    cargaHoraria: 20,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/mod/page/view.php?id=29635",
    obs: "O link é para o curso com Oferta semestral. ",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 93,
    itinerario: 2,
    title: "Gamificação no Moodle",
    descricao:
      "Neste curso, objetiva compartilhar algumas formas e ideias de gamificar seu curso no Moodle. Mostrar ferramentas, técnicas e aplicações. Vivenciar a gamificação na prática.",
    cargaHoraria: 30,
    instCert: 2,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4254",
    obs: "O link é para o curso com Oferta semestral. O curso apresenta um interessante enfoque em atividades para tornar as atividades mais dinâmicas com a utilização de metodologias gamificadas.",
    filter: {
      competencias: [12],
      subtemas: [359],
    },
  },
  {
    id: 94,
    itinerario: 2,
    title: "Moodle Básico para Professores",
    descricao:
      "O curso aborda elementos para o planejamento das aulas no MOODLE, inserção de conteúdos e atividades.",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrs.edu.br/course/",
    obs: "O link é para o curso com Oferta semestral. Os conteúdos são voltados para a instrumentalização do educador. ",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 95,
    itinerario: 2,
    title: "Formação Pedagógica para EaD",
    descricao:
      "O curso aborda Fundamentos da Educação a Distância; Tecnologias educacionais e a linguagem dialógica na Ead; O papel do professor mediador presencial e mediador a distância; O papel do professor conteudista (autor). ",
    cargaHoraria: 50,
    instCert: 20,
    possuiAcessibilidade: "SIM",
    link: "https://cursoslivres.ifms.edu.br/course/view.php?id=147",
    obs: "O link é para o curso com Oferta semestral.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 96,
    itinerario: 2,
    title: "Moodle Intermediário para Professores - Aprendizagem Colaborativa",
    descricao:
      'O curso tem como objetivo desenvolver atividades colaborativas eficazes no Moodle utilizando as atividades "wiki" e "glossário".',
    cargaHoraria: 60,
    instCert: 5,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrj.edu.br/",
    obs: "O link é para a página principal da Plataforma. O curso estará disponível a partir de março para o público em geral. A instituição nos forneceu um código de aceso aos cursos que nos permitiu realizar a análise. Contato realizado com o Cláudio (21 987967329) Os conteúdos trazem uma interessante abordagem com metodologias de trabalho colaborativo.",
    filter: {
      competencias: [11],
      subtemas: [359],
    },
  },
  {
    id: 97,
    itinerario: 2,
    title: "Moodle Básico para Professores",
    descricao:
      "O curso oferece conhecimentos básicos sobre criação de cursos online utilizando a plataforma Moodle, apresentando os principais recursos e atividades. ",
    cargaHoraria: 60,
    instCert: 5,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrj.edu.br/",
    obs: "O link é para a página principal da Plataforma. O curso estará disponível a partir de março para o público em geral. A instituição nos forneceu um código de aceso aos cursos que nos permitiu realizar a análise. Contato realizado com o Cláudio (21 987967329) .A instituição nos forneceu um código de aceso aos cursos que nos permitiu realizar a análise.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 98,
    itinerario: 2,
    title: "Ambientes Digitais de Aprendizagem",
    descricao:
      "O Curso tem por objetivo apresentar as principais características, funcionalidades e limitações existentes nos ambientes digitais de aprendizagem - AVA, contribuindo para a tomada de decisão tanto para a escolha do AVA mais adequado quanto para escolhas de desenho instrucional.",
    cargaHoraria: 30,
    instCert: 23,
    possuiAcessibilidade: "SIM",
    link: "https://mooc38.escolavirtual.gov.br/course/view.php?id=3641#section-3",
    obs: "O curso traz uma perspectiva mais reflexiva que ajudará no processo decisório para a escolha do ambiente virtual de aprendizagem para as práticas pedagógicas remotas.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 99,
    itinerario: 2,
    title: "Mooc de Lovelace: Pensamento Computacional com Scratch",
    descricao:
      "O curso aborda os conteúdos sobre a Linguagem de Programação Scratch e os pilares do pensamento computacional que são: abstração; pensamento algorítmico; decomposição; e reconhecimento de padrões. A partir desses conhecimentos o docente poderá experimentar e desenvolver novos formatos e métodos pedagógicos para o ensino e estruturar as aulas de modo a que diferentes atividades digitais contribuam em conjunto para reforçar o objetivo de aprendizagem utilizando o Scratch.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=85",
    obs: "O link é para o curso com Oferta semestral.  Os conteúdos trazem uma perspectiva de abordagem do pensamento computacional impostante para compreensão e desenvolvimento de atividades utilizando lógica computacional.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 100,
    itinerario: 2,
    title: "Avaliação por Rubrica no Moodle",
    descricao:
      "O curso apresenta o método de avaliação por rubrica no Moodle e suas potencialidades para contribuir no desenvolvimento do processo de aprendizagem dos estudantes e de acompanhamento, avaliação e feedback pelos professores. ",
    cargaHoraria: 20,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=182",
    obs: "O curso é trabalhado em perspectiva prática, com o uso de tecnologias e se mostra bastante aderente à trilha Avaliação, especificamente, aos trilhos 1 e 3. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 101,
    itinerario: 2,
    title: "Avaliação em Processos de Aprendizagem e Modelos de Feedback",
    descricao:
      "O curso tem como objetivo fornecer aos servidores públicos aspectos conceituais sobre avaliação da aprendizagem, a partir das metodologias ativas, aplicando habilidades de coleta e análise de dados para a melhoria contínua de projetos educacionais. ",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Parcial",
    link: "https://www.escolavirtual.gov.br/curso/606",
    obs: "O curso é mais teórico e conceitual e não foca apenas no mundo educacional, tratando também do mundo corporativo. Entretanto, traz vídeos e tutoriais sobre uso de ferramentas e tecnologias de apoio. Cobre os três trilhos da trilha, ainda que não em profundidade e nem em atividades práticas o suficiente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros.",
    filter: {
      competencias: [13, 14, 15],
      subtemas: [358],
    },
  },
  {
    id: 102,
    itinerario: 2,
    title: "Moodle para Mediadores",
    descricao:
      "O curso apresenta os procedimentos para a utilização da plataforma Moodle, construído a fim de identificar os procedimentos habilitados aos professores mediadores, bem como descrever funcionalidades disponibilizadas para a avaliação e o acompanhamento de aprendizagem dos estudantes. ",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/moodle-para-mediadores.php",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas. O curso é prático e mostra a avaliação por meio do uso de tecnologias, cobrindo parcialmente os trilhos 1 e 3. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 103,
    itinerario: 2,
    title: "Gamificação no Moodle",
    descricao:
      "O curso visa orientar professores e demais profissionais da educação interessados a compreender e implementar algumas formas e técnicas de gamificar um curso em um ambiente virtual de aprendizagem.",
    cargaHoraria: 50,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=171",
    obs: "O curso não é específico sobre avaliação, mas esta é tratada durante todo o curso, uma vez que a gamificação consiste em utilizar recursos de jogos que, no caso é no Moodle, ou seja, de forma tecnológica, permitindo ao professor criar atividades e formatos de avaliação alternativos. O curso é bem prático e aderente aos trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 104,
    itinerario: 2,
    title: "Gamificação no Moodle - Turma 2022A",
    descricao:
      "O curso trata de conceitos de Gamificação; Gamificação na Prática; Gamificando o Curso no Moodle.",
    cargaHoraria: 30,
    instCert: 2,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4908 ",
    obs: "O curso não é específico sobre avaliação, mas esta é tratada durante todo o curso, uma vez que a gamificação consiste em utilizar recursos de jogos que, no caso é no Moodle, ou seja, de forma tecnológica, permitindo ao professor criar atividades e formatos de avaliação alternativos. O curso utiliza em sua maioria materiais textuais, mas aborda o uso de tecnologias de forma prática, no caso em como fazer isso na avaliação. Assim, está aderente aos trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros. O link é válido por 1semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 105,
    itinerario: 2,
    title: "Moodle para Educadores",
    descricao:
      "O curso proporciona o conhecimento básico necessário para a edição de salas virtuais para cursos ou disciplinas na modalidade à distância ou para apoio à modalidade presencial. Apresenta a parte instrucional que orienta à produção da sala virtual com inserção de recursos e atividades e também busca levar o educador a uma reflexão sobre o potencial construcionista do Moodle como suas potencialidades para a realização de aulas com atividades colaborativas, bem como as possibilidades de acompanhamento e avaliação da aprendizagem.",
    cargaHoraria: 60,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=141",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas. O curso é prático e mostra a avaliação por meio do uso de tecnologias, cobrindo os trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 106,
    itinerario: 2,
    title: "Introdução ao Google Classroom",
    descricao:
      "O curso traz possibilidades da utilização do Google Classroom por professores, desde como criar uma turma, convidar alunos, convidar professores parceiros, até criar atividades e atribuir notas. ",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=152",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas. Uma característica interessante é que é um curso sobre a plataforma Google Classroom, sendo que maioria dos cursos identificados é da plataforma Moodle. Ainda que o curso não trabalhe os itens em profundidade, é prático e mostra a avaliação por meio do uso de tecnologias, cobrindo os trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 107,
    itinerario: 2,
    title: "Moodle para Docentes",
    descricao:
      "O curso apresenta os procedimentos para a utilização da plataforma Moodle: planejamento, criação e configuração de um curso ou disciplina. Aborda os principais recursos desta plataforma, e também, descreve as principais atividades que o Moodle oferece, como avaliação e acompanhamento da aprendizagem dos estudantes.",
    cargaHoraria: 60,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/moodle-para-docentes.php",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas e trabalha o tema de forma prática, em particular os trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 108,
    itinerario: 2,
    title:
      "Docência em EaD: Planejando o uso de instrumentos e critérios nas avaliações on-line",
    descricao:
      "O curso trata de instrumentos de avaliação on-line; Critérios de avaliação; Avaliação da aprendizagem.",
    cargaHoraria: 20,
    instCert: 7,
    possuiAcessibilidade: "Não",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=56 ",
    obs: "O curso é bastante teórico, focado em dois ebooks, mas em determinados momentos aborda sobre o uso de tecnologias como apoio aos processos avaliativos. Desta forma é parcialmente aderente à trilha, especialmente aos trilhos 1 e 3. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, não é da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 109,
    itinerario: 2,
    title: "Questionários Moodle",
    descricao:
      "O curso trata sobre criação de questionários e ferramentas de auxílio à avaliação final.",
    cargaHoraria: 10,
    instCert: 24,
    possuiAcessibilidade: "Não",
    link: "https://lumina.ufrgs.br/course/view.php?id=92",
    obs: "O curso foca em um tipo específico de avaliação com a utilização de tecnologias, que no caso é o questionário. Trata especialmente dos trilhos 1 e 3, mas também cobre parte do trilho 2, no módulo Avaliação de questionários, ainda que todos trilhos sejam cobertos apenas parcialmente, especialmente o 2. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, não é da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros.",
    filter: {
      competencias: [13, 14, 15],
      subtemas: [358],
    },
  },
  {
    id: 110,
    itinerario: 2,
    title: "Moodle em Ação: Atividades e Recursos",
    descricao:
      "O curso tem o objetivo de contribuir para a utilização do Moodle em práticas pedagógicas, seja na Educação Básica, ou no Ensino Superior. É composto por vivências de atividades no ambiente virtual, experimentações, materiais de apoio e avaliações. ",
    cargaHoraria: 30,
    instCert: 24,
    possuiAcessibilidade: "Não",
    link: "https://lumina.ufrgs.br/course/view.php?id=111",
    obs: "O curso não é específico de avaliação, mas esta é um dos temas abordados, com a utilização de tecnologias: questionário, fórum, wiki etc. Trata especialmente dos trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, não é da Rede EPCT. Apesar de ser mais dirigido a docentes, pode ser interessante a pedagogos, orientadores educacionais, profissionais técnicos de criação de materiais educacionais, profissionais de educação especial, entre outros.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 111,
    itinerario: 2,
    title: "Educação Especial: histórico, políticas e práticas",
    descricao:
      "O curso busca proporcionar um conhecimento introdutório acerca dos aspectos históricos, políticos e práticos da Educação Especial. Do mesmo modo, tem a intenção de desconstruir alguns aspectos relacionados a preconceitos a pessoas com deficiencias , transtorno do espectro autista, altas habilidades/superdotação para tentar reconhecer as suas diferenças e suas potencialidades. ",
    cargaHoraria: 30,
    instCert: 11,
    possuiAcessibilidade: "parcial",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=58 ",
    obs: "Apesar do cursos não ter preenchido 100% todos os critérios para a Elevada Aderência, o mesmo se constitui como apto para indicação como material recomendável para composição da trilha formativa do Plafor. O curso tem aderência aos objetivos deste projeto, pois aborda em amplo espectro os grandes temas da educação inclusiva. Naturalmente, o curso é um prelúdio ao tema, não chegando perto de exaurir a temática tão diversa e complexa, mas pode servir de uma boa introdução no sentido de preparar melhor ao Educador quanto a compreensão do histórico da Educação Inclusiva e as características das pessoas com necessidades educacionais específicas.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 112,
    itinerario: 2,
    title: "Comunicação para TODOS: recursos e ferramentas de acessibilidade",
    descricao:
      " O curso tem o objetivo de promover a compreensão dos conceitos e princípios básicos sobre Acessibilidade na Comunicação, assim como problematizar a (DE)ficiência com foco na eficiência de cada indivíduo e do coletivo na interação por meio de recursos como: a Audiodescrição para pessoas com deficiência visual; a Língua Brasileira de Sinais (Libras) e as Legendas para Surdos e Ensurdecidos (LSE). Pretende-se desencadear a reflexão a partir da fala de convidados, textos e discussões sobre o público-alvo e especificidades de cada recurso e, mais ainda, como produtos concebidos acessíveis podem beneficiar a todos, incluindo as pessoas com deficiência. Para tanto, o curso conta com recursos e ferramentas de acessibilidade na comunicação como a audiodescrição para as pessoas com deficiência visual, janela de Libras e legendas para surdos e ensurdecidos, mas ressaltamos que estes recursos auxiliam a todos, promovendo novas formas de experiência e mesmo sensibilização. ",
    cargaHoraria: 20,
    instCert: 25,
    possuiAcessibilidade: "sim",
    link: "https://lumina.ufrgs.br/course/view.php?id=134",
    obs: "O curso tem uma abordagem bastante pertinente e atual a trilha em tela, devendo compor a lista de possíveis cursos que constituirão a formação do Plafor. Além disso, possui um bom acervo de materiais curados e/ou autênticos (produzidos pela própria universidade) bastante úteis e adaptativos a formação desejada.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 113,
    itinerario: 2,
    title: "Acessibilidade e Tecnologia",
    descricao:
      "O curso tem como objetivos apresentar os conceitos relacionados à inclusão e acessibilidade, destacar os tipos de acessibilidade e a tecnologia assistiva, bem como apresentar algumas tecnologias para a produção de materiais digitais acessíveis.",
    cargaHoraria: 60,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=97 ",
    obs: "O Curso tem uma temática importante e aderente a trilha, bons textos, mas a quantidade de videos, especialmente os autorais pela instituição ofertante, são poucos. Uma vez sendo utilizado, precisará de outros cursos dentro dessa mesma trilha que complemente melhor os seus conteúdos. Apesar de não ser um curso com uma quantidade de materiais mais robusta ou enriquecida em quantidade, há muita qualidade nos materiais disponibilizados é muito boa e, por isso, merece a inclusão nas trilhas.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 114,
    itinerario: 2,
    title: "Gamificação no Moodle",
    descricao:
      "O curso visa orientar professores e demais profissionais da educação interessados a compreender e implementar algumas formas e técnicas de gamificar um curso em um ambiente virtual de aprendizagem. ",
    cargaHoraria: 50,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=83 ",
    obs: "A abordagem de Gamificação trazida no curso fortalece o envolvimento ativo e cria condições para a customização do ensino, nesse sentido o curso agrega muito valor a trilha da Capacitação dos Aprendentes, visto abordar e ensinar sobre a implementação prática e assertiva dos princípios, características e procedimentos de operacionalização da gamificação nos ecossistemas de aprendizagem.",
    filter: {
      competencias: [17, 18],
      subtemas: [359],
    },
  },
  {
    id: 115,
    itinerario: 2,
    title: "Metodologias Ativas: Educação Inovadora",
    descricao:
      "Este curso tem como objetivo auxiliar profissionais e futuros profissionais da área de educação a conhecerem as possibilidades oferecidas pela metodologias ativas de aprendizagem com foco em uma educação inovadora para transformação da educação.",
    cargaHoraria: 30,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=115",
    obs: "O curso apresenta um bom conteúdo e uma razoável diversidade de mídias, sua temática é bastante aderente a presente trilha e o mesmo agrega valor ou enriquece a aprendizagem nesta respectiva trilha.",
    filter: {
      competencias: [17, 18],
      subtemas: [362],
    },
  },
  {
    id: 116,
    itinerario: 2,
    title: "Tecnologia Assistiva no Contexto Educacional",
    descricao:
      "A Tecnologia Assistiva é uma área ampla e multidisciplinar e, assim como em outras esferas sociais, na educação ela também faz toda a diferença. Neste curso, buscamos apresentar conceitos, recursos e serviços aplicados ao contexto educacional. E, certamente, essa conversa não se esgota aqui. Existe uma gama enorme de recursos e estratégias. Apresentamos aqui algumas delas, mas é na prática, nas trocas com os estudantes com deficiência e com outros profissionais que acabamos descobrindo novas possibilidades. Além disso, a tecnologia muda rapidamente e precisamos estar sempre em busca do que está surgindo. Por fim, buscamos enfatizar o uso de recursos gratuitos ou de baixo custo. Apresentamos, ao longo do curso, possibilidades de confecção de baixo custo de alguns recursos utilizando materiais e métodos diversos. ",
    cargaHoraria: 60,
    instCert: 14,
    possuiAcessibilidade: "parcial",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4954",
    obs: "ATENÇÃO -  O Curso só fica disponível até 31/07/2022. A temática do curso é extremamente pertinente, sendo sua ementa bem construída. O curso está em um nível minimamente viável para utilização, não sendo uma das melhores opções por deter poucas videoaulas. Contudo, mesmo assim, pode contribuir com a formação do docente e ser recomendável quando combinado com outros cursos complementares. ",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 117,
    itinerario: 2,
    title: "Educador Maker: Aprendizagem Baseada em Projetos",
    descricao:
      " Este curso tem como objetivo levar educadores refletirem sobre o uso da Aprendizagem Baseada em Projetos em espaços Maker para atender as demandas do século XXI.",
    cargaHoraria: 30,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=78",
    obs: "Por ser um curso que introjeta a cultura maker no labor docente, isso se revela como bastante promissor e aderente a trilha capacitação dos aprendentes, tendo em vista que as metodologias ativas e a cultura maker são muito indicadas para promover o envolvimento ativo dos aprendentes. Por isso o curso é bastante recomendável.",
    filter: {
      competencias: [17, 18],
      subtemas: [362],
    },
  },
  {
    id: 118,
    itinerario: 2,
    title: "Cultura Surda",
    descricao:
      "O curso trata da História da comunidade surda, cultura surda, identidades surdas e a língua de sinais.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "parcial",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4906",
    obs: "ATENÇÃO -  O Curso só fica disponível até 31/07/2022 Temos aqui um curso cuja temática é bastante cara e pertinente a esta trilha. Certamente o curso poderia ser mais enriquecido com videos e materiais para a leitura, contudo traz um conteúdo básico, elementar que pode colaborar com a formação docente. Recomenda-se a indicação deste curso, desde que acompanhada a recomendação para realização concomitante de outros cursos complementares de conteúdo. ",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 119,
    itinerario: 2,
    title: "Acessibilidade em Processos Seletivos Discentes",
    descricao:
      "Formação oferecida gratuitamente pelo Instituto Federal do Espírito Santo com o objetivo de promover o conhecimento necessário assim como o compartilhamento de saberes e experiências profissionais tendo em vista os direitos das pessoas com deficiência e a garantia de sua participação em conformidade com o paradigma da inclusão nos processos seletivos discentes.",
    cargaHoraria: 60,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=58",
    obs: "Curso bem estruturado, muito diversificado em informações. Poderia ter mais videos, de fato. Contudo, é altamente recomendável para a trilha.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 120,
    itinerario: 2,
    title: "Design Thinking Aplicado à Educação",
    descricao:
      "Este curso é uma ótima oportunidade para você conhecer o papel do Design Thinking! O curso Design Thinking aplicado à educação foi desenvolvido em 2021 pela Enap, o qual tem como objetivo apresentar os conceitos, características principais, exemplos da abordagem do Design Thinking (DT), técnicas e ferramentas que poderão ser utilizadas na aplicação da abordagem do DT na educação.",
    cargaHoraria: 25,
    instCert: 31,
    possuiAcessibilidade: "parcial",
    link: "https://www.escolavirtual.gov.br/curso/448",
    obs: "O curso apresenta a metodologia do Design Thinking que é bastante indicada para potencializar a aprendizagem e promover o engahamento ativo. ",
    filter: {
      competencias: [18],
      subtemas: [359],
    },
  },
  {
    id: 121,
    itinerario: 2,
    title: "Avaliação em Processos de Aprendizagem e Modelos de Feedback",
    descricao:
      "O curso tem como objetivo fornecer aos servidores públicos aspectos conceituais sobre avaliação da aprendizagem, a partir das metodologias ativas, aplicando habilidades de coleta e análise de dados para a melhoria contínua de projetos educacionais. ",
    cargaHoraria: 30,
    instCert: 31,
    possuiAcessibilidade: "parcial",
    link: "https://www.escolavirtual.gov.br/curso/606",
    obs: "O curso traz uma abordagem interessante para ajudar técnicos da educação (pedagógos e assistente de assuntos educacionais) no desenvolvimento de planos educacionais individualizados no que tange a avaliaçaõ da aprendizagem. Apesar nao ser totalmente específico para o mundo da educação, mas também para o mundo corporativo, o curso traz elementos teóricos e práticos que podem ser transpostos para ajudar no processo de acompanhamento da aprendizagem dos aprendentes no que se refere a diferenciação da avaliaçaõ",
    filter: {
      competencias: [17],
      subtemas: [358],
    },
  },
  {
    id: 122,
    itinerario: 2,
    title: "A arte de falar em público",
    descricao:
      "Neste curso, você vai conhecer um pouco sobre a arte de falar em público. Irá aprender técnicas para se comunicar bem e preparar-se para falar em público.",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "Parcial",
    link: "https://aprendamais.mec.gov.br/enrol/index.php?id=298",
    obs: "Oferta semestral com atualização do link para o curso a cada semestre ou ao atingir um número grande de inscritos.",
    filter: {
      competencias: [20],
      subtemas: [359],
    },
  },
  {
    id: 123,
    itinerario: 2,
    title: "Comunicação Oral e Escrita",
    descricao:
      "O objetivo geral desse curso é proporcionar melhorias, pessoais e profissionais, a partir de conhecimentos específicos sobre Comunicação Oral e Escrita. A Ementa do curso aborda: Conceitos gerais de comunicação oral e escrita; História da Comunicação; Redação Comercial e Dissertativa; Gramática: Regências e Concordâncias; Técnicas de Oratória; Comunicação Não-Violenta; Práticas e Exercícios Avaliativos.",
    cargaHoraria: 30,
    instCert: 12,
    possuiAcessibilidade: "Não",
    link: "https://mais.ifmg.edu.br/enrol/index.php?id=48",
    obs: "Esse curso foi indicado no Padlet para os Técnicos-Administrativos em Educação",
    filter: {
      competencias: [20],
      subtemas: [359],
    },
  },
  {
    id: 124,
    itinerario: 2,
    title: "Acessibilidade na Comunicação",
    descricao:
      "Neste curso, você irá compreender o conceito biopsicossocial e as terminologias ligadas às pessoas com deficiência. Entrará em contato com a legislação, compreenderá como utilizar recursos e técnicas que melhoram a acessibilidade, além de ver exemplos práticos de comunicação acessível, tanto em eventos presenciais como em conteúdo web e impresso. Inscreva-se agora e tenha oportunidade de compreender como a comunicação pode ser mais acessível e democrática para todos!",
    cargaHoraria: 30,
    instCert: 32,
    possuiAcessibilidade: "Não",
    link: "https://escolavirtual.gov.br/curso/615",
    obs: "",
    filter: {
      competencias: [16, 20, 60],
      subtemas: [359],
    },
  },
  {
    id: 125,
    itinerario: 2,
    title: "Redação científica com tecnologia",
    descricao:
      "Neste curso, você vai conhecer um pouco sobre redação acadêmica, competência informacional e ferramentas tecnológicas para a pesquisa científica. Irá aprender técnicas de como refinar sua pesquisa em bases de dados, escrever a introdução, o referencial teórico, a metodologia, a conclusão e o resumo do texto científica e como usar softwares na metodologia do trabalho acadêmico.",
    cargaHoraria: 20,
    instCert: 33,
    possuiAcessibilidade: "Não",
    link: "https://mooc.ifsp.edu.br/course/redacao-cientifica-com-tecnologia-laletec/intro",
    obs: "Esse curso possui a sua versão em ambiente Moodle e está em processo de homologação na escola virtual da ENAP que permitirá o acesso contínuo.",
    filter: {
      competencias: [19, 20, 21, 60],
      subtemas: [359],
    },
  },
  {
    id: 126,
    itinerario: 2,
    title:
      "Desenvolvendo competências em informações acadêmicas e profissionais",
    descricao:
      "A busca, avaliação e uso estratégico, ético e responsável da informação são requisitos fundamentais a indivíduos que estão percorrendo o caminho acadêmico ou se preparando para o mercado de trabalho. Importante, nesse contexto, o desenvolvimento de habilidades no trato da informação, disponível em meios impressos e digitais, de forma a estarem mais capacitados para enfrentar os desafios do século XXI. ",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Não",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=136",
    obs: "O link é válido por 6 meses",
    filter: {
      competencias: [19, 20, 60],
      subtemas: [359],
    },
  },
  {
    id: 127,
    itinerario: 2,
    title: "Educação para boas escolhas on-line",
    descricao:
      "Este curso foi idealizado pela SaferNet Brasil para facilitar e ampliar a incorporação dessa temática nas salas de aula e nos projetos políticos pedagógicos. O curso é dedicado aos educadores e profissionais interessados em promover ações educativas de sensibilização sobre cidadania digital. Apesar de criado para educadores, o material permite uma aproximação ao tema para diferentes áreas de atuação. A proposta é que você se familiarize com o contexto e, principalmente, utilize as sugestões de atividades e recursos para criar seu plano de ação para as intervenções que fará em torno do tema em sua instituição, em sua família e em sua própria vida digital abordando também sobre bem-estar e saúde mental na internet.",
    cargaHoraria: 50,
    instCert: 33,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifsp.edu.br/enrol/index.php?id=1457",
    obs: "O link é válido por 3 meses",
    filter: {
      competencias: [19, 22],
      subtemas: [359],
    },
  },
  {
    id: 128,
    itinerario: 2,
    title: "Gestão de Projetos Educacionais",
    descricao:
      "Diante da crescente demanda das organizações públicas por engenharias didáticas inovadoras e fluidas, este curso apresenta conceitos sobre o planejamento e a gestão de projetos educacionais corporativos com uso de metodologias ágeis e colaborativas. Para isso compreenda os elementos básicos dos projetos e uma possível estruturação a partir da sua relação com o design instrucional, entre outros.",
    cargaHoraria: 30,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/415",
    obs: "",
    filter: {
      competencias: [23],
      subtemas: [359],
    },
  },
  {
    id: 129,
    itinerario: 2,
    title: "Design Thinking Aplicado à Educação",
    descricao:
      "Este curso é uma ótima oportunidade para você conhecer o papel do Design Thinking! O curso Design Thinking aplicado à educação foi desenvolvido em 2021 pela Enap, o qual tem como objetivo apresentar os conceitos, características principais, exemplos da abordagem do Design Thinking (DT), técnicas e ferramentas que poderão ser utilizadas na aplicação da abordagem do DT na educação.",
    cargaHoraria: 25,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/448",
    obs: "",
    filter: {
      competencias: [23],
      subtemas: [359],
    },
  },
  {
    id: 130,
    itinerario: 2,
    title: "Inovações em Tecnologia Educacional",
    descricao:
      "O curso apresenta conceitos, processos e experiências referentes à inovação, com foco na concepção, no desenvolvimento, na execução e na avaliação de soluções de capacitação para desenvolvimento de competências, de modo a fomentar a cultura e os ecossistemas de inovação, com vistas à criação de valor público.",
    cargaHoraria: 25,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/511",
    obs: "",
    filter: {
      competencias: [23],
      subtemas: [359],
    },
  },
  {
    id: 131,
    itinerario: 2,
    title: "Fundamentos da Lei Geral de Proteção de Dados",
    descricao:
      "O curso foi desenvolvido com foco na apresentação de conceitos gerais da LGPD e nos impactos desta Lei em processos rotineiros de pessoas e empresas. Também pretende-se fomentar o debate sobre a proteção de dados pessoais e a segurança da informação, em face das bases legais existentes. Foi desenvolvido pelo Serpro - Serviço Federal de Processamento de Dados, em 2020, originalmente para a capacitação do corpo funcional. Agora é ofertado ao público em geral, por meio de parceria com a Escola Nacional de Administração Pública - Enap.",
    cargaHoraria: 15,
    instCert: 22,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/603/",
    obs: "Esse curso foi indicado no Padlet para os Gestores",
    filter: {
      competencias: [22],
      subtemas: [359],
    },
  },
  {
    id: 132,
    itinerario: 2,
    title: "Introdução à Lei Brasileira de Proteção de Dados Pessoais",
    descricao:
      "O curso apresenta um panorama sobre a nova legislação brasileira de proteção de dados pessoais (Lei 13.709/18), compreendendo os temas mais importantes para a sua implementação, como: fundamentos e campo de aplicação, princípios e direitos do titular, responsabilidades dos agentes, aspectos internacionais, segurança e a Autoridade Nacional de Proteção de Dados, entre outros. O objetivo do curso é capacitar as pessoas para entenderem, de forma rápida e acessível, o funcionamento e diretrizes básicas expostas na nova lei geral de proteção de dados do Brasil.",
    cargaHoraria: 10,
    instCert: 34,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/153",
    obs: "Esse curso foi indicado no Padlet para os Técnicos-Administrativos em Educação e Gestores",
    filter: {
      competencias: [22],
      subtemas: [359],
    },
  },
  {
    id: 133,
    itinerario: 2,
    title: "Noções Gerais de Direitos Autorais",
    descricao:
      "Com o advento da internet, o compartilhamento de materiais aumentou significativamente, causando algumas dúvidas e incertezas em relação à autoria, uso e possibilidade de modificações desses materiais. Nesse curso, você conhecerá algumas questões gerais sobre direitos autorias no Brasil e aprenderá a relacionar as recomendações e determinações legais às situações reais de uso e de compartilhamento de materiais produzidos por terceiros.",
    cargaHoraria: 10,
    instCert: 35,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/72",
    obs: "",
    filter: {
      competencias: [21],
      subtemas: [359],
    },
  },
  {
    id: 134,
    itinerario: 2,
    title: "Ferramentas Digitais para Curadoria Educacional",
    descricao:
      "este curso tem como proposta a apresentação sobre os conceitos básicos sobre Curadoria Educacional e apresentar seis ferramentas digitais gratuitas disponíveis na web utilizadas para prática da curadoria",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Não",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=161",
    obs: "O link é válido por 1 ano (faltando 330 dias - contando a partir de 04/02/2021)",
    filter: {
      competencias: [19],
      subtemas: [359],
    },
  },
  {
    id: 135,
    itinerario: 2,
    title: "Primeiros passos para uso de Linguagem Simples",
    descricao:
      "Desenvolvido pela Enap, em parceria não onerosa com a jornalista e pesquisadora Heloísa Fischer, este curso tem o intuito de apresentar sete diretrizes para a produção de textos informativos com linguagem simples, que sejam mais fáceis de serem lidos e compreendidos pela maior parte das pessoas. A linguagem simples apresenta-se, ao mesmo tempo, como uma causa social e uma técnica de comunicação. Quer saber como aplicar a linguagem simples? Inscreva-se.",
    cargaHoraria: 80,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/315",
    obs: "",
    filter: {
      competencias: [20],
      subtemas: [359],
    },
  },
  {
    id: 136,
    itinerario: 3,
    title: "Software de Apresentação",
    descricao:
      "O curso irá introduzir os conceitos de softwares de apresentação, assim como mostrar exemplos de softwares que podem ser utilizados para criação de apresentações. Serão mostrados recursos básicos e avançados no software PowerPoint para que se possa criar uma apresentação usando os recursos desse software. Além disso, será explorado o uso do software de apresentação online Prezi, que se constitui em uma ótima opção para se desenvolver apresentações dinâmicas e diferentes.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/software-de-apresentacao.php",
    obs: "",
    filter: {
      competencias: [54],
      subtemas: [362],
    },
  },
  {
    id: 137,
    itinerario: 3,
    title: "As cotas raciais como direito de reparação",
    descricao:
      "Neste MOOC serão apresetandas as temáticas relacionada a Grupos sociais alijados ao longo dos tempo; Mito da democracia racial; Estatística da segregação e a lei 12.711 enquanto medida de reparação",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 138,
    itinerario: 3,
    title: "Por que as cotas raciais são necessárias?",
    descricao:
      "Neste MOOC será discutido o porquê as cotas raciais são necessárias.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 139,
    itinerario: 3,
    title: "A invisibilidade da mulher negra no contexto acadêmico",
    descricao:
      'Neste MOOC serão apresentadas as temáticas relacionadas ao "protagonismos" da mulher negra; a invisibilidade e violência simbólica; o silenciamento e a solidão; a importância do trabalho das comissões de Heteroidentificação e Ubuntu: Eu sou porque nós somos, a luta é de todos!',
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 140,
    itinerario: 3,
    title: "Acesso e representatividade nos espaços acadêmicos",
    descricao:
      "Neste MOOC serão apresentadas as temáticas relacionadas a atuação em atividade de ações afirmativas; Representatividade; Tipos de acesso ao Ensino Superior na UFPel; PAVE - Por mais vagas para as Escolas Públicas e os Dados dos cotistas do Centro de Engenharias",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 141,
    itinerario: 3,
    title: "A valorização da cultura afro-brasileira na sala de aula",
    descricao:
      "Neste MOOC será discutido avalorização da cultura afro-brasileira na sala de aula",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 142,
    itinerario: 3,
    title: "Como elaborar editais e construir pareceres",
    descricao:
      "Neste MOOC serão apresentadas as temáticas relacionadas a introdução aos pareceres; Parecer de provimento – análise das razões do candidato; Contextualização sócio-histórica; Contextualização jurídica e o Amparo constitucional e finalização do parecer",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 143,
    itinerario: 3,
    title: "Educação Especial e Inclusão ",
    descricao:
      "Este curso apresenta as principais leis sobre inclusão de alunos com deficiência no ensino regular. Aponta a definição de integração, inclusão, síndrome, doenças, distúrbios e transtornos. Demonstra o conceito de deficiência intelectual, síndrome de Down, autismo, surdez, cegueira, deficiência física ou motora e a paralisia cerebral. Considera escola para todos, princípios da cultura inclusiva, formação do professor, sala de aula inclusiva, família na educação escolar dos alunos com deficiência e educação inclusiva na educação infantil. ",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/educacao-especial-e-inclusao.php",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [362],
    },
  },
  {
    id: 144,
    itinerario: 3,
    title:
      "Educação Inclusiva: Introdução ao Transtorno do Espectro Autista (TEA)",
    descricao:
      "Conhecer aspectos introdutórios sobre o Transtorno do espectro autista (TEA), assim como um pouco da sua história. Pontuar conceitos para a inclusão de estudantes com TEA e o papel do professor nesse processo. Identificar alguns dos materiais didáticos e metodologias de ensino e mais conhecidas para estudantes com TEA.",
    cargaHoraria: 20,
    instCert: 12,
    possuiAcessibilidade: "Não verificado",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=36",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [354, 362],
    },
  },
  {
    id: 145,
    itinerario: 3,
    title: "Ensino e Aprendizagem: Teorias, Métodos e Avaliação ",
    descricao:
      "Introdução sobre aspectos inerentes ao Ensino e Aprendizagem; Teorias de Ensino/Aprendizagem; Estratégias e Métodos de Ensino; Metodologias Ativas de Ensino; Tecnologias na Educação; Avaliação nos processos de Ensino/Aprendizagem.",
    cargaHoraria: 30,
    instCert: 12,
    possuiAcessibilidade: "Não verificado",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=13",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [356],
    },
  },
  {
    id: 146,
    itinerario: 3,
    title: "Boas Práticas de Segurança do Trabalho em Laboratórios",
    descricao:
      "Introdução a Segurança do Trabalho: Conceitos básicos de Segurança do Trabalho. Equipamentos de Proteção Coletiva e Equipamentos de Proteção Individual e Coletiva. Produtos Químicos. Equipamentos, vidrarias e  utensílios de laboratório. Mapa de Riscos. Manual de Segurança para Laboratórios. Situações de Emergência.",
    cargaHoraria: 40,
    instCert: 12,
    possuiAcessibilidade: "Não verificado",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=17",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [174],
    },
  },
  {
    id: 147,
    itinerario: 3,
    title: "Introdução a Gestão de Projetos",
    descricao:
      "Este curso foi feito com o objetivo de apresentar os conceitos fundamentais referentes ao tema gestão de projetos, com destaque para a definição e caracterização do termo “projeto” e da apresentação do ciclo de vida dos projetos e das dez áreas do conhecimento, definidas pelo Project Management Institute (PMI), instituição internacional que se dedica ao estudo e à disseminação dos melhores métodos e técnicas de gerenciamento de projetos.",
    cargaHoraria: 30,
    instCert: 12,
    possuiAcessibilidade: "Não verificado",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=25",
    obs: "",
    filter: {
      competencias: [28],
      subtemas: [1],
    },
  },
  {
    id: 148,
    itinerario: 3,
    title: "Ergonomia Aplicada aos Postos de Trabalho",
    descricao:
      "Introdução à Ergonomia: breve histórico; origem e evolução da ergonomia; conceitos, definições e objetivos da ergonomia; tipos de ergonomia; Norma Regulamentadora nº 17 do MTE: conhecer os parâmetros legais que permitem a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, de modo a proporcionar um máximo de conforto, segurança e desempenho eficiente. Análise Ergonômica do Trabalho (AET): conceito de AET, aprender as definições básicas de demanda, tarefa e atividade nos postos de trabalho para identificar inadequações e fatores de risco existentes. Ergonomia nos Postos de trabalho: Conceitos básicos da Ergonomia aplicado aos postos de trabalho",
    cargaHoraria: 20,
    instCert: 12,
    possuiAcessibilidade: "Não verificado",
    link: "https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=27",
    obs: "",
    filter: {
      competencias: [1],
      subtemas: [176],
    },
  },
  {
    id: 149,
    itinerario: 3,
    title: "Cultura Surda",
    descricao:
      "História da comunidade surda, cultura surda, identidades surdas e a língua de sinais.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Não verificado",
    link: "https://moodle.ifrs.edu.br/course/search.php?q=Cultura+Surda+&areaids=core_course-course",
    obs: "",
    filter: {
      competencias: [32],
      subtemas: [378],
    },
  },
  {
    id: 150,
    itinerario: 3,
    title: "Aprendizagem Significativa",
    descricao:
      "Conceitos iniciais sobre Aprendizagem Significativa, Abordagens Teóricas e Tipos de Aprendizagem, Ensino Significativo.",
    cargaHoraria: 30,
    instCert: 14,
    possuiAcessibilidade: "Não verificado",
    link: "https://moodle.ifrs.edu.br/course/search.php?q=Aprendizagem+Significativa&areaids=core_course-course",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [362],
    },
  },
  {
    id: 151,
    itinerario: 3,
    title: "Qualidade de Cursos em Educação a Distância",
    descricao:
      "Não basta ter conteúdo, tem que conversar; Organizando o Curso; Produzindo o Conteúdo do Curso; Equívocos Gerais",
    cargaHoraria: 30,
    instCert: 14,
    possuiAcessibilidade: "Não verificado",
    link: "https://moodle.ifrs.edu.br/course/search.php?q=Aprendizagem+Significativa&areaids=core_course-course",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [362],
    },
  },
  {
    id: 152,
    itinerario: 3,
    title: "Didática",
    descricao:
      "O que é Didática?; Perfil do Professor; Planejamento;  Técnicas e Métodos; Avaliação",
    cargaHoraria: 60,
    instCert: 14,
    possuiAcessibilidade: "Não verificado",
    link: "https://moodle.ifrs.edu.br/course/search.php?q=Did%C3%A1tica+&areaids=core_course-course",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [362],
    },
  },
  {
    id: 153,
    itinerario: 3,
    title: "Pesquisa em Sala de Aula na Educação Básica",
    descricao:
      "Por que pesquisa na educação básica? Projeto de Pesquisa; Problema de pesquisa, objetivos e hipóteses; Abordagem quantitativa; Abordagem qualitativa; Elaboração de perguntas; Análise e apresentação dos dados",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Não verificado",
    link: "https://moodle.ifrs.edu.br/course/search.php?q=Pesquisa+em+Sala+de+Aula+na+Educa%C3%A7%C3%A3o+B%C3%A1sica+&areaids=core_course-course",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [362],
    },
  },
  {
    id: 154,
    itinerario: 3,
    title: "Planejamento Docente",
    descricao:
      "O curso tem por objetivo compreender e identificar as possibilidades pedagógicas do espaço pedagógico voltado aos processos formativos formais ou informais, a fim de subsidiar o planejamento de ações que desenvolvam respostas a problemas específicos, definindo os fins e os meios que direcionam para soluções.",
    cargaHoraria: 30,
    instCert: 5,
    possuiAcessibilidade: "Não verificado",
    link: "https://moodle.ifrj.edu.br/login/index.php",
    obs: "",
    filter: {
      competencias: [24],
      subtemas: [362],
    },
  },
  {
    id: 155,
    itinerario: 3,
    title: "ASSÉDIO MORAL! - CARTILHA INFORMATIVA",
    descricao:
      "Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Moral.",
    cargaHoraria: 0,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [241, 320],
    },
  },
  {
    id: 156,
    itinerario: 3,
    title: "ASSÉDIO SEXUAL - CARTILHA INFORMATIVA",
    descricao:
      "Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Sexual.",
    cargaHoraria: 0,
    instCert: 12,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [241, 320],
    },
  },
  {
    id: 157,
    itinerario: 3,
    title: "Manual de Conduta do Servidor Público Federal",
    descricao:
      "Este manual tem por finalidade: a) organizar as disposições relacionadas à conduta profissional, buscando trazer uma abordagem atualizada, clara e objetiva sobre os temas relacionados;b) disseminar boas práticas que se constituem no padrão de comportamento que é esperado do servidor; e c) auxiliar no aprimoramento de uma cultura organizacional fundamentada no princípio da integridade e na busca constante de alto desempenho nos órgãos e entidades do Poder Executivo Federal. ",
    cargaHoraria: 0,
    instCert: 38,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=21",
    obs: "Trata-se de cartilha informativa aos servidores",
    filter: {
      competencias: [24],
      subtemas: [354],
    },
  },
  {
    id: 158,
    itinerario: 3,
    title: "Gerenciamento de Projetos e Portfólios de Projetos - Guia",
    descricao:
      "Guia Referencial para Gerenciamento de Projetos e Portfólios de Projetos. Este guia orienta a utilização da abordagem de gerenciamento de projetos baseada nas características de cada projeto, no ambiente no qual está contido, nas habilidades da equipe e em outros parâmetros. O documento compila conceitos, modelos e indicações das melhores práticas atuais e amplamente disseminadas a respeito de gerenciamento de projetos e de portfólios de projetos.",
    cargaHoraria: 0,
    instCert: 38,
    possuiAcessibilidade: "Não sei informar",
    link: "https://ead.ifrn.edu.br/ava/extensao/enrol/index.php?id=21",
    obs: "Trata-se de manual de orientações",
    filter: {
      competencias: [28],
      subtemas: [264],
    },
  },
  {
    id: 159,
    itinerario: 3,
    title: "Aprendizagem Organizacional e Trilhas de Aprendizagem",
    descricao:
      "Este curso apresenta capacitação e conhecimento de boas práticas de desenvolvimento de competências das organizações contemporâneas e a importância da aprendizagem baseada no autodesenvolvimento.",
    cargaHoraria: 30,
    instCert: 15,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/423",
    obs: "O curso fica disponível 30 dias após o cadastro. Para continuar o acesso ao Curso é necessário matricular-se no curso novamente. As turmas e matrículas são mensais.",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 160,
    itinerario: 3,
    title: "Comunicação oral e escrita",
    descricao:
      "Proporcionar melhorias, pessoais e profissionais, a partir de conhecimentos específicos sobre Comunicação Oral e Escrita.",
    cargaHoraria: 30,
    instCert: 12,
    possuiAcessibilidade: "Não",
    link: "https://mais.ifmg.edu.br/enrol/index.php?id=48",
    obs: "As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [2],
      subtemas: [357],
    },
  },
  {
    id: 161,
    itinerario: 3,
    title: "Fundamentos da linguagem visual",
    descricao:
      "Esse curso desenvolve princípios da linguagem visual. Apresenta elementos e técnicas visuais essenciais para o conhecimento da gramática visual, aplicáveis em situações cotidianas em que se estabelece a comunicação visual como a expressão visual de ideias, a elaboração de apresentações e até a criação de layouts mais complexos.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "http://mundi.ifsul.edu.br/portal/fundamentos-da-linguagem-visual.php",
    obs: "Todos os vídeos contam com a intérprete de Libras em ótimo tamanho de visualização. Contudo, as legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 162,
    itinerario: 3,
    title:
      "Desenvolvendo competências em informações acadêmicas e profissionais.",
    descricao:
      "A busca, avaliação e uso estratégico, ético e responsável da informação são requisitos fundamentais a indivíduos que estão percorrendo o caminho acadêmico ou se preparando para o mercado de trabalho. Importante, nesse contexto, o desenvolvimento de habilidades no trato da informação, disponível em meios impressos e digitais, de forma a estarem mais capacitados para enfrentar os desafios do século XXI.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=136",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [4],
      subtemas: [359],
    },
  },
  {
    id: 163,
    itinerario: 3,
    title: "Estratégias Flexíveis de Ensino em Tempos de Pandemia",
    descricao:
      "Este curso tem como objetivo auxiliar profissionais da área de educação e demais profissionais a conhecerem as possibilidades oferecidas pelo Ensino Híbrido e como este pode estar presente em suas práticas pedagógicas em tempos de pandemia.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=177 ",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [4],
      subtemas: [359],
    },
  },
  {
    id: 164,
    itinerario: 3,
    title: "Google Drive: Colaboração na prática",
    descricao:
      "Este curso cobre uma introdução à colaboração e aspectos colaborativos no Google Drive, focando em trabalhos em grupo, tanto para a versão para computador quanto para dispositivos móveis.",
    cargaHoraria: 80,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=144",
    obs: "O curso só tem 8h, mas é objetivo e direto. A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 165,
    itinerario: 3,
    title: "Documentos Google: editor de textos",
    descricao:
      "Neste curso você vai aprender como criar documentos de texto de uma forma versátil e prática utilizando a ferramenta Documentos Google.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4389",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 166,
    itinerario: 3,
    title: "Planilhas Google: Planilha Eletrônica",
    descricao:
      "Neste curso você aprenderá a acessar e a utilizar os principais elementos da Planilha Google.",
    cargaHoraria: 60,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4391",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 167,
    itinerario: 3,
    title: "Google Drive",
    descricao:
      "Nesse curso você vai conhecer e aprender sobre o Google Drive, ferramenta utilizada para o armazenamento de arquivos.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4390",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 168,
    itinerario: 3,
    title: "HTML: Introdução ao desenvolvimento de páginas web",
    descricao:
      "Aprenda a criar páginas web do zero e conhecer como funciona a internet para o desenvolvimento de sites. Também criaremos as primeiras páginas. Vamos formatá-las, inserir links, listas, imagens, arquivos de áudio e vídeo. Conheça alguns comandos avançados e dicas especiais de compatibilidade e acessibilidade.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4975",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 169,
    itinerario: 3,
    title: "Produção de Vídeos usando OBS Studio e Kdenlive",
    descricao:
      "O curso aborda de forma objetiva, técnicas e ferramentas para produção de vídeos utilizando a captura de tela do computador, gravação de som e imagem. Os softwares utilizados serão o OBS Studio (Open Broadcaster Software) e o Kdenlive, ambos de código aberto e gratuitos. ",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4991",
    obs: "O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 170,
    itinerario: 3,
    title: "Iniciação ao serviço Público nos Institutos Federais",
    descricao:
      "Este curso apresenta informações e orienta os servidores em início de carreira nos Institutos Federais e aborda os seguinte temas: Institutos Federais; Ensino; Extensão; Pesquisa e Inovação; Pós-Graduação; Comunicação e Redação Oficial; Ética e Cidadania; Legislação de Pessoal; Protocolo; Orçamento, Licitações e Contratos; Saúde do Servidor; Inclusão.",
    cargaHoraria: 80,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=5004",
    obs: "Os vídeos disponíveis não contam com Libras, mas apresenta Legenda e Transcrição acessível por link próprio. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 171,
    itinerario: 3,
    title: "Inclusão Sociodigital para Multiplicadores",
    descricao:
      "Por meio deste curso o multiplicador aprenderá a planejar um curso de inclusão sociodigital e ensinar aos discentes os aplicativos de smartphones úteis no dia a dia, utilizando aplicativos tais como redes sociais, e-mail, aplicativos de localização e mobilidade, fotos e backup de contatos e aplicativos de utilidade pública.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=167",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [3],
      subtemas: [359],
    },
  },
  {
    id: 172,
    itinerario: 3,
    title: "Educador Maker: ensino 'mão na massa'",
    descricao:
      "Este curso tem como objetivo geral formar educadores capazes de reconhecer e integrar características da cultura maker na educação, utilizando a tecnologia como meio e não fim do processo de aprendizagem, a fim de atender as demandas da educação do século XXI.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=160",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [4],
      subtemas: [359],
    },
  },
  {
    id: 173,
    itinerario: 3,
    title: "Moodle para Educadores",
    descricao:
      "O curso proporciona o conhecimento básico necessário para a edição de salas virtuais para cursos ou disciplinas na modalidade à distância ou para apoio à modalidade presencial. Apresenta a parte instrucional que orienta à produção da sala virtual com inserção de recursos e atividades e também busca levar o educador a uma reflexão sobre o potencial construcionista do Moodle como suas potencialidades para a realização de aulas com atividades colaborativas, bem como as possibilidades de acompanhamento e avaliação da aprendizagem. O curso foi elaborado em nível básico e a partir da versão Moodle 3.1 (Tema Essential)",
    cargaHoraria: 60,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=141",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [3],
      subtemas: [359],
    },
  },
  {
    id: 174,
    itinerario: 3,
    title: "Acessibilidade e Tecnologia",
    descricao:
      "O curso tem como objetivos apresentar os conceitos relacionados à inclusão e acessibilidade, destacar os tipos de acessibilidade e a tecnologia assistiva, bem como apresentar algumas tecnologias para a produção de materiais digitais acessíveis.",
    cargaHoraria: 60,
    instCert: 19,
    possuiAcessibilidade: "Sim",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=151",
    obs: "O curso tem diversas aulas em Libras e conta com Transcrição em Português. A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [4],
      subtemas: [359],
    },
  },
  {
    id: 175,
    itinerario: 3,
    title: "Ferramentas Digitais para Curadoria Educacional",
    descricao:
      "Este curso tem como proposta a apresentação sobre os conceitos básicos sobre Curadoria Educacional e apresentar seis ferramentas digitais gratuitas disponíveis na web utilizadas para prática da curadoria",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=161 ",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [5],
      subtemas: [359],
    },
  },
  {
    id: 176,
    itinerario: 3,
    title: "Introdução a projetos",
    descricao:
      "O curso proporciona ao aluno a aplicação dos conceitos básicos e necessários relativos a projetos, garantindo o entendimento inicial para o sucesso de um projeto. face a carência destes, no que diz respeito aos principais fundamentos associados a projetos.",
    cargaHoraria: 20,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=169 ",
    obs: "A Plataforma MOOC (Moodle) possui o software VLibras para auxiliar na acessibilidade. As legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 177,
    itinerario: 3,
    title: "Projetos Educacionais e Interdisciplinares",
    descricao:
      'Neste curso aprenderemos um pouco mais sobre Projetos Educacionais e Interdisciplinares. O curso utiliza como base o material "Projetos educacionais " de Elisa Maria Gomide e Denise Mendes França e "Tipos de Projetos" de Denise Mendes França e Marcos Antonio Almeida de Oliveira produzidos para a Rede e-Tec Brasil.',
    cargaHoraria: 30,
    instCert: 14,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4948",
    obs: "Os vídeos possuem Libras ou Transcrição completa. O curso não adota PDFs e materiais que estejam disponíveis para download. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [3],
      subtemas: [357],
    },
  },
  {
    id: 178,
    itinerario: 3,
    title: "Software de Apresentação",
    descricao:
      "O curso irá introduzir os conceitos de softwares de apresentação, assim como mostrar exemplos de softwares que podem ser utilizados para criação de apresentações. Serão mostrados recursos básicos e avançados no software PowerPoint para que se possa criar uma apresentação usando os recursos desse software. Além disso, será explorado o uso do software de apresentação online Prezi, que se constitui em uma ótima opção para se desenvolver apresentações dinâmicas e diferentes.",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/software-de-apresentacao.php",
    obs: "Todos os vídeos contam com a intérprete de Libras em ótimo tamanho de visualização. Contudo, as legendas nos vídeos só estão disponíveis se o usuário visualizar a partir do Youtube e clicar na geração automática de legenda (as mesmas não foram editadas previamente).",
    filter: {
      competencias: [2],
      subtemas: [362],
    },
  },
  {
    id: 179,
    itinerario: 3,
    title: "Fundamentos da LGPD",
    descricao:
      "O curso foi desenvolvido com foco na apresentação de conceitos gerais da LGPD e nos impactos desta Lei em processos rotineiros de pessoas e empresas. Também pretende-se fomentar o debate sobre a proteção de dados pessoais e a segurança da informação, em face das bases legais existentes.",
    cargaHoraria: 15,
    instCert: 15,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/603",
    obs: "O curso fica disponível 20 dias após o cadastro. Para continuar o acesso ao Curso é necessário matricular-se no curso novamente. As turmas e matrículas são mensais.",
    filter: {
      competencias: [5],
      subtemas: [357],
    },
  },
  {
    id: 180,
    itinerario: 3,
    title: "Repositórios de Materiais Didáticos Digitais e Direitos de Uso",
    descricao:
      "O curso oferece a possibilidade de conhecimento acerca de uso de materiais didáticos digitais, locais de repositórios, criação, uso e orienta sobre os direitos de uso destes materiais",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4918",
    obs: "",
    filter: {
      competencias: [6],
      subtemas: [357],
    },
  },
  {
    id: 181,
    itinerario: 3,
    title: "Ferramentas Digitais para Curadoria Educacional",
    descricao:
      "Este curso tem como proposta a apresentação sobre os conceitos básicos sobre Curadoria Educacional e apresentar seis ferramentas digitais gratuitas disponíveis na web utilizadas para prática da curadoria",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=161",
    obs: "Apesar da carga horária baixa o curso atende muito bem a necessidade de se capacitar para curadoria de objetos de aprendizagem. Os cursos mudam anualmente o link",
    filter: {
      competencias: [6],
      subtemas: [357],
    },
  },
  {
    id: 182,
    itinerario: 3,
    title: "Gamificação para Educação",
    descricao:
      "O curso visa introduzir o conceito das mecânicas e das narrativas dos jogos em sistemas educacionais e suas princiais característiacs para educadores e profissionais da educação ",
    cargaHoraria: 15,
    instCert: 7,
    possuiAcessibilidade: "Sim",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=35",
    obs: "A plaforma possui software VLibras para auxiliar na acessibiliade",
    filter: {
      competencias: [7],
      subtemas: [359],
    },
  },
  {
    id: 183,
    itinerario: 3,
    title: "Videoaula - Da concepção à postagem",
    descricao:
      "Passo-a-passo da criação de videoaula usando a linguagem audiovisual; Conceitos da aprendizagem multimídia para criação do conteúdo e conhecimento técnico para a produção, gravação e edição da videoaula",
    cargaHoraria: 60,
    instCert: 20,
    possuiAcessibilidade: "Parcial",
    link: "https://cursoslivres.ifms.edu.br/course/view.php?id=154",
    obs: "",
    filter: {
      competencias: [7],
      subtemas: [359],
    },
  },
  {
    id: 184,
    itinerario: 3,
    title: "Wiki: produção colaborativa de conhecimento",
    descricao:
      "O curso aborda a colaboração e aprendizgem colaborativa em ambientes virtuais de aprendizagens, com destaque para o potencial da wiki na educação",
    cargaHoraria: 10,
    instCert: 7,
    possuiAcessibilidade: "Sim",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=17",
    obs: "A plaforma possui software VLibras para auxiliar na acessibiliade",
    filter: {
      competencias: [8],
      subtemas: [359],
    },
  },
  {
    id: 185,
    itinerario: 3,
    title: "Introdução a criação de sites",
    descricao:
      "O curso permite a compreensão de como criar sites para que possa ser realizado o compartilhamento de informações",
    cargaHoraria: 30,
    instCert: 21,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.ifro.edu.br/course/introducao-a-criacao-de-sites/intro  ",
    obs: "",
    filter: {
      competencias: [8],
      subtemas: [362],
    },
  },
  {
    id: 186,
    itinerario: 3,
    title: "Introdução ao Google Classroom",
    descricao:
      "O curso traz possibilidades da utilização do Google Classroom por professores, desde como criar uma turma, convidar alunos, convidar professores parceiros, até criar atividades e atribuir notas. ",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=152",
    obs: "O curso muda o link anualmente de acordo com a criação da turma. Esta na seleção da Vanessa também",
    filter: {
      competencias: [7],
      subtemas: [358],
    },
  },
  {
    id: 187,
    itinerario: 3,
    title: "Fundamentos da Lei Geral de Proteção de Dados",
    descricao:
      "O curso foi desenvolvido com foco na apresentação de conceitos gerais da LGPD e nos impactos desta Lei em processos rotineiros de pessoas e empresas. Também pretende-se fomentar o debate sobre a proteção de dados pessoais e a segurança da informação, em face das bases legais existentes. Foi desenvolvido pelo Serpro - Serviço Federal de Processamento de Dados, em 2020, originalmente para a capacitação do corpo funcional. Agora é ofertado ao público em geral, por meio de parceria com a Escola Nacional de Administração Pública - Enap.",
    cargaHoraria: 15,
    instCert: 22,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/603/",
    obs: "Esta na seleção no Paulo Evaristo também",
    filter: {
      competencias: [8],
      subtemas: [359],
    },
  },
  {
    id: 188,
    itinerario: 3,
    title: "HTML: Introdução ao desenvolvimento de páginas web",
    descricao:
      "Aprenda a criar páginas web do zero e conhecer como funciona a internet para o desenvolvimento de sites. Também criaremos as primeiras páginas. Vamos formatá-las, inserir links, listas, imagens, arquivos de áudio e vídeo. Conheça alguns comandos avançados e dicas especiais de compatibilidade e acessibilidade.",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "Sim",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4975",
    obs: "",
    filter: {
      competencias: [7],
      subtemas: [362],
    },
  },
  {
    id: 189,
    itinerario: 3,
    title: "Design Instrucional e Tecnologia com Articulate StoryLine 360",
    descricao:
      "Este curso foi elaborado para ajudar os alunos a compreender a estrutura teórica do design instrucional, a teoria, os métodos, a prática do design instrucional usando vídeo ou storyboards. Também aborda o uso do Articulate Storyline 360 como uma ferramenta de e-Learning para criar um produto completo de design instrucional",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://escolavirtual.gov.br/curso/630",
    obs: "",
    filter: {
      competencias: [7],
      subtemas: [362],
    },
  },
  {
    id: 190,
    itinerario: 3,
    title: "Estratégias Flexíveis em Tempos de Pandemia",
    descricao:
      "Este curso tem como objetivo auxiliar profissionais da área de educação e demais profissionais a conhecerem as possibilidades oferecidas pelo Ensino Híbrido e como este pode estar presente em suas práticas pedagógicas em tempos de pandemia.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/mod/page/view.php?id=30898",
    obs: "O link é para o curso com Oferta semestral. O curso apresenta uma abordagem mais teórica. Os conteúdos se mostraram relevantes para o contexto atual e de pós pandemia.",
    filter: {
      competencias: [10],
      subtemas: [359],
    },
  },
  {
    id: 191,
    itinerario: 3,
    title: "Gamificação no Moodle",
    descricao:
      "O curso visa orientar professores e demais profissionais da educação interessados a compreender e implementar algumas formas e técnicas de gamificar um curso em um ambiente virtual de aprendizagem. ",
    cargaHoraria: 50,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/mod/page/view.php?id=30510",
    obs: "O link é para o curso com Oferta semestral. O curso apresenta um interessante enfoque em atividades para tornar as atividades mais dinâmicas com a utilização de metodologias gamificadas.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 192,
    itinerario: 3,
    title: "Realidade Virtual como apoio ao ensino",
    descricao:
      "O curso aberto de Realidade Virtual como apoio ao ensino é uma iniciativa do Instituto Federal do Espírito Santo (Ifes), por meio do Centro de Referência em Formação e em Educação a Distância (Cefor). O curso compreende em apresentar a história e evolução da tecnologia de realidade virtual, os diferentes tipos de equipamentos, como instalar, bem como mostrar algumas capacidades da tecnologia e possibilidades de seu uso em sala de aula.",
    cargaHoraria: 20,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/mod/page/view.php?id=29635",
    obs: "O link é para o curso com Oferta semestral. ",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 193,
    itinerario: 3,
    title: "Gamificação no Moodle",
    descricao:
      "Neste curso, objetiva compartilhar algumas formas e ideias de gamificar seu curso no Moodle. Mostrar ferramentas, técnicas e aplicações. Vivenciar a gamificação na prática.",
    cargaHoraria: 30,
    instCert: 2,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4254",
    obs: "O link é para o curso com Oferta semestral. O curso apresenta um interessante enfoque em atividades para tornar as atividades mais dinâmicas com a utilização de metodologias gamificadas.",
    filter: {
      competencias: [12],
      subtemas: [359],
    },
  },
  {
    id: 194,
    itinerario: 3,
    title: "Moodle Básico para Professores",
    descricao:
      "O curso aborda elementos para o planejamento das aulas no MOODLE, inserção de conteúdos e atividades.",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4912",
    obs: "O link é para o curso com Oferta semestral. Os conteúdos são voltados para a instrumentalização do educador. ",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 195,
    itinerario: 3,
    title: "Formação Pedagógica para EaD",
    descricao:
      "O curso aborda Fundamentos da Educação a Distância; Tecnologias educacionais e a linguagem dialógica na Ead; O papel do professor mediador presencial e mediador a distância; O papel do professor conteudista (autor). ",
    cargaHoraria: 50,
    instCert: 20,
    possuiAcessibilidade: "SIM",
    link: "http://cursoslivres.ifms.edu.br/",
    obs: "O link é para o curso com Oferta semestral.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 196,
    itinerario: 3,
    title: "Moodle Intermediário para Professores - Aprendizagem Colaborativa",
    descricao:
      'O curso tem como objetivo desenvolver atividades colaborativas eficazes no Moodle utilizando as atividades "wiki" e "glossário".',
    cargaHoraria: 60,
    instCert: 5,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrj.edu.br/",
    obs: "O link é para a página principal da Plataforma. O curso estará disponível a partir de março para o público em geral. A instituição nos forneceu um código de aceso aos cursos que nos permitiu realizar a análise. Contato realizado com o Cláudio (21 987967329) Os conteúdos trazem uma interessante abordagem com metodologias de trabalho colaborativo.",
    filter: {
      competencias: [11],
      subtemas: [359],
    },
  },
  {
    id: 197,
    itinerario: 3,
    title: "Moodle Básico para Professores",
    descricao:
      "O curso oferece conhecimentos básicos sobre criação de cursos online utilizando a plataforma Moodle, apresentando os principais recursos e atividades. ",
    cargaHoraria: 60,
    instCert: 5,
    possuiAcessibilidade: "SIM",
    link: "https://moodle.ifrj.edu.br/",
    obs: "O link é para a página principal da Plataforma. O curso estará disponível a partir de março para o público em geral. A instituição nos forneceu um código de aceso aos cursos que nos permitiu realizar a análise. Contato realizado com o Cláudio (21 987967329) .A instituição nos forneceu um código de aceso aos cursos que nos permitiu realizar a análise.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 198,
    itinerario: 3,
    title: "Ambientes Digitais de Aprendizagem",
    descricao:
      "O Curso tem por objetivo apresentar as principais características, funcionalidades e limitações existentes nos ambientes digitais de aprendizagem - AVA, contribuindo para a tomada de decisão tanto para a escolha do AVA mais adequado quanto para escolhas de desenho instrucional.",
    cargaHoraria: 30,
    instCert: 23,
    possuiAcessibilidade: "SIM",
    link: "https://mooc38.escolavirtual.gov.br/course/view.php?id=3641#section-3",
    obs: "O curso traz uma perspectiva mais reflexiva que ajudará no processo decisório para a escolha do ambiente virtual de aprendizagem para as práticas pedagógicas remotas.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 199,
    itinerario: 3,
    title: "Mooc de Lovelace: Pensamento Computacional com Scratch",
    descricao:
      "O curso aborda os conteúdos sobre a Linguagem de Programação Scratch e os pilares do pensamento computacional que são: abstração; pensamento algorítmico; decomposição; e reconhecimento de padrões. A partir desses conhecimentos o docente poderá experimentar e desenvolver novos formatos e métodos pedagógicos para o ensino e estruturar as aulas de modo a que diferentes atividades digitais contribuam em conjunto para reforçar o objetivo de aprendizagem utilizando o Scratch.",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "SIM",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=85",
    obs: "O link é para o curso com Oferta semestral.  Os conteúdos trazem uma perspectiva de abordagem do pensamento computacional impostante para compreensão e desenvolvimento de atividades utilizando lógica computacional.",
    filter: {
      competencias: [9],
      subtemas: [359],
    },
  },
  {
    id: 200,
    itinerario: 3,
    title: "Avaliação por Rubrica no Moodle",
    descricao:
      "O curso apresenta o método de avaliação por rubrica no Moodle e suas potencialidades para contribuir no desenvolvimento do processo de aprendizagem dos estudantes e de acompanhamento, avaliação e feedback pelos professores. ",
    cargaHoraria: 20,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=182",
    obs: "O curso é trabalhado em perspectiva prática, com o uso de tecnologias e se mostra bastante aderente à trilha Avaliação, especificamente, aos trilhos 1 e 3. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 201,
    itinerario: 3,
    title: "Avaliação em Processos de Aprendizagem e Modelos de Feedback",
    descricao:
      "O curso tem como objetivo fornecer aos servidores públicos aspectos conceituais sobre avaliação da aprendizagem, a partir das metodologias ativas, aplicando habilidades de coleta e análise de dados para a melhoria contínua de projetos educacionais. ",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Parcial",
    link: "https://www.escolavirtual.gov.br/curso/606",
    obs: "O curso é mais teórico e conceitual e não foca apenas no mundo educacional, tratando também do mundo corporativo. Entretanto, traz vídeos e tutoriais sobre uso de ferramentas e tecnologias de apoio. Cobre os três trilhos da trilha, ainda que não em profundidade e nem em atividades práticas o suficiente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, não é da Rede EPCT.",
    filter: {
      competencias: [13, 14, 15],
      subtemas: [358],
    },
  },
  {
    id: 202,
    itinerario: 3,
    title: "Moodle para Mediadores",
    descricao:
      "O curso apresenta os procedimentos para a utilização da plataforma Moodle, construído a fim de identificar os procedimentos habilitados aos professores mediadores, bem como descrever funcionalidades disponibilizadas para a avaliação e o acompanhamento de aprendizagem dos estudantes. ",
    cargaHoraria: 40,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/moodle-para-mediadores.php",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas. O curso é prático e mostra a avaliação por meio do uso de tecnologias, cobrindo parcialmente os trilhos 1 e 3. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 203,
    itinerario: 3,
    title: "Gamificação no Moodle",
    descricao:
      "O curso visa orientar professores e demais profissionais da educação interessados a compreender e implementar algumas formas e técnicas de gamificar um curso em um ambiente virtual de aprendizagem.",
    cargaHoraria: 50,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=171",
    obs: "O curso não é específico sobre avaliação, mas esta é tratada durante todo o curso, uma vez que a gamificação consiste em utilizar recursos de jogos que, no caso é no Moodle, ou seja, de forma tecnológica, permitindo ao professor criar atividades e formatos de avaliação alternativos. O curso é bem prático e aderente aos trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 204,
    itinerario: 3,
    title: "Gamificação no Moodle - Turma 2022A",
    descricao:
      "O curso trata de conceitos de Gamificação; Gamificação na Prática; Gamificando o Curso no Moodle.",
    cargaHoraria: 30,
    instCert: 2,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifrs.edu.br/course/view.php?id=4908 ",
    obs: "O curso não é específico sobre avaliação, mas esta é tratada durante todo o curso, uma vez que a gamificação consiste em utilizar recursos de jogos que, no caso é no Moodle, ou seja, de forma tecnológica, permitindo ao professor criar atividades e formatos de avaliação alternativos. O curso utiliza em sua maioria materiais textuais, mas aborda o uso de tecnologias de forma prática, no caso em como fazer isso na avaliação. Assim, está aderente aos trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. O link é válido por 1 semestre, pois a cada semestre novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 205,
    itinerario: 3,
    title: "Moodle para Educadores",
    descricao:
      "O curso proporciona o conhecimento básico necessário para a edição de salas virtuais para cursos ou disciplinas na modalidade à distância ou para apoio à modalidade presencial. Apresenta a parte instrucional que orienta à produção da sala virtual com inserção de recursos e atividades e também busca levar o educador a uma reflexão sobre o potencial construcionista do Moodle como suas potencialidades para a realização de aulas com atividades colaborativas, bem como as possibilidades de acompanhamento e avaliação da aprendizagem.",
    cargaHoraria: 60,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=141",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas. O curso é prático e mostra a avaliação por meio do uso de tecnologias, cobrindo os trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 206,
    itinerario: 3,
    title: "Introdução ao Google Classroom",
    descricao:
      "O curso traz possibilidades da utilização do Google Classroom por professores, desde como criar uma turma, convidar alunos, convidar professores parceiros, até criar atividades e atribuir notas. ",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=152",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas. Uma característica interessante é que é um curso sobre a plataforma Google Classroom, sendo que maioria dos cursos identificados é da plataforma Moodle. Ainda que o curso não trabalhe os itens em profundidade, é prático e mostra a avaliação por meio do uso de tecnologias, cobrindo os trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. O link é válido por 1ano, pois a cada ano novos links são gerados.",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 207,
    itinerario: 3,
    title: "Moodle para Docentes",
    descricao:
      "O curso apresenta os procedimentos para a utilização da plataforma Moodle: planejamento, criação e configuração de um curso ou disciplina. Aborda os principais recursos desta plataforma, e também, descreve as principais atividades que o Moodle oferece, como avaliação e acompanhamento da aprendizagem dos estudantes.",
    cargaHoraria: 60,
    instCert: 14,
    possuiAcessibilidade: "Sim",
    link: "https://mundi.ifsul.edu.br/portal/moodle-para-docentes.php",
    obs: "O curso não é específico sobre avaliação, mas esta é um de seus temas e trabalha o tema de forma prática, em particular os trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, da Rede EPCT. ",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 208,
    itinerario: 3,
    title:
      "Docência em EaD: Planejando o uso de instrumentos e critérios nas avaliações on-line",
    descricao:
      "O curso trata de instrumentos de avaliação on-line; Critérios de avaliação; Avaliação da aprendizagem.",
    cargaHoraria: 20,
    instCert: 7,
    possuiAcessibilidade: "Não",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=56 ",
    obs: "O curso é bastante teórico, focado em dois ebooks, mas em determinados momentos aborda sobre o uso de tecnologias como apoio aos processos avaliativos. Desta forma é parcialmente aderente à trilha, especialmente aos trilhos 1 e 3. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, não é da Rede EPCT. ",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 209,
    itinerario: 3,
    title: "Questionários Moodle",
    descricao:
      "O curso trata sobre criação de questionários e ferramentas de auxílio à avaliação final.",
    cargaHoraria: 10,
    instCert: 24,
    possuiAcessibilidade: "Não",
    link: "https://lumina.ufrgs.br/course/view.php?id=92",
    obs: "O curso foca em um tipo específico de avaliação com a utilização de tecnologias, que no caso é o questionário. Trata especialmente dos trilhos 1 e 3, mas também cobre parte do trilho 2, no módulo Avaliação de questionários, ainda que todos trilhos sejam cobertos apenas parcialmente, especialmente o 2. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, não é da Rede EPCT. ",
    filter: {
      competencias: [13, 14, 15],
      subtemas: [358],
    },
  },
  {
    id: 210,
    itinerario: 3,
    title: "Moodle em Ação: Atividades e Recursos",
    descricao:
      "O curso tem o objetivo de contribuir para a utilização do Moodle em práticas pedagógicas, seja na Educação Básica, ou no Ensino Superior. É composto por vivências de atividades no ambiente virtual, experimentações, materiais de apoio e avaliações. ",
    cargaHoraria: 30,
    instCert: 24,
    possuiAcessibilidade: "Não",
    link: "https://lumina.ufrgs.br/course/view.php?id=111",
    obs: "O curso não é específico de avaliação, mas esta é um dos temas abordados, com a utilização de tecnologias: questionário, fórum, wiki etc. Trata especialmente dos trilhos 1 e 3, ainda que parcialmente. É gratuito, sem pré-requisitos, com acesso contínuo, certificação automática, sem tutoria, não é da Rede EPCT. ",
    filter: {
      competencias: [13, 15],
      subtemas: [358],
    },
  },
  {
    id: 211,
    itinerario: 3,
    title: "Educação Especial: histórico, políticas e práticas",
    descricao:
      "O curso busca proporcionar um conhecimento introdutório acerca dos aspectos históricos, políticos e práticos da Educação Especial. Do mesmo modo, tem a intenção de desconstruir alguns aspectos relacionados a preconceitos a pessoas com deficiencias , transtorno do espectro autista, altas habilidades/superdotação para tentar reconhecer as suas diferenças e suas potencialidades. ",
    cargaHoraria: 30,
    instCert: 11,
    possuiAcessibilidade: "parcial",
    link: "https://cursos.poca.ufscar.br/course/view.php?id=58 ",
    obs: "Apesar do cursos não ter preenchido 100% todos os critérios para a Elevada Aderência, o mesmo se constitui como apto para indicação como material recomendável para composição da trilha formativa do Plafor. O curso tem aderência aos objetivos deste projeto, pois aborda em amplo espectro os grandes temas da educação inclusiva. Naturalmente, o curso é um prelúdio ao tema, não chegando perto de exaurir a temática tão diversa e complexa, mas pode servir de uma boa introdução no sentido de preparar melhor ao Educador quanto a compreensão do histórico da Educação Inclusiva e as características das pessoas com necessidades educacionais específicas.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 212,
    itinerario: 3,
    title: "Comunicação para TODOS: recursos e ferramentas de acessibilidade",
    descricao:
      " O curso tem o objetivo de promover a compreensão dos conceitos e princípios básicos sobre Acessibilidade na Comunicação, assim como problematizar a (DE)ficiência com foco na eficiência de cada indivíduo e do coletivo na interação por meio de recursos como: a Audiodescrição para pessoas com deficiência visual; a Língua Brasileira de Sinais (Libras) e as Legendas para Surdos e Ensurdecidos (LSE). Pretende-se desencadear a reflexão a partir da fala de convidados, textos e discussões sobre o público-alvo e especificidades de cada recurso e, mais ainda, como produtos concebidos acessíveis podem beneficiar a todos, incluindo as pessoas com deficiência. Para tanto, o curso conta com recursos e ferramentas de acessibilidade na comunicação como a audiodescrição para as pessoas com deficiência visual, janela de Libras e legendas para surdos e ensurdecidos, mas ressaltamos que estes recursos auxiliam a todos, promovendo novas formas de experiência e mesmo sensibilização. ",
    cargaHoraria: 20,
    instCert: 25,
    possuiAcessibilidade: "sim",
    link: "https://lumina.ufrgs.br/course/view.php?id=134",
    obs: "O curso tem uma abordagem bastante pertinente e atual a trilha em tela, devendo compor a lista de possíveis cursos que constituirão a formação do Plafor. Além disso, possui um bom acervo de materiais curados e/ou autênticos (produzidos pela própria universidade) bastante úteis e adaptativos a formação desejada.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 213,
    itinerario: 3,
    title: "Acessibilidade e Tecnologia",
    descricao:
      "O curso tem como objetivos apresentar os conceitos relacionados à inclusão e acessibilidade, destacar os tipos de acessibilidade e a tecnologia assistiva, bem como apresentar algumas tecnologias para a produção de materiais digitais acessíveis.",
    cargaHoraria: 60,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=97 ",
    obs: "O Curso tem uma temática importante e aderente a trilha, bons textos, mas a quantidade de videos, especialmente os autorais pela instituição ofertante, são poucos. Uma vez sendo utilizado, precisará de outros cursos dentro dessa mesma trilha que complemente melhor os seus conteúdos. Apesar de não ser um curso com uma quantidade de materiais mais robusta ou enriquecida em quantidade, há muita qualidade nos materiais disponibilizados é muito boa e, por isso, merece a inclusão nas trilhas.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 214,
    itinerario: 3,
    title: "Gamificação no Moodle",
    descricao:
      "O curso visa orientar professores e demais profissionais da educação interessados a compreender e implementar algumas formas e técnicas de gamificar um curso em um ambiente virtual de aprendizagem. ",
    cargaHoraria: 50,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=83 ",
    obs: "A abordagem de Gamificação trazida no curso fortalece o envolvimento ativo e cria condições para a customização do ensino, nesse sentido o curso agrega muito valor a trilha da Capacitação dos Aprendentes, visto abordar e ensinar sobre a implementação prática e assertiva dos princípios, características e procedimentos de operacionalização da gamificação nos ecossistemas de aprendizagem.",
    filter: {
      competencias: [17, 18],
      subtemas: [362],
    },
  },
  {
    id: 215,
    itinerario: 3,
    title: "Metodologias Ativas: Educação Inovadora",
    descricao:
      "Este curso tem como objetivo auxiliar profissionais e futuros profissionais da área de educação a conhecerem as possibilidades oferecidas pela metodologias ativas de aprendizagem com foco em uma educação inovadora para transformação da educação.",
    cargaHoraria: 30,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=115",
    obs: "O curso apresenta um bom conteúdo e uma razoável diversidade de mídias, sua temática é bastante aderente a presente trilha e o mesmo agrega valor ou enriquece a aprendizagem nesta respectiva trilha.",
    filter: {
      competencias: [17, 18],
      subtemas: [362],
    },
  },
  {
    id: 216,
    itinerario: 3,
    title: "Tecnologia Assistiva no Contexto Educacional",
    descricao:
      "A Tecnologia Assistiva é uma área ampla e multidisciplinar e, assim como em outras esferas sociais, na educação ela também faz toda a diferença. Neste curso, buscamos apresentar conceitos, recursos e serviços aplicados ao contexto educacional. E, certamente, essa conversa não se esgota aqui. Existe uma gama enorme de recursos e estratégias. Apresentamos aqui algumas delas, mas é na prática, nas trocas com os estudantes com deficiência e com outros profissionais que acabamos descobrindo novas possibilidades. Além disso, a tecnologia muda rapidamente e precisamos estar sempre em busca do que está surgindo. Por fim, buscamos enfatizar o uso de recursos gratuitos ou de baixo custo. Apresentamos, ao longo do curso, possibilidades de confecção de baixo custo de alguns recursos utilizando materiais e métodos diversos. ",
    cargaHoraria: 60,
    instCert: 14,
    possuiAcessibilidade: "parcial",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4954",
    obs: "ATENÇÃO -  O Curso só fica disponível até 31/07/2022. A temática do curso é extremamente pertinente, sendo sua ementa bem construída. O curso está em um nível minimamente viável para utilização, não sendo uma das melhores opções por deter poucas videoaulas. Contudo, mesmo assim, pode contribuir com a formação do docente e ser recomendável quando combinado com outros cursos complementares. ",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 217,
    itinerario: 3,
    title: "Educador Maker: Aprendizagem Baseada em Projetos",
    descricao:
      " Este curso tem como objetivo levar educadores refletirem sobre o uso da Aprendizagem Baseada em Projetos em espaços Maker para atender as demandas do século XXI.",
    cargaHoraria: 30,
    instCert: 29,
    possuiAcessibilidade: "parcial",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=78",
    obs: "Por ser um curso que introjeta a cultura maker no labor docente, isso se revela como bastante promissor e aderente a trilha capacitação dos aprendentes, tendo em vista que as metodologias ativas e a cultura maker são muito indicadas para promover o envolvimento ativo dos aprendentes. Por isso o curso é bastante recomendável.",
    filter: {
      competencias: [17, 18],
      subtemas: [362],
    },
  },
  {
    id: 218,
    itinerario: 3,
    title: "Cultura Surda",
    descricao:
      "O curso trata da História da comunidade surda, cultura surda, identidades surdas e a língua de sinais.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "parcial",
    link: "https://moodle.ifrs.edu.br/enrol/index.php?id=4906",
    obs: "ATENÇÃO -  O Curso só fica disponível até 31/07/2022 Temos aqui um curso cuja temática é bastante cara e pertinente a esta trilha. Certamente o curso poderia ser mais enriquecido com videos e materiais para a leitura, contudo traz um conteúdo básico, elementar que pode colaborar com a formação docente. Recomenda-se a indicação deste curso, desde que acompanhada a recomendação para realização concomitante de outros cursos complementares de conteúdo. ",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 219,
    itinerario: 3,
    title: "Acessibilidade em Processos Seletivos Discentes",
    descricao:
      "Formação oferecida gratuitamente pelo Instituto Federal do Espírito Santo com o objetivo de promover o conhecimento necessário assim como o compartilhamento de saberes e experiências profissionais tendo em vista os direitos das pessoas com deficiência e a garantia de sua participação em conformidade com o paradigma da inclusão nos processos seletivos discentes.",
    cargaHoraria: 60,
    instCert: 29,
    possuiAcessibilidade: "Não informado",
    link: "https://mooc.cefor.ifes.edu.br/moodle/course/view.php?id=58",
    obs: "Curso bem estruturado, muito diversificado em informações. Poderia ter mais videos, de fato. Contudo, é altamente recomendável para a trilha.",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 220,
    itinerario: 3,
    title: "Design Thinking Aplicado à Educação",
    descricao:
      "Este curso é uma ótima oportunidade para você conhecer o papel do Design Thinking! O curso Design Thinking aplicado à educação foi desenvolvido em 2021 pela Enap, o qual tem como objetivo apresentar os conceitos, características principais, exemplos da abordagem do Design Thinking (DT), técnicas e ferramentas que poderão ser utilizadas na aplicação da abordagem do DT na educação.",
    cargaHoraria: 25,
    instCert: 31,
    possuiAcessibilidade: "parcial",
    link: "https://www.escolavirtual.gov.br/curso/448",
    obs: "O curso apresenta a metodologia do Design Thinking que é bastante indicada para potencializar a aprendizagem e promover o engahamento ativo. ",
    filter: {
      competencias: [18],
      subtemas: [359],
    },
  },
  {
    id: 221,
    itinerario: 3,
    title: "A arte de falar em público",
    descricao:
      "Neste curso, você vai conhecer um pouco sobre a arte de falar em público. Irá aprender técnicas para se comunicar bem e preparar-se para falar em público.",
    cargaHoraria: 20,
    instCert: 2,
    possuiAcessibilidade: "Parcial",
    link: "https://aprendamais.mec.gov.br/enrol/index.php?id=298",
    obs: "Oferta semestral com atualização do link para o curso a cada semestre ou ao atingir um número grande de inscritos.",
    filter: {
      competencias: [20],
      subtemas: [359],
    },
  },
  {
    id: 222,
    itinerario: 3,
    title: "Comunicação Oral e Escrita",
    descricao:
      "O objetivo geral desse curso é proporcionar melhorias, pessoais e profissionais, a partir de conhecimentos específicos sobre Comunicação Oral e Escrita. A Ementa do curso aborda: Conceitos gerais de comunicação oral e escrita; História da Comunicação; Redação Comercial e Dissertativa; Gramática: Regências e Concordâncias; Técnicas de Oratória; Comunicação Não-Violenta; Práticas e Exercícios Avaliativos.",
    cargaHoraria: 30,
    instCert: 12,
    possuiAcessibilidade: "Não",
    link: "https://mais.ifmg.edu.br/enrol/index.php?id=48",
    obs: "Esse curso foi indicado no Padlet para os Técnicos-Administrativos em Educação",
    filter: {
      competencias: [20],
      subtemas: [359],
    },
  },
  {
    id: 223,
    itinerario: 3,
    title: "Acessibilidade na Comunicação",
    descricao:
      "Neste curso, você irá compreender o conceito biopsicossocial e as terminologias ligadas às pessoas com deficiência. Entrará em contato com a legislação, compreenderá como utilizar recursos e técnicas que melhoram a acessibilidade, além de ver exemplos práticos de comunicação acessível, tanto em eventos presenciais como em conteúdo web e impresso. Inscreva-se agora e tenha oportunidade de compreender como a comunicação pode ser mais acessível e democrática para todos!",
    cargaHoraria: 30,
    instCert: 32,
    possuiAcessibilidade: "Não",
    link: "https://escolavirtual.gov.br/curso/615",
    obs: "",
    filter: {
      competencias: [16, 20, 60],
      subtemas: [359],
    },
  },
  {
    id: 224,
    itinerario: 3,
    title: "Redação científica com tecnologia",
    descricao:
      "Neste curso, você vai conhecer um pouco sobre redação acadêmica, competência informacional e ferramentas tecnológicas para a pesquisa científica. Irá aprender técnicas de como refinar sua pesquisa em bases de dados, escrever a introdução, o referencial teórico, a metodologia, a conclusão e o resumo do texto científica e como usar softwares na metodologia do trabalho acadêmico.",
    cargaHoraria: 20,
    instCert: 33,
    possuiAcessibilidade: "Não",
    link: "https://mooc.ifsp.edu.br/course/redacao-cientifica-com-tecnologia-laletec/intro",
    obs: "Esse curso possui a sua versão em ambiente Moodle e está em processo de homologação na escola virtual da ENAP que permitirá o acesso contínuo.",
    filter: {
      competencias: [19, 20, 21, 60],
      subtemas: [359],
    },
  },
  {
    id: 225,
    itinerario: 3,
    title:
      "Desenvolvendo competências em informações acadêmicas e profissionais",
    descricao:
      "A busca, avaliação e uso estratégico, ético e responsável da informação são requisitos fundamentais a indivíduos que estão percorrendo o caminho acadêmico ou se preparando para o mercado de trabalho. Importante, nesse contexto, o desenvolvimento de habilidades no trato da informação, disponível em meios impressos e digitais, de forma a estarem mais capacitados para enfrentar os desafios do século XXI. ",
    cargaHoraria: 30,
    instCert: 19,
    possuiAcessibilidade: "Não",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=136",
    obs: "O link é válido por 6 meses",
    filter: {
      competencias: [19, 20, 60],
      subtemas: [359],
    },
  },
  {
    id: 226,
    itinerario: 3,
    title: "Educação para boas escolhas on-line",
    descricao:
      "Este curso foi idealizado pela SaferNet Brasil para facilitar e ampliar a incorporação dessa temática nas salas de aula e nos projetos políticos pedagógicos. O curso é dedicado aos educadores e profissionais interessados em promover ações educativas de sensibilização sobre cidadania digital. Apesar de criado para educadores, o material permite uma aproximação ao tema para diferentes áreas de atuação. A proposta é que você se familiarize com o contexto e, principalmente, utilize as sugestões de atividades e recursos para criar seu plano de ação para as intervenções que fará em torno do tema em sua instituição, em sua família e em sua própria vida digital abordando também sobre bem-estar e saúde mental na internet.",
    cargaHoraria: 50,
    instCert: 33,
    possuiAcessibilidade: "Parcial",
    link: "https://moodle.ifsp.edu.br/enrol/index.php?id=1457",
    obs: "O link é válido por 3 meses",
    filter: {
      competencias: [19, 22],
      subtemas: [359],
    },
  },
  {
    id: 227,
    itinerario: 3,
    title: "Gestão de Projetos Educacionais",
    descricao:
      "Diante da crescente demanda das organizações públicas por engenharias didáticas inovadoras e fluidas, este curso apresenta conceitos sobre o planejamento e a gestão de projetos educacionais corporativos com uso de metodologias ágeis e colaborativas. Para isso compreenda os elementos básicos dos projetos e uma possível estruturação a partir da sua relação com o design instrucional, entre outros.",
    cargaHoraria: 30,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/415",
    obs: "",
    filter: {
      competencias: [23],
      subtemas: [359],
    },
  },
  {
    id: 228,
    itinerario: 3,
    title: "Design Thinking Aplicado à Educação",
    descricao:
      "Este curso é uma ótima oportunidade para você conhecer o papel do Design Thinking! O curso Design Thinking aplicado à educação foi desenvolvido em 2021 pela Enap, o qual tem como objetivo apresentar os conceitos, características principais, exemplos da abordagem do Design Thinking (DT), técnicas e ferramentas que poderão ser utilizadas na aplicação da abordagem do DT na educação.",
    cargaHoraria: 25,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/448",
    obs: "",
    filter: {
      competencias: [23],
      subtemas: [359],
    },
  },
  {
    id: 229,
    itinerario: 3,
    title: "Inovações em Tecnologia Educacional",
    descricao:
      "O curso apresenta conceitos, processos e experiências referentes à inovação, com foco na concepção, no desenvolvimento, na execução e na avaliação de soluções de capacitação para desenvolvimento de competências, de modo a fomentar a cultura e os ecossistemas de inovação, com vistas à criação de valor público.",
    cargaHoraria: 25,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/511",
    obs: "",
    filter: {
      competencias: [23],
      subtemas: [359],
    },
  },
  {
    id: 230,
    itinerario: 3,
    title: "Fundamentos da Lei Geral de Proteção de Dados",
    descricao:
      "O curso foi desenvolvido com foco na apresentação de conceitos gerais da LGPD e nos impactos desta Lei em processos rotineiros de pessoas e empresas. Também pretende-se fomentar o debate sobre a proteção de dados pessoais e a segurança da informação, em face das bases legais existentes. Foi desenvolvido pelo Serpro - Serviço Federal de Processamento de Dados, em 2020, originalmente para a capacitação do corpo funcional. Agora é ofertado ao público em geral, por meio de parceria com a Escola Nacional de Administração Pública - Enap.",
    cargaHoraria: 15,
    instCert: 22,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/603/",
    obs: "Esse curso foi indicado no Padlet para os Gestores",
    filter: {
      competencias: [22],
      subtemas: [359],
    },
  },
  {
    id: 231,
    itinerario: 3,
    title: "Introdução à Lei Brasileira de Proteção de Dados Pessoais",
    descricao:
      "O curso apresenta um panorama sobre a nova legislação brasileira de proteção de dados pessoais (Lei 13.709/18), compreendendo os temas mais importantes para a sua implementação, como: fundamentos e campo de aplicação, princípios e direitos do titular, responsabilidades dos agentes, aspectos internacionais, segurança e a Autoridade Nacional de Proteção de Dados, entre outros. O objetivo do curso é capacitar as pessoas para entenderem, de forma rápida e acessível, o funcionamento e diretrizes básicas expostas na nova lei geral de proteção de dados do Brasil.",
    cargaHoraria: 10,
    instCert: 34,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/153",
    obs: "Esse curso foi indicado no Padlet para os Técnicos-Administrativos em Educação e Gestores",
    filter: {
      competencias: [22],
      subtemas: [359],
    },
  },
  {
    id: 232,
    itinerario: 3,
    title: "Noções Gerais de Direitos Autorais",
    descricao:
      "Com o advento da internet, o compartilhamento de materiais aumentou significativamente, causando algumas dúvidas e incertezas em relação à autoria, uso e possibilidade de modificações desses materiais. Nesse curso, você conhecerá algumas questões gerais sobre direitos autorias no Brasil e aprenderá a relacionar as recomendações e determinações legais às situações reais de uso e de compartilhamento de materiais produzidos por terceiros.",
    cargaHoraria: 10,
    instCert: 35,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/72",
    obs: "",
    filter: {
      competencias: [21],
      subtemas: [359],
    },
  },
  {
    id: 233,
    itinerario: 3,
    title: "Ferramentas Digitais para Curadoria Educacional",
    descricao:
      "este curso tem como proposta a apresentação sobre os conceitos básicos sobre Curadoria Educacional e apresentar seis ferramentas digitais gratuitas disponíveis na web utilizadas para prática da curadoria",
    cargaHoraria: 10,
    instCert: 19,
    possuiAcessibilidade: "Não",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=161",
    obs: "O link é válido por 1 ano (faltando 330 dias - contando a partir de 04/02/2021)",
    filter: {
      competencias: [19],
      subtemas: [359],
    },
  },
  {
    id: 234,
    itinerario: 3,
    title: "Temos que dar aulas remotas... E agora?",
    descricao:
      "As aulas presenciais estão suspensas e temos que dar aulas online. São aulas planejadas para ser presenciais e que precisam ser remotas. Como manter o uso de metodologias ativas nesse formato?Como oferecer cursos inovadores? Como garantir que os objetivos serão alcançados? Neste curso buscamos discutir alguns conceitos, ferramentas e dicas para que você encontre suas próprias respostas.",
    cargaHoraria: 10,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/313",
    obs: "",
    filter: {
      competencias: [21],
      subtemas: [359],
    },
  },
  {
    id: 235,
    itinerario: 3,
    title: "Primeiros passos para uso de Linguagem Simples",
    descricao:
      "Desenvolvido pela Enap, em parceria não onerosa com a jornalista e pesquisadora Heloísa Fischer, este curso tem o intuito de apresentar sete diretrizes para a produção de textos informativos com linguagem simples, que sejam mais fáceis de serem lidos e compreendidos pela maior parte das pessoas. A linguagem simples apresenta-se, ao mesmo tempo, como uma causa social e uma técnica de comunicação. Quer saber como aplicar a linguagem simples? Inscreva-se.",
    cargaHoraria: 80,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/315",
    obs: "",
    filter: {
      competencias: [20],
      subtemas: [359],
    },
  },
  {
    id: 236,
    itinerario: 3,
    title: "Uso educacional do Canva",
    descricao:
      "O curso aberto de Uso educacional do Canva é uma ação do Instituto Federal do Espírito Santo (IFES) por meio de seu Centro de Referência em Formação e em Educação a Distância (CEFOR), que tem como proposta a orientação de professores e quaisquer outros interessados em criar designs, logos, panfletos, dentre outros recursos, que irão potencializar seu trabalho de forma rápida e eficiente.",
    cargaHoraria: 60,
    instCert: 19,
    possuiAcessibilidade: "Não",
    link: "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=146",
    obs: "O link é válido por 1 ano (faltando 330 dias - contando a partir de 04/02/2021)",
    filter: {
      competencias: [21],
      subtemas: [359],
    },
  },
  {
    id: 237,
    itinerario: 4,
    title: "As cotas raciais como direito de reparação",
    descricao:
      "Neste MOOC serão apresetandas as temáticas relacionada a Grupos sociais alijados ao longo dos tempo; Mito da democracia racial; Estatística da segregação e a lei 12.711 enquanto medida de reparação",
    cargaHoraria: 20,
    instCert: 3,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 238,
    itinerario: 4,
    title: "Por que as cotas raciais são necessárias?",
    descricao:
      "Neste MOOC será discutido o porquê as cotas raciais são necessárias.",
    cargaHoraria: 20,
    instCert: 3,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/cotas-raciais-e-heteroidentificacao.php",
    obs: "",
    filter: {
      competencias: [16, 17],
      subtemas: [362],
    },
  },
  {
    id: 239,
    itinerario: 4,
    title: "Controles Institucional e Social dos Gastos Públicos",
    descricao:
      "O curso apresenta noções de controle institucional e social no Brasil para uma compreensão básica sobre a importância da qualidade do gasto, do uso eficiente dos recursos públicos e da participação social.",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/12/",
    obs: "",
    filter: {
      competencias: [67],
      subtemas: [278],
    },
  },
  {
    id: 240,
    itinerario: 4,
    title: "Educação em Direitos Humanos",
    descricao:
      "O curso busca contribuir para a conformação de uma visão abrangente acerca desafios e alternativas à Educação em Direitos Humanos, constituindo-se em subsídios para a prática e vivência de ações educativas em Direitos Humanos no âmbito de atuação dos participantes. ",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/129/",
    obs: "",
    filter: {
      competencias: [64],
      subtemas: [215],
    },
  },
  {
    id: 241,
    itinerario: 4,
    title: "Gestão Estratégica com BSC ",
    descricao:
      "Esse curso é uma boa oportunidade para conhecer alguns elementos teórico-conceituais e instrumentais de planejamento estratégico e de gestão. A compreensão e a utilização de conhecimentos relacionados ao planejamento estratégico e ao método Balanced Scorecard (BSC) possibilitam a atuação em ambientes dinâmicos que exigem percepção de contexto e proatividade.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/103/",
    obs: "",
    filter: {
      competencias: [70],
      subtemas: [273],
    },
  },
  {
    id: 242,
    itinerario: 4,
    title: "Gestão de projetos",
    descricao:
      "A capacitação tem como referência o Guia PMBOK 5° Edição, publicado pelo instituto PMI - Project Management Institute (2013), que reúne as melhores práticas na área de gerenciamento de projetos, com base em experiências de empresas de diferentes segmentos, públicas ou privadas, bem como apresentar outros métodos elaborados pela Administração Pública.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/104/",
    obs: "",
    filter: {
      competencias: [65],
      subtemas: [273],
    },
  },
  {
    id: 243,
    itinerario: 4,
    title: "Análise e melhoria de Processos",
    descricao:
      "O curso Análise e Melhoria de Processos foi transposto da modalidade presencial para a autoinstrucional em 2021 pela Enap, com o intuito de oferecer aos participantes apresenta uma visão geral e abrangente da gestão da qualidade no serviço público, aprofundando um de seus aspectos, a análise e melhoria de processos.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/424/",
    obs: "",
    filter: {
      competencias: [65],
      subtemas: [273],
    },
  },
  {
    id: 244,
    itinerario: 4,
    title: "Governança  ",
    descricao:
      "Em tempo de economia digital, onde o volume de dados produzidos é imenso, as instituições precisam lidar com este cenário a fim de disponibilizar a informação correta em tempo hábil para a tomada de decisões. A boa governança de dados é o caminho para superar este desafio! Inscreva-se e conheça os fundamentos relacionados à importância da governança de dados especialmente na Administração Pública Federal.",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/270/",
    obs: "",
    filter: {
      competencias: [63],
      subtemas: [275],
    },
  },
  {
    id: 245,
    itinerario: 4,
    title: "Gestão de Riscos em Processos de Trabalho",
    descricao:
      "O que você sabe sobre gestão de riscos em processos de trabalho? Este curso apresenta os principais conceitos sobre o tema, contribuindo para disseminar conhecimento e medidas de gerenciamento de riscos institucionais. A partir da experiência da Receita Federal, você poderá reconhecer como a gestão de riscos pode proporcionar a contínua melhoria dos processos de trabalho. Abordagem mais genérica, na trilha de orçamento tb tem Riscos",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/604/",
    obs: "",
    filter: {
      competencias: [70],
      subtemas: [271],
    },
  },
  {
    id: 246,
    itinerario: 4,
    title: "Introdução a LGDP",
    descricao:
      "O curso apresenta um panorama sobre a nova legislação brasileira de proteção de dados pessoais (Lei 13.709/18), compreendendo os temas mais importantes para a sua implementação, como: fundamentos e campo de aplicação, princípios e direitos do titular, responsabilidades dos agentes, aspectos internacionais, segurança e a Autoridade Nacional de Proteção de Dados, entre outros. O objetivo do curso é capacitar as pessoas para entenderem, de forma rápida e acessível, o funcionamento e diretrizes básicas expostas na nova lei geral de proteção de dados do Brasil.",
    cargaHoraria: 10,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/153/",
    obs: "",
    filter: {
      competencias: [64],
      subtemas: [215],
    },
  },
  {
    id: 247,
    itinerario: 4,
    title: "Fundamentos da Lei Geral de Proteção de Dados",
    descricao:
      "O curso foi desenvolvido com foco na apresentação de conceitos gerais da LGPD e nos impactos desta Lei em processos rotineiros de pessoas e empresas. Também pretende-se fomentar o debate sobre a proteção de dados pessoais e a segurança da informação, em face das bases legais existentes. Foi desenvolvido pelo Serpro - Serviço Federal de Processamento de Dados, em 2020, originalmente para a capacitação do corpo funcional. Agora é ofertado ao público em geral, por meio de parceria com a Escola Nacional de Administração Pública - Enap.",
    cargaHoraria: 15,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/603/",
    obs: "",
    filter: {
      competencias: [64],
      subtemas: [215],
    },
  },
  {
    id: 248,
    itinerario: 4,
    title: "Controles na Administração Pública ",
    descricao:
      "Ao final deste curso, espera-se que o participante seja capaz de aplicar princípios do controle no contexto da gestão pública. O curso abordará os temas Prestação de Contas, Controles na Administração Pública, Controle Externo, Controle Interno e Controle Social. ",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/278/",
    obs: "",
    filter: {
      competencias: [68],
      subtemas: [278],
    },
  },
  {
    id: 249,
    itinerario: 4,
    title: "Planejamento e Gestão Orçamentária e Financeira",
    descricao:
      "O Curso de Planejamento e Gestão Orçamentária e Financeira é aberto e autoinstrucional. Público-alvo: servidores da Rede Federal de Educação Profissional e Tecnológica que estejam ocupando cargos de gestão em suas instituições. Após o término do curso você será capaz de: compreender o planejamento e a gestão orçamentária e financeira sob o ponto de vista dos aspectos práticos, qualificando sua rotina de trabalho.",
    cargaHoraria: 64,
    instCert: 38,
    possuiAcessibilidade: "Não",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=16",
    obs: "Curso em desenvolvimento",
    filter: {
      competencias: [27, 28],
      subtemas: [263],
    },
  },
  {
    id: 250,
    itinerario: 4,
    title: "Comunicação Não Violenta ",
    descricao:
      "Comunique com empatia e melhore o relacionamento interpessoal no seu ambiente de trabalho ",
    cargaHoraria: 14,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "",
    obs: "Sem turmas - verificar ENAP",
    filter: {
      competencias: [60],
      subtemas: [274],
    },
  },
  {
    id: 251,
    itinerario: 4,
    title: "Ferramentas Tecnológicas Miro ",
    descricao:
      "Quer conhecer as principais configurações, funcionalidades e as boas práticas relacionadas à ferramenta interativa Miro? Essa plataforma reúne diversos recursos de colaboração capazes de tornar reuniões de equipes, workshops e aulas online mais atraentes e produtivas.",
    cargaHoraria: 50,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://suap.enap.gov.br/portaldoaluno/curso/1486/",
    obs: "",
    filter: {
      competencias: [63],
      subtemas: [236],
    },
  },
  {
    id: 252,
    itinerario: 4,
    title: "Ferramentas Tecnológicas - Classroom e Jamboard",
    descricao:
      "Esse curso é para você que quer conhecer as principais configurações, funcionalidades e as boas práticas relacionadas às ferramentas interativas Google Classroom e Jamboard.",
    cargaHoraria: 50,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://suap.enap.gov.br/portaldoaluno/curso/1487/",
    obs: "",
    filter: {
      competencias: [63],
      subtemas: [236],
    },
  },
  {
    id: 253,
    itinerario: 4,
    title: "Primeiros passos para uso de Linguagem Simples",
    descricao:
      "Desenvolvido pela Enap, em parceria não onerosa com a jornalista e pesquisadora Heloísa Fischer, este curso tem o intuito de apresentar sete diretrizes para a produção de textos informativos com linguagem simples, que sejam mais fáceis de serem lidos e compreendidos pela maior parte das pessoas. A linguagem simples apresenta-se, ao mesmo tempo, como uma causa social e uma técnica de comunicação. Quer saber como aplicar a linguagem simples?",
    cargaHoraria: 80,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/315/",
    obs: "",
    filter: {
      competencias: [60],
      subtemas: [378],
    },
  },
  {
    id: 254,
    itinerario: 4,
    title: "Linguagem simples aproxima o governo das pessoas. Como usar",
    descricao:
      "Quer aprender como simplificar aquele documento com uma linguagem super complexa? E ainda aprender como escrever textos com uma linguagem simples e compreensível? Este curso vai te ensinar uma forma estruturada de fazer isso. O curso apresenta e aprofunda a discussão sobre o uso da linguagem simples no setor público e a importância da disseminação da pauta no Brasil.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/332/",
    obs: "",
    filter: {
      competencias: [60],
      subtemas: [378],
    },
  },
  {
    id: 255,
    itinerario: 4,
    title: "Gestão da Inovação",
    descricao:
      "O curso aborda conceitos de gestão da inovação articulados ao contexto da administração pública e apresenta desafios e possibilidades de inovação na prestação de serviços públicos mais efetivos. O objetivo é fornecer aos servidores públicos conceitos, processos e experiências referentes à inovação, a fim de fomentar a cultura e os ecossistemas de inovação para criação de valor público.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/416/",
    obs: "",
    filter: {
      competencias: [46],
      subtemas: [276],
    },
  },
  {
    id: 256,
    itinerario: 4,
    title: "Planejamento Estratégico para Organizações Públicas",
    descricao:
      "O planejamento estratégico é uma ferramenta de administração que possibilita à gestão pensar no longo prazo da organização. Nesse curso, serão apresentadas noções básicas de planejamento estratégico, estimulando a reflexão sobre a importância de sua aplicação nas organizações públicas.",
    cargaHoraria: 40,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/107/",
    obs: "",
    filter: {
      competencias: [70],
      subtemas: [273],
    },
  },
  {
    id: 257,
    itinerario: 4,
    title: "Elaboração de Indicadores de Desempenho Institucional",
    descricao:
      "O curso integra o Programa de Desenvolvimento de Gerentes Operacionais (PDGO) e tem como objetivo capacitar os servidores públicos para estruturar sistemas de medição do desempenho institucional, dos pontos de vista estratégico e gerencial.",
    cargaHoraria: 25,
    instCert: 6,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/604/",
    obs: "",
    filter: {
      competencias: [30],
      subtemas: [273],
    },
  },
  {
    id: 258,
    itinerario: 4,
    title: "Sistema de Monitoramento- Setec ",
    descricao:
      "Tem como objetivo orientar as áreas responsáveis pelo Plano de Desenvolvimento Institucional da instituição a cadastrar e manter atualizada as informações básicas sobre o PDI, variáveis e indicadores.",
    cargaHoraria: 10,
    instCert: 38,
    possuiAcessibilidade: "Não",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=18",
    obs: "",
    filter: {
      competencias: [28, 58, 62, 70],
      subtemas: [273],
    },
  },
  {
    id: 259,
    itinerario: 4,
    title: "Ágil no contexto da administração pública",
    descricao:
      "Apresentação e abordagem forma de pensar e os modelos de trabalho Ágeis no contexto particular da administração pública.",
    cargaHoraria: 30,
    instCert: 38,
    possuiAcessibilidade: "Não informado",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=17",
    obs: "",
    filter: {
      competencias: [46],
      subtemas: [234],
    },
  },
  {
    id: 260,
    itinerario: 4,
    title:
      "Criando uma Estratégia Organizacional Ágil em uma Organização Pública",
    descricao:
      "Apresentação de opções e caminhos para se implantar práticas de gestão ágil dentro de uma organização pública",
    cargaHoraria: 30,
    instCert: 38,
    possuiAcessibilidade: "Não informado",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=20",
    obs: "",
    filter: {
      competencias: [46],
      subtemas: [234],
    },
  },
  {
    id: 261,
    itinerario: 4,
    title:
      "Executando a Estratégia de maneira Ágil dentro de uma Organização Pública",
    descricao:
      "A partir de uma estratégia estabelecida e que promove a agilidade será apresentado maneiras de executar as ações indicadas de maneira ágil",
    cargaHoraria: 30,
    instCert: 38,
    possuiAcessibilidade: "Não informado",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=19",
    obs: "",
    filter: {
      competencias: [46],
      subtemas: [234],
    },
  },
  {
    id: 262,
    itinerario: 4,
    title:
      "Teoria das Organizações: clima organizacional, cultura organizacional, mudança organizacional e desaprendizagem organizacional",
    descricao:
      "Compreender a Cultura Organizacional e o impacto no clima do trabalho, bem como o processo de desaprender, reaprender e aprender as novas competências é essencial para que possibilite a mudança e estar em sintonia com este processo social por que passa a humanidade.",
    cargaHoraria: 20,
    instCert: 38,
    possuiAcessibilidade: "Não informado",
    link: "https://ead.ifrn.edu.br/ava/aberto/course/view.php?id=22",
    obs: "",
    filter: {
      competencias: [44],
      subtemas: [234, 261, 274, 276],
    },
  },
  {
    id: 263,
    itinerario: 4,
    title: "Inteligência Emocional",
    descricao:
      "A gestão emocional excelente é a possibilidade do ser humano autogerir suas emoções e expressá-las de maneira funcional para consigo e em sociedade, que permite a construção de uma mentalidade de crescimento e, a partir disso, a atuação de maneira produtiva e congruente na carreira e vida pessoal.",
    cargaHoraria: 50,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/318/",
    obs: "",
    filter: {
      competencias: [69],
      subtemas: [277],
    },
  },
  {
    id: 264,
    itinerario: 4,
    title: "Gestão Pessoal - Base da Liderança",
    descricao:
      "A base da gestão pessoal é o autoconhecimento. O curso, nessa concepção, permite aos estudantes refletir sobre suas virtudes, forças de caráter, valores pessoais, motivadores intrínsecos de trabalho e perfil comportamental. A reflexão possibilita aos estudantes organizar estratégias de melhoria em sua vida laboral e em sua vida pessoal, por meio de instrumentos que serão disponibilizados ao longo do curso. Nesse sentido, o curso será de extrema importância para os profissionais que desejam obter um estado consciente em relação aos meios viáveis de se conseguir alcançar um determinado objetivo.",
    cargaHoraria: 50,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/163/",
    obs: "",
    filter: {
      competencias: [10],
      subtemas: [259],
    },
  },
  {
    id: 265,
    itinerario: 4,
    title: "Desenvolvendo Times de Alta Performance",
    descricao:
      "Parceria da RFB com a Enap, este curso aborda o conhecimento e o desenvolvimento de competências gerenciais, além da vivência do exercício da liderança, fundamentais no ambiente de trabalho contemporâneo. O objetivo da parceria é trazer conteúdo para possibilitar aos gestores o aprendizado de técnicas que promovem a alta performance de equipes para o alcance dos objetivos estratégicos da instituição.",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/356/",
    obs: "",
    filter: {
      competencias: [62],
      subtemas: [259],
    },
  },
  {
    id: 266,
    itinerario: 4,
    title: "Gestão por Competências",
    descricao:
      "O que você sabe sobre Gestão por Competências? Como ela é aplicada no setor público? A partir da experiência da Receita Federal, esse curso aborda o papel da gestão por competências no contexto público e como ela pode contribuir na identificação de lacunas e para o aperfeiçoamento de servidores. ",
    cargaHoraria: 40,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/175/",
    obs: "",
    filter: {
      competencias: [66],
      subtemas: [274],
    },
  },
  {
    id: 267,
    itinerario: 4,
    title: "Gestão de Conflitos e Negociação",
    descricao:
      "Resolver diferenças e divergências, e tomar decisões de forma colaborativa são formas efetivas de preservar e ampliar os objetivos a serem alcançados nas organizações. A temática é relevante uma vez que o desenvolvimento das competências de resolução de conflitos e de negociação tem se mostrado fundamental para o adequado desempenho e atuação de gestores e servidores em suas rotinas de trabalho.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/372/",
    obs: "",
    filter: {
      competencias: [66],
      subtemas: [274],
    },
  },
  {
    id: 268,
    itinerario: 4,
    title: "Liderança e Gestão De Equipes",
    descricao:
      "Este curso apresenta algumas contribuições sobre os estilos e técnicas de liderança para o atual contexto das organizações públicas. O conteúdo ressalta a importância da liderança no trabalho em equipe e na tomada de decisões.",
    cargaHoraria: 30,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/373/",
    obs: "",
    filter: {
      competencias: [61],
      subtemas: [259],
    },
  },
  {
    id: 269,
    itinerario: 4,
    title: "Gestão de Equipes em Trabalho Remoto",
    descricao:
      "Este curso apresenta diversas contribuições para a gestão de equipes em trabalho remoto. O conteúdo traz dicas e ferramentas interessantes, além de abordar pontos importantes relacionados à gestão de pessoas. Trata-se de um curso necessário, criado a partir dos desafios que afetaram as instituições nos últimos tempos.",
    cargaHoraria: 20,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/334/",
    obs: "",
    filter: {
      competencias: [68],
      subtemas: [262],
    },
  },
  {
    id: 270,
    itinerario: 4,
    title: "A Liderança Pública em Tempos de Crise",
    descricao:
      "Em cenários de graves crises mundiais, nossos olhares se voltam para as lideranças. Pensando nisso, o CLP – Liderança Pública e a ENAP prepararam este curso para apresentar a um passo a passo de como liderar em tempos de crise. O conteúdo tem uso prático para que lideranças consigam navegar pela crise, servindo como um repositório de apoio e suporte para o enfrentamento da instabilidade ocasionada pelo coronavírus.",
    cargaHoraria: 10,
    instCert: 6,
    possuiAcessibilidade: "Não ",
    link: "https://www.escolavirtual.gov.br/curso/299/",
    obs: "Conversar com a ENAP para revisitar o curso",
    filter: {
      competencias: [68],
      subtemas: [259],
    },
  },
  {
    id: 271,
    itinerario: 5,
    title: "Inserção Digital na aposentadoria",
    descricao:
      "Tem como foco mostrar na prática o uso das ferramentas computacionais básicas que são utilizadas nas tecnologias da informação e comunicação. Ao longo desta disciplina vamos utilizar ferramentas como planilhas eletrônicas, processadores de texto, softwares de apresentação, além de ferramentas de acesso a internet, como navegadores.",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/informatica-basica.php",
    obs: "",
    filter: {
      competencias: [35],
      subtemas: [1],
    },
  },
  {
    id: 272,
    itinerario: 5,
    title: "Planejamento Financeiro",
    descricao:
      "Neste MOOC serão apresentadas as temáticas relacionadas ao planejamento e organização dos gastos pessoais; planejamento dos investimentos pessoais; alternativas de investimentos no mercado financeiro e; complementando a renda",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/educacao-financeira.php",
    obs: "",
    filter: {
      competencias: [35],
      subtemas: [1],
    },
  },
  {
    id: 273,
    itinerario: 5,
    title: "Empreendedorismo",
    descricao:
      "Neste MOOC serão apresentadas as temáticas sobre a opção do empreendedorismo e motivos para empreender na aposentadoria",
    cargaHoraria: 20,
    instCert: 14,
    possuiAcessibilidade: "SIM",
    link: "https://mundi.ifsul.edu.br/portal/empreendedorismo.php",
    obs: "",
    filter: {
      competencias: [35],
      subtemas: [1],
    },
  },
  {
    id: 274,
    itinerario: 5,
    title:
      "A Previdência Social dos Servidores Públicos: Regime Próprio e Regime de Previdência",
    descricao:
      "Destinado à Servidores federais, principalmente, do Poder Executivo",
    cargaHoraria: 30,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/681",
    obs: "",
    filter: {
      competencias: [39],
      subtemas: [272],
    },
  },
  {
    id: 275,
    itinerario: 5,
    title: "Noções Básicas em Previdência Complementar",
    descricao:
      "Destinado à Servidores públicos, associados de sindicatos e entidades de classe e setoriais, empregados de Empresas e qualquer pessoa que tenha interesse em conhecer o tema.",
    cargaHoraria: 25,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/183",
    obs: "",
    filter: {
      competencias: [39],
      subtemas: [272],
    },
  },
  {
    id: 276,
    itinerario: 5,
    title: "Finanças pessoais",
    descricao:
      "O curso em Finanças Pessoais tem o objetivo de revisar tópicos essenciais para a construção e alinhamento da organização financeira dos indivíduos, através da compreensão do ciclo de vida financeira e o perfil de educação financeira no Brasil, uma reflexão sobre a origem e a destinação do dinheiro, o entendimento geral sobre operações de crédito e opções de investimento, um passo a passo para elaborar um plano de ação sobre como superar problemas financeiros e, por fim, como planejar o futuro e aposentadoria.",
    cargaHoraria: 80,
    instCert: 40,
    possuiAcessibilidade: "Não",
    link: "https://unisinos.br/lab/cursos/financas-pessoais-ex920170-00004-1439",
    obs: "",
    filter: {
      competencias: [39],
      subtemas: [226],
    },
  },
  {
    id: 277,
    itinerario: 5,
    title: "Me Poupe! Invista com Nathalia Arcuri",
    descricao:
      "O curso destina-se aos servidores públicos e a todos que tenham interesse em dicas sobre educação financeira.",
    cargaHoraria: 20,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/249",
    obs: 'A empresa "Me poupe" utiliza largamente a expressão "desfudedores" em sua publicidade. ',
    filter: {
      competencias: [41],
      subtemas: [226],
    },
  },
  {
    id: 278,
    itinerario: 5,
    title: "Planejando meu sucesso profissional",
    descricao: "Destinado à professores e gestores. Foco no empreendedorismo.",
    cargaHoraria: 16,
    instCert: 41,
    possuiAcessibilidade: "Não",
    link: "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/planejando-meu-sucesso-profissional,612f1fef5bf39710VgnVCM100000d701210aRCRD",
    obs: "",
    filter: {
      competencias: [38],
      subtemas: [216],
    },
  },
  {
    id: 279,
    itinerario: 5,
    title: "Empreendedorismo como opção de carreira",
    descricao:
      "Destinado à microempreendedor individual, Candidato a empresário, Estudante, Professores e gestores escolares",
    cargaHoraria: 30,
    instCert: 41,
    possuiAcessibilidade: "Não",
    link: "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/empreendedorismo-como-opcao-de-carreira,7e70b8a6a28bb610VgnVCM1000004c00210aRCRD",
    obs: "",
    filter: {
      competencias: [38],
      subtemas: [216],
    },
  },
  {
    id: 280,
    itinerario: 5,
    title: "Como criar um modelo de negócio de impacto socioambiental",
    descricao:
      "Destinado à microempresa, Empresa de pequeno porte, Artesão, Candidato a empresário, Estudante, Professores e gestores escolares",
    cargaHoraria: 24,
    instCert: 41,
    possuiAcessibilidade: "Não",
    link: "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-criar-um-modelo-de-negocio-de-impacto-socioambiental,9017707cb6d6c610VgnVCM1000004c00210aRCRD",
    obs: "",
    filter: {
      competencias: [38],
      subtemas: [216],
    },
  },
  {
    id: 281,
    itinerario: 5,
    title: "Direito e Atenção à Saúde da Pessoa Idosa",
    descricao:
      "Interessados nas temáticas acerca das políticas de direitos e atenção à saúde da pessoa idosa. ",
    cargaHoraria: 35,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/623",
    obs: "",
    filter: {
      competencias: [40],
      subtemas: [174],
    },
  },
  {
    id: 282,
    itinerario: 5,
    title: "Garantia de Direitos e Atenção à Pessoa Idosa",
    descricao:
      "Pessoas que atuem, ou venham a atuar, na garantia, defesa e promoção dos direitos das pessoas idosas. ",
    cargaHoraria: 30,
    instCert: 31,
    possuiAcessibilidade: "Não",
    link: "https://www.escolavirtual.gov.br/curso/624",
    obs: "",
    filter: {
      competencias: [39],
      subtemas: [214],
    },
  },
  {
    id: 283,
    itinerario: 5,
    title: "Como planejar a aposentadoria",
    descricao:
      "O curso Como Planejar a Aposentadoria é gratuito e recomendado para estudantes do Ensino Médio e Superior, professores da rede pública e privada de ensino e outros profissionais que desejam ampliar seus conhecimentos sobre assuntos relacionados ao tema do curso. Para participar é necessário ter 18 anos ou mais.",
    cargaHoraria: 10,
    instCert: 42,
    possuiAcessibilidade: "Não",
    link: "https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/como-planejar-aposentadoria",
    obs: "Não há emissão de certificado",
    filter: {
      competencias: [41],
      subtemas: [272],
    },
  },
];

export const instituicoesDefault = [
  {
    id: 1,
    titulo: "MEC",
  },
  {
    id: 2,
    titulo: "IFRS",
  },
  {
    id: 3,
    titulo: "SIM",
  },
  {
    id: 4,
    titulo: "IFG",
  },
  {
    id: 5,
    titulo: "IFRJ",
  },
  {
    id: 6,
    titulo: "ENAP",
  },
  {
    id: 7,
    titulo: "UFSCAR",
  },
  {
    id: 8,
    titulo: "ILB",
  },
  {
    id: 9,
    titulo: "UNIFAP",
  },
  {
    id: 11,
    titulo: "PoCA - UFSCar",
  },
  {
    id: 12,
    titulo: "IFMG",
  },
  {
    id: 13,
    titulo: "Ministério da Economia",
  },
  {
    id: 14,
    titulo: "Instituto Federal Sul-Rio-Grandense",
  },
  {
    id: 15,
    titulo: "ENAP Escola Virtual",
  },
  {
    id: 19,
    titulo: "IFES",
  },
  {
    id: 20,
    titulo: "IFMS",
  },
  {
    id: 21,
    titulo: "IFRO",
  },
  {
    id: 22,
    titulo: "SERPRO",
  },
  {
    id: 23,
    titulo: "Escola Virtual de Governo",
  },
  {
    id: 24,
    titulo: "UFRGS",
  },
  {
    id: 25,
    titulo: "UFRGS (LUMINA educação para todos)",
  },
  {
    id: 29,
    titulo: "CEFOR IFES",
  },
  {
    id: 31,
    titulo: "Enap",
  },
  {
    id: 32,
    titulo: "MMFDH",
  },
  {
    id: 33,
    titulo: "IFSP",
  },
  {
    id: 34,
    titulo: "ITS Rio",
  },
  {
    id: 35,
    titulo: "NUTEAD - UEPG",
  },
  {
    id: 38,
    titulo: "IFRN",
  },
  {
    id: 40,
    titulo: "Unisinos",
  },
  {
    id: 41,
    titulo: "Sebrae",
  },
  {
    id: 42,
    titulo: "FGV",
  },
];

export const categoriasDeCompetenciasDefault = [
  {
    id: 1,
    nome: "Não especificado",
    competencias: [1],
  },
  {
    id: 2,
    nome: "Envolvimento profissional",
    competencias: [2, 3, 4, 5],
  },
  {
    id: 3,
    nome: "Recursos digitais",
    competencias: [6, 7, 8],
  },
  {
    id: 4,
    nome: "Ensino e aprendizagem",
    competencias: [9, 10, 11, 12],
  },
  {
    id: 5,
    nome: "Avaliação",
    competencias: [13, 14, 15],
  },
  {
    id: 6,
    nome: "Capacitação dos aprendentes",
    competencias: [16, 17, 18],
  },
  {
    id: 7,
    nome: "Promoção da competência digital dos aprendentes",
    competencias: [19, 20, 21, 22, 23],
  },
  {
    id: 8,
    nome: "Gestão de Resultados",
    competencias: [24, 25, 26, 27, 28, 29, 30, 31],
  },
  {
    id: 9,
    nome: "Gestão de Relacionamentos",
    competencias: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
  },
  {
    id: 10,
    nome: "Gestão de Mudanças",
    competencias: [43, 44, 45, 46, 47, 48, 49],
  },
  {
    id: 11,
    nome: "Orientação a Resultados",
    competencias: [50, 51, 52, 53, 54],
  },
  {
    id: 12,
    nome: "Processos de Melhoria",
    competencias: [55, 56, 57, 58, 59],
  },
  {
    id: 13,
    nome: "Competências Transversais",
    competencias: [60, 61, 62, 63, 64, 65],
  },
  {
    id: 14,
    nome: "Competências de Liderança - Pessoas",
    competencias: [66],
  },
  {
    id: 15,
    nome: "Competências de Liderança - Resultados",
    competencias: [67, 68],
  },
  {
    id: 16,
    nome: "Outras competências associadas",
    competencias: [69],
  },
  {
    id: 17,
    nome: "Competência de Liderança - Estratégia",
    competencias: [70],
  },
];

export const competenciasDefault = [
  {
    id: 1,
    titulo: "Não especificado",
    descricao: "Não especificado",
    cursos: [[15, 16, 17, 258], [15, 17, 16], [], [], [258], []],
    categoria: 1,
  },
  {
    id: 2,
    titulo: "Comunicação institucional",
    descricao:
      "Usar tecnologias digitais para melhorar a comunicação institucional com os aprendentes, encarregados de educação e terceiros. Contribuir, colaborativamente, para desenvolver e melhorar as estratégias de comunicação institucional.",
    cursos: [
      [59, 60, 68, 69, 78],
      [],
      [59, 78, 60, 69, 68],
      [59, 78, 60, 69, 68],
      [],
      [],
    ],
    categoria: 2,
  },
  {
    id: 3,
    titulo: "Colaboração profissional",
    descricao:
      "Usar tecnologias digitais para colaborar com outros educadores, partilhar e trocar conhecimento e experiência, bem como para inovar práticas pedagógicas de forma colaborativa.",
    cursos: [
      [61, 64, 65, 66, 71, 72, 76, 77],
      [],
      [64, 64, 65, 66, 72, 61, 77, 71, 76],
      [64, 64, 65, 66, 72, 71, 76],
      [],
      [],
    ],
    categoria: 2,
  },
  {
    id: 4,
    titulo: "Prática reflexiva",
    descricao:
      "Refletir individualmente e coletivamente, avaliar criticamente e desenvolver ativamente a sua prática pedagógica digital e a da sua comunidade educativa.",
    cursos: [[62, 63, 73, 172], [], [62, 63, 73], [62, 63, 73, 172], [], []],
    categoria: 2,
  },
  {
    id: 5,
    titulo: "Desenvolvimento Profissional Contínuo (DPC) digital",
    descricao:
      "Usar fontes e recursos digitais para desenvolvimento profissional contínuo.",
    categoria: 2,
  },
  {
    id: 6,
    titulo: "Seleção",
    descricao:
      "Identificar, avaliar e selecionar recursos digitais para o ensino e aprendizagem. Ter em consideração o objetivo específico de aprendizagem, o contexto, a abordagem pedagógica e o grupo de aprendentes, ao selecionar recursos digitais e planificar a sua utilização.",
    cursos: [[80, 74], [], [74, 80], [74, 80], [], []],
    categoria: 3,
  },
  {
    id: 7,
    titulo: "Criação e modificação",
    descricao:
      "Modificar e desenvolver recursos existentes com licença aberta e outros recursos onde tal é permitido. Criar ou cocriar novos recursos educativos digitais. Ter em consideração o objetivo específico de aprendizagem, o contexto, a abordagem pedagógica e o grupo de aprendentes, ao selecionar recursos digitais e planificar a sua utilização.",
    cursos: [
      [82, 83, 86, 68, 89],
      [],
      [89, 86, 83, 82, 68],
      [89, 86, 83, 82, 68],
      [],
      [],
    ],
    categoria: 3,
  },
  {
    id: 8,
    titulo: "Gestão, proteção e partilha",
    descricao:
      "Organizar conteúdo digital e disponibilizá-lo aos aprendentes, encarregados de educação e outros educadores. Proteger eficazmente conteúdo digital sensível. Respeitar e aplicar corretamente regras de privacidade e de direitos de autor. Compreender a utilização e criação de licenças abertas e de recursos educativos abertos, incluindo a sua atribuição apropriada.",
    categoria: 3,
  },
  {
    id: 9,
    titulo: "Ensino",
    descricao:
      "Planificar e implementar dispositivos e recursos digitais no processo de ensino, de modo a melhorar a eficácia das intervenções pedagógicas. Gerir e orquestrar adequadamente estratégias de ensino digital. Experimentar e desenvolver novos formatos e métodos pedagógicos para o ensino.",
    cursos: [
      [91, 92, 94, 95, 98, 99],
      [],
      [91, 92, 94, 95, 94, 98, 99],
      [91, 92, 94, 95, 94, 98, 99],
      [],
      [],
    ],
    categoria: 4,
  },
  {
    id: 10,
    titulo: "Orientação",
    descricao:
      "Usar tecnologias e serviços digitais para melhorar a interação com os aprendentes, individual e coletivamente, dentro e fora da sessão de aprendizagem. Usar tecnologias digitais para proporcionar orientação e assistência oportuna e dirigida. Experimentar e desenvolver novas formas e formatos para oferecer orientação e apoio.",
    cursos: [[39, 90, 264], [], [39, 90], [90], [264], []],
    categoria: 4,
  },
  {
    id: 11,
    titulo: "Aprendizagem colaborativa",
    descricao:
      "Usar tecnologias digitais para promover e melhorar a colaboração do aprendente. Permitir que os aprendentes usem tecnologias digitais enquanto parte de tarefas colaborativas, como meio de melhorar a comunicação, a colaboração e a criação colaborativa de conhecimento.",
    cursos: [[96], [], [96], [96], [], []],
    categoria: 4,
  },
  {
    id: 12,
    titulo: "Aprendizagem autorregulada",
    descricao:
      "Usar tecnologias digitais para apoiar a aprendizagem autorregulada dos aprendentes, i.e., permitir que planeiem, monitorizem e reflitam sobre a sua própria aprendizagem, forneçam evidências de progresso, partilhem ideias e encontrem soluções criativas.",
    cursos: [[91], [], [91], [91], [], []],
    categoria: 4,
  },
  {
    id: 13,
    titulo: "Estratégias de avaliação",
    descricao:
      "Usar tecnologias digitais para a avaliação formativa e sumativa. Melhorar a diversidade e adequação dos formatos e abordagens de avaliação.",
    cursos: [
      [100, 101, 102, 91, 72, 86, 107, 108, 109, 110],
      [],
      [101, 108, 72, 86, 107, 109, 110, 102, 100, 91, 91],
      [101, 108, 72, 86, 107, 109, 110, 102, 100, 91, 91],
      [],
      [],
    ],
    categoria: 5,
  },
  {
    id: 14,
    titulo: "Análise de evidências",
    descricao:
      "Produzir, selecionar, analisar criticamente e interpretar evidências digitais sobre a atividade, desempenho e progresso do aprendente, de modo a informar o ensino e aprendizagem.",
    cursos: [[101, 109], [], [101, 109], [101, 109], [], []],
    categoria: 5,
  },
  {
    id: 15,
    titulo: "Feedback e planificação",
    descricao:
      "Usar tecnologias digitais para fornecer feedback oportuno e direcionado aos aprendentes. Adaptar estratégias de ensino e proporcionar apoio direcionado, com base nas evidências geradas pelas tecnologias digitais utilizadas. Permitir que aprendentes e encarregados de educação compreendam as evidências fornecidas pelas tecnologias digitais e as usem para tomada de decisão.",
    cursos: [
      [100, 101, 102, 91, 72, 86, 107, 108, 109, 110],
      [],
      [101, 108, 72, 86, 107, 109, 110, 102, 100, 91, 91],
      [101, 108, 72, 86, 107, 109, 110, 102, 100, 91, 91],
      [],
      [],
    ],
    categoria: 5,
  },
  {
    id: 16,
    titulo: "Acessibilidade e inclusão",
    descricao:
      "Garantir acessibilidade a recursos e atividades de aprendizagem para todos os aprendentes, incluindo os que têm necessidades especiais. Ter em consideração e dar resposta às expetativas, capacidades, usos e conceções errôneas (digitais) dos aprendentes, bem como ao uso contextual, físico e cognitivo que fazem das tecnologias digitais.",
    cursos: [
      [3, 4, 23, 24, 112, 73, 116, 118, 119, 124],
      [24, 23, 3, 4],
      [24, 112, 73, 116, 124, 118, 119],
      [24, 116, 112, 73, 124, 118, 119],
      [3, 4],
      [],
    ],
    categoria: 6,
  },
  {
    id: 17,
    titulo: "Diferenciação e personalização",
    descricao:
      "Usar tecnologias digitais para atender às diversas necessidades de aprendizagem dos aprendentes, permitindo que estes progridam a diferentes níveis e velocidades e sigam caminhos e objetivos de aprendizagem individuais.",
    cursos: [
      [3, 4, 23, 24, 112, 73, 91, 115, 116, 117, 118, 119, 101],
      [24, 23, 3, 4],
      [24, 115, 112, 116, 73, 117, 101, 91, 118, 119],
      [24, 115, 112, 116, 73, 117, 91, 118, 119],
      [3, 4],
      [],
    ],
    categoria: 6,
  },
  {
    id: 18,
    titulo: "Envolvimento ativo",
    descricao:
      "Usar tecnologias digitais para promover o envolvimento ativo e criativo dos aprendentes com um assunto específico. Usar tecnologias digitais no âmbito de estratégias pedagógicas que fomentem as competências transversais dos aprendentes, a reflexão profunda e a expressão criativa. Abrir a aprendizagem a novos contextos do mundo real, que envolvam os próprios aprendentes em atividades práticas, investigação científica ou resolução de problemas complexos, ou que, de outros modos, aumentem o seu envolvimento ativo em temas complexos.",
    cursos: [
      [91, 115, 117, 120],
      [],
      [115, 117, 91, 120],
      [115, 117, 120, 91],
      [],
      [],
    ],
    categoria: 6,
  },
  {
    id: 19,
    titulo: "Literacia da informação e das mídias",
    descricao:
      "Incorporar atividades, tarefas e avaliações de aprendizagem que requeiram que os aprendentes articulem necessidades de informação; encontrem informação e recursos em ambientes digitais; organizem, processem, analisem e interpretem informação; e comparem e avaliem criticamente a credibilidade e a fiabilidade da informação e das suas fontes.",
    cursos: [
      [125, 62, 127, 74],
      [],
      [125, 62, 127, 74],
      [125, 62, 127, 74],
      [],
      [],
    ],
    categoria: 7,
  },
  {
    id: 20,
    titulo: "Comunicação e colaboração digital",
    descricao:
      "Incorporar atividades, tarefas e avaliações de aprendizagem que requeiram que os aprendentes usem, eficaz e responsavelmente, tecnologias digitais para comunicação, colaboração e participação cívica.",
    cursos: [
      [122, 59, 124, 125, 62, 135],
      [],
      [59, 125, 122, 62, 124, 135],
      [59, 125, 122, 62, 124, 135],
      [],
      [],
    ],
    categoria: 7,
  },
  {
    id: 21,
    titulo: "Criação de conteúdo digital",
    descricao:
      "Incorporar atividades, tarefas e avaliações de aprendizagem que requeiram que os aprendentes se expressem através de meios digitais, modifiquem e criem conteúdo digital em diferentes formatos. Ensinar aos aprendentes como os direitos de autor e as licenças se aplicam ao conteúdo digital, como referenciar fontes e atribuir licenças.",
    cursos: [
      [125, 133, 234, 236],
      [],
      [125, 133],
      [125, 234, 236, 133],
      [],
      [],
    ],
    categoria: 7,
  },
  {
    id: 22,
    titulo: "Uso responsável",
    descricao:
      "Tomar medidas que garantam o bem-estar físico, psicológico e social dos aprendentes enquanto usam tecnologias digitais. Capacitar os aprendentes para gerir riscos e usar tecnologias digitais de forma segura e responsável.",
    cursos: [[127, 87, 29], [], [87, 29, 127], [87, 29, 127], [], []],
    categoria: 7,
  },
  {
    id: 23,
    titulo: "Resolução de problemas digitais",
    descricao:
      "Incorporar atividades, tarefas e avaliações de aprendizagem que requeiram que os aprendentes identifiquem e resolvam problemas técnicos ou transfiram criativamente conhecimento tecnológico para novas situações.",
    cursos: [[128, 120, 130], [], [128, 120, 130], [128, 120, 130], [], []],
    categoria: 7,
  },
  {
    id: 24,
    titulo: "Gestão do desenvolvimento de pessoas",
    descricao:
      "Forjar um ambiente de trabalho em que os interesses de equipes e indivíduos se harmonizem com os objetivos e resultados da organização, gerando oportunidades de aprendizado e desenvolvimento, bem como incentivos para reforçar o desempenho excepcional.",
    cursos: [
      [1, 2, 7, 20, 25, 26, 27, 11, 42, 53, 23, 55, 57],
      [1, 2, 27, 20, 25, 26, 7],
      [11, 42, 53, 23, 55, 55, 57, 25, 26, 27],
      [],
      [],
      [],
    ],
    categoria: 8,
  },
  {
    id: 25,
    titulo: "Gestão da qualidade",
    descricao:
      "Conduzir a área de gestão encarregada de padronizar boas práticas processuais, no âmbito do paradigma da qualidade; gerando serviços internos ou externos seguros e confiáveis, de acordo com indicadores pré-estabelecidos em termos de legislação vigente e padrões de qualidade aplicáveis.",
    cursos: [[22, 54, 61, 244, 245], [22], [], [], [244, 245, 61, 54], []],
    categoria: 8,
  },
  {
    id: 26,
    titulo: "Liderança eficaz",
    descricao:
      "Dirigir equipes, otimizando a aplicação de talentos disponíveis e criando um ambiente positivo e comprometido para a obtenção de resultados.",
    categoria: 8,
  },
  {
    id: 27,
    titulo: "Gerenciamento de recursos",
    descricao:
      "Preservar critérios de eficácia e eficiência na administração de recursos materiais, das competências das pessoas e dos ativos de uso da organização.",
    cursos: [[19, 21, 30, 46, 249], [19, 21], [30, 46], [], [249], []],
    categoria: 8,
  },
  {
    id: 28,
    titulo: "Planejamento",
    descricao:
      "Identificar problemas prioritários e oportunidades de sua unidade para projetar planos, programas ou projetos que prefixam objetivos, atividades, recursos, custos, cronogramas, responsáveis e indicadores de progresso, resultados e impacto.",
    cursos: [[28, 54, 249, 258], [28], [54, 28], [], [249, 258], []],
    categoria: 8,
  },
  {
    id: 29,
    titulo: "Relacionamento com dirigentes",
    descricao:
      "Participar, manter e facilitar de áreas de intercâmbio com o corpo diretivo de sua organização e outras organizações, a fim de compartilhar experiências, soluções e propostas, para articular estrategicamente os objetivos convergentes.",
    categoria: 8,
  },
  {
    id: 30,
    titulo: "Resolução de problemas",
    descricao:
      "Reconhecer as relações de causa e efeito no campo dos problemas identificados que a sua área e organização enfrentam, para focar nas questões centrais para as quais concentrar as soluções estratégicas. Projetar soluções alternativas calculando os benefícios em relação aos custos de sua implementação, riscos correlatos e impactos associados.",
    cursos: [[39, 22], [], [39], [], [22], []],
    categoria: 8,
  },
  {
    id: 31,
    titulo: "Tomada de decisão para gestores",
    descricao:
      "Adotar e informar decisões prévias, explorando alternativas para minimizar custos e aumentar as vantagens para a organização na questão que for decidida.",
    cursos: [[29, 22], [], [29, 22], [], [], []],
    categoria: 8,
  },
  {
    id: 32,
    titulo: "Comunicação interpessoal",
    descricao:
      "Iniciar e manter comunicações respeitosas e cordiais; transmitir de forma transparente e comportamento estável, informações e gestos, mensagens orais e de texto claros, concisos, fiáveis e apropriados para o destinatário. Atender ativamente informações, consultas, divergências e mensagens de terceiros com uma atitude construtiva e empática.",
    cursos: [
      [11, 12, 13, 14, 18, 250, 135, 263],
      [12, 11, 13, 14, 18],
      [18],
      [],
      [135, 263, 250],
      [],
    ],
    categoria: 9,
  },
  {
    id: 33,
    titulo: "Gestão da participação cidadã",
    descricao:
      "Ativar a participação cidadã vinculada aos assuntos da área responsável; considerar expectativas, propostas e reclamações para adaptar cada vez mais os serviços, conscientizando os colaboradores sobre o direito à participação e as vantagens que ela viabiliza.",
    categoria: 9,
  },
  {
    id: 34,
    titulo: "Negociação",
    descricao:
      "Cooperar para construir o melhor acordo possível para as partes diante de posições divergentes, sem prejudicar a continuidade do vínculo e a aderência aos regulamentos vigentes.",
    cursos: [[263], [], [], [], [263], []],
    categoria: 9,
  },
  {
    id: 35,
    titulo: "Orientação ao cidadão",
    descricao:
      "Conduzir e organizar o atendimento aos cidadãos, com mecanismos acessíveis, linguagem inteligível e procedimentos ágeis voltados à satisfação de procedimentos, reclamações, dúvidas e propostas. Quantificar, através de indicadores pré-estabelecidos, o grau de satisfação com os resultados gerenciais e a qualidade da resolução de conflitos e reclamações.",
    cursos: [[39, 47, 271, 272, 273], [], [39, 47], [], [], [271, 272, 273]],
    categoria: 9,
  },
  {
    id: 36,
    titulo: "Relações institucionais",
    descricao:
      "Promover a qualidade dos relacionamentos regulares e criar novos relacionamentos necessários para a consecução dos interesses da sua organização. Fortalecer a imagem corporativa, fazendo apresentações em público, planejando a mensagem a ser transmitida e seu objetivo de acordo com o tipo de público.",
    cursos: [[52, 43], [], [52, 43], [], [], []],
    categoria: 9,
  },
  {
    id: 37,
    titulo: "Trabalho em equipe",
    descricao:
      "Criar e participar de equipes de trabalho para promover um ambiente produtivo e aprimorar habilidades diferenciadas entre as pessoas; compartilhando recursos e informações para alcançar melhores resultados",
    cursos: [
      [43, 44, 263, 264, 265, 266, 39, 268, 270],
      [],
      [43, 44],
      [],
      [264, 266, 268, 263, 39, 265, 44, 270],
      [],
    ],
    categoria: 9,
  },
  {
    id: 38,
    titulo: "Abertura ao Novo",
    descricao: "Sem Descrição",
    cursos: [[278, 273, 280], [], [], [], [], [278, 273, 280]],
    categoria: 9,
  },
  {
    id: 39,
    titulo: "Aprendizado Contínuo",
    descricao: "Sem Descrição",
    cursos: [[274, 275, 276, 282], [], [], [], [], [275, 274, 276, 282]],
    categoria: 9,
  },
  {
    id: 40,
    titulo: "Autoconhecimento e desenvolvimento pessoal",
    descricao: "Sem Descrição",
    cursos: [[281], [], [], [], [], [281]],
    categoria: 9,
  },
  {
    id: 41,
    titulo: "Autogestão",
    descricao: "Sem Descrição",
    cursos: [[277, 283], [], [], [], [], [283, 277]],
    categoria: 9,
  },
  {
    id: 42,
    titulo: "Gerenciamento de políticas",
    descricao:
      "Contribuir para a coerência estratégica da gestão de políticas, articulando e complementando os objetivos e resultados das organizações; desempenhar o papel de liderança no âmbito das políticas públicas promovidas pelo Alto Governo.",
    categoria: 9,
  },
  {
    id: 43,
    titulo: "Construção de Redes",
    descricao:
      "Promover o autodesenvolvimento e o desenvolvimento profissional de suas equipes de colaboradores, integrando, criando ou incentivando a participação em redes e fóruns para troca de experiências, novidades, documentos, cases, soluções criativas e problemas compartilhados.",
    categoria: 10,
  },
  {
    id: 44,
    titulo: "Gerenciamento da mudança",
    descricao:
      "Antecipar e promover mudanças estratégicas/operacionais para responder às mudanças do contexto. Redesenhar/modernizar abordagens, processos, tarefas e competências requeridos pelo novo contexto, distribuindo responsabilidades e perseguindo resultados.",
    cursos: [[262], [], [], [], [262], []],
    categoria: 10,
  },
  {
    id: 45,
    titulo: "Gerenciamento digital",
    descricao:
      "Reconhecer efetivamente o direito dos cidadãos à informação pública e à interação com serviços no ambiente digital, garantindo canais efetivos para requisição de serviços, pedidos, consultas, procedimentos, acompanhamento e resolução remotos.",
    categoria: 10,
  },
  {
    id: 46,
    titulo: "Inovação",
    descricao:
      "Forjar um clima de interesse para soluções inovadoras que melhorem a eficiência das respostas aos cidadãos em termos de informações, processos, tecnologias, resultados e impactos da gestão pública.",
    cursos: [[255, 259, 260, 261], [], [], [], [259, 260, 261, 255], []],
    categoria: 10,
  },
  {
    id: 47,
    titulo: "Proatividade",
    descricao:
      "Atuar com iniciativa e instruir os colaboradores a antecipar eventos previsíveis que envolvam a execução de tarefas para atendimento de demandas internas e externas (dos cidadãos), fortalecendo a percepção dos usuários sobre o comprometimento da unidade na oferta de serviços e produtos.",
    categoria: 10,
  },
  {
    id: 48,
    titulo: "Trabalho sobre pressão",
    descricao:
      "Gerenciar emoções em busca da qualidade das ações gerenciais, evitando reações impulsivas/temperamentais em situações de pressão. Objetivar e enfocar os problemas a resolver, dissociando-os das pessoas envolvidas neles. Utilizar dificuldades, erros detectados ou planos fracassados como objetos de aprendizagem coletiva para capitalizar construtivamente a situação e evitar sua repetição.",
    categoria: 10,
  },
  {
    id: 49,
    titulo: "Visão estratégica",
    descricao:
      "Compreender o ambiente político e a as tendências que interferem no estado de coisas; antecipar problemas e oportunidades a médio e longo prazo para a área responsável a fim de que a gestão identifique a alternativa mais adequada a cada situação presente ou eventual, comunicando à equipe a lógica das decisões diretivas.",
    cursos: [
      [259, 260, 261, 262, 241, 54, 61, 264, 265, 266, 39, 268],
      [],
      [],
      [],
      [264, 54, 61, 241, 266, 268, 39, 265, 262, 259, 260, 261],
      [],
    ],
    categoria: 10,
  },
  {
    id: 50,
    titulo: "Contribuição técnico-profissional",
    descricao:
      "Disponibilizar à Administração seu conhecimento profissional específico e suas experiências anteriores, gerenciando a atualização de seus conhecimentos especializados.",
    categoria: 11,
  },
  {
    id: 51,
    titulo: "Comunicação efetiva",
    descricao:
      "Estabelecer comunicação efetiva e positiva com superiores hierárquicos, pares e cidadãos, tanto na expressão escrita e verbal quanto corporal.",
    cursos: [[250, 135], [], [], [], [135, 250], []],
    categoria: 11,
  },
  {
    id: 52,
    titulo: "Organização da rotina",
    descricao:
      "Definir o programa semanal/mensal de atividades, no âmbito do plano institucional, determinando os resultados a serem alcançados, as tarefas a serem executadas, os procedimentos a serem resolvidos e os atrasos a serem corrigidos, bem como os custos e insumos necessários para alcançá-lo.",
    categoria: 11,
  },
  {
    id: 53,
    titulo: "Resolutividade",
    descricao:
      "Manter interdependências positivas e produtivas com sua equipe e seus superiores para alcançar resultados.",
    categoria: 11,
  },
  {
    id: 54,
    titulo: "Uso de TIC",
    descricao:
      "Otimizar o uso das tecnologias de informação e comunicação disponíveis, em seu efetivo potencial, para melhorar seu desempenho.",
    cursos: [[5, 6, 8, 9, 10], [6, 9, 10, 8, 5], [], [], [], []],
    categoria: 11,
  },
  {
    id: 55,
    titulo: "Análise de problemas",
    descricao:
      "Identificar tempestivamente os problemas a serem resolvidos, os recursos para enfrentá-los, as alternativas possíveis, seus custos e riscos, antes de tomar a decisão no nível que lhes corresponde.",
    categoria: 12,
  },
  {
    id: 56,
    titulo: "Criatividade",
    descricao:
      "Aplicar sua experiência e especialização em melhorar o uso de dados para refinar metodologias, processos, produtos e interações em equipe, orientadas para a satisfação do usuário externo/interno.",
    cursos: [[259, 260, 261, 262], [], [], [], [262, 259, 260, 261], []],
    categoria: 12,
  },
  {
    id: 57,
    titulo: "Melhoria contínua de processos",
    descricao:
      "Propor e introduzir ações para acelerar a melhoria contínua e a produtividade das tarefas sob sua responsabilidade, em atenção aos requisitos de qualidade.",
    cursos: [[38], [], [38], [], [], []],
    categoria: 12,
  },
  {
    id: 58,
    titulo: "Tomada de decisão",
    descricao:
      "Decidir sobre as questões sob sua responsabilidade mobilizando critérios de economia, eficácia, eficiência e transparência.",
    cursos: [[258], [], [], [], [258], []],
    categoria: 12,
  },
  {
    id: 59,
    titulo: "Controle emocional",
    descricao:
      "Preservar o diálogo harmônico e respeitoso acerca das divergências, erros e conflitos do ambiente, sem afetar a dinâmica do trabalho sem razão justificável.",
    cursos: [[39, 263], [], [39], [], [263], []],
    categoria: 12,
  },
  {
    id: 60,
    titulo: "Comunicação",
    descricao: "Competências Transversais",
    cursos: [[250, 135, 254], [], [], [], [135, 254, 250], []],
    categoria: 13,
  },
  {
    id: 61,
    titulo: "Coordenação e colaboração em rede",
    descricao: "Competências Transversais",
    cursos: [[268], [], [], [], [268], []],
    categoria: 13,
  },
  {
    id: 62,
    titulo: "Foco nos resultados para os cidadãos",
    descricao: "Competências Transversais",
    cursos: [[258, 265], [], [], [], [265, 258], []],
    categoria: 13,
  },
  {
    id: 63,
    titulo: "Mentalidade Digital",
    descricao: "Competências Transversais",
    cursos: [[244, 251, 252], [], [], [], [244, 251, 252], []],
    categoria: 13,
  },
  {
    id: 64,
    titulo: "Orientações por valores éticos",
    descricao: "Competência Transversais",
    cursos: [[240, 246, 87], [], [], [], [246, 87, 240], []],
    categoria: 13,
  },
  {
    id: 65,
    titulo: "Visão Sistêmica",
    descricao: "Competência Transversal",
    cursos: [[54, 61], [], [], [], [54, 61], []],
    categoria: 13,
  },
  {
    id: 66,
    titulo: "Engajamento de pessoas e equipes",
    descricao: "Competências de Liderança - Pessoas",
    cursos: [[266, 39], [], [], [], [266, 39], []],
    categoria: 14,
  },
  {
    id: 67,
    titulo: "Geração de valor para o usuario",
    descricao: "Competêcia de Liderança - Resultados",
    cursos: [[239], [], [], [], [239], []],
    categoria: 15,
  },
  {
    id: 68,
    titulo: "Gestão para resultados",
    descricao: "Competêcia de Liderança - Resultados",
    cursos: [[248, 44, 270], [], [], [], [44, 270, 248], []],
    categoria: 15,
  },
  {
    id: 69,
    titulo: "Saber comunicar-se e lidar com conflitos",
    descricao: "Outras competências associadas",
    cursos: [[263], [], [], [], [263], []],
    categoria: 16,
  },
  {
    id: 70,
    titulo: "Visão de Futuro",
    descricao: "Competência de Liderança - Estratégia",
    cursos: [[241, 245, 256, 258], [], [], [], [256, 245, 241, 258], []],
    categoria: 17,
  },
];

export const temasDefault = [
  {
    id: 1,
    titulo: "Não Especificado",
    subtemas: [1],
  },
  {
    id: 2,
    titulo: "Matemática",
    subtemas: [2, 3, 4],
  },
  {
    id: 3,
    titulo: "Probabilidade e Estatística",
    subtemas: [5, 6, 7],
  },
  {
    id: 4,
    titulo: "Ciência da Computação",
    subtemas: [8, 9, 10, 11],
  },
  {
    id: 5,
    titulo: "Astronomia",
    subtemas: [12, 13, 14, 15, 16, 17],
  },
  {
    id: 6,
    titulo: "Física",
    subtemas: [18, 19, 20, 21, 22, 23],
  },
  {
    id: 7,
    titulo: "Química",
    subtemas: [24, 25, 26, 27],
  },
  {
    id: 8,
    titulo: "GeoCiências",
    subtemas: [28, 29, 30, 31, 32],
  },
  {
    id: 9,
    titulo: "Oceanografia",
    subtemas: [33, 34, 35, 36],
  },
  {
    id: 10,
    titulo: "Biologia Geral",
    subtemas: [37],
  },
  {
    id: 11,
    titulo: "Genética",
    subtemas: [38, 39, 40, 41, 42],
  },
  {
    id: 12,
    titulo: "Botânica",
    subtemas: [43, 44, 45, 46, 47, 48],
  },
  {
    id: 13,
    titulo: "Zoologia",
    subtemas: [49, 50, 51, 52, 53, 54],
  },
  {
    id: 14,
    titulo: "Ecologia",
    subtemas: [55, 56, 57],
  },
  {
    id: 15,
    titulo: "Morfologia",
    subtemas: [58, 59, 60, 61],
  },
  {
    id: 16,
    titulo: "Fisiologia",
    subtemas: [62, 63, 64, 65],
  },
  {
    id: 17,
    titulo: "Bioquímica",
    subtemas: [66, 67, 68, 69, 70],
  },
  {
    id: 18,
    titulo: "Biofísica",
    subtemas: [71, 72, 73, 74],
  },
  {
    id: 19,
    titulo: "Farmacologia",
    subtemas: [75, 76, 77, 78, 79, 80, 81, 82],
  },
  {
    id: 20,
    titulo: "Imunologia",
    subtemas: [83, 84, 85, 86],
  },
  {
    id: 21,
    titulo: "Microbiologia",
    subtemas: [87, 88],
  },
  {
    id: 22,
    titulo: "Parasitologia",
    subtemas: [89, 90, 91],
  },
  {
    id: 23,
    titulo: "Engenharia Civil",
    subtemas: [92, 93, 94, 95, 96],
  },
  {
    id: 24,
    titulo: "Engenharia de Minas",
    subtemas: [97, 98, 99],
  },
  {
    id: 25,
    titulo: "Engenharia de Materiais e Metalúrgica",
    subtemas: [100, 101, 102, 103, 104],
  },
  {
    id: 26,
    titulo: "Engenharia Elétrica",
    subtemas: [105, 106, 107, 108, 109, 110],
  },
  {
    id: 27,
    titulo: "Engenharia Mecânica",
    subtemas: [111, 112, 113, 114, 115],
  },
  {
    id: 28,
    titulo: "Engenharia Química",
    subtemas: [116, 117, 118],
  },
  {
    id: 29,
    titulo: "Engenharia Sanitária",
    subtemas: [119, 120, 121, 122],
  },
  {
    id: 30,
    titulo: "Engenharia de Produção",
    subtemas: [123, 124, 125, 126],
  },
  {
    id: 31,
    titulo: "Engenharia Nuclear",
    subtemas: [127, 128, 129, 130],
  },
  {
    id: 32,
    titulo: "Engenharia de Transportes",
    subtemas: [131, 132, 133],
  },
  {
    id: 33,
    titulo: "Engenharia Naval e Oceânica",
    subtemas: [134, 135, 136, 137, 138],
  },
  {
    id: 34,
    titulo: "Engenharia Aeroespacial",
    subtemas: [139, 140, 141, 142, 143, 144],
  },
  {
    id: 35,
    titulo: "Engenharia Biomédica",
    subtemas: [145, 146],
  },
  {
    id: 36,
    titulo: "Medicina",
    subtemas: [147, 148, 149, 150, 151, 152, 153],
  },
  {
    id: 37,
    titulo: "Odontologia",
    subtemas: [154, 155, 156, 157, 158, 159, 160, 161, 162],
  },
  {
    id: 38,
    titulo: "Farmácia",
    subtemas: [163, 164, 165, 166, 167],
  },
  {
    id: 39,
    titulo: "Nutrição",
    subtemas: [168, 169, 170, 171],
  },
  {
    id: 40,
    titulo: "Saúde Coletiva",
    subtemas: [172, 173, 174],
  },
  {
    id: 41,
    titulo: "Fonoaudiologia",
    subtemas: [175],
  },
  {
    id: 42,
    titulo: "Fisioterapia e Terapia Ocupacional",
    subtemas: [176],
  },
  {
    id: 43,
    titulo: "Educação Física",
    subtemas: [177],
  },
  {
    id: 44,
    titulo: "Agronomia",
    subtemas: [178, 179, 180, 181, 182, 183],
  },
  {
    id: 45,
    titulo: "Recursos Florestais e Engenharia Florestal",
    subtemas: [184, 185, 186, 187, 188, 189],
  },
  {
    id: 46,
    titulo: "Engenharia Agrícola",
    subtemas: [190, 191, 192, 193, 194],
  },
  {
    id: 47,
    titulo: "Zootecnia",
    subtemas: [195, 196, 197, 198, 199],
  },
  {
    id: 48,
    titulo: "Medicina Veterinária",
    subtemas: [200, 201, 202, 203, 204],
  },
  {
    id: 49,
    titulo: "Recursos Pesqueiros e Engenharia de Pesca",
    subtemas: [205, 206, 207, 208],
  },
  {
    id: 50,
    titulo: "Ciência e Tecnologia de Alimentos",
    subtemas: [209, 210, 211],
  },
  {
    id: 51,
    titulo: "Direito",
    subtemas: [212, 213, 214, 215],
  },
  {
    id: 52,
    titulo: "Administração",
    subtemas: [216, 217, 218],
  },
  {
    id: 53,
    titulo: "Administração Pública",
    subtemas: [
      219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233,
      234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
      249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263,
      264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278,
    ],
  },
  {
    id: 54,
    titulo: "Economia",
    subtemas: [279, 280, 281, 282, 283, 284, 285, 286, 287, 288],
  },
  {
    id: 55,
    titulo: "Arquitetura e Urbanismo",
    subtemas: [289, 290, 291, 292],
  },
  {
    id: 56,
    titulo: "Planejamento Urbano e Regional",
    subtemas: [293, 294, 295],
  },
  {
    id: 57,
    titulo: "Demografia",
    subtemas: [296, 297, 298, 299, 300, 301, 302],
  },
  {
    id: 58,
    titulo: "Ciência da Informação",
    subtemas: [303, 304, 305],
  },
  {
    id: 59,
    titulo: "Museologia",
    subtemas: [306],
  },
  {
    id: 60,
    titulo: "Comunicação",
    subtemas: [307, 308, 309, 310, 311],
  },
  {
    id: 61,
    titulo: "Serviço Social",
    subtemas: [312, 313],
  },
  {
    id: 62,
    titulo: "Economia Doméstica",
    subtemas: [314],
  },
  {
    id: 63,
    titulo: "Desenho Industrial",
    subtemas: [315, 316],
  },
  {
    id: 64,
    titulo: "Filosofia",
    subtemas: [317, 318, 319, 320, 321, 322],
  },
  {
    id: 65,
    titulo: "Sociologia",
    subtemas: [323, 324, 325, 326, 327, 328, 329],
  },
  {
    id: 66,
    titulo: "Antropologia",
    subtemas: [330, 331, 332, 333, 334],
  },
  {
    id: 67,
    titulo: "Arqueologia",
    subtemas: [335, 336, 337],
  },
  {
    id: 68,
    titulo: "História",
    subtemas: [338, 339, 340, 341, 342, 343],
  },
  {
    id: 69,
    titulo: "Geografia",
    subtemas: [344, 345],
  },
  {
    id: 70,
    titulo: "Psicologia",
    subtemas: [346, 347, 348, 349, 350, 351, 352, 353, 354, 355],
  },
  {
    id: 71,
    titulo: "Educação",
    subtemas: [356, 357, 358, 359, 360, 361, 362],
  },
  {
    id: 72,
    titulo: "Ciência Política",
    subtemas: [363, 364, 365, 366, 367],
  },
  {
    id: 73,
    titulo: "Teologia",
    subtemas: [368, 369, 370, 371],
  },
  {
    id: 74,
    titulo: "Linguística",
    subtemas: [372, 373, 374, 375, 376, 377],
  },
  {
    id: 75,
    titulo: "Letras",
    subtemas: [378, 379, 380, 381, 382, 383, 384, 385, 386, 387],
  },
  {
    id: 76,
    titulo: "Artes",
    subtemas: [388, 389, 390, 391, 392, 393, 394, 395, 396, 397],
  },
];

export const subtemasDefault = [
  {
    id: 1,
    titulo: "Não Especificado",
  },
  {
    id: 2,
    titulo: "Algebra Análise",
  },
  {
    id: 3,
    titulo: "Geometria e Topologia",
  },
  {
    id: 4,
    titulo: "Matemática Aplicada",
  },
  {
    id: 5,
    titulo: "Probabilidade",
  },
  {
    id: 6,
    titulo: "Estatística",
  },
  {
    id: 7,
    titulo: "Probabilidade e Estatística Aplicadas",
  },
  {
    id: 8,
    titulo: "Teoria da Computação",
  },
  {
    id: 9,
    titulo: "Matemática da Computação",
  },
  {
    id: 10,
    titulo: "Metodologia e Técnicas da Computação",
  },
  {
    id: 11,
    titulo: "Sistemas de Computação",
  },
  {
    id: 12,
    titulo: "Astronomia de Posição e Mecânica Celeste",
  },
  {
    id: 13,
    titulo: "Astrofísica Estelar",
  },
  {
    id: 14,
    titulo: "Astrofísica do Meio Interestelar",
  },
  {
    id: 15,
    titulo: "Astrofísica Extragaláctica",
  },
  {
    id: 16,
    titulo: "Astrofísica do Sistema Solar",
  },
  {
    id: 17,
    titulo: "Instrumentação Astronômica",
  },
  {
    id: 18,
    titulo: "Física Geral",
  },
  {
    id: 19,
    titulo: "Áreas Clássicas de Fenomenologia e suas Aplicações",
  },
  {
    id: 20,
    titulo: "Física das Partículas Elementares e Campos",
  },
  {
    id: 21,
    titulo: "Física Nuclear",
  },
  {
    id: 22,
    titulo: "Física Atômica e Molécular",
  },
  {
    id: 23,
    titulo:
      "Física dos Fluidos, Física de Plasmas e Descargas Elétricas Física da Matéria Condensada",
  },
  {
    id: 24,
    titulo: "Química Orgânica",
  },
  {
    id: 25,
    titulo: "Química Inorgânica",
  },
  {
    id: 26,
    titulo: "Fisico-Química",
  },
  {
    id: 27,
    titulo: "Química Analítica",
  },
  {
    id: 28,
    titulo: "Geologia",
  },
  {
    id: 29,
    titulo: "Geofísica",
  },
  {
    id: 30,
    titulo: "Meteorologia",
  },
  {
    id: 31,
    titulo: "Geodesia",
  },
  {
    id: 32,
    titulo: "Geografia Física",
  },
  {
    id: 33,
    titulo: "Oceanografia Biológica",
  },
  {
    id: 34,
    titulo: "Oceanografia Física",
  },
  {
    id: 35,
    titulo: "Oceanografia Química",
  },
  {
    id: 36,
    titulo: "Oceanografia Geológica",
  },
  {
    id: 37,
    titulo: "Biologia Geral",
  },
  {
    id: 38,
    titulo: "Genética Quantitativa",
  },
  {
    id: 39,
    titulo: "Genética Molecular e de Microorganismos",
  },
  {
    id: 40,
    titulo: "Genética Vegetal",
  },
  {
    id: 41,
    titulo: "Genética Animal",
  },
  {
    id: 42,
    titulo: "Genética Humana e Médica Mutagênese",
  },
  {
    id: 43,
    titulo: "Paleobotânica",
  },
  {
    id: 44,
    titulo: "Morfologia Vegetal",
  },
  {
    id: 45,
    titulo: "Fisiologia Vegetal",
  },
  {
    id: 46,
    titulo: "Taxonomia Vegetal",
  },
  {
    id: 47,
    titulo: "Fitogeografia",
  },
  {
    id: 48,
    titulo: "Botânica Aplicada",
  },
  {
    id: 49,
    titulo: "Paleozoologia",
  },
  {
    id: 50,
    titulo: "Morfologia dos Grupos Recentes",
  },
  {
    id: 51,
    titulo: "Fisiologia dos Grupos Recentes",
  },
  {
    id: 52,
    titulo: "Comportamento Animal",
  },
  {
    id: 53,
    titulo: "Taxonomia dos Grupos Recentes",
  },
  {
    id: 54,
    titulo: "Zoologia Aplicada",
  },
  {
    id: 55,
    titulo: "Ecologia Teórica",
  },
  {
    id: 56,
    titulo: "Ecologia de Ecossistemas",
  },
  {
    id: 57,
    titulo: "Ecologia Aplicada",
  },
  {
    id: 58,
    titulo: "Citologia e Biologia Celular",
  },
  {
    id: 59,
    titulo: "Embriologia",
  },
  {
    id: 60,
    titulo: "Histologia",
  },
  {
    id: 61,
    titulo: "Anatomia",
  },
  {
    id: 62,
    titulo: "Fisiologia Geral",
  },
  {
    id: 63,
    titulo: "Fisiologia de Órgaos e Sistemas",
  },
  {
    id: 64,
    titulo: "Fisiologia do Esforço",
  },
  {
    id: 65,
    titulo: "Fisiologia Comparada",
  },
  {
    id: 66,
    titulo: "Química de Macromoléculas",
  },
  {
    id: 67,
    titulo: "Bioquímica dos Microorganismos",
  },
  {
    id: 68,
    titulo: "Metabolismo e Bioenergética",
  },
  {
    id: 69,
    titulo: "Biologia Molecular",
  },
  {
    id: 70,
    titulo: "Enzimologia",
  },
  {
    id: 71,
    titulo: "Biofísica Molecular",
  },
  {
    id: 72,
    titulo: "Biofísica Celular",
  },
  {
    id: 73,
    titulo: "Biofísica de Processos e Sistemas",
  },
  {
    id: 74,
    titulo: "Radiologia e Fotobiologia",
  },
  {
    id: 75,
    titulo: "Farmacologia Geral",
  },
  {
    id: 76,
    titulo: "Farmacologia Autonômica",
  },
  {
    id: 77,
    titulo: "Neuropsicofarmacologia",
  },
  {
    id: 78,
    titulo: "Farmacologia Cardiorenal",
  },
  {
    id: 79,
    titulo: "Farmacologia Bioquímica e Molecular",
  },
  {
    id: 80,
    titulo: "Etnofarmacologia",
  },
  {
    id: 81,
    titulo: "Toxicologia",
  },
  {
    id: 82,
    titulo: "Farmacologia Clínica",
  },
  {
    id: 83,
    titulo: "Imunoquímica",
  },
  {
    id: 84,
    titulo: "Imunologia Celular",
  },
  {
    id: 85,
    titulo: "Imunogenética",
  },
  {
    id: 86,
    titulo: "Imunologia Aplicada",
  },
  {
    id: 87,
    titulo: "Biologia e Fisiologia dos Microorganismos",
  },
  {
    id: 88,
    titulo: "Microbiologia Aplicada",
  },
  {
    id: 89,
    titulo: "Protozoologia de Parasitos",
  },
  {
    id: 90,
    titulo: "Helmintologia de Parasitos",
  },
  {
    id: 91,
    titulo: "Entomologia e Malacologia de Parasitos e Vetores",
  },
  {
    id: 92,
    titulo: "Construção Civil",
  },
  {
    id: 93,
    titulo: "Estruturas",
  },
  {
    id: 94,
    titulo: "Geotécnica",
  },
  {
    id: 95,
    titulo: "Engenharia Hidráulica",
  },
  {
    id: 96,
    titulo: "Infra-Estrutura de Transportes",
  },
  {
    id: 97,
    titulo: "Pesquisa Mineral",
  },
  {
    id: 98,
    titulo: "Lavra",
  },
  {
    id: 99,
    titulo: "Tratamento de Minérios",
  },
  {
    id: 100,
    titulo: "Instalações e Equipamentos Metalúrgicos",
  },
  {
    id: 101,
    titulo: "Metalurgia Extrativa",
  },
  {
    id: 102,
    titulo: "Metalurgia de Transformação",
  },
  {
    id: 103,
    titulo: "Metalurgia Fisica",
  },
  {
    id: 104,
    titulo: "Materiais não Metálicos",
  },
  {
    id: 105,
    titulo: "Materiais Elétricos",
  },
  {
    id: 106,
    titulo: "Medidas Elétricas, Magnéticas e Eletrônicas; Instrumentação",
  },
  {
    id: 107,
    titulo: "Circuitos Elétricos, Magnéticos e Eletrônicos",
  },
  {
    id: 108,
    titulo: "Sistemas Elétricos de Potência",
  },
  {
    id: 109,
    titulo: "Eletrônica Industrial, Sistemas e Controles Eletrônicos",
  },
  {
    id: 110,
    titulo: "Telecomunicações",
  },
  {
    id: 111,
    titulo: "Fenômenos de Transporte",
  },
  {
    id: 112,
    titulo: "Engenharia Térmica",
  },
  {
    id: 113,
    titulo: "Mecânica dos Sólidos",
  },
  {
    id: 114,
    titulo: "Projetos de Máquinas",
  },
  {
    id: 115,
    titulo: "Processos de Fabricação",
  },
  {
    id: 116,
    titulo: "Processos Industriais de Engenharia Química",
  },
  {
    id: 117,
    titulo: "Operações Industriais e Equipamentos para Engenharia Química",
  },
  {
    id: 118,
    titulo: "Tecnologia Química",
  },
  {
    id: 119,
    titulo: "Recursos Hídricos",
  },
  {
    id: 120,
    titulo: "Tratamento de Águas de Abastecimento e Residuárias",
  },
  {
    id: 121,
    titulo: "Saneamento Básico",
  },
  {
    id: 122,
    titulo: "Saneamento Ambiental",
  },
  {
    id: 123,
    titulo: "Gerência de Produção",
  },
  {
    id: 124,
    titulo: "Pesquisa Operacional",
  },
  {
    id: 125,
    titulo: "Engenharia do Produto",
  },
  {
    id: 126,
    titulo: "Engenharia Econômica",
  },
  {
    id: 127,
    titulo: "Aplicações de Radioisotopos",
  },
  {
    id: 128,
    titulo: "Fusão Controlada",
  },
  {
    id: 129,
    titulo: "Combustível Nuclear",
  },
  {
    id: 130,
    titulo: "Tecnologia dos Reatores",
  },
  {
    id: 131,
    titulo: "Planejamento de Transportes",
  },
  {
    id: 132,
    titulo: "Veículos e Equipamentos de Controle",
  },
  {
    id: 133,
    titulo: "Operações de Transportes",
  },
  {
    id: 134,
    titulo: "Hidrodinâmica de Navios e Sistemas Oceânicos",
  },
  {
    id: 135,
    titulo: "Estruturas Navais e Oceânicas",
  },
  {
    id: 136,
    titulo: "Máquinas Marítimas",
  },
  {
    id: 137,
    titulo: "Projeto de Navios e de Sistemas Oceânicos",
  },
  {
    id: 138,
    titulo: "Tecnologia de Construção Naval e de Sistemas Oceânicas",
  },
  {
    id: 139,
    titulo: "Aerodinâmica",
  },
  {
    id: 140,
    titulo: "Dinâmica de Vôo",
  },
  {
    id: 141,
    titulo: "Estruturas Aeroespaciais",
  },
  {
    id: 142,
    titulo: "Materiais e Processos para Engenharia Aeronáutica e Aeroespacial",
  },
  {
    id: 143,
    titulo: "Propulsão Aeroespacial",
  },
  {
    id: 144,
    titulo: "Sistemas Aeroespaciais",
  },
  {
    id: 145,
    titulo: "Bioengenharia",
  },
  {
    id: 146,
    titulo: "Engenharia Médica",
  },
  {
    id: 147,
    titulo: "Clínica Médica",
  },
  {
    id: 148,
    titulo: "Cirurgia",
  },
  {
    id: 149,
    titulo: "Saúde Materno-Infantil",
  },
  {
    id: 150,
    titulo: "Psiquiatria",
  },
  {
    id: 151,
    titulo: "Anatomia Patológica e Patologia Clínica",
  },
  {
    id: 152,
    titulo: "Radiologia Médica",
  },
  {
    id: 153,
    titulo: "Medicina Legal e Deontologia",
  },
  {
    id: 154,
    titulo: "Clínica Odontológica",
  },
  {
    id: 155,
    titulo: "Cirurgia Buco-Maxilo-Facial",
  },
  {
    id: 156,
    titulo: "Ortodontia",
  },
  {
    id: 157,
    titulo: "Odontopediatria",
  },
  {
    id: 158,
    titulo: "Periodontia",
  },
  {
    id: 159,
    titulo: "Endodontia",
  },
  {
    id: 160,
    titulo: "Radiologia Odontológica",
  },
  {
    id: 161,
    titulo: "Odontologia Social e Preventiva",
  },
  {
    id: 162,
    titulo: "Materiais Odontológicos",
  },
  {
    id: 163,
    titulo: "Farmacotecnia",
  },
  {
    id: 164,
    titulo: "Farmacognosia",
  },
  {
    id: 165,
    titulo: "Análise Toxicológica",
  },
  {
    id: 166,
    titulo: "Análise e Controle e Medicamentos",
  },
  {
    id: 167,
    titulo: "Bromatologia",
  },
  {
    id: 168,
    titulo: "Bioquímica da Nutrição",
  },
  {
    id: 169,
    titulo: "Dietética",
  },
  {
    id: 170,
    titulo: "Análise Nutricional de População",
  },
  {
    id: 171,
    titulo: "Desnutrição e Desenvolvimento Fisiológico",
  },
  {
    id: 172,
    titulo: "Epidemiologia",
  },
  {
    id: 173,
    titulo: "Saúde Publica",
  },
  {
    id: 174,
    titulo: "Medicina Preventiva",
  },
  {
    id: 175,
    titulo: "Fonoaudiologia",
  },
  {
    id: 176,
    titulo: "Fisioterapia e Terapia Ocupacional",
  },
  {
    id: 177,
    titulo: "Educação Física",
  },
  {
    id: 178,
    titulo: "Ciência do Solo",
  },
  {
    id: 179,
    titulo: "Fitossanidade",
  },
  {
    id: 180,
    titulo: "Fitotecnia",
  },
  {
    id: 181,
    titulo: "Floricultura, Parques e Jardins",
  },
  {
    id: 182,
    titulo: "Agrometeorologia",
  },
  {
    id: 183,
    titulo: "Extensão Rural",
  },
  {
    id: 184,
    titulo: "Silvicultura",
  },
  {
    id: 185,
    titulo: "Manejo Florestal",
  },
  {
    id: 186,
    titulo: "Técnicas e Operações Florestais",
  },
  {
    id: 187,
    titulo: "Tecnologia e Utilização de Produtos Florestais",
  },
  {
    id: 188,
    titulo: "Conservação da Natureza",
  },
  {
    id: 189,
    titulo: "Energia de Biomassa Florestal",
  },
  {
    id: 190,
    titulo: "Máquinas e Implementos Agrícolas",
  },
  {
    id: 191,
    titulo: "Engenharia de Água e Solo",
  },
  {
    id: 192,
    titulo: "Engenharia de Processamento de Produtos Agrícolas",
  },
  {
    id: 193,
    titulo: "Construções Rurais e Ambiência",
  },
  {
    id: 194,
    titulo: "Energização Rural",
  },
  {
    id: 195,
    titulo: "Ecologia dos Animais Domésticos e Etologia",
  },
  {
    id: 196,
    titulo: "Genética e Melhoramento dos Animais Domésticos",
  },
  {
    id: 197,
    titulo: "Nutrição e Alimentação Animal",
  },
  {
    id: 198,
    titulo: "Pastagem e Forragicultura",
  },
  {
    id: 199,
    titulo: "Produção Animal",
  },
  {
    id: 200,
    titulo: "Clínica e Cirurgia Animal",
  },
  {
    id: 201,
    titulo: "Medicina Veterinária Preventiva",
  },
  {
    id: 202,
    titulo: "Patologia Animal",
  },
  {
    id: 203,
    titulo: "Reprodução Animal",
  },
  {
    id: 204,
    titulo: "Inspeção de Produtos de Origem Animal",
  },
  {
    id: 205,
    titulo: "Recursos Pesqueiros Marinhos",
  },
  {
    id: 206,
    titulo: "Recursos Pesqueiros de Águas Interiores",
  },
  {
    id: 207,
    titulo: "Aquicultura",
  },
  {
    id: 208,
    titulo: "Engenharia de Pesca",
  },
  {
    id: 209,
    titulo: "Ciência de Alimentos",
  },
  {
    id: 210,
    titulo: "Tecnologia de Alimentos",
  },
  {
    id: 211,
    titulo: "Engenharia de Alimentos",
  },
  {
    id: 212,
    titulo: "Teoria do Direito",
  },
  {
    id: 213,
    titulo: "Direito Público",
  },
  {
    id: 214,
    titulo: "Direito Privado",
  },
  {
    id: 215,
    titulo: "Direitos Especiais",
  },
  {
    id: 216,
    titulo: "Administração de Empresas",
  },
  {
    id: 217,
    titulo: "Administração de Setores Específicos",
  },
  {
    id: 218,
    titulo: "Ciências Contábeis",
  },
  {
    id: 219,
    titulo: "Teoria da Administração Pública",
  },
  {
    id: 220,
    titulo: "Administração Pública do Brasil",
  },
  {
    id: 221,
    titulo: "Administração Pública da Europa",
  },
  {
    id: 222,
    titulo: "Administração Pública da América Latina",
  },
  {
    id: 223,
    titulo: "Administração Pública da América do Norte",
  },
  {
    id: 224,
    titulo: "Administração Pública da Ásia e Oceania",
  },
  {
    id: 225,
    titulo: "Administração Pública da África",
  },
  {
    id: 226,
    titulo: "Orçamento e Finanças",
  },
  {
    id: 227,
    titulo: "Administração Federal",
  },
  {
    id: 228,
    titulo: "Administração Municipal",
  },
  {
    id: 229,
    titulo: "Administração Regional",
  },
  {
    id: 230,
    titulo: "Administração Estadual",
  },
  {
    id: 231,
    titulo: "Desburocratização",
  },
  {
    id: 232,
    titulo: "Reforma Administrativa",
  },
  {
    id: 233,
    titulo: "Governo Eletrônico / Digital",
  },
  {
    id: 234,
    titulo: "Inovação na Gestão Pública",
  },
  {
    id: 235,
    titulo: "Modernização Administrativa",
  },
  {
    id: 236,
    titulo: "Tecnologia da Informação",
  },
  {
    id: 237,
    titulo: "Atendimento ao Público",
  },
  {
    id: 238,
    titulo: "Satisfação do Usuário",
  },
  {
    id: 239,
    titulo: "Código de Conduta",
  },
  {
    id: 240,
    titulo: "Corrupção Administrativa",
  },
  {
    id: 241,
    titulo: "Ética no Setor Público",
  },
  {
    id: 242,
    titulo: "Fiscalização da Moralidade Pública",
  },
  {
    id: 243,
    titulo: "Avaliação de Desempenho (Setor Público)",
  },
  {
    id: 244,
    titulo: "Consórcio Público",
  },
  {
    id: 245,
    titulo: "Contrato de gestão",
  },
  {
    id: 246,
    titulo: "Controle de Gestão",
  },
  {
    id: 247,
    titulo: "Indicador de Desempenho (Setor Público)",
  },
  {
    id: 248,
    titulo: "Produtividade",
  },
  {
    id: 249,
    titulo: "Auditoria",
  },
  {
    id: 250,
    titulo: "Accountability (Prestação Pública de Contas)",
  },
  {
    id: 251,
    titulo: "Controle Social",
  },
  {
    id: 252,
    titulo: "Ouvidoria",
  },
  {
    id: 253,
    titulo: "Concessão de Serviços Públicos",
  },
  {
    id: 254,
    titulo: "Parcerias no Setor Público",
  },
  {
    id: 255,
    titulo: "Parcerias Público-Privadas",
  },
  {
    id: 256,
    titulo: "Técnicas Gerenciais no Setor Público",
  },
  {
    id: 257,
    titulo: "Alta Administração Pública",
  },
  {
    id: 258,
    titulo: "Gestor Público",
  },
  {
    id: 259,
    titulo: "Liderança",
  },
  {
    id: 260,
    titulo: "Função Pública",
  },
  {
    id: 261,
    titulo: "Gestão de Pessoas no Setor Público",
  },
  {
    id: 262,
    titulo: "Relações de Trabalho no Setor Público",
  },
  {
    id: 263,
    titulo: "Capacitação Profissional no Setor Público",
  },
  {
    id: 264,
    titulo: "Compras Governamentais",
  },
  {
    id: 265,
    titulo: "Terceirização",
  },
  {
    id: 266,
    titulo: "Empresa Pública",
  },
  {
    id: 267,
    titulo: "Regulação – Agência Reguladora",
  },
  {
    id: 268,
    titulo: "Cooperação Internacional",
  },
  {
    id: 269,
    titulo: "Terceiro Setor – ONG’s – OSCIP",
  },
  {
    id: 270,
    titulo: "Políticas Públicas e Uso de Evidências",
  },
  {
    id: 271,
    titulo: "Governança e Gestão de Riscos",
  },
  {
    id: 272,
    titulo: "Previdência",
  },
  {
    id: 273,
    titulo: "Estratégia, Projetos e Processos",
  },
  {
    id: 274,
    titulo: "Gestão de Pessoas",
  },
  {
    id: 275,
    titulo: "Governo e Transformação Digital",
  },
  {
    id: 276,
    titulo: "Inovação",
  },
  {
    id: 277,
    titulo: "Técnicas, recursos e estratégias para desenvolvimento de pessoa",
  },
  {
    id: 278,
    titulo: "Transparência, Controle e Participação",
  },
  {
    id: 279,
    titulo: "Teoria Econômica",
  },
  {
    id: 280,
    titulo: "Métodos Quantitativos em Economia",
  },
  {
    id: 281,
    titulo: "Economia Monetária e Fiscal",
  },
  {
    id: 282,
    titulo: "Crescimento, Flutuações e Planejamento Econômico",
  },
  {
    id: 283,
    titulo: "Economia Internacional",
  },
  {
    id: 284,
    titulo: "Economia dos Recursos Humanos",
  },
  {
    id: 285,
    titulo: "Economia Industrial",
  },
  {
    id: 286,
    titulo: "Economia do Bem-Estar Social",
  },
  {
    id: 287,
    titulo: "Economia Regional e Urbana",
  },
  {
    id: 288,
    titulo: "Economias Agrária e dos Recursos Naturais",
  },
  {
    id: 289,
    titulo: "Fundamentos de Arquitetura e Urbanismo",
  },
  {
    id: 290,
    titulo: "Projeto de Arquitetuta e Urbanismo",
  },
  {
    id: 291,
    titulo: "Tecnologia de Arquitetura e Urbanismo",
  },
  {
    id: 292,
    titulo: "Paisagismo",
  },
  {
    id: 293,
    titulo: "Fundamentos do Planejamento Urbano e Regional",
  },
  {
    id: 294,
    titulo: "Métodos e Técnicas do Planejamento Urbano e Regional",
  },
  {
    id: 295,
    titulo: "Serviços Urbanos e Regionais",
  },
  {
    id: 296,
    titulo: "Distribuição Espacial",
  },
  {
    id: 297,
    titulo: "Tendência Populacional",
  },
  {
    id: 298,
    titulo: "Componentes da Dinâmica Demográfica",
  },
  {
    id: 299,
    titulo: "Nupcialidade e Família",
  },
  {
    id: 300,
    titulo: "Demografia Histórica",
  },
  {
    id: 301,
    titulo: "Política Pública e População",
  },
  {
    id: 302,
    titulo: "Fontes de Dados Demográficos",
  },
  {
    id: 303,
    titulo: "Teoria da Informação",
  },
  {
    id: 304,
    titulo: "Biblioteconomia",
  },
  {
    id: 305,
    titulo: "Arquivologia",
  },
  {
    id: 306,
    titulo: "Museologia",
  },
  {
    id: 307,
    titulo: "Teoria da Comunicação",
  },
  {
    id: 308,
    titulo: "Jornalismo e Editoração",
  },
  {
    id: 309,
    titulo: "Rádio e Televisão",
  },
  {
    id: 310,
    titulo: "Relações Públicas e Propaganda",
  },
  {
    id: 311,
    titulo: "Comunicação Visual",
  },
  {
    id: 312,
    titulo: "Fundamentos do Serviço Social",
  },
  {
    id: 313,
    titulo: "Serviço Social Aplicado",
  },
  {
    id: 314,
    titulo: "Economia Doméstica",
  },
  {
    id: 315,
    titulo: "Programação Visual",
  },
  {
    id: 316,
    titulo: "Desenho de Produto",
  },
  {
    id: 317,
    titulo: "História da Filosofia",
  },
  {
    id: 318,
    titulo: "Metafísica",
  },
  {
    id: 319,
    titulo: "Lógica",
  },
  {
    id: 320,
    titulo: "Ética",
  },
  {
    id: 321,
    titulo: "Epistemologia",
  },
  {
    id: 322,
    titulo: "Filosofia Brasileira",
  },
  {
    id: 323,
    titulo: "Fundamentos da Sociologia",
  },
  {
    id: 324,
    titulo: "Sociologia do Conhecimento",
  },
  {
    id: 325,
    titulo: "Sociologia do Desenvolvimento",
  },
  {
    id: 326,
    titulo: "Sociologia Urbana",
  },
  {
    id: 327,
    titulo: "Sociologia Rural",
  },
  {
    id: 328,
    titulo: "Sociologia da Saúde",
  },
  {
    id: 329,
    titulo: "Outras Sociologias Específicas",
  },
  {
    id: 330,
    titulo: "Teoria Antropológica",
  },
  {
    id: 331,
    titulo: "Etnologia Indígena",
  },
  {
    id: 332,
    titulo: "Antropologia Urbana",
  },
  {
    id: 333,
    titulo: "Antropologia Rural",
  },
  {
    id: 334,
    titulo: "Antropologia das Populações Afro-Brasileiras",
  },
  {
    id: 335,
    titulo: "Teoria e Método em Arqueologia",
  },
  {
    id: 336,
    titulo: "Arqueologia Pré-Histórica",
  },
  {
    id: 337,
    titulo: "Arqueologia Histórica",
  },
  {
    id: 338,
    titulo: "Teoria e Filosofia da História",
  },
  {
    id: 339,
    titulo: "História Antiga e Medieval",
  },
  {
    id: 340,
    titulo: "História Moderna e Contemporânea",
  },
  {
    id: 341,
    titulo: "História da América",
  },
  {
    id: 342,
    titulo: "História do Brasi",
  },
  {
    id: 343,
    titulo: "História das Ciências",
  },
  {
    id: 344,
    titulo: "Geografia Humana",
  },
  {
    id: 345,
    titulo: "Geografia Regional",
  },
  {
    id: 346,
    titulo: "Fundamentos e Medidas da Psicologia",
  },
  {
    id: 347,
    titulo: "Psicologia Experimental",
  },
  {
    id: 348,
    titulo: "Psicologia Fisiológica",
  },
  {
    id: 349,
    titulo: "Psicologia Comparativa",
  },
  {
    id: 350,
    titulo: "Psicologia Social",
  },
  {
    id: 351,
    titulo: "Psicologia Cognitiva",
  },
  {
    id: 352,
    titulo: "Psicologia do Desenvolvimento Humano",
  },
  {
    id: 353,
    titulo: "Psicologia do Ensino e da Aprendizagem",
  },
  {
    id: 354,
    titulo: "Psicologia do Trabalho e Organizacional",
  },
  {
    id: 355,
    titulo: "Tratamento e Prevenção Psicológica",
  },
  {
    id: 356,
    titulo: "Fundamentos da Educação",
  },
  {
    id: 357,
    titulo: "Administração Educacional",
  },
  {
    id: 358,
    titulo: "Planejamento e Avaliação Educacional",
  },
  {
    id: 359,
    titulo: "Ensino-Aprendizagem",
  },
  {
    id: 360,
    titulo: "Currículo",
  },
  {
    id: 361,
    titulo: "Orientação e Aconselhamento",
  },
  {
    id: 362,
    titulo: "Tópicos Específicos de Educação",
  },
  {
    id: 363,
    titulo: "Teoria Política",
  },
  {
    id: 364,
    titulo: "Estado e Governo",
  },
  {
    id: 365,
    titulo: "Comportamento Político",
  },
  {
    id: 366,
    titulo: "Políticas Públicas",
  },
  {
    id: 367,
    titulo: "Política Internacional",
  },
  {
    id: 368,
    titulo: "História da Teologia",
  },
  {
    id: 369,
    titulo: "Teologia Moral",
  },
  {
    id: 370,
    titulo: "Teologia Sistemática",
  },
  {
    id: 371,
    titulo: "Teologia Pastoral",
  },
  {
    id: 372,
    titulo: "Teoria e Análise Linguística",
  },
  {
    id: 373,
    titulo: "Fisiologia da Linguagem",
  },
  {
    id: 374,
    titulo: "Linguística Histórica",
  },
  {
    id: 375,
    titulo: "Sociolinguística e Dialetologia",
  },
  {
    id: 376,
    titulo: "Psicolinguística",
  },
  {
    id: 377,
    titulo: "Linguística Aplicada",
  },
  {
    id: 378,
    titulo: "Língua Portuguesa",
  },
  {
    id: 379,
    titulo: "Línguas Estrangeiras Modernas",
  },
  {
    id: 380,
    titulo: "Línguas Clássicas",
  },
  {
    id: 381,
    titulo: "Línguas Indígenas",
  },
  {
    id: 382,
    titulo: "Teoria Literária",
  },
  {
    id: 383,
    titulo: "Literatura Brasileira",
  },
  {
    id: 384,
    titulo: "Outras Literaturas Vernáculas",
  },
  {
    id: 385,
    titulo: "Literaturas Estrangeiras Modernas",
  },
  {
    id: 386,
    titulo: "Literaturas Clássicas",
  },
  {
    id: 387,
    titulo: "Literatura Comparada",
  },
  {
    id: 388,
    titulo: "Fundamentos e Crítica das Artes",
  },
  {
    id: 389,
    titulo: "Artes Plásticas",
  },
  {
    id: 390,
    titulo: "Música",
  },
  {
    id: 391,
    titulo: "Dança",
  },
  {
    id: 392,
    titulo: "Teatro",
  },
  {
    id: 393,
    titulo: "Ópera",
  },
  {
    id: 394,
    titulo: "Fotografia",
  },
  {
    id: 395,
    titulo: "Cinema",
  },
  {
    id: 396,
    titulo: "Artes do Vídeo",
  },
  {
    id: 397,
    titulo: "Educação Artística",
  },
];
