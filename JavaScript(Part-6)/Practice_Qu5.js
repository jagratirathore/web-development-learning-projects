//Create a function that returns the sum of numbers from 1 to n?

function sumofNumbers(n){//as a input number le liya hmne
   let sum=0;
    for(let i=1; i<=n; i++){
    sum=sum+i;
   }
   return sum;
}
console.log(sumofNumbers(5));//1+2+3+4+5=15
console.log(sumofNumbers(10));//55
console.log(sumofNumbers(100));//5050
console.log(sumofNumbers(1000));//500500
console.log(sumofNumbers(10000));//50005000