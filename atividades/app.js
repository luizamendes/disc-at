require("./worker-1");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {
  addAtividade,
  computarAtividadeFeita,
  loadAtividadesFeitas,
} = require("./actions");

app.use(bodyParser.json());

app.post("/atividades", function (req, res) {
  const { id_atividade, usuario, nome, disciplina } = req.body;

  if (usuario === "professor") {
    addAtividade(nome, disciplina);
  } else {
    computarAtividadeFeita(id_atividade, nome, disciplina);
  }

  res.status(201).send("Solicitação enviada");
});

app.get("/check-atividade", async function (req, res) {
  const { id_atividade, aluno, disciplina } = req.body;
  let resposta = "";
  try {
    const atividadesFeitas = loadAtividadesFeitas();
    atividadesFeitas.map((atividade) => {
      if (
        atividade.id_atividade === id_atividade &&
        atividade.aluno === aluno &&
        atividade.disciplina === disciplina
      ) {
        resposta = `Aluno ${aluno} fez atividade de id ${id_atividade} da disciplina ${disciplina} e tirou nota ${nota} `;
      }
    });
  } catch (e) {
    //
  }

  if (!resposta) {
    resposta = "Aluno não fez ou atividade não corrigida";
  }

  res.send(resposta);
});

app.listen(3000, function () {
  console.log("Atividades app listening on port 3000!");
});
