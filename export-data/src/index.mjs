import ObjectsToCsv from 'objects-to-csv';

import { cursos, categoriasDeCompetencias, competencias } from './database.mjs';

const nomesItinerarios = {
  1: 'iniciacao-ao-servico-publico',
  2: 'tecnico-administrativo-em-educacao',
  3: 'docente',
  4: 'gerencial',
  5: 'preparacao-para-a-aposentadoria',
};

const replaceSpecialChars = (str) => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/([^\w]+|\s+)/g, '-')
		.replace(/\-\-+/g, '-')
		.replace(/(^-+|-+$)/, '')
    .toLowerCase();
}

const getCategoriaCompetencia = (id_competencia) => {
  const categoria = categoriasDeCompetencias.find(categoria => categoria.competencias.includes(id_competencia));

  return replaceSpecialChars(categoria.nome);
};

const getCompetencia = (id_competencia) => {
  const competencia = competencias.find(competencia => competencia.id === id_competencia);

  return replaceSpecialChars(competencia.titulo);
}

for (let indexItinerario = 1; indexItinerario <= 5; indexItinerario++) {
  for (let indexCompetencia = 1; indexCompetencia <= competencias.length; indexCompetencia++) {
    const cursosPorItinerario = cursos.filter(curso => curso.itinerario === indexItinerario)
      .filter(curso => curso.filter.competencias.includes(indexCompetencia));

    if (cursosPorItinerario.length > 0) {
      const data = cursosPorItinerario.map(curso => {
        return {
          'Ordem': '',
          'Curso': curso.title,
          'Link': curso.link,
          'Descrição': curso.descricao,
          'ID competência': indexCompetencia,
        };
      });

      const fileName = `${nomesItinerarios[indexItinerario]}.${getCategoriaCompetencia(indexCompetencia)}.${getCompetencia(indexCompetencia)}`;
      
      (async () => {
        const csv = new ObjectsToCsv(data);
      
        await csv.toDisk(`./out/itinerarios/${nomesItinerarios[indexItinerario]}/${fileName}.csv`);
      })();
    }    
  }
}
