module.exports = function(app){
	// Create New Characters - takes in JSON input
	app.post('/reserve', function(req, res){

		for (var i = 0; i < table_data.length; i++) {
			if (table_data.length > 4) {
			
				fs.appendFile('waitinglist-data.js', req.body);

				return false;

			} else {

				fs.appendFile('table-data.js', req.body);

				return true;

			}
		}

	
	// newres.name = newres.name.replace(/\s+/g, '').toLowerCase();

	newres.email;

	console.log(newres);

	characters.push(newres);

	res.json(newres);
});
}