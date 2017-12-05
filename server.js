const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Port
const port = process.env.PORT || 3005;

// start express
const app = express();

// database (it'll look for index.js, which is generated when we use the sequelize init command)
var db = require("./models");

// static content
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:false}));

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

app.listen(port, function(){
    console.log("App listening on port " + port);
})

