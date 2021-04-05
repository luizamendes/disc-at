const amqp = require("amqplib/callback_api");

const CONN_URL =
  "amqps://tjphrevb:wKbnb5aO7plBgVbYmfE79LfKMLL50vHA@hornet.rmq.cloudamqp.com/tjphrevb";

let ch = null;

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, channel) {
    ch = channel;
  });
});

const publishToQueue = async (queueName, data) => {
  ch.sendToQueue(queueName, new Buffer(data), { persistent: true });
};

process.on("exit", () => {
  ch.close();
  console.log("Closing rabbitmq channel");
});

module.exports = {
  publishToQueue,
};
