exports.findMinMax = function(myValues) {
  var retValue = [];
  if (Array.isArray(myValues) === false) {
    retValue[0] = "Not an array";
    return retValue;
  }
  var max = Math.max.apply(null, myValues); 
  var min = Math.min.apply(null, myValues);
  if(max == min) {
    retValue[0] = min;
  } else {
    retValue[0] = min;
    retValue[1] = max;
  }
  return retValue;
};