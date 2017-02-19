exports.aritGeo = function(num) {
  if (Array.isArray(num) === false) {
    return 0;
  }
  if (num.length == 1) {
    return -1;
  }
  if (num.length == 0 ) {
    return 0;
  }
  var diff = num[1] - num[0];
  var ratio = num[1] / num[0];

  var arith = true;
  var geo = true;

  for(var i = 0; i < num.length - 1; i++)
  {
    if( num[i + 1] - num[i] !== diff )
      arith = false;
    if(num[i + 1] / ratio !== num[i])
      geo = false;
  }

  if(arith === true)
    return "Arithmetic";
  else if(geo === true)
    return "Geometric";
  else
    return -1;	
}