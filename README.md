# ajaxtest-api
This is the backend code at ajaxtest.com

## Installation

### If you just want this repo
- Run `git clone https://github.com/ipalindromi/ajaxtest-api.git`
- Run `install npm`

### To integrate with your own pre-existing project
- Run `npm install git+https://github.com/ipalindromi/ajaxtest-api.git --save`

## Usage
The server module accepts a callback and an express router, both of which are optional. The very simplest usage looks like

```
new(require('ajaxtest-api'));
```

This will start up the server with all the default options and routes.

You can also instantiate the server with something like:

```
var ajaxtest-server = require('ajaxtest-api');

new ajaxtest-server(function (ajaxtest, app, router) {

	router.get('/', function (res, req){
		// Put code to handle your route here
	});

	ajaxtest.start();
});

```

This will allow you to add to the default routes. If you don't want any of the default routes, just pass in
an express router as the second argument and the server will use that instead.

