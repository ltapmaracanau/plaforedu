function hexToRGB(h, opacity) {
  let r = 0,
    g = 0,
    b = 0;

  if (h) {
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];

      // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
  }

  return opacity
    ? "rgb(" + +r + "," + +g + "," + +b + "," + opacity + ")"
    : "rgb(" + +r + "," + +g + "," + +b + ")";
}

function getImageBackground(type, color) {
  const svgs = {
    curso: `
    <svg height="100px" width="100px" id="Cursos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle fill="${hexToRGB(color, "60%")}" cx="50" cy="50" r="50"/>
      <circle fill="white" cx="50" cy="50" r="44.35"/>
      <path fill="${hexToRGB(
        color
      )}" d="M50,56.38a4.13,4.13,0,0,1-1.19-.16L31.38,51.47v9.76a1.85,1.85,0,0,0,1,1.66l3.15,1.86a29,29,0,0,0,28.93,0l3.15-1.86a1.91,1.91,0,0,0,1-1.66V51.47L51.16,56.22a4.13,4.13,0,0,1-1.19.16Z"/>
      <path fill="${hexToRGB(
        color
      )}" d="M81.33,39.93,50.49,31.46a1.65,1.65,0,0,0-1,0L18.62,39.93a1.94,1.94,0,0,0,0,3.72l4,1.08V58.21a2.84,2.84,0,1,0,2.58,0V45.46l24.28,6.66a1.8,1.8,0,0,0,1,0l30.84-8.47a1.9,1.9,0,0,0,1.39-1.86,1.93,1.93,0,0,0-1.45-1.86Z"/>
    </svg>`,
    competencia: `
    <svg height="120px" width="120px" id="Competencias" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle fill="${hexToRGB(color)}" cx="50" cy="50" r="50"/>
      <circle fill="white" cx="50" cy="50" r="44.35"/>
      <path fill="${hexToRGB(
        color
      )}" d="M53.92,52.06a6.2,6.2,0,0,0-1,9.64,6,6,0,0,0,4.46,1.8,2.49,2.49,0,0,1,1.91.76,2.66,2.66,0,0,1,.6,2.72l-7.74,7.63a3,3,0,0,1-4.3,0L41,67.69a2.63,2.63,0,0,0-3.65,0,2.73,2.73,0,0,0-.76,1.91,6.38,6.38,0,0,1-1.8,4.46,6.22,6.22,0,0,1-9.69-7.68,6.31,6.31,0,0,1,5.33-2.94A2.59,2.59,0,0,0,32.3,59l-6.86-6.86a3,3,0,0,1,0-4.3L32.35,41a2.63,2.63,0,0,0,0-3.65,2.7,2.7,0,0,0-1.9-.76A6.38,6.38,0,0,1,26,34.74a6.23,6.23,0,0,1,1-9.64,6.1,6.1,0,0,1,6.64,0,6.32,6.32,0,0,1,2.94,5.34,2.41,2.41,0,0,0,.76,1.85,2.54,2.54,0,0,0,3.65,0l6.87-6.81a3,3,0,0,1,4.3,0L59.1,32.4a2.56,2.56,0,0,0,3.59,0,2.73,2.73,0,0,0,.76-1.91A6.42,6.42,0,0,1,65.25,26a6.22,6.22,0,0,1,9.69,7.68,6.36,6.36,0,0,1-5.33,2.95,2.77,2.77,0,0,0-1.91.7,2.57,2.57,0,0,0,0,3.6l6.92,6.92a3,3,0,0,1,0,4.3l-7.68,7.68a2.48,2.48,0,0,1-2.73-.6,2.73,2.73,0,0,1-.76-1.91A6,6,0,0,0,60.51,52a6.14,6.14,0,0,0-6.59.06Z"/>
    </svg>
    `,
    categoria: `
    <svg height="150px" width="150px" id="Categorias" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle fill="${hexToRGB(color)}" cx="50" cy="50" r="50"/>
      <path fill="white" d="M49.3,70.8,28.73,48.19a9.49,9.49,0,0,1-2.48-6.4V31.37l-3.84,8.92a5.94,5.94,0,0,0-.17,4.29l10,28.9a6.05,6.05,0,0,0,3.09,3.45,6.1,6.1,0,0,0,2.29.58,6.22,6.22,0,0,0,2.34-.34l11.93-4.4A10,10,0,0,1,49.3,70.8Z"/>
      <path fill="white" d="M77.65,47.24a5.84,5.84,0,0,0-1.28-2l-21-20.92a5.72,5.72,0,0,0-4.2-1.88H35.8a6,6,0,0,0-4.28,1.79,5.23,5.23,0,0,0-.48.56,5.83,5.83,0,0,0-.8,1.42,5.72,5.72,0,0,0-.44,2.31V41.79a5.93,5.93,0,0,0,1.56,4l20.57,22.6a6.1,6.1,0,0,0,1.9,1.39,6,6,0,0,0,2.3.55h.24A6,6,0,0,0,58.46,70a5.91,5.91,0,0,0,2-1.25l3.59-3.41L76.22,53.77a6,6,0,0,0,1.35-1.92,5.83,5.83,0,0,0,.51-2.29A5.73,5.73,0,0,0,77.65,47.24ZM44.29,35.37a4.11,4.11,0,0,1-1.22,1.09,4.36,4.36,0,0,1-1.55.51,4.19,4.19,0,0,1-.5,0,6.26,6.26,0,0,1-.63,0l-.49-.11a4.2,4.2,0,0,1-3-3.53,3.43,3.43,0,0,1,0-1,3.91,3.91,0,0,1,.52-1.62,3.08,3.08,0,0,1,.32-.48,4.2,4.2,0,0,1,2.77-1.59l.51,0a4.16,4.16,0,0,1,4.14,3.65,4.26,4.26,0,0,1,0,.5,4.17,4.17,0,0,1-.5,2A3,3,0,0,1,44.29,35.37Z"/>
    </svg>
    `,
  };

  return encodeURI("data:image/svg+xml;utf-8," + svgs[type]);
}

const colorDefault = "#000";

export default function (
  dados,
  filtro,
  competencies,
  itinerarios = [],
  tipoClassificacao
) {
  let elementos = [];
  if (tipoClassificacao) {
    // False: por competências   True: por trilhas

    // Contadores para montar grafo da trilha >>
    let counterCol = 1;
    dados.forEach((trilha) => {
      // Verificações se devo mostrar a trilha ou não

      // Se todas as competências estiverem arqivadas
      // Se alguma não estiver arquivada eu não entro na condicional

      if (
        !trilha.competencies.some((competencie) => {
          const competenceData = competencies.find(
            (comp) => comp.id === competencie.id
          );
          if (competenceData) {
            return !competenceData?.filedAt;
          } else {
            return false;
          }
        }) &&
        trilha.competencies.length !== 0
      ) {
        return;
      }
      // Se a trilha estiver com a lista de cursos vazia
      if (trilha.courses.length === 0) {
        return;
      }
      // Se todos os cursos estiverem arquivados eu não exibo a trilha
      if (
        !trilha.courses.some((curso) => {
          return !curso?.filedAt;
        }) &&
        trilha.courses.length !== 0
      ) {
        return;
      }

      let counterRowCourse = 1;

      // Adiciondo node topo da trilha
      const competenceData = competencies.find(
        (comp) => comp.id === trilha.competencies[0].id
      );
      const colorCategoria =
        competenceData?.categoriesCompetencies[0]?.color || colorDefault;
      elementos.push({
        group: "nodes",
        data: {
          id: "trilha" + trilha.id,
          label: trilha.name,
          color: colorCategoria,
          image: getImageBackground("categoria", colorCategoria),
          col: counterCol,
          row: 0,
        },
        grabbable: true,
        classes: ["categoria"],
      });
      // Adicionando os cursos da trilha na sequência correta

      let idCursoAnterior = null;
      let maxEquiv = 0;

      trilha.courses.forEach((cursoNaTrilha, index) => {
        // Se o curso estiver arquivado eu não mostro ele
        if (cursoNaTrilha.filedAt) {
          return;
        }
        let todosEquivArquiv =
          !cursoNaTrilha.equivalents.some((curso) => {
            return !curso?.filedAt;
          }) && cursoNaTrilha.equivalents.length !== 0;
        let qtdEquiv = 0;

        if (cursoNaTrilha.equivalents.length !== 0) {
          elementos.push({
            group: "nodes",
            data: {
              id:
                "trilha" + trilha.id + "curso" + cursoNaTrilha.id + "container",
              label: "Cursos Equivalentes",
              color: colorCategoria,
              col: counterCol,
              row: counterRowCourse,
            },
            grabbable: true,
          });
        }

        // Fim do teste
        elementos.push({
          group: "nodes",
          data: {
            id: "trilha" + trilha.id + "curso" + cursoNaTrilha.id,
            label: cursoNaTrilha.name,
            image: getImageBackground("curso", colorCategoria),
            parent: !todosEquivArquiv
              ? "trilha" + trilha.id + "curso" + cursoNaTrilha.id + "container"
              : undefined,
            color: colorCategoria,
            col: counterCol,
            row: counterRowCourse,
          },
          grabbable: true,
          classes: ["curso"],
        });

        if (!todosEquivArquiv) {
          cursoNaTrilha.equivalents.forEach((equivalent) => {
            if (equivalent.filedAt) {
              return;
            }
            qtdEquiv++;
            elementos.push({
              group: "nodes",
              data: {
                id:
                  "trilha" +
                  trilha.id +
                  "curso" +
                  cursoNaTrilha.id +
                  "equivalent" +
                  equivalent.id,
                label: equivalent.name,
                image: getImageBackground("curso", colorCategoria),
                parent:
                  "trilha" +
                  trilha.id +
                  "curso" +
                  cursoNaTrilha.id +
                  "container",
                color: colorCategoria,
                col: counterCol + qtdEquiv,
                row: counterRowCourse,
              },
              grabbable: true,
              classes: ["curso"],
            });
          });
        }

        // Adicionando a edge deste curso com o curso anterior na sequência
        let idEdgeCursoAtual = qtdEquiv
          ? "trilha" + trilha.id + "curso" + cursoNaTrilha.id + "container"
          : `trilha${trilha.id}curso${cursoNaTrilha.id}`;
        if (idCursoAnterior) {
          elementos.push({
            group: "edges",
            data: {
              id: `edge${idCursoAnterior}to${cursoNaTrilha.id}`,
              source: idCursoAnterior,
              target: idEdgeCursoAtual,
            },
          });
        } else {
          elementos.push({
            group: "edges",
            data: {
              id: `edge${trilha.id}to${cursoNaTrilha.id}`,
              source: "trilha" + trilha.id,
              target: idEdgeCursoAtual,
            },
          });
        }
        maxEquiv = qtdEquiv > maxEquiv ? qtdEquiv : maxEquiv;
        idCursoAnterior = idEdgeCursoAtual;
        counterRowCourse++;
      });
      counterCol = counterCol + maxEquiv + 1;
    });
  } else {
    let competenciasAdicionadas = [];
    let categoriasAdicionadas = [];

    dados.forEach((curso) => {
      // Aqui eu decido se vou mostrar o curso no grafo de acordo com os dados arquivados
      if (
        !curso.competencies.some((competencie) => !competencie?.filedAt) &&
        curso.competencies.length !== 0
      ) {
        return;
      }
      if (
        !curso.institutions.some((institution) => !institution?.filedAt) &&
        curso.institutions.length !== 0
      ) {
        return;
      }
      if (
        !curso.competencies.some((competencie) => {
          let compData = competencies.find(
            (comp) => comp.id === competencie.id
          );
          if (compData) {
            return compData.categoriesCompetencies.some(
              (categorie) => !categorie.filedAt
            );
          } else {
            return false;
          }
        }) &&
        curso.competencies.length !== 0
      ) {
        return;
      }

      let colorCategoria = colorDefault;
      let colorItinerario = colorDefault;

      // Aqui eu defino qual a cor das imagens por categoria de competência
      if (filtro.competencies.length !== 0) {
        filtro.competencies.some((compId) => {
          const compData = competencies.find((comp) => comp.id === compId);
          return compData.categoriesCompetencies.some((cat) => {
            if (cat.color) {
              colorCategoria = cat.color;
              return true;
            }
          });
        });
      } else {
        curso.competencies.some((competencia) => {
          const compData = competencies.find(
            (comp) => comp.id === competencia.id
          );
          return compData?.categoriesCompetencies?.some((cat) => {
            if (cat.color) {
              colorCategoria = cat.color;
              return true;
            }
          });
        });
      }

      // Aqui eu defino qual a cor das imagens por itinerário
      if (filtro.itinerario) {
        let itinerarioData = itinerarios.find(
          (iti) => iti.id === filtro.itinerario
        );
        colorItinerario = itinerarioData ? itinerarioData.color : colorDefault;
      } else {
        colorItinerario =
          curso.itineraries.length !== 0
            ? curso.itineraries[0].color
            : colorDefault;
      }
      // Adicionando node do curso no grafo
      elementos.push({
        group: "nodes",
        data: {
          id: "curso" + curso.id,
          label: curso.name,
          image:
            filtro.esquemaDeCores === "categoria"
              ? getImageBackground("curso", colorCategoria)
              : getImageBackground("curso", colorItinerario),
          color:
            filtro.esquemaDeCores === "categoria"
              ? colorCategoria
              : colorItinerario,
        },
        grabbable: true,
        classes: ["curso"],
      });
      // Adicionando Competencia
      curso.competencies.forEach((competencia) => {
        // Verificação se a competência está arquivada
        const competenceData = competencies.find(
          (comp) => comp.id === competencia.id
        );
        if (competenceData.filedAt) {
          return;
        }
        if (
          !competenciasAdicionadas.some((comp) => comp.id === competencia.id)
        ) {
          elementos.push({
            group: "nodes",
            data: {
              id: "competencia" + competencia.id,
              label: competencia.name,
              color:
                filtro.esquemaDeCores === "categoria"
                  ? colorCategoria
                  : colorItinerario,
              image:
                filtro.esquemaDeCores === "categoria"
                  ? getImageBackground("competencia", colorCategoria)
                  : getImageBackground("competencia", colorItinerario),
            },
            grabbable: true,
            classes: ["competencia"],
          });
          competenciasAdicionadas.push(competencia);
          // Adicionando a categoria da competência se não existir
          competenceData.categoriesCompetencies.forEach((categoria) => {
            if (!categoriasAdicionadas.some((cat) => cat.id === categoria.id)) {
              if (categoria.filedAt) {
                return;
              }
              elementos.push({
                group: "nodes",
                data: {
                  id: "categoria" + categoria.id,
                  label: categoria.name,
                  color:
                    filtro.esquemaDeCores === "categoria"
                      ? colorCategoria
                      : colorItinerario,
                  image:
                    filtro.esquemaDeCores === "categoria"
                      ? getImageBackground("categoria", colorCategoria)
                      : getImageBackground("categoria", colorItinerario),
                },
                grabbable: true,
                classes: ["categoria"],
              });
              categoriasAdicionadas.push(categoria);

              // Adicionando a edge entre a categoria e a competência
              elementos.push({
                group: "edges",
                data: {
                  id:
                    "edgecategoria" +
                    categoria.id +
                    "competencia" +
                    competencia.id,
                  source: "categoria" + categoria.id,
                  target: "competencia" + competencia.id,
                },
              });
            }
          });
        }
        // Edge entre competência e curso
        elementos.push({
          group: "edges",
          data: {
            id: "edgecurso" + curso.id + "competencia" + competencia.id,
            source: "competencia" + competencia.id,
            target: "curso" + curso.id,
          },
        });
      });
    });
  }
  return elementos;
}
