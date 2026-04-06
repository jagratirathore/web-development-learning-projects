//Qs2. Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age):name is age years old.
//[Use template Literals to print this sentence=``]

let userName=prompt("Enter user name: ");
let age=prompt("Enter user age: ");
let substitude = `${userName} is ${age} years old`;
alert(substitude);