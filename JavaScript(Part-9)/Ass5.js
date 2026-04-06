//Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.
// Create p element
let para = document.createElement("p");

// Use innerHTML because we need bold text
para.innerHTML = "Apna College <b>Delta</b> Practice";

// Add to page
document.body.append(para);