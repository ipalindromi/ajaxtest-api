/**
 * THIS IS ONLY AN EXAMPLE! YOU SHOULD MAKE A FILE THAT LOOKS LIKE THIS IN YOUR OWN APP!
 * -------------------------------------------------------------------------------------
 *
 * This is the file that you should actually start the server with.
 * It instantiates an express app for you with the server will use
 * for routing, etc..., but instantiating it here allows you to
 * set up other routes and so forth if you want.
 **/
var express = require('express');

var server = require('./src/server.js');

new server(function (ajaxtest, app, router) {

	/**
	 * Do fun things with the app or router here, like add new routes
	 */
	ajaxtest.start();
});