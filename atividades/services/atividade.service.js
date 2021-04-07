const Atividade = require("../models/Atividade");
const AtividadesRepositorio = require("../repository/atividades.repository");

class AtividadeService {
  constructor() {}

  addAtividade(nome, disciplina) {
    const ativ = new Atividade(disciplina, nome);
    AtividadesRepositorio.addAtividade(ativ);
  }

  computarAtividadeFeita(id_atividade, nome, disciplina) {
    const ativ = new Atividade(disciplina, nome);
    AtividadesRepositorio.addAtividade(ativ);
  }
}

module.exports = AtividadeService;
