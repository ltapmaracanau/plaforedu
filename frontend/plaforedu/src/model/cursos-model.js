import { action, actionOn } from "easy-peasy"

const cursosDefault =  [
    {
        id: 1,
        title: 'Título do Curso 1',
        descricao: 'Descrição do curso',
        cargaHoraria: 20,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [1, 2],
            temas: [1],
            subtemas: [1],
        }
    },
    {
        id: 2,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 130,
        instCert: 2,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [2],
            temas: [1],
            subtemas: [2],
        }
    },
    {
        id: 3,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 30,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [3],
            temas: [2],
            subtemas: [3],
        }
    },
    {
        id: 4,
        title: 'Curso Tal',
        descricao: 'Descrição do curso',
        cargaHoraria: 50,
        instCert: 4,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [4],
            temas: [1, 2],
            subtemas: [1, 2, 3],
        }
    },
    {
        id: 5,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 60,
        instCert: 5,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [5],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 6,
        title: 'Curso gerencial',
        descricao: 'Descrição do curso',
        cargaHoraria: 10,
        instCert: 6,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [6],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 7,
        title: 'Javascript do básico ao Avançado',
        descricao: 'Descrição do curso',
        cargaHoraria: 20,
        instCert: 7,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [7],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 8,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 30,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [8],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 9,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 40,
        instCert: 2,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [9],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 10,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 180,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [10],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 11,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 120,
        instCert: 4,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [11],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 12,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 90,
        instCert: 5,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [12],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 13,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 60,
        instCert: 6,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [13],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 14,
        title: 'Título do Curso',
        descricao: 'Descrição do curso',
        cargaHoraria: 20,
        instCert: 7,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [14],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 15,
        title: 'Título do Curso 15',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [15],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 16,
        title: 'Título do curso 16',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 2,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [16],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 17,
        title: 'Título do curso 17',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 3,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [17],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 18,
        title: 'Título do curso 18',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 4,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [18],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 19,
        title: 'Título do curso 19',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 5,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [19],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 20,
        title: 'Título do curso 20',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 6,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [20],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 21,
        title: 'Título do curso 21',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 7,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [21],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 22,
        title: 'Título do curso 22',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [22],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 23,
        title: 'Título do curso 23',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [23],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 24,
        title: 'Título do curso 24',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [24],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 25,
        title: 'Título do curso 25',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [25],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 26,
        title: 'Título do curso 26',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [26],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 27,
        title: 'Título do curso 27',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [27],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 28,
        title: 'Título do curso 28',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [28],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 29,
        title: 'Título do curso 29',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [29],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 30,
        title: 'Título do curso 30',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [30],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 31,
        title: 'Título do curso 31',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [31],
            temas: [],
            subtemas: [],
        }
    },
    {
        id: 32,
        title: 'Título do curso 32',
        descricao: 'Descrição do curso',
        cargaHoraria: 80,
        instCert: 1,
        possuiAcessibilidade: 'Sim',
        link: 'https://www.udemy.com/course/curso-web/',
        obs: '',
        filter: {
            competencias: [32],
            temas: [],
            subtemas: [],
        }
    },
]

const instituicoesDefault = [
    {
        id: 1,
        titulo: 'IFCE'
    },
    {
        id: 2,
        titulo: 'UFC'
    },
    {
        id: 3,
        titulo: 'UFRN'
    },
    {
        id: 4,
        titulo: 'MEC'
    },
    {
        id: 5,
        titulo: 'UECE'
    },
    {
        id: 6,
        titulo: 'UFRJ'
    },
    {
        id: 7,
        titulo: 'USP'
    },
]

const competenciasDefault = [
    {
        id: 1,
        titulo: 'Gestão do desenvolvimento de pessoas'
    },
    {
        id: 2,
        titulo: 'Gestão da qualidade'
    },
    {
        id: 3,
        titulo: 'Liderança eficaz'
    },
    {
        id: 4,
        titulo: 'Gerenciamento de recursos'
    },
    {
        id: 5,
        titulo: 'Planejamento'
    },
    {
        id: 6,
        titulo: 'Relacionamento com dirigentes'
    },
    {
        id: 7,
        titulo: 'Resolução de problemas'
    },
    {
        id: 8,
        titulo: 'Tomada de decisão para gestores'
    },
    {
        id: 9,
        titulo: 'Comunicação interpessoal'
    },
    {
        id: 10,
        titulo: 'Gestão da participação cidadã'
    },
    {
        id: 11,
        titulo: 'Negociação'
    },
    {
        id: 12,
        titulo: 'Orientação ao cidadão'
    },
    {
        id: 13,
        titulo: 'Relações institucionais'
    },
    {
        id: 14,
        titulo: 'Trabalho em equipe'
    },
    {
        id: 15,
        titulo: 'Gerenciamento de políticas'
    },
    {
        id: 16,
        titulo: 'Construção de redes'
    },
    {
        id: 17,
        titulo: 'Gerenciamento de mudança'
    },
    {
        id: 18,
        titulo: 'Gerenciamento digital'
    },
    {
        id: 19,
        titulo: 'Inovação'
    },
    {
        id: 20,
        titulo: 'Proatividade'
    },
    {
        id: 21,
        titulo: 'Trabalho sob pressão'
    },
    {
        id: 22,
        titulo: 'Visão estratégica'
    },
    {
        id: 23,
        titulo: 'Contribuição técnico-profissional'
    },
    {
        id: 24,
        titulo: 'Comunicação efetiva'
    },
    {
        id: 25,
        titulo: 'Organização da rotina'
    },
    {
        id: 26,
        titulo: 'Resolutividade'
    },
    {
        id: 27,
        titulo: 'Uso de TIC'
    },
    {
        id: 28,
        titulo: 'Análise de problemas'
    },
    {
        id: 29,
        titulo: 'Criatividade'
    },
    {
        id: 30,
        titulo: 'Melhoria contínua de processos'
    },
    {
        id: 31,
        titulo: 'Tomada de decisão'
    },
    {
        id: 32,
        titulo: 'Controle emocional'
    },
]

const categoriasDeCompetenciasDefault = [
    {
        id: 1,
        nome: 'Gestão de Resultados',
        competencias: [1,2,3,4,5,6,7,8]
    },
    {
        id: 2,
        nome: 'Gestão de Relacionamentos',
        competencias: [9,10,11,12,13,14]
    },
    {
        id: 3,
        nome: 'Gestão de Mudanças',
        competencias: [15,16,17,18,19,20,21,22]
    },
    {
        id: 4,
        nome: 'Orientação a Resultados',
        competencias: [23,24,25,26,27]
    },
    {
        id: 5,
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

const cursosFiltradosDefault = cursosDefault.map(curso => curso.id)

const reformuladorDeElementosCytoscape = (novosCursos) => {
    // todos os cursos
    const cursos = novosCursos.map((idCurso) => {
        const curso = cursosDefault.filter((curso) => curso.id === idCurso)[0]
        return({
            group: 'nodes',
            data: {
                id: 'curso'+curso.id,
                label: curso.title,
                cargaHoraria: curso.cargaHoraria,
                instCert: curso.instCert,
                possuiAcessibilidade: curso.possuiAcessibilidade,
                categoriasDeCompetencias: curso.filter.categoriasDeCompetencias,
                competencias: curso.filter.competencias,
                temas: curso.filter.temas,
                subtemas: curso.filter.subtemas
            },
            grabbable: true,
            classes: ['curso']
        })
    })
    // todas as ccompetencias
    let idsTodasCompetencias = []
    cursos.forEach((curso) => {
        curso.data.competencias.forEach(competencia => {
            if (!idsTodasCompetencias.includes(competencia)) {
                idsTodasCompetencias.push(competencia)
            }
        });
    })
    let competencias = idsTodasCompetencias.map((idCompetencia) => {
        const competenciaData = competenciasDefault.find(competencia => competencia.id === idCompetencia)
        return({
            group: 'nodes',
            data: {
                id: 'competencia'+competenciaData.id,
                label: competenciaData.titulo,
            },
            grabbable: true,
            classes: ['competencia']
        })
    })
    // Edges de competências
    let edgesCompetencias = []
    cursos.forEach(curso => {
        curso.data.competencias.forEach((idCompetencia) => {
            edgesCompetencias.push({
                group: 'edges',
                data: {
                    id: 'edge'+curso.data.id+'competencia'+idCompetencia,
                    source: 'competencia'+idCompetencia,
                    target: curso.data.id
                }
            })
        })
    })
    // todas as Categorias
    let idsTodasCategorias = []
    categoriasDeCompetenciasDefault.forEach((categoria) => {
        if (categoria.competencias.some(competencia => idsTodasCompetencias.includes(competencia))) {
            idsTodasCategorias.push(categoria.id)
        }
    })
    let categorias = idsTodasCategorias.map((idCategoria) => {
        const categoriaData = categoriasDeCompetenciasDefault.find(categoria => categoria.id === idCategoria)
        return({
            group: 'nodes',
            data: {
                id: 'categoria'+categoriaData.id,
                label: categoriaData.nome,
                competencias: categoriaData.competencias
            },
            grabbable: true,
            classes: ['categoria']
        })
    })
    // Edges de categorias
    let edgesCategorias = []
    categorias.forEach(categoria => {
        categoria.data.competencias.forEach((idCompetencia) => {
            if (idsTodasCompetencias.includes(idCompetencia)) {
                edgesCategorias.push({
                    group: 'edges',
                    data: {
                        id: 'edge'+categoria.data.id+'competencia'+idCompetencia,
                        source: categoria.data.id,
                        target: 'competencia'+idCompetencia
                    }
                })
            }
        })
    })

    return(cursos.concat(competencias).concat(edgesCompetencias).concat(categorias).concat(edgesCategorias))
}

const trilhosModel = {
    
    cursos:  cursosDefault,
    
    instituicoes: instituicoesDefault,

    categoriasDeCompetencias: categoriasDeCompetenciasDefault,

    competencias: competenciasDefault,

    temas: temasDefault,

    subtemas: subtemasDefault,
    
    cursosFiltrados: cursosFiltradosDefault,

    filterDefault: {
        buscaInterna: '',
        cargaHoraria: [0, 200],
        categoriasDeCompetencias: [],
        competencias: [],
        temas: [],
        subtemas: [],
        instCertificadora: [],
    },

    filter: {
        buscaInterna: '',
        cargaHoraria: [0, 200],
        categoriasDeCompetencias: [],
        competencias: [],
        temas: [],
        subtemas: [],
        instCertificadora: [],
    },

    changeFilter: action((state, payload) => {
        state.filter.buscaInterna = payload.buscaInterna
        state.filter.categoriasDeCompetencias = payload.categoriasDeCompetencias
        state.filter.competencias = payload.competencias
        state.filter.temas = payload.temas
        state.filter.cargaHoraria = payload.cargaHoraria
        state.filter.instCertificadora = payload.instCertificadora
        state.filter.subtemas = payload.subtemas
    }),

    onChangeFilter: actionOn(
        // targetResolver:
        actions => actions.changeFilter,
        // handler:
        (state, target) => {
            let filtro = target.payload
            let novosCursos = []
            state.cursos.forEach(curso => {
                let contemTema = curso.filter.temas.some(idTema => filtro.temas.includes(idTema))
                let temasVazio = filtro.temas.length === 0
                
                let contemSubtema = curso.filter.subtemas.some(idSubtema => filtro.subtemas.includes(idSubtema))
                let subtemasVazio = filtro.subtemas.length === 0

                let categoriasDoCurso = categoriasDeCompetenciasDefault.filter(categoria => categoria.competencias.some(competencia => curso.filter.competencias.includes(competencia)))
                let contemCategoria = categoriasDoCurso.some(categoria => filtro.categoriasDeCompetencias.includes(categoria.id))
                let categoriasVazio = filtro.categoriasDeCompetencias.length === 0

                let contemCompetencia = curso.filter.competencias.some(idCompetencia => filtro.competencias.includes(idCompetencia))
                let competenciasVazio = filtro.competencias.length === 0
                
                let contemInstituicao = filtro.instCertificadora.some(inst => curso.instCert === inst)
                let instituicoesVazio = filtro.instCertificadora.length === 0
                
                let buscaInterna = curso.title.toLowerCase().startsWith(filtro.buscaInterna.toLowerCase())
                let buscaInternaVazia = filtro.buscaInterna === '' || filtro.buscaInterna === undefined
                
                let contemCargaHoraria = filtro.cargaHoraria[0] <= curso.cargaHoraria && curso.cargaHoraria <= filtro.cargaHoraria[1]

                let temas = contemTema || temasVazio
                let subtemas = contemSubtema || subtemasVazio 
                let categorias = contemCategoria || categoriasVazio 
                let competencias = contemCompetencia || competenciasVazio 
                let instituicoes = contemInstituicao || instituicoesVazio 
                let busca = buscaInterna || buscaInternaVazia 

                if ( temas && subtemas && categorias && competencias && instituicoes && busca && contemCargaHoraria) {
                    novosCursos.push(curso.id)
                }

            })

            state.cursosFiltrados = novosCursos

            state.elements = reformuladorDeElementosCytoscape(novosCursos)

        }
    ),

    elements: reformuladorDeElementosCytoscape(cursosFiltradosDefault),

}

export default trilhosModel