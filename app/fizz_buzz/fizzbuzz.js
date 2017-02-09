exports.fizzBuzz = function(num) {
	var retValue = '';
	if (isNaN(num) === false) {
	  if (num % 3 === 0) retValue += 'Fizz';
	  if (num % 5 === 0) retValue += 'Buzz';
	  if (retValue === '') retValue = num
	}
	return retValue;
};