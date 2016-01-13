var express = require('express');
var router = express.Router();

module.exports = function (app) {

	router.route('/api')
		.get(function (req, res) {
			res.json({
				message: 'Hi! You\'re receiving ajax from ajaxtest.com!',
				ip: req.headers['x-real-ip'] || req.connection.remoteAddress
			});
		});

	app.ws('/api/socket', function (ws, req) {
		ws.on('message', function (msg) {
			ws.send(msg);
		});

		setInterval(function () {
			ws.send(JSON.stringify({
				message: 'Hi! You\'re receiving websocket data from ajaxtest.com! Magical!',
				ip: req.headers['x-real-ip'] || req.connection.remoteAddress,
				date: new Date().getDate(),
			}));
		}, 5000);
	});

	return router;
};