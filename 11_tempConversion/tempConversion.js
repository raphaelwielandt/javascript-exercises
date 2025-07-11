const convertToCelsius = function (temp) {
  let celcius = (temp - 32) * (5 / 9);
  return Math.round(celcius * 10) / 10;
};

console.log(convertToCelsius(32));

const convertToFahrenheit = function (temp) {
  let fahrenheit = temp * (9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
