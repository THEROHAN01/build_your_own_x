#!/usr/bin/env node
const arg = require('arg');

try {		const args = arg({
			'--start': Boolean,
			'--build': Boolean
		});

		if ( args['--start']){
			console.log("starting the application")
		};
} catch (error) {
	console.log(error.message);
	console.log();
	usage();

} // try catch block to catch the




function usage() {
  console.log(`tool [CMD]
  --start\tStarts the app
  --build\tBuilds the app`);
}