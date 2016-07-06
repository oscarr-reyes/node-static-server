var path 	= require("path"),
	pkg		= module.parent;

module.exports.resolve = function(url){
	var dir = url.slice(1, url.lenth);

	return path.resolve(path.join(pkg.CONST.dir, dir));
};