//Write a JS program to find the no of digits in a number.
//Example:if number=287152,count=6

// let number=287152;
// let count=number.toString().length;
// console.log("Count:",count);

//while loop use kr ke bhi krna interviwer puchnte h
let number=287152;
let count=0;


while(number>0){
     count++;
     number=Math.floor(number/10);
    }
console.log(count);


