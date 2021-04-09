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

const loadAtividadesCorrigidas = () => {
  try {
    const dataBuffer = fs.readFileSync("atividadesCorrigidas.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes, file) => {
  const dataJSON = JSON.stringify(notes);

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

const computarAtividadeFeita = (id_atividade, aluno, disciplina) => {
  const atividadesFeitas = loadAtividadesFeitas();
  atividadesFeitas.push({
    id_atividade,
    aluno,
    disciplina,
  });

  saveAtividades(atividadesFeitas, "atividadesFeitas.json");
};

const computarAtividadeCorrigida = (id_atividade, aluno, disciplina, nota) => {
  const atividadesFeitas = loadAtividadesCorrigidas();
  atividadesFeitas.push({
    id_atividade,
    aluno,
    disciplina,
    nota,
  });

  saveNotes(atividadesFeitas, "atividadesCorrigidas.json");
};

module.exports = {
  loadAtividades,
  addAtividade,
  computarAtividadeFeita,
  computarAtividadeCorrigida,
  loadAtividadesCorrigidas,
  loadAtividadesFeitas,
};
