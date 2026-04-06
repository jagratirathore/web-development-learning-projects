//Map ke example-
let num=[1,2,3,4];

let double = num.map((el)=>{
   return el*2;//hr element ki double value print hogi
});
console.log(double);//naya array hoga jis me har ek element ki value double value print hogi(4)[2,4,6,8]



//square value print hogi-hr ek element ki
let num1=[1,2,3,4];

let square = num1.map((el)=>{
   return el*el;//hr element ki double value print hogi
});
console.log(square);//naya array hoga jis me har ek element ki value square value print hogi(4)[1,4,9,16]



//double ke andr kuch bhi return nhi kr vaayenge koi bhi value nhi  to kya print hoga undefined dekho kese
let num3 = [1,2,3,4];
let double1 = num3.map(el =>{
    //empty
});
console.log(double1);//(4)undefined 4 baar


// hr students ke liye naya array bnaayenge or gpa(1 to 10 number)-% ko gpa me convert krvaayenge
let students= [
    {
      name:"Jagrati",
      marks:95,
    },
    {
      name: "Heena",
      marks:94.4,
    },
    {
      name: "Harsha",
      marks: 80,
    },
];
    let gpa =students.map((el)=>{
        return el.marks/10;
    });

    console.log(gpa);
    //(3)9.5,9.444444401(01 floating point division ki vjha se hota h),8


//Filter ke example-even number ke liye
let nums=[1,2,3,4,7,8,2,9,10,12,11];
let ans=nums.filter((el)=>{
    return el%2==0;//even->true,odd->false
});
console.log(ans);//(6) [2, 4, 8, 2, 10, 12]



//Filter ke example-odd number ke liye
let nums1=[1,2,3,4,7,8,2,9,10,12,11];
let ans1=nums1.filter((el)=>{
    return el%2!=0;//odd->true,even->false
});
console.log(ans1);//(5) [1, 3, 7, 9, 11]



//Filter ke example- saari value 5 se choti h
let nums2=[1,2,3,4,7,8,2,9,10,12,11];
let ans2=nums2.filter((el)=>{
    return el<5;
});
console.log(ans2);//(5) [1, 2, 3, 4, 2]