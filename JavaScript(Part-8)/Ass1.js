//Square and sum the array elements using the arrow function and then find the average of the array.?

const arr =[2,4,6,8];

//square
const sqrArr = arr.map((num)=>num*num);

//sum
const sumArr = arr.reduce((total,num)=>total+num,0);

//avg
const avgArr =sumArr/sqrArr.length;

console.log("Squared Array: ",sqrArr);//(4) [4, 16, 36, 64]
console.log("Sum Array: ",sumArr);//20
console.log("Avg Array: ",avgArr);//5
