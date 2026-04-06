//Qs2 .Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     btn.style.color="green";
// });

// Create button using JavaScript
let btn = document.createElement("button");

btn.innerText = "Click Me";

// Add button to page
document.body.appendChild(btn);

// Add event listener
btn.addEventListener("click", function() {
    btn.style.color = "green";
});