const add = function(...args) {
  let result = 0;
  args.forEach(arg => {
    if (typeof(arg) == "number") result += arg;
    if (typeof(arg) == "object"){
      arg.forEach(elem => {
        result += elem;
      });
    }
  });
  return result;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let result = 0;
	array.forEach(number => {
    if (typeof(number) != "undefined") result += number;
  });
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(number => {
    result *= number;
  });
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  let result = 1;
	if (number === 0) return 1;
  for(; number >= 1; number--){
    result *= number;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
