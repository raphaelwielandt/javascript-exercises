const sumAll = function (a, b) {
  let sum = 0;

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  if ((a || b) < 0) return "ERROR";

  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
