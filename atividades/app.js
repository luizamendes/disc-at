const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { addAtividade, computarAtividadeFeita } = require("./actions");
const { consumeFromQueue } = require("./worker-1");

app.use(bodyParser.json());

app.get("/atividades", function (req, res) {
  res.send("Hello World!");
});

app.get("/atividades/:id/:aluno", function (req, res) {
  const { id, aluno } = req.params;
  res.send("Hello World!");
});

app.post("/atividades", function (req, res) {
  const { id_atividade, usuario, nome, disciplina } = req.body;

  if (usuario === "professor") {
    addAtividade(nome, disciplina);
  } else {
    computarAtividadeFeita(id_atividade, nome, disciplina);
  }

  res.status(201).send("Solicitação enviada");
});

app.get("/check-atividade/:id_atividade/:aluno", async function (req, res) {
  const { id_atividade, aluno } = req.params;

  const ffff = (msg) => {
    console.log(".....");
    const mensagem = JSON.parse(msg.content);
    console.log(mensagem);
    if (mensagem.id_atividade === "1" && mensagem.aluno === "luiza") {
      console.log("I AM HERE");
      console.log(mensagem.nota);
    }
    setTimeout(function () {
      console.log("Message:", msg.content.toString());
    }, 8000);
  };

  const checarSeAlunoFezAtividade = async (msg) => {
    // setTimeout(function () {
    const mensagem = JSON.parse(msg.content);
    let data = "";
    if (mensagem.id_atividade === id_atividade && mensagem.aluno === aluno) {
      data = `Aluno ${aluno} fez atividade de id ${id_atividade} e tirou ${mensagem.nota}`;
    }

    return data;
    // }, 8000);
  };

  const resposta = await consumeFromQueue(checarSeAlunoFezAtividade);
  console.log("resposta", resposta);

  // try {
  //   const respostaa = await consumeFromQueue(checarSeAlunoFezAtividade);
  //   res.send(respostaa);
  // } catch (error) {
  //   res.send("Aluno nao fez atividade");
  // }
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
