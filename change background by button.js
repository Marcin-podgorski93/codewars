// HTML 

// <button id="switch">Click me!</button>

let color = 'white';

const button = document.getElementById("switch");


button.addEventListener("click", () => {
console.log("Click!!!");
color = color === 'white' ? 'black' : 'white';
document.body.style.background = color;
});1