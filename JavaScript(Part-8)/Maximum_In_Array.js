//Using loop find max in an array
// let arr = [10,20,1000,30,40,50];
// let max=0;//zero ya negative number kuch bhi le skte h compare krne ke liye jese -1.

// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);//1000

//With the help of reduce function
let arr = [1,2,3,1];
let ans = arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(ans);//3