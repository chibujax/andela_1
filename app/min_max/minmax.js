exports.findMinMax = function(myValues) {
	var retValue = new Array(2);
	if (Array.isArray(myValues) == false) {
		retValue[0] = "Not an array";
		retValue[1] = "error";
		return retValue;
	}
	var max = Math.max.apply(null, myValues); 
	var min = Math.min.apply(null, myValues);
	retValue[0] = min;
	retValue[1] = max;
	return retValue;
};