var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

// static content from public dir
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

// override – POST
app.use(methodOverride("_method"));
var expHB = require("express-handlebars");
app.engine("handlebars", expHB({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

var port = process.env.PORT || 3000;
app.listen(port);