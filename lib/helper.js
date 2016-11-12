var path 	= require("path"),
	pkg		= module.parent;

module.exports.resolve = function(url){

	return path.resolve(path.join(pkg.CONST.dir, url));
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
	var time1 = new Date(time1)
		.getTime()
		.toString()
		.slice(0, -3);
	
	var time2 = new Date(time2)
		.getTime()
		.toString()
		.slice(0, -3);

	return time1 == time2;
}