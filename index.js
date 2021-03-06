#!/usr/bin/env node

/*
 * Main packages
 */
var fs		= require("fs"),
	path    = require("path"),
	args    = require("./lib/args.js"),
	mime    = require("mime");

/*
 * Package settings
 */
var CONST = module.CONST = {
	dir: path.resolve(args.d),
	port: args.p,
	entry: args.e,
	ssl: args.s,
	key: path.resolve(args.k),
	cert: path.resolve(args.c)
};

/*
 * Libraries
 */
var helper	= require("./lib/helper.js"),
	host	= require("./lib/host.js");

var request = function(req, res){
	if(req.url == "/" && !CONST.entry){
		req.url = "/index.html";
	}

	else if(!path.extname(req.url)){
		req.url = CONST.entry;
	}

	var dir = helper.resolve(req.url);

	// Read the requested file's statistics
	fs.stat(dir, function(err, stats){
		// File was not found, send 404 error
		if(err && err.code == "ENOENT"){
			res.statusCode = 404;
			res.end("404 File not found!");
		}

		// File was found, proceed to streaming
		else{
			var lastModified  = stats.mtime;
			var sinceModified = req.headers["if-modified-since"];
			
			// File was modified or file was requested for the first time
			if(!sinceModified || !helper.isEqualTime(lastModified, sinceModified)){
				var readStream    = fs.createReadStream(dir);
				
				readStream.on("open", function(){
					res.writeHead(200, {
						"Content-Type": mime.lookup(dir),
						"Last-Modified": lastModified.toUTCString()
					});

					readStream.pipe(res);
				});
			}

			// File was not modified
			else{
				res.statusCode = 304;
				res.end();
			}
		}
	});
};

var server = host.createServer();

server.addListener("request", request);

server.listen(CONST.port, function(){
	console.log("Server listening at port:", CONST.port);
});
