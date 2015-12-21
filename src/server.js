var express = require('express');
var path = require("path");

var ajaxtest = function (callback, router) {

	this._app = express();

	/**
	 * Sets up the server to allow universal origins...
	 * You can also do this in your server config if you want,
	 * but since keeping this open is the point of the project,
	 * it makes sense to do it in the code.
	 */
	this._app.all('*', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	});

	router = router || require('./router.js');

	// Use the router provided
	this._app.use('/', router);

	if (callback && typeof callback === 'function') {
		callback(this, this._app, router);
	}
};

ajaxtest.prototype.start = function (port) {

	port = port || 8082;

	console.log('Starting on port ' + port);

	this._app.listen(port);
};


module.exports = ajaxtest;