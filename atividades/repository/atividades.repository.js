const fs = require("fs");

class AtividadesRepositorio {
  constructor() {}

  loadAtividades() {
    try {
      const dataBuffer = fs.readFileSync("atividades.json");
      const dataJSON = dataBuffer.toString();

      return JSON.parse(dataJSON);
    } catch (e) {
      return [];
    }
  }

  loadAtividadesFeitas() {
    try {
      const dataBuffer = fs.readFileSync("atividadesFeitas.json");
      const dataJSON = dataBuffer.toString();

      return JSON.parse(dataJSON);
    } catch (e) {
      return [];
    }
  }

  _saveAtividades(atividades, file) {
    const dataJSON = JSON.stringify(atividades);

    fs.writeFileSync(file, dataJSON);
  }

  addAtividade(atividade) {
    const atividades = loadAtividades();
    atividades.push({
      id: atividades.length + 1,
      nome: atividade.getAluno(),
      disciplina: atividade.getDisciplina(),
    });

    _saveAtividades(atividades, "atividades.json");
  }

  computarAtividadeFeita(id_atividade, aluno, disciplina, nota) {
    const atividadesFeitas = loadAtividadesFeitas();
    atividadesFeitas.push({
      id_atividade,
      aluno,
      disciplina,
      nota,
    });

    _saveAtividades(atividadesFeitas, "atividadesFeitas.json");
  }
}

module.exports = new AtividadesRepositorio();
