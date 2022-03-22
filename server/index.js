const db = require("./models");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const flash = require("express-flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const initializePassport = require("./config/passport.config");

const app = express();

app.use(express.static("public"));

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);
console.log(session);

// app.post("/api/logout", (req, res) => {
//   req.logOut();
//   res.clearCookie("secretcode");
//   req.session.destroy((err) => res.redirect("/"));
// });

db.sequelize.sync().then(() => {
  console.log("Dropped an resync db");
});

require("./routes/award.routes")(app);
require("./routes/category.routes")(app);
require("./routes/place.routes")(app);
require("./routes/role.routes")(app);
require("./routes/tour.routes")(app);
require("./routes/type.routes")(app);
require("./routes/user.routes")(app);
require("./routes/login.routes")(app);

app.listen(5000, () =>
  console.log("Server running at http://localhost:5000", " ", global.appRoot)
);
