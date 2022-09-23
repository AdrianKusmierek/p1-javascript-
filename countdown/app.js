const countDate = new Date("2023-04-22T17:00:00");
var e = document.getElementById("counter");

var countdown = targetDate => {
    const now = new Date();
    const gap = Math.abs(targetDate - now);

    const second = Math.floor(gap / 1000 % 60);
    const minute = Math.floor(second / 60 % 60);
    const hour = Math.floor(minute / 60 % 24);
    const day = Math.floor(hour / 24);

    return `
    ${(day < 10) ? `0${day}` : day} days\n
    ${(hour < 10) ? `0${hour}` : hour} hours\n
    ${(minute < 10) ? `0${minute}` : minute} minutes\n
    ${(second < 10) ? `0${second}` : second} seconds
    `;
}

e.innerText = countdown(countDate);
setInterval(() => e.innerText = countdown(countDate), 1000);