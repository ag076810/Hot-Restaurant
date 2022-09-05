module.exports = function(app){

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/app/public/home.html'));
})

app.get('/tables', function(req, res){
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/app/public/tables.html'));
})


app.get('/reserve', function(req, res){
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/app/public/reserve.html'));
})


// Search for Specific Character (or all characters) - provides JSON
app.get('/waiting', function(req, res){

	res.json(waiting_list);
})

app.get('/table', function(req, res){

	res.json(table_data);
})


} // end module.export

