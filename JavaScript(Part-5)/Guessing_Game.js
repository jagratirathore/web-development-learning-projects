//User enters a max number & then tries to guess a random generated number between 1 to max.(1 to 10)

// Ask user for maximum number
let max = Number(prompt("Enter the maximum number: "));

// Generate random number between 1 and max
let rand = Math.floor(Math.random() * max) + 1;

// Take first guess
let user = Number(prompt(`Guess a number between 1 to ${max}: `));

// Keep asking until correct
while (user !== rand) {
    if (user > rand) {
        user = Number(prompt("Too high! Try again: "));
    } else {
        user = Number(prompt("Too low! Try again: "));
    }
}

console.log(`🎉 Successful! The random number was: ${rand}`);
