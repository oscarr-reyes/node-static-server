var path 	= require("path"),
	pkg		= module.parent;

module.exports.resolve = function(url){

	return path.resolve(path.join(pkg.CONST.dir, url));
};