//Write a JavaScript function to generate a random number within a range (start,end)

function GenerateRandomNoRange(){
let start = Number(prompt("Enter a starting range of random number : "));
let end = Number(prompt("Enter a ending range of random number : "));

let rand = Math.floor(Math.random()*(end-start+1))+start;
alert("Random Number: " + rand);
}
GenerateRandomNoRange();