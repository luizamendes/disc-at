const amqp = require("amqplib/callback_api");

const CONN_URL =
  "amqps://tjphrevb:wKbnb5aO7plBgVbYmfE79LfKMLL50vHA@hornet.rmq.cloudamqp.com/tjphrevb";

let ch = null;

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, channel) {
    ch = channel;
  });
});

// amqp.connect(CONN_URL, function (err, conn) {
//   conn.createChannel(function (err, ch) {
//     ch.consume(
//       "atividades",
//       function (msg) {
//         console.log(".....");
//         setTimeout(function () {
//           console.log("Message:", msg.content.toString());
//           ch.ack(msg);
//         }, 8000);
//       },
//       { noAck: false }
//     );
//   });
// });

const consumeFromQueue = async (callback) => {
  ch.consume("atividades", callback, { noAck: false });
};

process.on("exit", () => {
  ch.close();
  console.log("Closing rabbitmq channel");
});

module.exports = {
  consumeFromQueue,
};
