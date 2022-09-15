var calculate = (x, y) => {
    return x + y;
}

var multiplyByFive = x => {
    return x * 5;
}

var checkInput = (...args) => {
    return Math.max(...args);
}

var calculateMinutes = x => {
    return x / 60;
}

alert(calculate(58, 11));
alert(multiplyByFive(13.8))
alert(checkInput(29, 16));
alert(calculateMinutes(3600));