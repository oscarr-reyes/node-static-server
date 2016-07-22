var yargs = require("yargs");

module.exports = yargs
	.example("Usage: $0")
	.options({
		"p": {
			alias: "port",
			demand: false,
			default: 80,
			describe: "Port to host the server",
			type: "number"
		},
		"d": {
			alias: "directory",
			demand: false,
			default: "./",
			describe: "Directory folder which the server will host",
			type: "string"
		}
	})
	.argv;