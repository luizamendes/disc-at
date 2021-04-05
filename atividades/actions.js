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

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);

  fs.writeFileSync("atividades.json", dataJSON);
};

const addAtividade = (nome, disciplina) => {
  const atividades = loadAtividades();
  atividades.push({
    id: atividades.length + 1,
    nome,
    disciplina,
  });

  saveNotes(atividades);
};

const computarAtividadeFeita = (id_atividade, aluno, disciplina) => {
  const atividadesFeitas = loadAtividadesFeitas();
  atividadesFeitas.push({
    id_atividade,
    aluno,
    disciplina,
  });

  saveNotes(atividades);
};

module.exports = {
  loadAtividades,
  saveNotes,
  addAtividade,
  computarAtividadeFeita,
};
