const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = { origin: "http://localhost:3000" };

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();


require("./app/routes/auth.routes")(app);
require("./app/routes/admin.routes")(app);
require("./app/routes/user.routes")(app);

require("./app/routes/ticket.routes")(app);
require("./app/routes/performance.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Сервер. Театр БОНИФАЦИЙ" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});