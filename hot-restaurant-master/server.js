// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var table_data = require('./app/data/table-data.js');
var waiting_list = require('./app/data/waitinglist-data.js');
var fs = require('fs');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
require('/app/routing/html-routes.js')(app);



require('/app/routing/html-routes.js')(app);
require('/app/routing/api-routes.js')(app);

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})