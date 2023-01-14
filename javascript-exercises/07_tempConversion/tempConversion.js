const convertToCelsius = function FtoC(temp) {
  let result = (temp-32) * (5 / 9);
  result = Math.round(result * 10) / 10;
  console.log("F to C value: ", result);
  return result
};

const convertToFahrenheit = function CtoF(temp) {
  let result = 32 + temp * (9 / 5);
  result = Math.round(result * 10) / 10;
  console.log(result);
  return result

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};