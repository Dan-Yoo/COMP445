var http = require('http');
var yargs = require('yargs')
	.usage('$0 <cmd> [args]')
	.help('help');

var argv = yargs.argv;

console.log("argv: %o", argv);

var command = process.argv[2];
console.log("Command: " + command);