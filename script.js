const button = document.querySelector("button");
let pervHTML = document.querySelector(".para");

function greet() {
   const name = prompt("What is your name");
   alert(`Hello ${name}, Nice to see You !`);
}

button.addEventListener("click", greet);
