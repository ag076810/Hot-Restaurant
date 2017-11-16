
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Storing all the tables
var data = {
	reservations: [{name: 'awdawd', id: '12345'}, {name: 'awd', id: '12346'}],
	waitlist: [{name: 'awdawdawdawd', id: '12347'}, {name: 'a', id: '12348'}],
};

var visitorCount = 0;

// Routing
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html")); // CHANGE THIS LATER
  visitorCount++;
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

app.get("/api/clear", function(req, res) { // CHANGE THIS LATER
  data.reservations.length = 0;
  data.waitlist.length = 0;
  res.json(data);
});

app.get("/api/visitors", function(req, res) { // CHANGE THIS LATER
  res.json(visitorCount);
});

// Get new table data entry from POST
app.post("/api/new", function(req, res) { // CHANGE THIS LATER
  var tableData = req.body;
  tableData.routeName = tableData.name.replace(/\s+/g, "").toLowerCase();
  console.log(tableData);

  if (data.reservations.length < 5) {
  	data.reservations.push(tableData);
  }
  data.waitlist.push(tableData);

  res.json(tableData);
});

app.get("/api/remove/:id?", function(req, res) { // CHANGE THIS LATER
  var tableId = req.params.id;

  if (tableId) {
    console.log(tableId);
	for (var i = 0; i < data.reservations.length; i++) {
	  if (tableId === data.reservations[i].id) {
	  	data.reservations.splice(i, 1);
	  	if (data.waitlist.length > 0) {
	  		var tempTable = data.waitlist.splice(0, 1)[0];
	  		data.reservations.push(tempTable);
	  	}

	    return res.json(true);
	  }
	}
	for (var i = 0; i < data.waitlist.length; i++) {
	  if (tableId === data.waitlist[i].id) {
	  	data.waitlist.splice(i, 1);

	    return res.json(true);
	  }
	}
	return res.json(false);
  }
  return res.json(false);
});

// Start the Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
