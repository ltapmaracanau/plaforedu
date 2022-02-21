import { action, unstable_effectOn } from "easy-peasy"

import fundoCurso1 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 01.png'
import fundoCategoria1 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 01.png'
import fundoCompetencia1 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 01.png'

import fundoCurso2 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 02.png'
import fundoCategoria2 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 02.png'
import fundoCompetencia2 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 02.png'

import fundoCurso3 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 03.png'
import fundoCategoria3 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 03.png'
import fundoCompetencia3 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 03.png'

import fundoCurso4 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 04.png'
import fundoCategoria4 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 04.png'
import fundoCompetencia4 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 04.png'

import fundoCurso5 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 05.png'
import fundoCategoria5 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 05.png'
import fundoCompetencia5 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 05.png'

import fundoCurso6 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 06.png'
import fundoCategoria6 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 06.png'
import fundoCompetencia6 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 06.png'

import fundoCurso7 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 07.png'
import fundoCategoria7 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 07.png'
import fundoCompetencia7 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 07.png'

import fundoCurso8 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 08.png'
import fundoCategoria8 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 08.png'
import fundoCompetencia8 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 08.png'

import fundoCurso9 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 09.png'
import fundoCategoria9 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 09.png'
import fundoCompetencia9 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 09.png'

import fundoCurso10 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 10.png'
import fundoCategoria10 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 10.png'
import fundoCompetencia10 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 10.png'

import fundoCurso11 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 11.png'
import fundoCategoria11 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 11.png'
import fundoCompetencia11 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 11.png'

import fundoCurso12 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 12.png'
import fundoCategoria12 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 12.png'
import fundoCompetencia12 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 12.png'

const fundosCategoria = {
    categoria: {
        0: fundoCategoria1,
        1: fundoCategoria1,
        2: fundoCategoria2,
        3: fundoCategoria3,
        4: fundoCategoria4,
        5: fundoCategoria5,
        6: fundoCategoria6,
        7: fundoCategoria7,
        8: fundoCategoria8,
        9: fundoCategoria9,
        10: fundoCategoria10,
        11: fundoCategoria11,
        12: fundoCategoria12,
    },
    curso: {
        0: fundoCurso1,
        1: fundoCurso1,
        2: fundoCurso2,
        3: fundoCurso3,
        4: fundoCurso4,
        5: fundoCurso5,
        6: fundoCurso6,
        7: fundoCurso7,
        8: fundoCurso8,
        9: fundoCurso9,
        10: fundoCurso10,
        11: fundoCurso11,
        12: fundoCurso12,
    },
    competencia: {
        0: fundoCompetencia1,
        1: fundoCompetencia1,
        2: fundoCompetencia2,
        3: fundoCompetencia3,
        4: fundoCompetencia4,
        5: fundoCompetencia5,
        6: fundoCompetencia6,
        7: fundoCompetencia7,
        8: fundoCompetencia8,
        9: fundoCompetencia9,
        10: fundoCompetencia10,
        11: fundoCompetencia11,
        12: fundoCompetencia12,
    },
}

const fundosItinerario = {
    categoria: {
        0: fundoCategoria1,
        1: fundoCategoria1,
        2: fundoCategoria2,
        3: fundoCategoria3,
        4: fundoCategoria4,
        5: fundoCategoria5,
    },
    curso: {
        0: fundoCurso1,
        1: fundoCurso1,
        2: fundoCurso2,
        3: fundoCurso3,
        4: fundoCurso4,
        5: fundoCurso5,
    },
    competencia: {
        0: fundoCompetencia1,
        1: fundoCompetencia1,
        2: fundoCompetencia2,
        3: fundoCompetencia3,
        4: fundoCompetencia4,
        5: fundoCompetencia5,
    },
}

const colorsCategorias = {
    0:  '#ea190f',
    1:  '#ea190f',
    2:  '#f98506',
    3:  '#ffbe00',
    4:  '#9dc63d',
    5:  '#00ba00',
    6:  '#009688',
    7:  '#1c67b0',
    8:  '#5b0fa0',
    9:  '#a52099',
    10: '#f154ca',
    11: '#997ff7',
    12: '#1db7ed',
}

const colorsItinerarios = {
    0:  '#ea190f',
    1:  '#ea190f',
    2:  '#f98506',
    3:  '#ffbe00',
    4:  '#9dc63d',
    5:  '#00ba00',
}

const cursosDefault =  [
    {
        id: 1,
        itinerario: 5,
        title: 'Legislação para aposentadoria',
        descricao: 'Neste MOOC serão apresetados as temáticas relacionadas aos aspectos gerais da legislação, os tipos de aposentadoria e os requisitos para se aposentar',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'http://www.ifsul.edu.br/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 2,
        itinerario: 5,
        title: 'Planejamento Financeiro',
        descricao: 'Neste MOOC serão apresentadas as temáticas relacionadas ao planejamento e organização dos gastos pessoais; planejamento dos investimentos pessoais; alternativas de investimentos no mercado financeiro e; complementando a renda',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'http://www.ifsul.edu.br/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 3,
        itinerario: 5,
        title: 'Aspectos socioemocionais',
        descricao: 'Neste MOOC serãoapresentadas as temáticas relacionadas ao conhecimento a si mesmo, relações pessoais e familares bem como os aspectos da aposentadoria como o começo de uma nova etapa',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'http://www.ifsul.edu.br/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 4,
        itinerario: 5,
        title: 'Empreendedorismo',
        descricao: 'Neste MOOC serão apresentadas as temáticas sobre a opção do empreendedorismo e motivos para empreender na aposentadoria',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'http://www.ifsul.edu.br/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 5,
        itinerario: 5,
        title: 'Inserção Digital',
        descricao: 'Neste MOOC serão apresentadas as temáticas relacionadas aos principais aspecros da Informática básica e noções básica de uso da Internet',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'http://www.ifsul.edu.br/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 6,
        itinerario: 5,
        title: 'Promoção a saúde',
        descricao: 'Neste MOOC serão apresentadas as temáticas decomo enfrentar a aposentadoria de maneira saudável, ter uma alimentação saudável e os exercícios físico e qualidade de vida para aposentadoria',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'http://www.ifsul.edu.br/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 7,
        itinerario: 5,
        title: 'Projeto de vida ',
        descricao: 'Neste MOOC serão apresentadas as temáticasde transição para a aposentadoria; visões do futuro e novos hábitos; o tempo livre e a liberdade de escolha; perseguir sempre a felicidade',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'http://www.ifsul.edu.br/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 8,
        itinerario: 3,
        title: 'Software de Apresentação',
        descricao: 'O curso irá introduzir os conceitos de softwares de apresentação, assim como mostrar exemplos de softwares que podem ser utilizados para criação de apresentações. Serão mostrados recursos básicos e avançados no software PowerPoint para que se possa criar uma apresentação usando os recursos desse software. Além disso, será explorado o uso do software de apresentação online Prezi, que se constitui em uma ótima opção para se desenvolver apresentações dinâmicas e diferentes.',
        cargaHoraria: 40,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'https://mundi.ifsul.edu.br/portal/software-de-apresentacao.php',
        obs: '',
        filter: {
            competencias: [27],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 9,
        itinerario: 3,
        title: 'Educação Especial e Inclusão ',
        descricao: 'Este curso apresenta as principais leis sobre inclusão de alunos com deficiência no ensino regular. Aponta a definição de integração, inclusão, síndrome, doenças, distúrbios e transtornos. Demonstra o conceito de deficiência intelectual, síndrome de Down, autismo, surdez, cegueira, deficiência física ou motora e a paralisia cerebral. Considera escola para todos, princípios da cultura inclusiva, formação do professor, sala de aula inclusiva, família na educação escolar dos alunos com deficiência e educação inclusiva na educação infantil.',
        cargaHoraria: 40,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'https://mundi.ifsul.edu.br/portal/educacao-especial-e-inclusao.php',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 10,
        itinerario: 3,
        title: 'Educação Inclusiva: Introdução ao Transtorno do Espectro Autista (TEA)',
        descricao: 'Conhecer aspectos introdutórios sobre o Transtorno do espectro autista (TEA), assim como um pouco da sua história. Pontuar conceitos para a inclusão de estudantes com TEA e o papel do professor nesse processo. Identificar alguns dos materiais didáticos e metodologias de ensino e mais conhecidas para estudantes com TEA.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://mais.ifmg.edu.br/enrol/index.php?id=36',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 11,
        itinerario: 3,
        title: 'Ensino e Aprendizagem: Teorias, Métodos e Avaliação ',
        descricao: 'Introdução sobre aspectos inerentes ao Ensino e Aprendizagem; Teorias de Ensino/Aprendizagem; Estratégias e Métodos de Ensino; Metodologias Ativas de Ensino; Tecnologias na Educação; Avaliação nos processos de Ensino/Aprendizagem.',
        cargaHoraria: 30,
        instCert: 2,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://mais.ifmg.edu.br/login/index.php',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 12,
        itinerario: 3,
        title: 'Boas Práticas de Segurança do Trabalho em Laboratórios',
        descricao: 'Introdução a Segurança do Trabalho: Conceitos básicos de Segurança do Trabalho. Equipamentos de Proteção Coletiva e Equipamentos de Proteção Individual e Coletiva. Produtos Químicos. Equipamentos, vidrarias e  utensílios de laboratório. Mapa de Riscos. Manual de Segurança para Laboratórios. Situações de Emergência.',
        cargaHoraria: 40,
        instCert: 2,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://mais.ifmg.edu.br/enrol/index.php?id=17',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 13,
        itinerario: 3,
        title: 'Introdução a Gestão de Projetos',
        descricao: 'Este curso foi feito com o objetivo de apresentar os conceitos fundamentais referentes ao tema gestão de projetos, com destaque para a definição e caracterização do termo “projeto” e da apresentação do ciclo de vida dos projetos e das dez áreas do conhecimento, definidas pelo Project Management Institute (PMI), instituição internacional que se dedica ao estudo e à disseminação dos melhores métodos e técnicas de gerenciamento de projetos.',
        cargaHoraria: 30,
        instCert: 2,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://mais.ifmg.edu.br/login/index.php',
        obs: '',
        filter: {
            competencias: [5],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 14,
        itinerario: 3,
        title: 'Ergonomia Aplicada aos Postos de Trabalho',
        descricao: 'Introdução à Ergonomia: breve histórico; origem e evolução da ergonomia; conceitos, definições e objetivos da ergonomia; tipos de ergonomia; Norma Regulamentadora nº 17 do MTE: conhecer os parâmetros legais que permitem a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, de modo a proporcionar um máximo de conforto, segurança e desempenho eficiente. Análise Ergonômica do Trabalho (AET): conceito de AET, aprender as definições básicas de demanda, tarefa e atividade nos postos de trabalho para identificar inadequações e fatores de risco existentes. Ergonomia nos Postos de trabalho: Conceitos básicos da Ergonomia aplicado aos postos de trabalho',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://mais.ifmg.edu.br/login/index.php',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 15,
        itinerario: 3,
        title: 'Cultura Surda',
        descricao: 'História da comunidade surda, cultura surda, identidades surdas e a língua de sinais.',
        cargaHoraria: 20,
        instCert: 3,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://moodle.ifrs.edu.br/course/search.php?q=Cultura+Surda+&areaids=core_course-course',
        obs: '',
        filter: {
            competencias: [9],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 16,
        itinerario: 3,
        title: 'Aprendizagem Significativa',
        descricao: 'Conceitos iniciais sobre Aprendizagem Significativa, Abordagens Teóricas e Tipos de Aprendizagem, Ensino Significativo.',
        cargaHoraria: 30,
        instCert: 3,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://moodle.ifrs.edu.br/course/search.php?q=Aprendizagem+Significativa&areaids=core_course-course',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 17,
        itinerario: 3,
        title: 'Qualidade de Cursos em Educação a Distância',
        descricao: 'Não basta ter conteúdo, tem que conversar; Organizando o Curso; Produzindo o Conteúdo do Curso; Equívocos Gerais',
        cargaHoraria: 30,
        instCert: 3,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://moodle.ifrs.edu.br/course/search.php?q=Aprendizagem+Significativa&areaids=core_course-course',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 18,
        itinerario: 3,
        title: 'Didática',
        descricao: 'O que é Didática?; Perfil do Professor; Planejamento;  Técnicas e Métodos; Avaliação',
        cargaHoraria: 60,
        instCert: 3,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://moodle.ifrs.edu.br/course/search.php?q=Did%C3%A1tica+&areaids=core_course-course',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 19,
        itinerario: 3,
        title: 'Pesquisa em Sala de Aula na Educação Básica',
        descricao: 'Por que pesquisa na educação básica? Projeto de Pesquisa; Problema de pesquisa, objetivos e hipóteses; Abordagem quantitativa; Abordagem qualitativa; Elaboração de perguntas; Análise e apresentação dos dados',
        cargaHoraria: 40,
        instCert: 3,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://moodle.ifrs.edu.br/course/search.php?q=Pesquisa+em+Sala+de+Aula+na+Educa%C3%A7%C3%A3o+B%C3%A1sica+&areaids=core_course-course',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 20,
        itinerario: 3,
        title: 'Planejamento Docente',
        descricao: 'O curso tem por objetivo compreender e identificar as possibilidades pedagógicas do espaço pedagógico voltado aos processos formativos formais ou informais, a fim de subsidiar o planejamento de ações que desenvolvam respostas a problemas específicos, definindo os fins e os meios que direcionam para soluções.',
        cargaHoraria: 30,
        instCert: 2,
        possuiAcessibilidade: 'Não Verificado',
        link: 'https://moodle.ifrj.edu.br/login/index.php',
        obs: '',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 21,
        itinerario: 1,
        title: 'APRESENTAÇÃO DA SETEC/MEC',
        descricao: 'Apresentação da Setec/MEC (Secretário, Diretores e Coordenadores-Gerais): Boas-vindas da Setec; principais programas e ações desenvolvidos pela Secretaria.',
        cargaHoraria: 40,
        instCert: 4,
        possuiAcessibilidade: 'Não',
        link: 'Trilha a ser desenvolvida pelo MEC e instituições da REDE',
        obs: ' ',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 22,
        itinerario: 1,
        title: 'Iniciação ao Serviço Público nos Institutos Federais ',
        descricao: 'Conheça os Institutos Federais e os conceitos básicos que todo servidor público precisa saber.',
        cargaHoraria: 80,
        instCert: 5,
        possuiAcessibilidade: 'Não',
        link: 'https://moodle.ifrs.edu.br/course/view.php?id=4393ex',
        obs: ' ',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 23,
        itinerario: 1,
        title: 'Introdução à modalidade EaD',
        descricao: 'Ementa: Introdução à Educação a Distância. Definição de Ambiente Virtual de Ensino e Aprendizagem de conceitos e configurações importantes do Moodle. Conhecer as principais características da sala de aula virtual e se familiarizar com as principais atividades oferecidas pelo Moodle. Conhecer os principais recursos de feedback e como ter acesso às suas notas.',
        cargaHoraria: 20,
        instCert: 6,
        possuiAcessibilidade: 'Não',
        link: 'https://virtual.ifg.edu.br/local/staticpage/view.php?page=cursos%0d',
        obs: ' ',
        filter: {
            competencias: [27],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 24,
        itinerario: 1,
        title: 'Desmistificando o SIGAA: Orientações Básicas',
        descricao: 'O curso Desmistificando do SIGAA: Orientações Básicas disponibiliza tutoriais em vídeo que auxiliam no acesso ao Sistema Integrado de Gestão de Atividades Acadêmicas . Esse sistema possibilita aos docentes acessar a Turma Virtual, plataforma on-line que será utilizada para disponibilizar os cursos técnicos e de graduação aprovados como Atividades Pedagógicas Não Presenciais (ANPNs).',
        cargaHoraria: 20,
        instCert: 1,
        possuiAcessibilidade: 'Não',
        link: 'https://moodle.ifrj.edu.br/enrol/index.php?id=393',
        obs: 'Apenas Servidores do IFRJ poderão se inscrever, verificar abertura para todos os usuarios do Plafor. ',
        filter: {
            competencias: [27],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 25,
        itinerario: 1,
        title: 'Trabalho Remoto e Teletrabalho',
        descricao: 'O trabalho remoto já é uma realidade, pensando nisso, a Enap e a Endeavor prepararam este curso para apresentar diversas estratégias e dicas que facilitam o seu dia a dia, a organização do trabalho individual e do trabalho em equipe. Quer saber mais? Você pode ser inscrever neste curso gratuito e aberto na EVG, assistir o vídeo do GNPapo promovido pelo laboratório de inovação da Enap, disponível com acesso livre em "Conteúdo Relacionado" ou, ainda, acessar a página da Campanha #contecomigo #suavizeacurva que é uma iniciativa da Secretaria de Gestão e Desempenho de Pessoal (SGP).',
        cargaHoraria: 10,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/293/',
        obs: ' ',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 26,
        itinerario: 1,
        title: 'Teletrabalho e Educação a Distância ',
        descricao: 'O desafio de transformação da realidade de trabalho está fazendo com que pessoas e organizações adaptem seus processos de trabalho. Pensando nisso, a Enap traz mais uma oportunidade de capacitação com este curso desenvolvido pelo CEPERJ, instituição parceria da EV.G.',
        cargaHoraria: 8,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/301',
        obs: ' ',
        filter: {
            competencias: [27],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 27,
        itinerario: 1,
        title: 'Uso do SEI',
        descricao: 'Este curso apresenta as principais funcionalidades do Sistema Eletrônico de Informações (SEI), utilizado na Administração Pública federal para aprimorar a gestão documental e facilitar o acesso de servidores e cidadãos às informações institucionais, propiciando celeridade, segurança e economicidade. O objetivo do curso é capacitar as pessoas que atuam na gestão de documentos para utilizar o SEI e usufruir dos seus benefícios no dia a dia de trabalho.',
        cargaHoraria: 20,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/74/',
        obs: ' ',
        filter: {
            competencias: [27],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 28,
        itinerario: 1,
        title: 'Sistemas governamentais- Sistema de Concessão de Diárias e Passagens - SCDP',
        descricao: 'Os cursos busca capacitar os profissionais que atuam na administração pública federal, direta, autarquias, fundações e profissionais da administração pública federal indireta (empresa pública) a efetuarem os procedimentos relacionados ao deslocamento de pessoal no Sistema de Concessão de Diárias e Passagens (SCDP).',
        cargaHoraria: 25,
        instCert: 8,
        possuiAcessibilidade: 'Não',
        link: 'https://cursos.poca.ufscar.br/course/search.php?search=SCDP',
        obs: 'Fechar acordo com a UFSCAR ',
        filter: {
            competencias: [27],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 29,
        itinerario: 1,
        title: 'Ética e Serviço Público',
        descricao: 'Neste curso, serão apresentados os principais fundamentos de ética e suas relações com os desafios enfrentados pelo setor público. A conduta das pessoas interfere no funcionamento das organizações e traz impactos para a sociedade. Por essa razão, o desenvolvimento da consciência ética é fundamental para garantir o respeito ao interesse público, à cidadania, ao estado de direito e à democracia. A proposta central do curso é capacitar as pessoas para que tenham conduta ética ao oferecerem e utilizarem serviços públicos.',
        cargaHoraria: 20,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/4',
        obs: ' ',
        filter: {
            competencias: [9],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 30,
        itinerario: 1,
        title: 'Ética e Administração Pública',
        descricao: 'Objetivo: Conceituar ética e cidadania e propor uma reflexão sobre a importância dos temas para o indivíduo, o cidadão e a Administração Pública.',
        cargaHoraria: 40,
        instCert: 9,
        possuiAcessibilidade: 'Não',
        link: 'https://saberes.senado.leg.br/course/index.php?categoryid=260',
        obs: 'Solicitar a escola do senado a oferta por tempo indeterminado ao curso ',
        filter: {
            competencias: [9],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 31,
        itinerario: 1,
        title: 'Assédio Moral e Sexual no Trabalho',
        descricao: 'Objetivo: Debater abertamente sobre Assédio Moral e Sexual no Trabalho visa melhorar as condições de trabalho e as relações entra os trabalhadores, melhorando, assim a qualidade de vida dos indivíduos e a sua produtividade. Tornar o ambiente de trabalho livre de qualquer prática ofensiva é a meta principal.',
        cargaHoraria: 6,
        instCert: 9,
        possuiAcessibilidade: 'Não',
        link: 'https://saberes.senado.leg.br/',
        obs: 'Solicitar a escola do senado a oferta por tempo indeterminado ao curso ',
        filter: {
            competencias: [9],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 32,
        itinerario: 1,
        title: 'Cidadania e Direitos Humanos',
        descricao: 'O curso busca contribuir para uma formação básica em direitos humanos e cidadania, proporcionando treinamento e ambientação em temas introdutórios de direitos humanos e convergindo para conselhos de políticas públicas. Os conceitos básicos desse campo são discutidos com referências constantes às instituições participativas e às interfaces socioestatais. Por ser um curso introdutório, não há pretensão de esgotar debates ou promover visão abrangente sobre todas as variantes da literatura na área.',
        cargaHoraria: 30,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/134',
        obs: ' ',
        filter: {
            competencias: [9],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 33,
        itinerario: 1,
        title: 'Noções da Lei nº 8.112/90 e alterações (direitos, deveres e benefícios)',
        descricao: 'A Lei nº 8.112/90, conhecida como Regime Jurídico Único dos servidores da União, das autarquias e das fundações públicas federais, sofreu diversas alterações com o passar dos anos. Busca-se, com este curso, instruir os interessados quanto aos direitos e deveres dos servidores públicos federais, dirimir possíveis dúvidas e apresentar algumas peculiaridades sobre os temas abordados na legislação.',
        cargaHoraria: 40,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/405/',
        obs: ' ',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 34,
        itinerario: 1,
        title: 'Plano de Carreira dos Cargos Técnico-Administrativo em Educação - PCCTAE',
        descricao: 'Este curso pretende apresentar o Plano de Carreira dos Técnicos-Administrativos em Educação, explicitando os níveis de classificação, padrão de vencimento, cargo, nível de capacitação, ambiente organizacional, os tipos de progressão e ações de desenvolvimento vinculadas ao PCCTAE.',
        cargaHoraria: 20,
        instCert: 10,
        possuiAcessibilidade: 'Não',
        link: 'https://cursoslivres.unifap.br/course/plano-de-carreira-dos-cargos-tecnico-administrativo-em-educacao-pcctae/intro',
        obs: 'O curso atende parcialmente, o módulo 3 é muito específico para a Universidade Federal do Amapá ',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 35,
        itinerario: 1,
        title: 'PROCESSO ADMINISTRATIVO DISCIPLINAR NA PRÁTICA',
        descricao: 'Este curso pretende apresentar o Plano de Carreira dos Técnicos-Administrativos em Educação, explicitando os níveis de classificação, padrão de vencimento, cargo, nível de capacitação, ambiente organizacional, os tipos de progressão e ações de desenvolvimento vinculadas ao PCCTAE.',
        cargaHoraria: 20,
        instCert: 10,
        possuiAcessibilidade: 'Não',
        link: 'https://cursoslivres.unifap.br/course/processo-administrativo-disciplinar-na-pratica/intro',
        obs: ' ',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 36,
        itinerario: 1,
        title: 'Introdução à Libras',
        descricao: 'Este curso busca proporcionar ao estudante um conhecimento introdutório acerca das Libras (Língua Brasileira de Sinais) e dos aspectos culturais da concepção social da surdez, trazendo conceitos gerais sobre a comunidade surda, o uso da língua de sinais, bem como contextualização geral do funcionamento gramatical de uma língua visuo-gestual como é a Libras.',
        cargaHoraria: 30,
        instCert: 8,
        possuiAcessibilidade: 'Não',
        link: 'https://cursos.poca.ufscar.br/login/index.php',
        obs: ' ',
        filter: {
            competencias: [9],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 37,
        itinerario: 1,
        title: 'INTRODUÇÃO AO ORÇAMENTO PÚBLICO, LICITAÇÕES E FINANÇAS PÚBLICAS',
        descricao: 'Nesse módulo você conhecerá os conceitos básicos de orçamento, licitações e contratos aplicados à realidade do serviço público. O módulo utiliza os seguintes materiais "Noções de Contabilidade Pública" de Carlos Alberto de Ávila, Ciro Bächtold, e Sérgio de Jesus Vieira; "Licitações" de Luciane Schulz Fonseca; "Contratos e Convênios" de Luciane Schulz Fonseca; e "Prestação de Contas" de Heloísa Caldas Ferreira; todos produzidos para a Rede e-Tec Brasil e disponível no Proedu.',
        cargaHoraria: 40,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/116',
        obs: ' ',
        filter: {
            competencias: [4],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 38,
        itinerario: 1,
        title: 'Gestão Pública na Qualidade do atendimento ao cidadão',
        descricao: 'Este curso apresenta a contextualização e os principais modelos da avaliação de qualidade de serviços que podem contribuir para a melhoria da gestão dos serviços públicos, sejam eles presenciais ou digitais. O conteúdo ainda aborda alguns dos instrumentos brasileiros de avaliação aplicados aos serviços públicos.',
        cargaHoraria: 20,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/368/',
        obs: ' ',
        filter: {
            competencias: [1],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 39,
        itinerario: 1,
        title: 'Princípios da Lei de Responsabilidade Fiscal',
        descricao: 'Os principais pontos da Lei de Responsabilidade Fiscal (LRF) são tratados neste curso com a finalidade de esclarecer aos participantes sobre a aplicabilidade, os fundamentos e os instrumentos que colaboram para a efetividade dessa lei. Além disso, são apresentadas questões importantes trazidas pela Emenda Constitucional n.º 95/2016, conhecida como Novo Regime Fiscal (NRF).',
        cargaHoraria: 30,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/341/',
        obs: ' ',
        filter: {
            competencias: [4],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 40,
        itinerario: 1,
        title: 'Elaboração de Indicadores de Desempenho Institucional',
        descricao: 'O curso integra o Programa de Desenvolvimento de Gerentes Operacionais (PDGO) e tem como objetivo capacitar os servidores públicos para estruturar sistemas de medição do desempenho institucional, dos pontos de vista estratégico e gerencial.',
        cargaHoraria: 25,
        instCert: 7,
        possuiAcessibilidade: 'Não',
        link: 'https://www.escolavirtual.gov.br/curso/604',
        obs: ' ',
        filter: {
            competencias: [2],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 41,
        itinerario: 1,
        title: 'Educação Especial e Inclusão',
        descricao: 'Este curso apresenta as principais leis sobre inclusão de alunos com deficiência no ensino regular. Aponta a definição de integração, inclusão, síndrome, doenças, distúrbios e transtornos. Demonstra o conceito de deficiência intelectual, síndrome de Down, autismo, surdez, cegueira, deficiência física ou motora e a paralisia cerebral. Considera escola para todos, princípios da cultura inclusiva, formação do professor, sala de aula inclusiva, família na educação escolar dos alunos com deficiência e educação inclusiva na educação infantil.',
        cargaHoraria: 40,
        instCert: 3,
        possuiAcessibilidade: 'Não',
        link: 'https://mundi.ifsul.edu.br/portal/educacao-especial-e-inclusao.php',
        obs: ' ',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 42,
        itinerario: 1,
        title: 'Educação Especial: histórico, políticas e práticas',
        descricao: 'O curso busca proporcionar um conhecimento introdutório acerca dos aspectos historicos, políticos e práticos da Educação Especial. Do mesmo modo, tem a intenção de desconstruir alguns aspectos relacionados a preconceitos prévios a pessoas com deficiências, transtorno do espectro do autismo, altas habilidades/ superdotação para tentar reconhecer as suas diferenças e suas potencialidades.',
        cargaHoraria: 30,
        instCert: 11,
        possuiAcessibilidade: 'parcial',
        link: 'https://cursos.poca.ufscar.br/login/index.php',
        obs: ' ',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 43,
        itinerario: 1,
        title: 'PRINCÍPIOS DO ATENDIMENTO EDUCACIONAL ESPECIALIZADO (AEE) NA EDUCAÇÃO BÁSICA',
        descricao: 'O objetivo deste curso é capacitar o público e apresentar importantes informações sobre o atendimento educacional especializado, ajudar a garantir e a divulgar direitos, contribuir com o processo de inclusão.',
        cargaHoraria: 30,
        instCert: 2,
        possuiAcessibilidade: 'Não',
        link: 'https://mais.ifmg.edu.br/login/index.php',
        obs: ' ',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 44,
        itinerario: 2,
        title: 'Introdução à Lei Brasileira de Proteção de Dados Pessoais',
        descricao: 'O curso apresenta um panorama sobre a nova legislação brasileira de proteção de dados pessoais (Lei 13.709/18), compreendendo os temas mais importantes para a sua implementação, como: fundamentos e campo de aplicação, princípios e direitos do titular, responsabilidades dos agentes, aspectos internacionais, segurança e a Autoridade Nacional de Proteção de Dados, entre outros. O objetivo do curso é capacitar as pessoas para entenderem, de forma rápida e acessível, o funcionamento e diretrizes básicas expostas na nova lei geral de proteção de dados do Brasil.',
        cargaHoraria: 10,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 45,
        itinerario: 2,
        title: 'Introdução ao Sistema Sigepe - AFD',
        descricao: 'Apresenta conceitos e diretrizes relativas ao Assentamento Funcional Digital e o fluxo operacional de manutenção do Sistema. Esse curso apresenta noções básicas de gestão de documentação: conceitos, normativos legais, tratamento documental, entre outros. É voltado para a capacitação de servidores das Unidades de Recursos Humanos (UPAGs) que são os responsáveis pela execução das atividades diárias relacionadas a documentação dos servidores lotados nos órgãos.',
        cargaHoraria: 10,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 46,
        itinerario: 2,
        title: 'Elaboração de Indicadores de Desempenho Institucional',
        descricao: 'O curso integra o Programa de Desenvolvimento de Gerentes Operacionais (PDGO) e tem como objetivo capacitar os servidores públicos para estruturar sistemas de medição do desempenho institucional, dos pontos de vista estratégico e gerencial.',
        cargaHoraria: 25,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 47,
        itinerario: 2,
        title: 'Redação Oficial: Tópicos Essenciais',
        descricao: 'Este curso apresenta reflexão sobre a arte de escrever bem, enfatiza a leitura e a escrita, regras básicas da gramática, tipologia e planejamento textual. Traz os conceitos de redação oficial contidos no Manual de Redação oficial da Presidência da República e boas práticas de redação que servem para qualquer gênero textual. O objetivo do curso é capacitar os agentes públicos da administração pública federal.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 48,
        itinerario: 2,
        title: 'Gestão de Conflitos e Negociação',
        descricao: 'Resolver diferenças e divergências, e tomar decisões de forma colaborativa são formas efetivas de preservar e ampliar os objetivos a serem alcançados nas organizações. A temática é relevante uma vez que o desenvolvimento das competências de resolução de conflitos e de negociação tem se mostrado fundamental para o adequado desempenho e atuação de gestores e servidores em suas rotinas de trabalho.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 49,
        itinerario: 2,
        title: 'Ética e Serviço Público',
        descricao: 'Neste curso, serão apresentados os principais fundamentos de ética e suas relações com os desafios enfrentados pelo setor público. A conduta das pessoas interfere no funcionamento das organizações e traz impactos para a sociedade. Por essa razão, o desenvolvimento da consciência ética é fundamental para garantir o respeito ao interesse público, à cidadania, ao estado de direito e à democracia. A proposta central do curso é capacitar as pessoas para que tenham conduta ética ao oferecerem e utilizarem serviços públicos.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 50,
        itinerario: 2,
        title: 'Administrador de Organizações Civis: Direitos Humanos e Justiça',
        descricao: 'Qualificar pessoas para agirem na defesa dos valores e princípios gerais dos direitos humanos, objetivando a justiça, a ética, a moral, a equidade, a igualdade e a liberdade.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 51,
        itinerario: 2,
        title: 'Introdução à Libras',
        descricao: 'Aprenda a utilizar a Língua Brasileira de Sinais (Libras) e garanta o atendimento e o tratamento adequado às pessoas com deficiência auditiva. A Lei nº 10.436/2002 legitima a Libras como idioma advindo das Comunidades Surdas Brasileiras e obriga o poder público em geral a adotar formas institucionalizadas de apoiar o uso e a difusão dessa língua como meio de comunicação.',
        cargaHoraria: 60,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 52,
        itinerario: 2,
        title: 'Políticas étnico-raciais: conceitos e métodos na superação do racismo e desigualdades',
        descricao: 'O curso foi desenvolvido em 2021 pela Enap em parceria com o Ministério da Mulher, da Família e dos Direitos Humanos (MMFDH) visando apresentar histórico e atuais políticas étnico-raciais, contemplando conceitos e métodos que auxiliam na superação do racismo e desigualdades raciais.',
        cargaHoraria: 30,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 53,
        itinerario: 2,
        title: 'Educação Inclusiva: Introdução ao Transtorno do Espectro Autista (TEA)',
        descricao: 'Conhecer aspectos introdutórios sobre o Transtorno do espectro autista (TEA), assim como um pouco da sua história. Pontuar conceitos para a inclusão de estudantes com TEA e o papel do professor nesse processo. Identificar alguns dos materiais didáticos e metodologias de ensino e mais conhecidas para estudantes com TEA.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 54,
        itinerario: 2,
        title: 'Educação Especial e Inclusão',
        descricao: 'Este curso apresenta as principais leis sobre inclusão de alunos com deficiência no ensino regular. Aponta a definição de integração, inclusão, síndrome, doenças, distúrbios e transtornos. Demonstra o conceito de deficiência intelectual, síndrome de Down, autismo, surdez, cegueira, deficiência física ou motora e a paralisia cerebral. Considera escola para todos, princípios da cultura inclusiva, formação do professor, sala de aula inclusiva, família na educação escolar dos alunos com deficiência e educação inclusiva na educação infantil.',
        cargaHoraria: 40,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 55,
        itinerario: 2,
        title: 'Compras Públicas Sustentáveis',
        descricao: 'O curso tem por objetivo capacitar servidores públicos para que possam planejar e realizar compras públicas sustentáveis, contribuindo com a proteção ambiental, social e econômica, e disseminando a cultura de ações mais sustentáveis na instituição. ',
        cargaHoraria: 30,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 56,
        itinerario: 2,
        title: 'Curso Básico de Licitações Sustentáveis para servidores solicitantes',
        descricao: 'O curso tem por objetivo capacitar servidores solicitantes de materiais para as especificações sustentáveis dos objetos demandados.  OBJETIVOS: GERAL: Capacitar servidores solicitantes de materiais para as especificações sustentáveis dos objetos demandados. ESPECÍFICOS: Apresentar conceitos basilares para uma correta especificação de materiais com critérios sustentáveis. Apresentar materiais de suporte às compras sustentáveis existentes, dentro e fora do IFRJ. Apresentar exemplo de demanda de material sustentável. ',
        cargaHoraria: 30,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 57,
        itinerario: 2,
        title: 'Logística e Administração de Materiais',
        descricao: 'Este curso apresenta os conceitos e fundamentos de logística, não só para o aprimoramento dos processos bem como para a compreensão dos conceitos básicos e de sua importância no cenário atual. Dá ênfase para a apresentação dos principais conceitos, técnicas e ferramentas para gestão de compras, distribuição, armazenagem e transportes na cadeia de suprimentos. Pretende-se não só entender a utilização correta de embalagens bem como mostrar o ciclo de materiais e estoques dos produtos necessários para atender à demanda produtiva.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 58,
        itinerario: 2,
        title: 'Introdução à Gestão de Projetos',
        descricao: 'ste curso foi feito com o objetivo de apresentar os conceitos fundamentais referentes ao tema gestão de projetos, com destaque para a definição e caracterização do termo “projeto” e da apresentação do ciclo de vida dos projetos e das dez áreas do conhecimento, definidas pelo Project Management Institute (PMI), instituição internacional que se dedica ao estudo e à disseminação dos melhores métodos e técnicas de gerenciamento de projetos.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 59,
        itinerario: 2,
        title: 'Noções Básicas do Trabalho Remoto',
        descricao: 'O trabalho remoto já é uma realidade, pensando nisso, a Enap e a Endeavor prepararam este curso para apresentar diversas estratégias e dicas que facilitam o seu dia a dia, a organização do trabalho individual e do trabalho em equipe. Quer saber mais? Você pode ser inscrever neste curso gratuito e aberto na EVG, assistir o vídeo do GNPapo promovido pelo laboratório de inovação da Enap, disponível com acesso livre em "Conteúdo Relacionado" ou, ainda, acessar a página da Campanha #contecomigo #suavizeacurva que é uma iniciativa da Secretaria de Gestão e Desempenho de Pessoal (SGP).',
        cargaHoraria: 10,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 60,
        itinerario: 2,
        title: 'Gestão de Equipes em Trabalho Remoto',
        descricao: 'Este curso apresenta diversas contribuições para a gestão de equipes em trabalho remoto. O conteúdo traz dicas e ferramentas interessantes, além de abordar pontos importantes relacionados à gestão de pessoas. Trata-se de um curso necessário, criado a partir dos desafios que afetaram as instituições nos últimos tempos. Que tal conhecer um pouco mais desse assunto? Inscreva-se.',
        cargaHoraria: 20,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 61,
        itinerario: 2,
        title: 'Educação Financeira',
        descricao: 'O curso Educação Financeira tem como objetivo promover e impulsionar a importância desta temática, trazendo estratégias e conhecimentos que venham tornar a tomada de decisão de suas finanças cada vez mais segura e responsável. As informações apresentadas terão o intuito de fazer com que você reflita sobre seus comportamentos básicos de consumo e relacionamento com o dinheiro, contribuindo para promover atitudes com vista no consumo consciente, busca de maior qualidade de vida e visão de futuro próspero e digno.',
        cargaHoraria: 40,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 62,
        itinerario: 2,
        title: 'Segurança do Trabalho',
        descricao: 'Ementa: Introdução, história e conceitos básicos. Legislação e procedimentos específicos. Fundamentos das Normas Técnicas de Segurança. Medidas de proteção coletiva e individual. Objetivos gerais: Desenvolver conhecimentos necessários para o trabalho seguro. Objetivos específicos: Analisar/conhecer os princípios das Normas Regulamentadoras de segurança. Entender a importância dos Equipamentos de Proteção individual e medidas de proteção coletivas nos ambientes de trabalho',
        cargaHoraria: 40,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 63,
        itinerario: 2,
        title: 'Boas Práticas de Segurança do Trabalho em Laboratórios',
        descricao: 'Ementa: Introdução a Segurança do Trabalho: Conceitos básicos de Segurança do Trabalho. Equipamentos de Proteção Coletiva e Equipamentos de Proteção Individual e Coletiva. Produtos Químicos. Equipamentos, vidrarias e  utensílios de laboratório. Mapa de Riscos. Manual de Segurança para Laboratórios. Situações de Emergência. Objetivos gerais: O curso se destina a capacitar os usuários de laboratórios (alunos, egressos, docentes, técnicos e auxiliares de laboratório) sobre as orientações básicas de segurança do trabalho aplicáveis aos laboratórios.',
        cargaHoraria: 40,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 64,
        itinerario: 2,
        title: 'Prazer e Sofrimento no Trabalho',
        descricao: 'Ementa: Aspectos conceituais da dinâmica de prazer e sofrimento no trabalho: Organização do trabalho como fonte de sofrimento. Sofrimento no trabalho e estratégias de defesa. Do sofrimento ao prazer no trabalho. Proteção Jurídica no Brasil acerca da relação entre saúde mental e trabalho: Legislação brasileira quanto a proteção da relação entre trabalho a saúde mental: Constituição Federal, Consolidação das Leis Trabalhistas (CLT) e Normas Regulamentadoras (NRs). Patologias e formas de violência associadas a saúde mental e trabalho: Principais patologias que podem ser desenvolvidas nos indivíduos relacionados a saúde mental e trabalho tais como transtornos de humor (transtornos de ansiedade, transtornos de depressão) e desordens musculoesqueléticas (LERT, DORT). Violências no trabalho que estão relacionados a saúde mental e trabalho: assédio moral e assédio sexual.',
        cargaHoraria: 40,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 65,
        itinerario: 2,
        title: 'ASSÉDIO MORAL! - CARTILHA INFORMATIVA',
        descricao: 'Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Moral.',
        cargaHoraria: 0,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 66,
        itinerario: 2,
        title: 'ASSÉDIO SEXUAL - CARTILHA INFORMATIVA',
        descricao: 'Cartlha informativa elaborada pela Corregedoria Geral do IFMG para orientacão e esclarecimento ao servidores sobre Assédio Sexual.',
        cargaHoraria: 0,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 67,
        itinerario: 2,
        title: 'Manual de Conduta do Servidor Público Federal',
        descricao: 'Este manual tem por finalidade: a) organizar as disposições relacionadas à conduta profissional, buscando trazer uma abordagem atualizada, clara e objetiva sobre os temas relacionados; b) disseminar boas práticas que se constituem no padrão de comportamento que é esperado do servidor. c) auxiliar no aprimoramento de uma cultura organizacional fundamentada no princípio da integridade e na busca constante de alto desempenho nos órgãos e entidades do Poder Executivo Federal. ',
        cargaHoraria: 0,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 68,
        itinerario: 2,
        title: 'Gerenciamento de Projetos e Portfólios de Projetos - Guia',
        descricao: 'Guia Referencial para Gerenciamento de Projetos e Portfólios de Projetos Este guia orienta a utilização da abordagem de gerenciamento de projetos baseada nas características de cada projeto, no ambiente no qual está contido, nas habilidades da equipe e em outros parâmetros. O documento compila conceitos, modelos e indicações das melhores práticas atuais e amplamente disseminadas a respeito de gerenciamento de projetos e de portfólios de projetos.',
        cargaHoraria: 0,
        instCert: 2,
        possuiAcessibilidade: '',
        link: '',
        obs: '',
        filter: {
            competencias: [0],
            temas: [],
            subtemas: [],
        }
    },
]

const instituicoesDefault = [
    {
        id: 1,
        titulo: 'IFRJ'
    },
    {
        id: 2,
        titulo: 'IFMG'
    },
    {
        id: 3,
        titulo: 'IFSul'
    },
    {
        id: 4,
        titulo: 'MEC'
    },
    {
        id: 5,
        titulo: 'IFRS'
    },
    {
        id: 6,
        titulo: 'IFG'
    },
    {
        id: 7,
        titulo: 'ENAP'
    },
    {
        id: 8,
        titulo: 'UFSCAR'
    },
    {
        id: 9,
        titulo: 'ILB'
    },
    {
        id: 10,
        titulo: 'UNIFAP'
    },
    {
        id: 11,
        titulo: 'PoCA - UFSCar'
    },
    {
        id: 12,
        titulo: 'Ministério da Economia'
    },
    {
        id: 13,
        titulo: 'IFRN'
    },
]

const competenciasDefault = [
    {
        id: 0,
        titulo: 'Não especificado',
        descricao: 'Não especificado'
    },
    {
        id: 1,
        titulo: 'Gestão do desenvolvimento de pessoas',
        descricao: 'Forjar um ambiente de trabalho em que os interesses de equipes e indivíduos se harmonizem com os objetivos e resultados da organização, gerando oportunidades de aprendizado e desenvolvimento, bem como incentivos para reforçar o desempenho excepcional.'
    },
    {
        id: 2,
        titulo: 'Gestão da qualidade',
        descricao: 'Conduzir a área de gestão encarregada de padronizar boas práticas processuais, no âmbito do paradigma da qualidade; gerando serviços internos ou externos seguros e confiáveis, de acordo com indicadores pré-estabelecidos em termos de legislação vigente e padrões de qualidade aplicáveis.'
    },
    {
        id: 3,
        titulo: 'Liderança eficaz',
        descricao: 'Dirigir equipes, otimizando a aplicação de talentos disponíveis e criando um ambiente positivo e comprometido para a obtenção de resultados.'
    },
    {
        id: 4,
        titulo: 'Gerenciamento de recursos',
        descricao: 'Preservar critérios de eficácia e eficiência na administração de recursos materiais, das competências das pessoas e dos ativos de uso da organização.'
    },
    {
        id: 5,
        titulo: 'Planejamento',
        descricao: 'Identificar problemas prioritários e oportunidades de sua unidade para projetar planos, programas ou projetos que prefixam objetivos, atividades, recursos, custos, cronogramas, responsáveis e indicadores de progresso, resultados e impacto.'
    },
    {
        id: 6,
        titulo: 'Relacionamento com dirigentes',
        descricao: 'Participar, manter e facilitar de áreas de intercâmbio com o corpo diretivo de sua organização e outras organizações, a fim de compartilhar experiências, soluções e propostas, para articular estrategicamente os objetivos convergentes.'
    },
    {
        id: 7,
        titulo: 'Resolução de problemas',
        descricao: 'Reconhecer as relações de causa e efeito no campo dos problemas identificados que a sua área e organização enfrentam, para focar nas questões centrais para as quais concentrar as soluções estratégicas. Projetar soluções alternativas calculando os benefícios em relação aos custos de sua implementação, riscos correlatos e impactos associados.'
    },
    {
        id: 8,
        titulo: 'Tomada de decisão para gestores',
        descricao: 'Adotar e informar decisões prévias, explorando alternativas para minimizar custos e aumentar as vantagens para a organização na questão que for decidida.'
    },
    {
        id: 9,
        titulo: 'Comunicação interpessoal',
        descricao: 'Iniciar e manter comunicações respeitosas e cordiais; transmitir de forma transparente e comportamento estável, informações e gestos, mensagens orais e de texto claros, concisos, fiáveis e apropriados para o destinatário. Atender ativamente informações, consultas, divergências e mensagens de terceiros com uma atitude construtiva e empática.'
    },
    {
        id: 10,
        titulo: 'Gestão da participação cidadã',
        descricao: 'Ativar a participação cidadã vinculada aos assuntos da área responsável; considerar expectativas, propostas e reclamações para adaptar cada vez mais os serviços, conscientizando os colaboradores sobre o direito à participação e as vantagens que ela viabiliza.'
    },
    {
        id: 11,
        titulo: 'Negociação',
        descricao: 'Cooperar para construir o melhor acordo possível para as partes diante de posições divergentes, sem prejudicar a continuidade do vínculo e a aderência aos regulamentos vigentes.'
    },
    {
        id: 12,
        titulo: 'Orientação ao cidadão',
        descricao: 'Conduzir e organizar o atendimento aos cidadãos, com mecanismos acessíveis, linguagem inteligível e procedimentos ágeis voltados à satisfação de procedimentos, reclamações, dúvidas e propostas. Quantificar, através de indicadores pré-estabelecidos, o grau de satisfação com os resultados gerenciais e a qualidade da resolução de conflitos e reclamações.'
    },
    {
        id: 13,
        titulo: 'Relações institucionais',
        descricao: 'Promover a qualidade dos relacionamentos regulares e criar novos relacionamentos necessários para a consecução dos interesses da sua organização. Fortalecer a imagem corporativa, fazendo apresentações em público, planejando a mensagem a ser transmitida e seu objetivo de acordo com o tipo de público.'
    },
    {
        id: 14,
        titulo: 'Trabalho em equipe',
        descricao: 'Criar e participar de equipes de trabalho para promover um ambiente produtivo e aprimorar habilidades diferenciadas entre as pessoas; compartilhando recursos e informações para alcançar melhores resultados'
    },
    {
        id: 15,
        titulo: 'Gerenciamento de políticas',
        descricao: 'Contribuir para a coerência estratégica da gestão de políticas, articulando e complementando os objetivos e resultados das organizações; desempenhar o papel de liderança no âmbito das políticas públicas promovidas pelo Alto Governo.'
    },
    {
        id: 16,
        titulo: 'Construção de redes',
        descricao: 'Promover o autodesenvolvimento e o desenvolvimento profissional de suas equipes de colaboradores, integrando, criando ou incentivando a participação em redes e fóruns para troca de experiências, novidades, documentos, cases, soluções criativas e problemas compartilhados.'
    },
    {
        id: 17,
        titulo: 'Gerenciamento de mudança',
        descricao: 'Antecipar e promover mudanças estratégicas/operacionais para responder às mudanças do contexto. Redesenhar/modernizar abordagens, processos, tarefas e competências requeridos pelo novo contexto, distribuindo responsabilidades e perseguindo resultados.'
    },
    {
        id: 18,
        titulo: 'Gerenciamento digital',
        descricao: 'Reconhecer efetivamente o direito dos cidadãos à informação pública e à interação com serviços no ambiente digital, garantindo canais efetivos para requisição de serviços, pedidos, consultas, procedimentos, acompanhamento e resolução remotos.'
    },
    {
        id: 19,
        titulo: 'Inovação',
        descricao: 'Forjar um clima de interesse para soluções inovadoras que melhorem a eficiência das respostas aos cidadãos em termos de informações, processos, tecnologias, resultados e impactos da gestão pública.'
    },
    {
        id: 20,
        titulo: 'Proatividade',
        descricao: 'Atuar com iniciativa e instruir os colaboradores a antecipar eventos previsíveis que envolvam a execução de tarefas para atendimento de demandas internas e externas (dos cidadãos), fortalecendo a percepção dos usuários sobre o comprometimento da unidade na oferta de serviços e produtos.'
    },
    {
        id: 21,
        titulo: 'Trabalho sob pressão',
        descricao: 'Gerenciar emoções em busca da qualidade das ações gerenciais, evitando reações impulsivas/temperamentais em situações de pressão. Objetivar e enfocar os problemas a resolver, dissociando-os das pessoas envolvidas neles. Utilizar dificuldades, erros detectados ou planos fracassados como objetos de aprendizagem coletiva para capitalizar construtivamente a situação e evitar sua repetição.'
    },
    {
        id: 22,
        titulo: 'Visão estratégica',
        descricao: 'Compreender o ambiente político e a as tendências que interferem no estado de coisas; antecipar problemas e oportunidades a médio e longo prazo para a área responsável a fim de que a gestão identifique a alternativa mais adequada a cada situação presente ou eventual, comunicando à equipe a lógica das decisões diretivas.'
    },
    {
        id: 23,
        titulo: 'Contribuição técnico-profissional',
        descricao: 'Disponibilizar à Administração seu conhecimento profissional específico e suas experiências anteriores, gerenciando a atualização de seus conhecimentos especializados.'
    },
    {
        id: 24,
        titulo: 'Comunicação efetiva',
        descricao: 'Estabelecer comunicação efetiva e positiva com superiores hierárquicos, pares e cidadãos, tanto na expressão escrita e verbal quanto corporal.'
    },
    {
        id: 25,
        titulo: 'Organização da rotina',
        descricao: 'Definir o programa semanal/mensal de atividades, no âmbito do plano institucional, determinando os resultados a serem alcançados, as tarefas a serem executadas, os procedimentos a serem resolvidos e os atrasos a serem corrigidos, bem como os custos e insumos necessários para alcançá-lo.'
    },
    {
        id: 26,
        titulo: 'Resolutividade',
        descricao: 'Manter interdependências positivas e produtivas com sua equipe e seus superiores para alcançar resultados.'
    },
    {
        id: 27,
        titulo: 'Uso de TIC',
        descricao: 'Otimizar o uso das tecnologias de informação e comunicação disponíveis, em seu efetivo potencial, para melhorar seu desempenho.'
    },
    {
        id: 28,
        titulo: 'Análise de problemas',
        descricao: 'Identificar tempestivamente os problemas a serem resolvidos, os recursos para enfrentá-los, as alternativas possíveis, seus custos e riscos, antes de tomar a decisão no nível que lhes corresponde.'
    },
    {
        id: 29,
        titulo: 'Criatividade',
        descricao: 'Aplicar sua experiência e especialização em melhorar o uso de dados para refinar metodologias, processos, produtos e interações em equipe, orientadas para a satisfação do usuário externo/interno.'
    },
    {
        id: 30,
        titulo: 'Melhoria contínua de processos',
        descricao: 'Propor e introduzir ações para acelerar a melhoria contínua e a produtividade das tarefas sob sua responsabilidade, em atenção aos requisitos de qualidade.'
    },
    {
        id: 31,
        titulo: 'Tomada de decisão',
        descricao: 'Decidir sobre as questões sob sua responsabilidade mobilizando critérios de economia, eficácia, eficiência e transparência.'
    },
    {
        id: 32,
        titulo: 'Controle emocional',
        descricao: 'Preservar o diálogo harmônico e respeitoso acerca das divergências, erros e conflitos do ambiente, sem afetar a dinâmica do trabalho sem razão justificável.'
    },
]

const categoriasDeCompetenciasDefault = [
    {
        id: 0,
        nome: 'Não especificado',
        competencias: [0]
    },
    {
        id: 7,
        nome: 'Gestão de Resultados',
        competencias: [1,2,3,4,5,6,7,8]
    },
    {
        id: 8,
        nome: 'Gestão de Relacionamentos',
        competencias: [9,10,11,12,13,14]
    },
    {
        id: 9,
        nome: 'Gestão de Mudanças',
        competencias: [15,16,17,18,19,20,21,22]
    },
    {
        id: 10,
        nome: 'Orientação a Resultados',
        competencias: [23,24,25,26,27]
    },
    {
        id: 11,
        nome: 'Processos de Melhoria',
        competencias: [28,29,30,31,32]
    },
]

const temasDefault = [
    {
        id: 1,
        titulo: 'Matemática',
        subtemas: []
    },
    {
        id: 2,
        titulo: 'Probabilidade e Estatística',
        subtemas: []
    },
    {
        id: 3,
        titulo: 'Ciência da Computação',
        subtemas: []
    },
    {
        id: 4,
        titulo: 'Astronomia',
        subtemas: []
    },
    {
        id: 5,
        titulo: 'Física',
        subtemas: []
    },
    {
        id: 6,
        titulo: 'Química',
        subtemas: []
    },
    {
        id: 7,
        titulo: 'GeoCiências',
        subtemas: []
    },
    {
        id: 8,
        titulo: 'Oceanografia',
        subtemas: []
    },
    {
        id: 9,
        titulo: 'Biologia Geral',
        subtemas: []
    },
    {
        id: 10,
        titulo: 'Genética',
        subtemas: []
    },
    {
        id: 11,
        titulo: 'Botânica',
        subtemas: []
    },
    {
        id: 12,
        titulo: 'Zoologia',
        subtemas: []
    },
    {
        id: 13,
        titulo: 'Ecologia',
        subtemas: []
    },
    {
        id: 14,
        titulo: 'Morfologia',
        subtemas: []
    },
    {
        id: 15,
        titulo: 'Fisiologia',
        subtemas: []
    },
    {
        id: 16,
        titulo: 'Bioquímica',
        subtemas: []
    },
    {
        id: 17,
        titulo: 'Biofísica',
        subtemas: []
    },
    {
        id: 18,
        titulo: 'Farmacologia',
        subtemas: []
    },
    {
        id: 19,
        titulo: 'Imunologia',
        subtemas: []
    },
    {
        id: 20,
        titulo: 'Microbiologia',
        subtemas: []
    },
    {
        id: 21,
        titulo: 'Parasitologia',
        subtemas: []
    },
    {
        id: 22,
        titulo: 'Engenharia Civil',
        subtemas: []
    },
    {
        id: 23,
        titulo: 'Engenharia de Minas',
        subtemas: []
    },
    {
        id: 24,
        titulo: 'Engenharia de Materiais e Metalúrgica',
        subtemas: []
    },
    {
        id: 25,
        titulo: 'Engenharia Elétrica',
        subtemas: []
    },
    {
        id: 26,
        titulo: 'Engenharia Mecânica',
        subtemas: []
    },
    {
        id: 27,
        titulo: 'Engenharia Química',
        subtemas: []
    },
    {
        id: 28,
        titulo: 'Engenharia Sanitária',
        subtemas: []
    },
    {
        id: 29,
        titulo: 'Engenharia de Produção',
        subtemas: []
    },
    {
        id: 30,
        titulo: 'Engenharia Nuclear',
        subtemas: []
    },
    {
        id: 31,
        titulo: 'Engenharia de Transportes',
        subtemas: []
    },
    {
        id: 32,
        titulo: 'Engenharia Naval e Oceânica',
        subtemas: []
    },
    {
        id: 33,
        titulo: 'Engenharia Aeroespacial',
        subtemas: []
    },
    {
        id: 34,
        titulo: 'Engenharia Biomédica',
        subtemas: []
    },
    {
        id: 35,
        titulo: 'Medicina',
        subtemas: []
    },
    {
        id: 36,
        titulo: 'Odontologia',
        subtemas: []
    },
    {
        id: 37,
        titulo: 'Farmácia',
        subtemas: []
    },
    {
        id: 38,
        titulo: 'Nutrição',
        subtemas: []
    },
    {
        id: 39,
        titulo: 'Saúde Coletiva',
        subtemas: []
    },
    {
        id: 40,
        titulo: 'Fonoaudiologia',
        subtemas: []
    },
    {
        id: 41,
        titulo: 'Fisioterapia e Terapia Ocupacional',
        subtemas: []
    },
    {
        id: 42,
        titulo: 'Educação Física',
        subtemas: []
    },
    {
        id: 43,
        titulo: 'Agronomia',
        subtemas: []
    },
    {
        id: 44,
        titulo: 'Recursos Florestais e Engenharia Florestal',
        subtemas: []
    },
    {
        id: 45,
        titulo: 'Engenharia Agrícola',
        subtemas: []
    },
    {
        id: 46,
        titulo: 'Zootecnia',
        subtemas: []
    },
    {
        id: 47,
        titulo: 'Medicina Veterinária',
        subtemas: []
    },
    {
        id: 48,
        titulo: 'Recursos Pesqueiros e Engenharia de Pesca',
        subtemas: []
    },
    {
        id: 49,
        titulo: 'Ciência e Tecnologia de Alimentos',
        subtemas: []
    },
    {
        id: 50,
        titulo: 'Direito',
        subtemas: []
    },
    {
        id: 51,
        titulo: 'Administração',
        subtemas: []
    },
]

const subtemasDefault = [
    {
        id: 1,
        titulo: 'Álgebra'
    },
    {
        id: 2,
        titulo: 'Análise'
    },
    {
        id: 3,
        titulo: 'Geometria e Topologia'
    },
    {
        id: 4,
        titulo: 'Matemática Aplicada'
    },
    {
        id: 5,
        titulo: 'Probabilidade'
    },
    {
        id: 6,
        titulo: 'Estatística'
    },
    {
        id: 7,
        titulo: 'Probabilidade e Estatística Aplicadas'
    },
    {
        id: 8,
        titulo: 'Teoria da Computação'
    },
    {
        id: 9,
        titulo: 'Matemática da Computação'
    },
    {
        id: 10,
        titulo: 'Metodologia e Técnicas da Computação'
    },
    {
        id: 11,
        titulo: 'Sistemas de Computação'
    },
    {
        id: 12,
        titulo: 'Astronomia de Posição e Mecânica Celeste'
    },
    {
        id: 13,
        titulo: 'Astrofísica Estelar'
    },
    {
        id: 14,
        titulo: 'Astrofísica do Meio Interestelar'
    },
    {
        id: 15,
        titulo: 'Astrofísica Extragaláctica'
    },
    {
        id: 16,
        titulo: 'Astrofísica do Sistema Solar'
    },
    {
        id: 17,
        titulo: 'Instrumentação Astronômica'
    },
    {
        id: 18,
        titulo: 'Física Geral'
    },
    {
        id: 19,
        titulo: 'Áreas Clássicas de Fenomenologia e suas Aplicações'
    },
    {
        id: 20,
        titulo: 'Física das Partículas Elementares e Campos'
    },
    {
        id: 21,
        titulo: 'Física Nuclear'
    },
    {
        id: 22,
        titulo: 'Física Atômica e Molécular'
    },
    {
        id: 23,
        titulo: 'Física dos Fluidos, Física de Plasmas e Descargas Elétricas'
    },
    {
        id: 24,
        titulo: 'Física da Matéria Condensada'
    },
    {
        id: 25,
        titulo: 'Química Orgânica'
    },
    {
        id: 26,
        titulo: 'Química Inorgânica'
    },
    {
        id: 27,
        titulo: 'Fisico-Química'
    },
    {
        id: 28,
        titulo: 'Química Analítica'
    },
    {
        id: 29,
        titulo: 'Geologia'
    },
    {
        id: 30,
        titulo: 'Geofísica'
    },
    {
        id: 31,
        titulo: 'Meteorologia'
    },
    {
        id: 32,
        titulo: 'Geodesia'
    },
    {
        id: 33,
        titulo: 'Geografia Física'
    },
    {
        id: 34,
        titulo: 'Oceanografia Biológica'
    },
    {
        id: 35,
        titulo: 'Oceanografia Física'
    },
    {
        id: 36,
        titulo: 'Oceanografia Química'
    },
    {
        id: 37,
        titulo: 'Oceanografia Geológica'
    },
    {
        id: 38,
        titulo: 'Biologia Geral'
    },
    {
        id: 39,
        titulo: 'Genética Quantitativa'
    },
    {
        id: 40,
        titulo: 'Genética Molecular e de Microorganismos'
    },
    {
        id: 41,
        titulo: 'Genética Vegetal'
    },
    {
        id: 42,
        titulo: 'Genética Animal'
    },
    {
        id: 43,
        titulo: 'Genética Humana e Médica'
    },
    {
        id: 44,
        titulo: 'Mutagênese'
    },
    {
        id: 45,
        titulo: 'Paleobotânica'
    },
    {
        id: 46,
        titulo: 'Morfologia Vegetal'
    },
    {
        id: 47,
        titulo: 'Fisiologia Vegetal'
    },
    {
        id: 48,
        titulo: 'Taxonomia Vegetal'
    },
    {
        id: 49,
        titulo: 'Fitogeografia'
    },
    {
        id: 50,
        titulo: 'Botânica Aplicada'
    },
    {
        id: 51,
        titulo: 'Paleozoologia'
    },
    {
        id: 52,
        titulo: 'Morfologia dos Grupos Recentes'
    },
    {
        id: 53,
        titulo: 'Fisiologia dos Grupos Recentes'
    },
    {
        id: 54,
        titulo: 'Comportamento Animal'
    },
    {
        id: 55,
        titulo: 'Taxonomia dos Grupos Recentes'
    },
    {
        id: 56,
        titulo: 'Zoologia Aplicada'
    },
    {
        id: 57,
        titulo: 'Ecologia Teórica'
    },
    {
        id: 58,
        titulo: 'Ecologia de Ecossistemas'
    },
    {
        id: 59,
        titulo: 'Ecologia Aplicada'
    },
    {
        id: 60,
        titulo: 'Citologia e Biologia Celular'
    },
    {
        id: 61,
        titulo: 'Embriologia'
    },
    {
        id: 62,
        titulo: 'Histologia'
    },
    {
        id: 63,
        titulo: 'Anatomia'
    },
    {
        id: 64,
        titulo: 'Fisiologia Geral'
    },
    {
        id: 65,
        titulo: 'Fisiologia de Órgaos e Sistemas'
    },
    {
        id: 66,
        titulo: 'Fisiologia do Esforço'
    },
    {
        id: 67,
        titulo: 'Fisiologia Comparada'
    },
    {
        id: 68,
        titulo: 'Química de Macromoléculas'
    },
    {
        id: 69,
        titulo: 'Bioquímica dos Microorganismos'
    },
    {
        id: 70,
        titulo: 'Metabolismo e Bioenergética'
    },
    {
        id: 71,
        titulo: 'Biologia Molecular'
    },
    {
        id: 72,
        titulo: 'Enzimologia'
    },
    {
        id: 73,
        titulo: 'Biofísica Molecular'
    },
    {
        id: 74,
        titulo: 'Biofísica Celular'
    },
    {
        id: 75,
        titulo: 'Biofísica de Processos e Sistemas'
    },
    {
        id: 76,
        titulo: 'Radiologia e Fotobiologia'
    },
    {
        id: 77,
        titulo: 'Farmacologia Geral'
    },
    {
        id: 78,
        titulo: 'Farmacologia Autonômica'
    },
    {
        id: 79,
        titulo: 'Neuropsicofarmacologia'
    },
    {
        id: 80,
        titulo: 'Farmacologia Cardiorenal'
    },
    {
        id: 81,
        titulo: 'Farmacologia Bioquímica e Molecular'
    },
    {
        id: 82,
        titulo: 'Etnofarmacologia'
    },
    {
        id: 83,
        titulo: 'Toxicologia'
    },
    {
        id: 84,
        titulo: 'Farmacologia Clínica'
    },
    {
        id: 85,
        titulo: 'Imunoquímica'
    },
    {
        id: 86,
        titulo: 'Imunologia Celular'
    },
    {
        id: 87,
        titulo: 'Imunogenética'
    },
    {
        id: 88,
        titulo: 'Imunologia Aplicada'
    },
    {
        id: 89,
        titulo: 'Biologia e Fisiologia dos Microorganismos'
    },
    {
        id: 90,
        titulo: 'Microbiologia Aplicada'
    },
    {
        id: 91,
        titulo: 'Protozoologia de Parasitos'
    },
    {
        id: 92,
        titulo: 'Helmintologia de Parasitos'
    },
    {
        id: 93,
        titulo: 'Entomologia e Malacologia de Parasitos e Vetores'
    },
    {
        id: 94,
        titulo: 'Construção Civil'
    },
    {
        id: 95,
        titulo: 'Estruturas'
    },
    {
        id: 96,
        titulo: 'Geotécnica'
    },
    {
        id: 97,
        titulo: 'Engenharia Hidráulica'
    },
    {
        id: 98,
        titulo: 'Infra-Estrutura de Transportes'
    },
    {
        id: 99,
        titulo: 'Pesquisa Mineral'
    },
    {
        id: 100,
        titulo: 'Lavra'
    },
    {
        id: 101,
        titulo: 'Tratamento de Minérios'
    },
    {
        id: 102,
        titulo: 'Instalações e Equipamentos Metalúrgicos'
    },
    {
        id: 103,
        titulo: 'Metalurgia Extrativa'
    },
    {
        id: 104,
        titulo: 'Metalurgia de Transformação'
    },
    {
        id: 105,
        titulo: 'Metalurgia Fisica'
    },
    {
        id: 106,
        titulo: 'Materiais não Metálicos'
    },
    {
        id: 107,
        titulo: 'Materiais Elétricos'
    },
    {
        id: 108,
        titulo: 'Medidas Elétricas, Magnéticas e Eletrônicas; Instrumentação'
    },
    {
        id: 109,
        titulo: 'Circuitos Elétricos, Magnéticos e Eletrônicos'
    },
    {
        id: 110,
        titulo: 'Sistemas Elétricos de Potência'
    },
    {
        id: 111,
        titulo: 'Eletrônica Industrial, Sistemas e Controles Eletrônicos'
    },
    {
        id: 112,
        titulo: 'Telecomunicações'
    },
    {
        id: 113,
        titulo: 'Fenômenos de Transporte'
    },
    {
        id: 114,
        titulo: 'Engenharia Térmica'
    },
    {
        id: 115,
        titulo: 'Mecânica dos Sólidos'
    },
    {
        id: 116,
        titulo: 'Projetos de Máquinas'
    },
    {
        id: 117,
        titulo: 'Processos de Fabricação'
    },
    {
        id: 118,
        titulo: 'Processos Industriais de Engenharia Química'
    },
    {
        id: 119,
        titulo: 'Operações Industriais e Equipamentos para Engenharia Química'
    },
    {
        id: 120,
        titulo: 'Tecnologia Química'
    },
    {
        id: 121,
        titulo: 'Recursos Hídricos'
    },
    {
        id: 122,
        titulo: 'Tratamento de Águas de Abastecimento e Residuárias'
    },
    {
        id: 123,
        titulo: 'Saneamento Básico'
    },
    {
        id: 124,
        titulo: 'Saneamento Ambiental'
    },
    {
        id: 125,
        titulo: 'Gerência de Produção'
    },
    {
        id: 126,
        titulo: 'Pesquisa Operacional'
    },
    {
        id: 127,
        titulo: 'Engenharia do Produto'
    },
    {
        id: 128,
        titulo: 'Engenharia Econômica'
    },
    {
        id: 129,
        titulo: 'Aplicações de Radioisotopos'
    },
    {
        id: 130,
        titulo: 'Fusão Controlada'
    },
    {
        id: 131,
        titulo: 'Combustível Nuclear'
    },
    {
        id: 132,
        titulo: 'Tecnologia dos Reatores'
    },
    {
        id: 133,
        titulo: 'Planejamento de Transportes'
    },
    {
        id: 134,
        titulo: 'Veículos e Equipamentos de Controle'
    },
    {
        id: 135,
        titulo: 'Operações de Transportes'
    },
    {
        id: 136,
        titulo: 'Hidrodinâmica de Navios e Sistemas Oceânicos'
    },
    {
        id: 137,
        titulo: 'Estruturas Navais e Oceânicas'
    },
    {
        id: 138,
        titulo: 'Máquinas Marítimas'
    },
    {
        id: 139,
        titulo: 'Projeto de Navios e de Sistemas Oceânicos'
    },
    {
        id: 140,
        titulo: 'Tecnologia de Construção Naval e de Sistemas Oceânicas'
    },
    {
        id: 141,
        titulo: 'Aerodinâmica'
    },
    {
        id: 142,
        titulo: 'Dinâmica de Vôo'
    },
    {
        id: 143,
        titulo: 'Estruturas Aeroespaciais'
    },
    {
        id: 144,
        titulo: 'Materiais e Processos para Engenharia Aeronáutica e Aeroespacial'
    },
    {
        id: 145,
        titulo: 'Propulsão Aeroespacial'
    },
    {
        id: 146,
        titulo: 'Sistemas Aeroespaciais'
    },
    {
        id: 147,
        titulo: 'Bioengenharia'
    },
    {
        id: 148,
        titulo: 'Engenharia Médica'
    },
    {
        id: 149,
        titulo: 'Clínica Médica'
    },
    {
        id: 150,
        titulo: 'Cirurgia'
    },
    {
        id: 151,
        titulo: 'Saúde Materno-Infantil'
    },
    {
        id: 152,
        titulo: 'Psiquiatria'
    },
    {
        id: 153,
        titulo: 'Anatomia Patológica e Patologia Clínica'
    },
    {
        id: 154,
        titulo: 'Radiologia Médica'
    },
    {
        id: 155,
        titulo: 'Medicina Legal e Deontologia'
    },
    {
        id: 156,
        titulo: 'Clínica Odontológica'
    },
    {
        id: 157,
        titulo: 'Cirurgia Buco-Maxilo-Facial'
    },
    {
        id: 158,
        titulo: 'Ortodontia'
    },
    {
        id: 159,
        titulo: 'Odontopediatria'
    },
    {
        id: 160,
        titulo: 'Periodontia'
    },
    {
        id: 161,
        titulo: 'Endodontia'
    },
    {
        id: 162,
        titulo: 'Radiologia Odontológica'
    },
    {
        id: 163,
        titulo: 'Odontologia Social e Preventiva'
    },
    {
        id: 164,
        titulo: 'Materiais Odontológicos'
    },
    {
        id: 165,
        titulo: 'Farmacotecnia'
    },
    {
        id: 166,
        titulo: 'Farmacognosia'
    },
    {
        id: 167,
        titulo: 'Análise Toxicológica'
    },
    {
        id: 168,
        titulo: 'Análise e Controle e Medicamentos'
    },
    {
        id: 169,
        titulo: 'Bromatologia'
    },
    {
        id: 170,
        titulo: 'Bioquímica da Nutrição'
    },
    {
        id: 171,
        titulo: 'Dietética'
    },
    {
        id: 172,
        titulo: 'Análise Nutricional de População'
    },
    {
        id: 173,
        titulo: 'Desnutrição e Desenvolvimento Fisiológico'
    },
    {
        id: 174,
        titulo: 'Epidemiologia'
    },
    {
        id: 175,
        titulo: 'Saúde Publica'
    },
    {
        id: 176,
        titulo: 'Medicina Preventiva'
    },
    {
        id: 177,
        titulo: 'Fonoaudiologia'
    },
    {
        id: 178,
        titulo: 'Fisioterapia e Terapia Ocupacional'
    },
    {
        id: 179,
        titulo: 'Educação Física'
    },
    {
        id: 180,
        titulo: 'Ciência do Solo'
    },
    {
        id: 181,
        titulo: 'Fitossanidade'
    },
    {
        id: 182,
        titulo: 'Fitotecnia'
    },
    {
        id: 183,
        titulo: 'Floricultura, Parques e Jardins'
    },
    {
        id: 184,
        titulo: 'Agrometeorologia'
    },
    {
        id: 185,
        titulo: 'Extensão Rural'
    },
    {
        id: 186,
        titulo: 'Silvicultura'
    },
    {
        id: 187,
        titulo: 'Manejo Florestal'
    },
    {
        id: 188,
        titulo: 'Técnicas e Operações Florestais'
    },
    {
        id: 189,
        titulo: 'Tecnologia e Utilização de Produtos Florestais'
    },
    {
        id: 190,
        titulo: 'Conservação da Natureza'
    },
    {
        id: 191,
        titulo: 'Energia de Biomassa Florestal'
    },
    {
        id: 192,
        titulo: 'Máquinas e Implementos Agrícolas'
    },
    {
        id: 193,
        titulo: 'Engenharia de Água e Solo'
    },
    {
        id: 194,
        titulo: 'Engenharia de Processamento de Produtos Agrícolas'
    },
    {
        id: 195,
        titulo: 'Construções Rurais e Ambiência'
    },
    {
        id: 196,
        titulo: 'Energização Rural'
    },
    {
        id: 197,
        titulo: 'Ecologia dos Animais Domésticos e Etologia'
    },
    {
        id: 198,
        titulo: 'Genética e Melhoramento dos Animais Domésticos'
    },
    {
        id: 199,
        titulo: 'Nutrição e Alimentação Animal'
    },
    {
        id: 200,
        titulo: 'Pastagem e Forragicultura'
    },
    {
        id: 201,
        titulo: 'Produção Animal'
    },
    {
        id: 202,
        titulo: 'Clínica e Cirurgia Animal'
    },
    {
        id: 203,
        titulo: 'Medicina Veterinária Preventiva'
    },
    {
        id: 204,
        titulo: 'Patologia Animal'
    },
    {
        id: 205,
        titulo: 'Reprodução Animal'
    },
    {
        id: 206,
        titulo: 'Inspeção de Produtos de Origem Animal'
    },
    {
        id: 207,
        titulo: 'Recursos Pesqueiros Marinhos'
    },
    {
        id: 208,
        titulo: 'Recursos Pesqueiros de Águas Interiores'
    },
    {
        id: 209,
        titulo: 'Aquicultura'
    },
    {
        id: 210,
        titulo: 'Engenharia de Pesca'
    },
    {
        id: 211,
        titulo: 'Ciência de Alimentos'
    },
    {
        id: 212,
        titulo: 'Tecnologia de Alimentos'
    },
    {
        id: 213,
        titulo: 'Engenharia de Alimentos'
    },
    {
        id: 214,
        titulo: 'Teoria do Direito'
    },
    {
        id: 215,
        titulo: 'Direito Público'
    },
    {
        id: 216,
        titulo: 'Direito Privado'
    },
    {
        id: 217,
        titulo: 'Direitos Especiais'
    },
    {
        id: 218,
        titulo: 'Administração de Empresas'
    },
    {
        id: 219,
        titulo: 'Administração de Setores Específicos'
    },
    {
        id: 220,
        titulo: 'Ciências Contábeis'
    },
    {
        id: 221,
        titulo: 'Teoria da Administração Pública'
    },
    {
        id: 222,
        titulo: 'Administração Pública do Brasil'
    },
    {
        id: 223,
        titulo: 'Administração Pública da Europa'
    },
    {
        id: 224,
        titulo: 'Administração Pública da América Latina'
    },
    {
        id: 225,
        titulo: 'Administração Pública da América do Norte'
    },
    {
        id: 226,
        titulo: 'Administração Pública da Ásia e Oceania'
    },
    {
        id: 227,
        titulo: 'Administração Pública da África'
    },
    {
        id: 228,
        titulo: 'Administração Federal'
    },
    {
        id: 229,
        titulo: 'Administração Municipal'
    },
    {
        id: 230,
        titulo: 'Administração Regional'
    },
    {
        id: 231,
        titulo: 'Administração Estadual'
    },
    {
        id: 232,
        titulo: 'Desburocratização'
    },
    {
        id: 233,
        titulo: 'Reforma Administrativa'
    },
    {
        id: 234,
        titulo: 'Governo Eletrônico / Digital'
    },
    {
        id: 235,
        titulo: 'Inovação na Gestão Pública'
    },
    {
        id: 236,
        titulo: 'Modernização Administrativa'
    },
    {
        id: 237,
        titulo: 'Tecnologia da Informação'
    },
    {
        id: 238,
        titulo: 'Atendimento ao Público'
    },
    {
        id: 239,
        titulo: 'Satisfação do Usuário'
    },
    {
        id: 240,
        titulo: 'Código de Conduta'
    },
    {
        id: 241,
        titulo: 'Corrupção Administrativa'
    },
    {
        id: 242,
        titulo: 'Ética no Setor Público'
    },
    {
        id: 243,
        titulo: 'Fiscalização da Moralidade Pública'
    },
    {
        id: 244,
        titulo: 'Avaliação de Desempenho (Setor Público'
    },
    {
        id: 245,
        titulo: 'Consórcio Público'
    },
    {
        id: 246,
        titulo: 'Contrato de gestão'
    },
    {
        id: 247,
        titulo: 'Controle de Gestão'
    },
    {
        id: 248,
        titulo: 'Indicador de Desempenho (Setor Público'
    },
    {
        id: 249,
        titulo: 'Produtividade'
    },
    {
        id: 250,
        titulo: 'Auditoria'
    },
    {
        id: 251,
        titulo: 'Accountability (Prestação Pública de Contas'
    },
    {
        id: 252,
        titulo: 'Controle Social'
    },
    {
        id: 253,
        titulo: 'Ouvidoria'
    },
    {
        id: 254,
        titulo: 'Concessão de Serviços Públicos'
    },
    {
        id: 255,
        titulo: 'Parcerias no Setor Público'
    },
    {
        id: 256,
        titulo: 'Parcerias Público-Privadas'
    },
    {
        id: 257,
        titulo: 'Técnicas Gerenciais no Setor Público'
    },
    {
        id: 258,
        titulo: 'Alta Administração Pública'
    },
    {
        id: 259,
        titulo: 'Gestor Público'
    },
    {
        id: 260,
        titulo: 'Liderança'
    },
    {
        id: 261,
        titulo: 'Função Pública'
    },
    {
        id: 262,
        titulo: 'Gestão de Pessoas no Setor Público'
    },
    {
        id: 263,
        titulo: 'Relações de Trabalho no Setor Público'
    },
    {
        id: 264,
        titulo: 'Capacitação Profissional no Setor Público'
    },
    {
        id: 265,
        titulo: 'Compras Governamentais'
    },
    {
        id: 266,
        titulo: 'Terceirização'
    },
    {
        id: 267,
        titulo: 'Empresa Pública'
    },
    {
        id: 268,
        titulo: 'Regulação – Agência Reguladora'
    },
    {
        id: 269,
        titulo: 'Cooperação Internacional'
    },
    {
        id: 270,
        titulo: 'Terceiro Setor – ONG’s – OSCIP'
    },
    {
        id: 271,
        titulo: 'Políticas Públicas e Uso de Evidências'
    },
    {
        id: 272,
        titulo: 'Governança e Gestão de Riscos'
    },
    {
        id: 273,
        titulo: 'Previdência'
    },
    {
        id: 274,
        titulo: 'Teoria Econômica'
    },
    {
        id: 275,
        titulo: 'Métodos Quantitativos em Economia'
    },
    {
        id: 276,
        titulo: 'Economia Monetária e Fiscal'
    },
    {
        id: 277,
        titulo: 'Crescimento, Flutuações e Planejamento Econômico'
    },
    {
        id: 278,
        titulo: 'Economia Internacional'
    },
    {
        id: 279,
        titulo: 'Economia dos Recursos Humanos'
    },
    {
        id: 280,
        titulo: 'Economia Industrial'
    },
    {
        id: 281,
        titulo: 'Economia do Bem-Estar Social'
    },
    {
        id: 282,
        titulo: 'Economia Regional e Urbana'
    },
    {
        id: 283,
        titulo: 'Economias Agrária e dos Recursos Naturais'
    },
    {
        id: 284,
        titulo: 'Fundamentos de Arquitetura e Urbanismo'
    },
    {
        id: 285,
        titulo: 'Projeto de Arquitetuta e Urbanismo'
    },
    {
        id: 286,
        titulo: 'Tecnologia de Arquitetura e Urbanismo'
    },
    {
        id: 287,
        titulo: 'Paisagismo'
    },
    {
        id: 288,
        titulo: 'Fundamentos do Planejamento Urbano e Regional'
    },
    {
        id: 289,
        titulo: 'Métodos e Técnicas do Planejamento Urbano e Regional'
    },
    {
        id: 290,
        titulo: 'Serviços Urbanos e Regionais'
    },
    {
        id: 291,
        titulo: 'Distribuição Espacial'
    },
    {
        id: 292,
        titulo: 'Tendência Populacional'
    },
    {
        id: 293,
        titulo: 'Componentes da Dinâmica Demográfica'
    },
    {
        id: 294,
        titulo: 'Nupcialidade e Família'
    },
    {
        id: 295,
        titulo: 'Demografia Histórica'
    },
    {
        id: 296,
        titulo: 'Política Pública e População'
    },
    {
        id: 297,
        titulo: 'Fontes de Dados Demográficos'
    },
    {
        id: 298,
        titulo: 'Teoria da Informação'
    },
    {
        id: 299,
        titulo: 'Biblioteconomia'
    },
    {
        id: 300,
        titulo: 'Arquivologia'
    },
    {
        id: 301,
        titulo: 'Museologia'
    },
    {
        id: 302,
        titulo: 'Teoria da Comunicação'
    },
    {
        id: 303,
        titulo: 'Jornalismo e Editoração'
    },
    {
        id: 304,
        titulo: 'Rádio e Televisão'
    },
    {
        id: 305,
        titulo: 'Relações Públicas e Propaganda'
    },
    {
        id: 306,
        titulo: 'Comunicação Visual'
    },
    {
        id: 307,
        titulo: 'Fundamentos do Serviço Social'
    },
    {
        id: 308,
        titulo: 'Serviço Social Aplicado'
    },
    {
        id: 309,
        titulo: 'Economia Doméstica'
    },
    {
        id: 310,
        titulo: 'Programação Visual'
    },
    {
        id: 311,
        titulo: 'Desenho de Produto'
    },
    {
        id: 312,
        titulo: 'História da Filosofia'
    },
    {
        id: 313,
        titulo: 'Metafísica'
    },
    {
        id: 314,
        titulo: 'Lógica'
    },
    {
        id: 315,
        titulo: 'Ética'
    },
    {
        id: 316,
        titulo: 'Epistemologia'
    },
    {
        id: 317,
        titulo: 'Filosofia Brasileira'
    },
    {
        id: 318,
        titulo: 'Fundamentos da Sociologia'
    },
    {
        id: 319,
        titulo: 'Sociologia do Conhecimento'
    },
    {
        id: 320,
        titulo: 'Sociologia do Desenvolvimento'
    },
    {
        id: 321,
        titulo: 'Sociologia Urbana'
    },
    {
        id: 322,
        titulo: 'Sociologia Rural'
    },
    {
        id: 323,
        titulo: 'Sociologia da Saúde'
    },
    {
        id: 324,
        titulo: 'Outras Sociologias Específicas'
    },
    {
        id: 325,
        titulo: 'Teoria Antropológica'
    },
    {
        id: 326,
        titulo: 'Etnologia Indígena'
    },
    {
        id: 327,
        titulo: 'Antropologia Urbana'
    },
    {
        id: 328,
        titulo: 'Antropologia Rural'
    },
    {
        id: 329,
        titulo: 'Antropologia das Populações Afro-Brasileiras'
    },
    {
        id: 330,
        titulo: 'Teoria e Método em Arqueologia'
    },
    {
        id: 331,
        titulo: 'Arqueologia Pré-Histórica'
    },
    {
        id: 332,
        titulo: 'Arqueologia Histórica'
    },
    {
        id: 333,
        titulo: 'Teoria e Filosofia da História'
    },
    {
        id: 334,
        titulo: 'História Antiga e Medieval'
    },
    {
        id: 335,
        titulo: 'História Moderna e Contemporânea'
    },
    {
        id: 336,
        titulo: 'História da América'
    },
    {
        id: 337,
        titulo: 'História do Brasi'
    },
    {
        id: 338,
        titulo: 'História das Ciências'
    },
    {
        id: 339,
        titulo: 'Geografia Humana'
    },
    {
        id: 340,
        titulo: 'Geografia Regional'
    },
    {
        id: 341,
        titulo: 'Fundamentos e Medidas da Psicologia'
    },
    {
        id: 342,
        titulo: 'Psicologia Experimental'
    },
    {
        id: 343,
        titulo: 'Psicologia Fisiológica'
    },
    {
        id: 344,
        titulo: 'Psicologia Comparativa'
    },
    {
        id: 345,
        titulo: 'Psicologia Social'
    },
    {
        id: 346,
        titulo: 'Psicologia Cognitiva'
    },
    {
        id: 347,
        titulo: 'Psicologia do Desenvolvimento Humano'
    },
    {
        id: 348,
        titulo: 'Psicologia do Ensino e da Aprendizagem'
    },
    {
        id: 349,
        titulo: 'Psicologia do Trabalho e Organizacional'
    },
    {
        id: 350,
        titulo: 'Tratamento e Prevenção Psicológica'
    },
    {
        id: 351,
        titulo: 'Fundamentos da Educação'
    },
    {
        id: 352,
        titulo: 'Administração Educacional'
    },
    {
        id: 353,
        titulo: 'Planejamento e Avaliação Educacional'
    },
    {
        id: 354,
        titulo: 'Ensino-Aprendizagem'
    },
    {
        id: 355,
        titulo: 'Currículo'
    },
    {
        id: 356,
        titulo: 'Orientação e Aconselhamento'
    },
    {
        id: 357,
        titulo: 'Tópicos Específicos de Educação'
    },
    {
        id: 358,
        titulo: 'Teoria Política'
    },
    {
        id: 359,
        titulo: 'Estado e Governo'
    },
    {
        id: 360,
        titulo: 'Comportamento Político'
    },
    {
        id: 361,
        titulo: 'Políticas Públicas'
    },
    {
        id: 362,
        titulo: 'Política Internacional'
    },
    {
        id: 363,
        titulo: 'História da Teologia'
    },
    {
        id: 364,
        titulo: 'Teologia Moral'
    },
    {
        id: 365,
        titulo: 'Teologia Sistemática'
    },
    {
        id: 366,
        titulo: 'Teologia Pastoral'
    },
    {
        id: 367,
        titulo: 'Teoria e Análise Linguística'
    },
    {
        id: 368,
        titulo: 'Fisiologia da Linguagem'
    },
    {
        id: 369,
        titulo: 'Linguística Histórica'
    },
    {
        id: 370,
        titulo: 'Sociolinguística e Dialetologia'
    },
    {
        id: 371,
        titulo: 'Psicolinguística'
    },
    {
        id: 372,
        titulo: 'Linguística Aplicada'
    },
    {
        id: 373,
        titulo: 'Língua Portuguesa'
    },
    {
        id: 374,
        titulo: 'Línguas Estrangeiras Modernas'
    },
    {
        id: 375,
        titulo: 'Línguas Clássicas'
    },
    {
        id: 376,
        titulo: 'Línguas Indígenas'
    },
    {
        id: 377,
        titulo: 'Teoria Literária'
    },
    {
        id: 378,
        titulo: 'Literatura Brasileira'
    },
    {
        id: 379,
        titulo: 'Outras Literaturas Vernáculas'
    },
    {
        id: 380,
        titulo: 'Literaturas Estrangeiras Modernas'
    },
    {
        id: 381,
        titulo: 'Literaturas Clássicas'
    },
    {
        id: 382,
        titulo: 'Literatura Comparada'
    },
    {
        id: 383,
        titulo: 'Fundamentos e Crítica das Artes'
    },
    {
        id: 384,
        titulo: 'Artes Plásticas'
    },
    {
        id: 385,
        titulo: 'Música'
    },
    {
        id: 386,
        titulo: 'Dança'
    },
    {
        id: 387,
        titulo: 'Teatro'
    },
    {
        id: 388,
        titulo: 'Ópera'
    },
    {
        id: 389,
        titulo: 'Fotografia'
    },
    {
        id: 390,
        titulo: 'Cinema'
    },
    {
        id: 391,
        titulo: 'Artes do Vídeo'
    },
    {
        id: 392,
        titulo: 'Educação Artística'
    },
]

const initialFilterDefault = {
    sideFilter: {
        buscaInterna: '',
        cargaHoraria: [0, 200],
        categoriasDeCompetencias: [],
        competencias: [],
        temas: [],
        subtemas: [],
        instCertificadora: [],
    },
    visualization: {
        esquemaDeCores: 'categoria',
        itinerario: 1,
    }
}

const cursosFilterFuctionDefault = (filtro) => {
    let novosCursos = []
    cursosDefault.forEach(curso => {
        let contemTema = curso.filter.temas.some(idTema => filtro.sideFilter.temas.includes(idTema))
        let temasVazio = filtro.sideFilter.temas.length === 0
        
        let contemSubtema = curso.filter.subtemas.some(idSubtema => filtro.sideFilter.subtemas.includes(idSubtema))
        let subtemasVazio = filtro.sideFilter.subtemas.length === 0

        let categoriasDoCurso = categoriasDeCompetenciasDefault.filter(categoria => categoria.competencias.some(competencia => curso.filter.competencias.includes(competencia)))
        let contemCategoria = categoriasDoCurso.some(categoria => filtro.sideFilter.categoriasDeCompetencias.includes(categoria.id))
        let categoriasVazio = filtro.sideFilter.categoriasDeCompetencias.length === 0

        let contemCompetencia = curso.filter.competencias.some(idCompetencia => filtro.sideFilter.competencias.includes(idCompetencia))
        let competenciasVazio = filtro.sideFilter.competencias.length === 0
        
        let contemInstituicao = filtro.sideFilter.instCertificadora.some(inst => curso.instCert === inst)
        let instituicoesVazio = filtro.sideFilter.instCertificadora.length === 0
        
        let buscaInterna = curso.title.toLowerCase().startsWith(filtro.sideFilter.buscaInterna.toLowerCase())
        let buscaInternaVazia = filtro.sideFilter.buscaInterna === '' || filtro.sideFilter.buscaInterna === undefined
        
        let contemItinerario = curso.itinerario === filtro.visualization.itinerario
        
        let contemCargaHoraria = filtro.sideFilter.cargaHoraria[0] <= curso.cargaHoraria && curso.cargaHoraria <= filtro.sideFilter.cargaHoraria[1]

        let temas = contemTema || temasVazio
        let subtemas = contemSubtema || subtemasVazio 
        let categorias = contemCategoria || categoriasVazio 
        let competencias = contemCompetencia || competenciasVazio 
        let instituicoes = contemInstituicao || instituicoesVazio 
        let busca = buscaInterna || buscaInternaVazia 
        let itinerario = contemItinerario

        if ( temas && subtemas && categorias && competencias && instituicoes && busca && contemCargaHoraria && itinerario) {
            novosCursos.push(curso.id)
        }
    })
    return(novosCursos)
}

const cursosFiltradosDefault = cursosFilterFuctionDefault(initialFilterDefault)


const reformuladorDeElementosCytoscape = (novosCursos, esqCores) => {
    // todos os cursos
    let categoriasAdicionadas = []
    let competenciasAdicionadas = []
    let elementos = []
    novosCursos.forEach((idCurso) => {
        const curso = cursosDefault.find((curso) => curso.id === idCurso)
        const competencias = curso.filter.competencias
        const catData = categoriasDeCompetenciasDefault.filter(categoria => categoria.competencias.some(competencia => curso.filter.competencias.includes(competencia)))
        elementos.push({
            group: 'nodes',
            data: {
                id: 'curso'+curso.id,
                label: curso.title,
                image: esqCores === 'categoria' ? fundosCategoria.curso[catData[0].id] : fundosItinerario.curso[curso.itinerario],
                itinerario: curso.itinerario,
                color: esqCores === 'categoria' ? colorsCategorias[catData[0].id] : colorsItinerarios[curso.itinerario],
                cargaHoraria: curso.cargaHoraria,
                instCert: curso.instCert,
                possuiAcessibilidade: curso.possuiAcessibilidade,
                competencias: curso.filter.competencias,
                temas: curso.filter.temas,
                subtemas: curso.filter.subtemas
            },
            grabbable: true,
            classes: ['curso']
        })
        // Adicionando Competencia
        competencias.forEach(idCompetencia => {
            if (!competenciasAdicionadas.includes(idCompetencia)) {
                let competencia = competenciasDefault.find(competencia => competencia.id === idCompetencia)
                let categoriaPertencente = categoriasDeCompetenciasDefault.find(categoria => categoria.competencias.includes(idCompetencia))
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'competencia'+competencia.id,
                        label: competencia.titulo,
                        color: esqCores === 'categoria' ? colorsCategorias[catData[0].id] : colorsItinerarios[curso.itinerario],
                        image: esqCores === 'categoria' ? fundosCategoria.competencia[catData[0].id] : fundosItinerario.competencia[curso.itinerario],
                    },
                    grabbable: true,
                    classes: ['competencia']
                })
                competenciasAdicionadas.push(competencia.id)
                elementos.push({
                    group: 'edges',
                    data: {
                        id: 'edge'+categoriaPertencente.id+'competencia'+idCompetencia,
                        source: 'categoria'+categoriaPertencente.id,
                        target: 'competencia'+idCompetencia
                    }
                })
            }
        })
        competencias.forEach((idCompetencia) => {
            elementos.push({
                group: 'edges',
                data: {
                    id: 'edge'+curso.id+'competencia'+idCompetencia,
                    source: 'competencia'+idCompetencia,
                    target: 'curso'+curso.id
                }
            })
        })
        // Adicionando Categoria
        catData.forEach((categoria) => {
            if (!categoriasAdicionadas.includes(categoria.id)) {
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'categoria'+categoria.id,
                        label: categoria.nome,
                        color: esqCores === 'categoria' ? colorsCategorias[categoria.id] : colorsItinerarios[curso.itinerario],
                        competencias: categoria.competencias,
                        image: esqCores === 'categoria' ? fundosCategoria.categoria[categoria.id] : fundosItinerario.categoria[curso.itinerario],
                    },
                    grabbable: true,
                    classes: ['categoria']
                })
            }
        })
    })

    return(elementos)
}

const trilhosModel = {

    cursos:  cursosDefault,
    
    instituicoes: instituicoesDefault,
    
    categoriasDeCompetencias: categoriasDeCompetenciasDefault,
    
    competencias: competenciasDefault,
    
    temas: temasDefault,
    
    subtemas: subtemasDefault,
    
    cursosFiltrados: cursosFiltradosDefault,
    
    filterDefault: initialFilterDefault,

    filter: initialFilterDefault,
    
    changeFilter: action((state, payload) => {
        /* state.filter.buscaInterna = payload.buscaInterna ? payload.buscaInterna : ''
        state.filter.categoriasDeCompetencias = payload.categoriasDeCompetencias ? payload.categoriasDeCompetencias : []
        state.filter.competencias = payload.competencias ? payload.competencias : []
        state.filter.temas = payload.temas ? payload.temas : []
        state.filter.cargaHoraria = payload.cargaHoraria ? payload.cargaHoraria : [0, 200]
        state.filter.instCertificadora = payload.instCertificadora ? payload.instCertificadora : []
        state.filter.subtemas = payload.subtemas ? payload.subtemas : [] */
        state.filter.sideFilter = payload
    }),
    
    filterFunction: action((state, payload) => {
        let filtro = payload
        let novosCursos = cursosFilterFuctionDefault(filtro)
        state.cursosFiltrados = novosCursos
        state.elements = reformuladorDeElementosCytoscape(novosCursos, state.filter.visualization.esquemaDeCores)
    
    }),
    
    onChangeFilter: unstable_effectOn(
        // targetResolver:
        [state => state.filter],
        // handler:
        (actions, change) => {
            actions.filterFunction(change.current[0])
        }
    ),

    setCursosFiltrados: action((state, payload) => {
        state.cursosFiltrados = payload
    }),

    setItinerario: action((state, payload) => {
        state.filter.sideFilter = state.filterDefault.sideFilter
        state.filter.visualization.itinerario = payload
    }),

    setColorSchema: action((state, payload) => {
        state.filter.visualization.esquemaDeCores = payload
    }),
    
    elements: reformuladorDeElementosCytoscape(cursosFiltradosDefault, initialFilterDefault.visualization.esquemaDeCores),
}
    
    export default trilhosModel