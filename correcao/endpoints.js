module.exports = function (app) {
  const { publishToQueue } = require("./services/MQService");

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
};
