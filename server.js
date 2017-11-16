
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Storing all the tables
var data = {
	reservations: [],
	waitlist: [],
};

// Routing
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html")); // CHANGE THIS LATER
});

app.get("/add", function(req, res) { // CHANGE THIS LATER
  res.sendFile(path.join(__dirname, "add.html")); // CHANGE THIS LATER
});

// Get reservation data via the api
app.get("/api/tables", function(req, res) { // CHANGE THIS LATER
  res.json(data.reservations);
});

app.get("/api/waitlist", function(req, res) { // CHANGE THIS LATER
  res.json(data.waitlist);
});

// Returns both the tables array and the waitlist array
app.get("/api/", function(req, res) { // CHANGE THIS LATER
  res.json(data);
});

app.get("/clear", function(req, res) { // CHANGE THIS LATER
  data.tables.length = 0;
  data.waitlist.length = 0;
  res.json(data);
});

// Get new table data entry from POST
app.post("/new", function(req, res) { // CHANGE THIS LATER
  var tableData = req.body;
  tableData.routeName = tableData.name.replace(/\s+/g, "").toLowerCase();
  console.log(tableData);

  if (data.reservations.length < 5) {
  	data.reservations.push(tableData);
  }
  data.waitlist.push(tableData);

  res.json(tableData);
});

// Start the Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
