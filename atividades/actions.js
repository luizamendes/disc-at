const fs = require("fs");

const loadAtividades = () => {
  try {
    const dataBuffer = fs.readFileSync("atividades.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const loadAtividadesFeitas = () => {
  try {
    const dataBuffer = fs.readFileSync("atividadesFeitas.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveAtividades = (atividades, file) => {
  const dataJSON = JSON.stringify(atividades);

  fs.writeFileSync(file, dataJSON);
};

const addAtividade = (nome, disciplina) => {
  const atividades = loadAtividades();
  atividades.push({
    id: atividades.length + 1,
    nome,
    disciplina,
  });

  saveAtividades(atividades, "atividades.json");
};

const computarAtividadeFeita = (id_atividade, aluno, disciplina, nota) => {
  const atividadesFeitas = loadAtividadesFeitas();
  atividadesFeitas.push({
    id_atividade,
    aluno,
    disciplina,
    nota,
  });

  saveAtividades(atividadesFeitas, "atividadesFeitas.json");
};

module.exports = {
  loadAtividades,
  addAtividade,
  computarAtividadeFeita,
};
