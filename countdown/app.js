///////////////////////////////////////////////
///             Main Variables              ///
///////////////////////////////////////////////

// Defining the mandatory date variables.
const countDate = new Date("2023-04-22T17:00:00");

// Defining the h1 element from the index.html.
var e = document.getElementById("counter");

///////////////////////////////////////////////
///              Main Functions             ///
///////////////////////////////////////////////

function countdown(targetDate) {
    // Variables for setting the difference.
    const now = new Date();
    const gap = Math.abs(targetDate - now);

    // Defining the overall time left.
    const second = Math.floor(gap / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);

    // Defining the relative time left.
    const textDay = `${day}`;
    const textHour = `${hour % 24}`;
    const textMinute = `${minute % 60}`;
    const textSecond = `${second % 60}`;

    // Returning the variables out of the funtion.
    // As well as doing some nice formatting.
    return `
    ${(textDay < 10) ? `0${textDay}` : textDay} days\n
    ${(textHour < 10) ? `0${textHour}` : textHour} hours\n
    ${(textMinute < 10) ? `0${textMinute}` : textMinute} minutes\n
    ${(textSecond < 10) ? `0${textSecond}` : textSecond} seconds
    `;
}

///////////////////////////////////////////////
///                  Main                   ///
///////////////////////////////////////////////

// Setting the time left on page load.
e.innerText = countdown(countDate);

// Updating the counter every 1000ms (1 second).
setInterval(() => e.innerText = countdown(countDate), 1000);