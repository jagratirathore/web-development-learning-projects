//Qs6(Bonus). Write a program to check if 2 numbers have the same last digit . 
// Eg:32 and 47852 have the same last digit i.e. 2

let num1=32;//num1%10===2
let num2=47852;//num2%10===2

if(num1%10===num2%10){
    console.log("It have same last digit 2");
}else{
    console.log("It cannot have same last digit 2");
}