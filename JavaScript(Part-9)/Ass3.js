//Access the btn using the querySelector and button id.Change the button background color to blue and text color to white.
// Select button using id
// Create button
let btn = document.createElement("button");
btn.innerText = "Click me";
btn.id = "btn";

// Add to page
document.body.append(btn);

// THEN select it
let button = document.querySelector("#btn");

// Change style
button.style.backgroundColor = "blue";
button.style.color = "white";