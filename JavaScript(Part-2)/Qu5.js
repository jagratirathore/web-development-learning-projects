//Qs5. Write a program to find the largest of 3 numbers

let num1=10;
let num2=20;
let num3=30;

if(num1>=num2 && num1>=num3){
    console.log("num1 is largest: ",num1);
}else if(num2>=num3 && num2>=num1){
    console.log("num2 is largest: ",num2);
}else if(num3>=num1 && num3>=num2){
    console.log("num3 is largest: ",num3);
}else{
    console.log("no one is largest");
}
