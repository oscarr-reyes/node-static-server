var http	= require("http"),
	https	= require("https"),
	fs		= require("fs"),
	pkg		= module.parent;

/**
 * Creates a server instance with the provided options from args
 * 
 * @return {Object} The object class instance of the http server
 */
module.exports.createServer = function(){
	if(pkg.CONST.ssl){
		console.log("Https server initiating");
		return https.createServer({
			key: fs.readFileSync(pkg.CONST.key),
			cert: fs.readFileSync(pkg.CONST.cert)
		});
	}

	else{
		console.log("Http server initiating");
		return http.createServer();
	}
}