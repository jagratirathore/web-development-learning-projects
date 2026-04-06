//Write a JS program to find the sum of digits in a number.
//Example:if number=287152,sum=25

let num=287152;
let sum=0;
while(num>0){
   let digits=num%10;
   sum=sum+digits;
   num=Math.floor(num/10);//MAth.floor-kisi bhi decimal number ke nearest integer me convert krta h
    
}
console.log("sum is: ",sum);//25

