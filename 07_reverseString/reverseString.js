const reverseString = function (string) {
  if (typeof string !== "string") throw new TypeError();

  let charArray = string.split("");

  return charArray.reverse().join("");
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
