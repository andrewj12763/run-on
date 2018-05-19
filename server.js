var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var mysql = require("mysql");

var app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load Routes
var index = require("./controllers/min-control");

// Routes
app.use('/', index);
app.use(express.static('app'));
// Set Handlebars.
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: '.hbs' }));
app.set("view engine", ".hbs");


var PORT = process.env.PORT || 5000;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:" + PORT);
});
