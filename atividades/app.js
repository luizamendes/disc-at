const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/atividades", function (req, res) {
  res.send("Hello World!");
});

app.get("/atividades/:id", function (req, res) {
  res.send("Hello World!");
});

app.post("/atividades", function (req, res) {
  const { professor, disciplina } = req.body;

  res.send(
    `Atividade criada, professor ${professor}, disciplina ${disciplina}`
  );
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
