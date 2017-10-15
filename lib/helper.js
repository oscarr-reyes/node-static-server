var path 	= require("path"),
	url     = require("url"),
	pkg		= module.parent;

/**
 * Resolves the dir from given url path
 * 
 * @param  {String} dir The url path
 * @return {String}     The resolved directory
 */
module.exports.resolve = function(dir){
	let pathname = url.parse(dir).pathname;

	return path.resolve(path.join(pkg.CONST.dir, pathname));
};

/**
 * Compares 2 date times regardless of which format they are,
 * ignoring milliseconds
 * 
 * @param  {Date}  time1 The date string/object to compare
 * @param  {Date}  time2 The date string/object to compare
 * @return {Boolean}     Whether they have the same time
 */
module.exports.isEqualTime = function(time1, time2){
	time1 = new Date(time1)
		.getTime()
		.toString()
		.slice(0, -3);
	
	time2 = new Date(time2)
		.getTime()
		.toString()
		.slice(0, -3);

	return time1 == time2;
}