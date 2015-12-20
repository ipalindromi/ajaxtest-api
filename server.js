var express = require('express');
var app = express();
var path = require("path");

var port = process.env.PORT || 8082;

// ROUTES
var router = express.Router();

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
		ip: req.headers['x-real-ip'] || req.connection.remoteAddress,
	});
});

app.use('/', router);

app.listen(port);

console.log('Now listening on port: ' + port);
