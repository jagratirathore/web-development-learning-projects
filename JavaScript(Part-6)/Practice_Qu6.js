//Create a function that returns the concatenation(add or sum) of all strings in an array?

let str = ["Jagrati","Harsha","Heena","Anay","Aman","Mayank"];
function concatenationofallStringinarray(str){
    let result= "";  // IMPORTANT: empty string se start("")-space nhi denge eske bich to khali string se start hoga
    for(let i=0; i<=str.length-1; i++){//array index 0 se start hota i=0
     result=result+str[i];//array ke liye arr[i]
    }
    return result;
}
console.log(concatenationofallStringinarray(str));//print arr krvana h na