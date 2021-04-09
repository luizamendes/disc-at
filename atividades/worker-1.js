require("dotenv").config();
const amqp = require("amqplib/callback_api");
const { computarAtividadeCorrigida } = require("./actions");

amqp.connect(process.env.CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume(
      "atividades",
      function (msg) {
        const { id_atividade, aluno, nota, disciplina } = JSON.parse(
          msg.content.toString()
        );
        computarAtividadeCorrigida(id_atividade, aluno, disciplina, nota);
        ch.ack(msg);
      },
      { noAck: false }
    );
  });
});
