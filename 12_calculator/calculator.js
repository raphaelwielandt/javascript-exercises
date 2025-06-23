const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

/**
 *
 * @param {Array} numbers
 */
const sum = function (numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

/**
 *
 * @param {Array} numbers
 */
const multiply = function (numbers) {
  return numbers.reduce((acc, curr) => acc * curr);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num < 0) return;
  else if (num === 0) return 1;
  else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
