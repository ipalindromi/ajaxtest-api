var express = require('express');

var router = express.Router();

router.route('/api')
	.get(function (req, res) {
		res.json({
			message: 'Hi! You\'re receiving ajax from ajaxtest.com!',
			ip: req.headers['x-real-ip'] || req.connection.remoteAddress
		});
	});

module.exports = router;