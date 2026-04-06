//every =logical AND hota
//for even
let arr=[2,4,6].every((el)=>el%2==0);
console.log(arr);//true

//for odd
let arr1=[1,3,5,7].every((el)=>el%2!=0);
console.log(arr1);//true

//agr ek bhi digit array me odd h(1) hm even find kr rhe to vo false de dega
let arr2=[2,4,6,1].every((el)=>el%2==0);
console.log(arr2);//false

//agr ek bhi digit array me even h(2) hm odd find kr rhe to vo false de dega
let arr3=[1,3,5,7,2].every((el)=>el%2!=0);
console.log(arr3);//false

//Some(At least one condition true ho to true)=logical OR hota
//even
let nums = [1,3,5,7,8];//8 ,ek bhi true hui to true

let result = nums.some(el => el % 2 === 0);

console.log(result);//true

//even
let nums1 = [1,3,5,7];//ek bhi true hui to true-sb odd number h sb false h 

let result1 = nums1.some(el => el % 2 === 0);

console.log(result1);//false