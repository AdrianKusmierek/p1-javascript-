const output = document.getElementById("output");

var budget = 100;
var product = prompt("Hoeveel kost het product dat je wilt kopen?", "60");

if (budget > product) {
    output.innerText = "U heeft genoeg geld!";
    output.style.color = "green";
} else {
    output.innerText = "Helaas, te weinig geldt";
    output.style.color = "red";
}