/**
 *
 * @param {string} string
 */
const palindromes = function (string) {
  let arr = [...string]
    .filter((char) => /[a-zA-Z0-9]/.test(char)) //Regex to check for letters and numbers
    .join('')
    .toLowerCase();

  let arr1 = [...arr].reverse().join('');

  return arr === arr1;
};

// Do not edit below this line
module.exports = palindromes;
