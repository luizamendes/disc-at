const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(bodyParser.json());

app.listen(5000, function () {
  console.log("Correcao listening on port 5000!");
});

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./endpoints")(app);
