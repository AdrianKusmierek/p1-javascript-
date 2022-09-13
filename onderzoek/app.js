var one = 2;
var two = 3;
var three = 2;

document.write(`one: ${one}<br>two: ${two}<br>three: ${three}<br><br>`);

document.write(`one == three: ${one == three}<br>`);
document.write(`one == two: ${one == two}<br><br>`);


document.write("(two == three) ? \"two is equal to three\" : \"two is not equal to three\"<br>");
document.write(`${(two == three) ? "two is equal to three" : "two is not equal to three"}<br><br>`);

document.write("(two == three) ? \"one is equal to three\" : \"one is not equal to three\"<br>");
document.write(`${(one == three) ? "one is equal to three" : "one is not equal to three"}<br><br>`);

document.write("(two == three && one != two) ? \"one is equal to three and not two\" : \"one is equal to two and not three\"<br>");
document.write(`${(two == three && one != two) ? "one is equal to three and not two" : "one is equal to two and not three"}`);