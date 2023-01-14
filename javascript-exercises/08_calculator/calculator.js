const add = function Add(...numbers) {
	return numbers.reduce((a, b) => a + b)
};

const subtract = function(a,b) {
	return a - b
};

const sum = function Sum(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function Multiply(array) {
  return array.reduce((a, b) => a * b, 1);
};

const power = function Power(a,b) {
  // return Math.pow(a,b);
  return a**b;
};

const factorial = function Factorial(n) {
  if (n < 2) {
    return 1
  }
  return n * Factorial(n-1);

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
