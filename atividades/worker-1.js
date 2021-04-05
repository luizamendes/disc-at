const amqp = require("amqplib/callback_api");
const { computarAtividadeFeita } = require("./actions");

const CONN_URL =
  "amqps://tjphrevb:wKbnb5aO7plBgVbYmfE79LfKMLL50vHA@hornet.rmq.cloudamqp.com/tjphrevb";

// amqp.connect(CONN_URL, function (err, conn) {
//   conn.createChannel(function (err, ch) {
//     ch.consume(
//       "atividades",
//       function (msg) {
//         const { id_atividade, aluno, nota } = JSON.parse(
//           msg.content.toString()
//         );
//         computarAtividadeFeita(id_atividade, aluno, nota);
//         ch.ack(msg);
//       },
//       { noAck: false }
//     );
//   });
// });

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume(
      "atividades",
      function (msg) {
        console.log(".....");
        setTimeout(function () {
          console.log("Message:", msg.content.toString());
        }, 4000);
      },
      { noAck: true }
    );
  });
});

module.exports = {
  consumeFromQueue,
};
