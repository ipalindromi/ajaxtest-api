/**
 * This is the file that you should actually start the server with.
 * It instantiates an express app for you with the server will use
 * for routing, etc..., but instantiating it here allows you to
 * set up other routes and so forth if you want.
 **/
var express = require('express');

var ajaxtest = require('./src/server.js');

var server = new ajaxtest().start();