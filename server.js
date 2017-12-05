const flash = require('connect-flash');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./config/passport');
const config = require('./config/session-config');

// Port
const PORT = process.env.PORT || 3005;

// start express
const app = express();

// database (it'll look for index.js, which is generated when we use the sequelize init command)
var db = require("./models");

// static content
app.use(express.static("public"));

const isAuth = require('./config/middleware/isAuthenticated');
const authCheck = require('./config/middleware/attachAuthenticationStatus');

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: config.sessionKey, resave:true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// view engine
// this code makes sure that the views folder that is parallel to the server.js file is used (in case we execute the server from a different location)
// app.set('views', path.join(__dirname, 'views'));

const exphbs = require("express-handlebars");
app.engine("handlebars",exphbs({
    defaultLayout: 'main'
}));

app.set("view engine", 'handlebars');

// routes and pass it app
require("./routes")(app);

console.log(process.env.NODE_ENV);

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

