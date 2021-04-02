const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/usuarios", function (req, res) {
  res.send("Hello World!");
});

app.get("/usuarios/:id", function (req, res) {
  res.send("Hello World!");
});

app.post("/usuarios", function (req, res) {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
