//Create an h1 element on the page and set its text to "DOM Practice"undefined.Change its color to purple.
// Create h1 element
let heading = document.createElement("h1");

// Set text
heading.innerText = "DOM Practice";

// Change color
heading.style.color = "purple";

// Add to page
document.body.append(heading);