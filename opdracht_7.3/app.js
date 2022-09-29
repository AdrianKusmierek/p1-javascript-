var out = 0;

function pressed() {
    if (out == 10) out = -1;

    var output = document.getElementById("output");

    out += 1;
    output.innerText = out;
}