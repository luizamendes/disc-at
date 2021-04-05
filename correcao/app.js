const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { publishToQueue } = require("./services/MQService");

app.use(bodyParser.json());

app.get("/correcao/:id_atividade", function (req, res) {
  res.send("Hello World!");
});

app.post("/correcao", async function (req, res, next) {
  const { id_atividade, aluno, disciplina, nota } = req.body;

  await publishToQueue(
    "atividades",
    JSON.stringify({ id_atividade, aluno, disciplina, nota })
  );

  res.status(200).send("Nota atribuída!");
});

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
