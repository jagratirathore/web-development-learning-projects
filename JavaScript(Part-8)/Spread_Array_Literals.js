//array 
let arr=[1,2,3,4,5];
let newArr =[...arr];//ye arr ke copy h newArr me
console.log(arr);
console.log(newArr);
//changes kr rhe new array me
console.log(newArr.push(6));//6
console.log(newArr);//esme 6 add ho gya
console.log(arr);//esme koi changes nhi honge

//String
let chars = [..."hello"];
console.log(chars);//(5) ['h', 'e', 'l', 'l', 'o']

//phele pura odd array aayega phir pura even array
let odd =[1,3,5,7,9];
let even=[2,4,6,8,10];
let nums=[...odd,...even];
console.log(nums);//(10) [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]