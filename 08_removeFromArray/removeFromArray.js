/**
 *
 * @param {any[]} arr
 * @param {number} number
 */
const removeFromArray = function (arr, ...args) {
  let arrCopy = [...arr];

  return arrCopy.filter((item) => !args.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
