/////////////////////////////////////////////////////////
///                    Main Vars                      ///
/////////////////////////////////////////////////////////

// Defining the id within a variable for the ease of use.
// Defining the title element from the index.html file.
var idStr = "myId";
var myElement = document.getElementById(idStr);
var body = document.body;

var toggle = false;

/////////////////////////////////////////////////////////
///                  Main Functions                   ///
/////////////////////////////////////////////////////////

function changeTitleColor() {
    if (toggle) {
        toggle = false;

        myElement.style.display = "none";
    } else {
        toggle = true;

        myElement.style.display = "block";
    }
}

function hehe() {
    setInterval(() => {
        body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }, 100);
}

/////////////////////////////////////////////////////////
///                       Main                        ///
/////////////////////////////////////////////////////////

myElement.style.fontWeight = "normal";