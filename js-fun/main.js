
//Exercise 1
// var convertWeight = function(kilos) {
//   // write your code here!
//   return kilos * 2.2;
// };
//
// console.log(convertWeight(80));


//Exercise 3
  Math.roundTo = function (number, positions) {
  return Math.round(number * Math.pow(10, positions)) / Math.pow(10, positions);
}

//Exercise 1,2,4
var convertWeight = function(number, unit) {
    if (typeof(number) !== 'number' ) {
      return 'Enter a valid number'
    }

    if (unit === 'pounds') {
      return (number / 2.20462);
    } else if (unit === 'kilos') {
      return (number * 2.20462)
    } else {
      return 'Enter a valid weight unit ("kilos" or "pounds" )';
    }

};

console.log(convertWeight(100, 'kilos'));
console.log(convertWeight(100, 'pounds'));

//Exercise 5
// function calcAge(currentYear, yearBorn) {
//   return currentYear - yearBorn;
// }

//Exercise 6
var currentYear = new Date().getFullYear();
var age = calcAge(currentYear, 1989);

function calcAge(currentYear, yearBorn) {
  var x = currentYear - yearBorn;

  return `You are either ${x - 1} or ${x}`
};

//Exercise 7
function isPrime(number) {
  for (i=1; i<(number-1); i++) {
    for (j=1; j<(number); j++) {
      if ((i * j) === number) {
        return false;
      }
    }
  }
  return true;
};
