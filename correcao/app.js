const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { publishToQueue } = require("./services/MQService");

app.use(bodyParser.json());

app.get("/correcao/:id_atividade", function (req, res) {
  res.send("Hello World!");
});

app.post("/correcao/:id_atividade/:aluno", async function (req, res, next) {
  const { id_atividade, aluno } = req.params;
  const { nota } = req.body;

  await publishToQueue(
    "atividades",
    JSON.stringify({ id_atividade, aluno, nota })
  );
  res.statusCode = 200;
  console.log("oioi");

  res.status(200).send("Message sent!");
});

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
