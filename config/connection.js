var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 5400,
  host: "localhost",
  user: "root",
  password: "yolo",
  database: "runon_db"
});

// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });


module.exports = connection;
