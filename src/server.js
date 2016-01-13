var express = require('express');
var path = require("path");
var http = require('http').Server(express);

var ajaxtest = function (callback, router) {

	this.app = express();
	this.ws = require('express-ws')(this.app);

	/**
	 * Sets up the server to allow universal origins...
	 * You can also do this in your server config if you want,
	 * but since keeping this open is the point of the project,
	 * it makes sense to do it in the code.
	 */
	this.app.all('*', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");

		next();
	});

	router = router || require('./router.js')(this.app);

	// Use the router provided
	this.app.use('/', router);

	if (callback && typeof callback === 'function') {
		callback(this, this.app, router);
	}
	else {
		this.start();
	}
};

ajaxtest.prototype.start = function (port) {

	port = port || 8082;

	console.log('Starting on port ' + port);

	this.app.listen(port);
};


module.exports = ajaxtest;
