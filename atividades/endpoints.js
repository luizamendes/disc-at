module.exports = function (app) {
  const {
    addAtividade,
    computarAtividadeFeita,
    loadAtividadesFeitas,
    loadAtividadesCorrigidas,
  } = require("./actions");

  app.post("/atividades", function (req, res) {
    const { id_atividade, usuario, nome, disciplina } = req.body;

    if (usuario === "professor") {
      addAtividade(nome, disciplina);
    } else {
      computarAtividadeFeita(id_atividade, nome, disciplina);
    }

    res
      .status(201)
      .send(
        `Atividade ${
          usuario === "professor" ? "criada" : "enviada"
        } com sucesso`
      );
  });

  app.get("/check-atividade", async function (req, res) {
    const { id_atividade, aluno, disciplina } = req.body;
    let resposta = "";
    try {
      const atividadesCorrigidas = loadAtividadesCorrigidas();
      const atividadesFeitas = loadAtividadesFeitas();
      atividadesCorrigidas.map((atividade) => {
        if (
          atividade.id_atividade === id_atividade &&
          atividade.aluno === aluno &&
          atividade.disciplina === disciplina
        ) {
          resposta = `Aluno ${aluno} fez atividade de id ${id_atividade} da disciplina ${disciplina} e tirou nota ${atividade.nota} `;
          return res.send(resposta);
        }
      });

      atividadesFeitas.map((atividade) => {
        if (
          atividade.id_atividade === id_atividade &&
          atividade.aluno === aluno &&
          atividade.disciplina === disciplina
        ) {
          resposta = `Aluno ${aluno} fez atividade de id ${id_atividade} da disciplina ${disciplina}, mas não foi corrigida. `;
          return res.send(resposta);
        }
      });
    } catch (e) {
      console.log(e.message);
    }

    if (!resposta) {
      resposta = "Aluno não fez ou atividade não corrigida";
    }

    return res.send(resposta);
  });
};
