var calculate = (x, y) => x + y;
var multiplyByFive = x => x * 5;
var checkInput = (...args) => Math.max(...args);
var calculateMinutes = x => x / 60;

alert(calculate(58, 11));
alert(multiplyByFive(13.8));
alert(checkInput(29, 16));
alert(calculateMinutes(3600));