//Check if allnumbers in our array are multiples of 10 or not.
let arr=[10,20,30,40];//es aare me ek bhi multiple of 10 add kiya jese 3 to false de dega ans
let ans = arr.every((el)=>el%10==0);//allnumber bola esliye every liya
 console.log(ans);//true




//Create a function to find the min number in an array.
let num=[20,30,600,400,8000];

function getMin(num){
  let min=num.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
 return min;
}


console.log(getMin(num));//20
console.log(getMin([1,2,-3,5,6,-8,9]));//new array ke liye bhi call kr skte h -8