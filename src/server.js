
var express = require('express');
var path = require("path");

var ajaxtest = function (app, router) {

	if (!app) {
		app = express();
	}

	this._app = app;

	if (!router) {
		router = express.Router();
	}

	/**
	 * Sets up the server to allow universal origins...
	 * You can also do this in your server config if you want,
	 * but since keeping this open is the point of the project,
	 * it makes sense to do it in the code.
	 */
	app.all('*', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	});

	router.get('/api', function (req, res) {
		res.json({
			message: 'Hi! You\'re receiving ajax from ajaxtest.com!',
			ip: req.headers['x-real-ip'] || req.connection.remoteAddress
		});
	});

	app.use('/', router);
};

ajaxtest.prototype.start = function (port) {
	port = port || 8082;

	console.log('Starting on port ' + port);

	this._app.listen(port);
};


module.exports = ajaxtest;