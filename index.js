/*
 * Main packages
 */
var http 	= require("http"),
	fs		= require("fs");

/*
 * Package settings
 */
var CONST = module.CONST = JSON.parse(fs.readFileSync("./config.json"));

/*
 * Libraries
 */
var directory = require("./lib/path.js");

var server = http.createServer(function(req, res){
	if(req.url == "/"){
		req.url = "/index.html"
	}

	var dir = directory.resolve(req.url);

	var readStream = fs.createReadStream(dir);

	readStream.on("open", function(){
		readStream.pipe(res);
	});

	readStream.on("error", function(err){
		res.end(err);
	});
});

server.listen(CONST.port, function(){
	console.log("Server listening at port:", CONST.port);
});
