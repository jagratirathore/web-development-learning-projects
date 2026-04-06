//Create a function to roll a dice & always display the value of the dice (1 to 6)?

function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log("Always display dice from 1 to 6 is: ",rand);
}
rollDice();