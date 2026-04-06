/*
forEach():
→ Array ke har element par function ko ek baar run karta hai.
→ Ye new array return nahi karta.
→ Sirf iteration karta hai.
*/

//function name-se print
let arr1= [1,2,3,4,5];

let print = function (el){
    console.log(el);
};
arr1.forEach(print);//forEach-function ek-ek element ke liye run krega
//1
//2
//3
//4
//5

//function difiniton-se print
let arr2=[1,2,3,4,5];

arr2.forEach(function(el){//variable bnaya el-eska mtlb individual elements
    console.log(el);
});
//1
//2
//3
//4
//5

//arrow-function use kr ke
let arr3=[1,2,3,4,5];

arr3.forEach((el)=>{//variable bnaya el-eska mtlb individual elements
    console.log(el);
});
//1
//2
//3
//4
//5

//creating array of objects
let arr= [
{
    name:"Jagrati",
    marks: 95
},
{
    name:"Heena",
    marks: 94.4
},
{
    name:"Rajat",
    marks: 9
}];
console.log(arr);//(3)
arr.forEach((student)=> {//har ek object ke liye marks print krvana to forEach use kr skte h
  console.log(student.marks);

});
//Jagrati : 95
//Heena : 94.4
//Rajat : 9

