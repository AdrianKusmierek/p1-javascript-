////////////////////////////////////////////
///           Main Variables             ///
////////////////////////////////////////////

// Defining the input field and the button from the index.html.
const input = document.getElementById("in");
const btn = document.getElementById("btn");

////////////////////////////////////////////
///           Main Functions             ///
////////////////////////////////////////////

// Creating a new functionc called "addItem".
function addItem() {
    // If there's less than 1 character in the input field, it'll return an error.
    if (input.value.length < 1) alert("Please enter at least one letter");

    // Creating a new paragraph element with the value of the input field.
    // Attaching them to one another afterwards.
    let newPara = document.createElement("p");
    let newNode = document.createTextNode(input.value);
    newPara.appendChild(newNode);

    // Making the input field empty and writing to the document.
    input.value = "";
    document.body.appendChild(newPara);
}

////////////////////////////////////////////
///                 Main                 ///
////////////////////////////////////////////

// Listening for the key "Enter" whilst typing in the input field.
input.addEventListener("keypress", e => { if (e.key == "Enter") addItem(); });