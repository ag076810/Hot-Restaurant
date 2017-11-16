
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD:server.js




=======

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});


// Starts the server to begin listening
// =============================================================
>>>>>>> 666b2670eaaafa1cb8d5d163cb811c6ee52e8790:wallaby.js
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
