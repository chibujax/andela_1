exports.fizzBuzz = function(num) {
  var retValue = '';
  if (isNaN(num) === false && (typeof num === "number")) {
    if (num % 3 === 0) retValue += 'Fizz';
    if (num % 5 === 0) retValue += 'Buzz';
    if (retValue === '') retValue = num
  }
  else {
    retValue = num;
  }
  return retValue;
};