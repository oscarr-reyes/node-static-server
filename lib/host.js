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
		// Create HTTP server to redirect into HTTPS server when requested
		if(pkg.CONST["http-redirect"]){
			console.log("Http server redirection initiating");

			http.createServer(function(req, res){
				res.writeHead(301, {"Location": `https://${req.headers.host + req.url}`});
				res.end();
			}).listen(pkg.CONST["from-http-port"], function(){
				console.log(`Http server redirection listening at port: ${pkg.CONST["from-http-port"]}`);
			});
		}

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