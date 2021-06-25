require("./worker-1");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(bodyParser.json());

app.listen(3000, function () {
  console.log("Atividades app listening on port 3000!");
});

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./endpoints")(app);
