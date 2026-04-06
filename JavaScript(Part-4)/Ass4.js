//Print the factorial of a number n.
//[Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
//Example-  
// 7!(factorial of 7)= 1*2*3*4*5*6*7=5040
// 5!(factorial of 5)= 1*2*3*4*5=120
// 3!(factorial of 3)= 1*2*3=6
// 0! (IS always 1)
let number= Number(prompt("Enter a number to find factorial: "));
let fact=1;
for(let i=1; i<=number; i++){
    fact=fact*i;
}
console.log("factorial is:",fact);