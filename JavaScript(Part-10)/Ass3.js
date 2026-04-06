//Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. 
// The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside the heading.
// [Please note that no other character apart from the allowed characters should be visible in the heading]

let input = document.querySelector("#nameInput");
let heading = document.querySelector("#heading");

input.addEventListener("input", function() {
    
    // Allow only letters (A-Z, a-z) and space
    let filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");
    
    // Update input box (so invalid characters remove ho jaye)
    input.value = filteredValue;
    
    // Show in heading
    heading.innerText = filteredValue;
});

//^ → NOT

//a-zA-Z → letters

//space allowed

//jo bhi inke alawa hoga → remove ho jayega
