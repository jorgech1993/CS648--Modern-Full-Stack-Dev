//Importing express project
 		const express = require('express');

 		//Initializing an app to the express project
 		const app = express();

 		//creating the static file in the public directory
 		const fileServerMiddleware = express.static('public');

 		// telling the application to use that directory
 		app.use('/', fileServerMiddleware);

 		// starts the server on port 3000 and it will output if successful
 		app.listen(3000, function(){
 			console.log('App started on port 3000');
 		});