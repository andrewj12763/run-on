var path = require('path');

// Export HTML routes
module.exports = function(app) {

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/layouts/home.html'));
	});

	//page2
	app.get('/page2', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/layouts/page2.html'));
	});

	//page3
	app.get('/page3', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/layouts/page3.handlebars'));
	});
};