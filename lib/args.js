var yargs = require("yargs");

module.exports = yargs
	.example("Usage: $0")
	.options({
		"p": {
			alias: "port",
			demand: false,
			default: function(){
				// Set https default port if ssl was argv was provided
				if(yargs.argv.s || yargs.argv.ssl){
					return 443;
				}

				else{
					return 80;
				}
			},
			describe: "Port to host the server",
			type: "number"
		},
		"d": {
			alias: "directory",
			demand: false,
			default: "./",
			describe: "Directory folder which the server will host",
			type: "string"
		},
		"e": {
			alias: "entry",
			demand: false,
			default: "",
			describe: "Entry file for every request",
			type: "string"
		},
		"s": {
			alias: "ssl",
			demand: false,
			describe: "Whether should enable SSL protection to the server",
			type: "boolean"
		},
		"k": {
			alias: "key",
			demand: false,
			default: "",
			describe: "The key file for SSL",
			type: "string"
		},
		"c": {
			alias: "cert",
			demand: false,
			default: "",
			describe: "The certification file for SSL",
			type: "string"
		},
		"http-redirect":{
			demand: false,
			default: false,
			describe: "Whether the host should create a HTTP server to redirect HTTPS",
			type: "boolean"
		},
		"from-http-port": {
			demand: false,
			default: "80",
			describe: "The port value where the HTTP server will listen for redirection",
			type: "number"
		}
	})
	.argv;