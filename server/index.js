const db = require("./models");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(flash());

db.sequelize.sync().then(() => {
  console.log("Dropped an resync db");
});

require("./routes/award.routes")(app);
require("./routes/award_user.routes")(app);
require("./routes/category.routes")(app);
require("./routes/place.routes")(app);
require("./routes/place_tour.routes")(app);
require("./routes/role.routes")(app);
require("./routes/tour.routes")(app);
require("./routes/type.routes")(app);
require("./routes/user.routes")(app);
require("./routes/user_tour.routes")(app);

app.listen(5000, () =>
  console.log("Server running at http://localhost:5000", " ", global.appRoot)
);
