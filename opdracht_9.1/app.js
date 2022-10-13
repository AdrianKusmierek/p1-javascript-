let showModal = (e) => e.style.display = "flex";
let checkAge = (e, err) => { if (Number(e.value) < 18) { err.style.display = "flex" } else { window.location.href = "https://e621.net/" }};