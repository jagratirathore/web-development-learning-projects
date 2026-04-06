//funtion1 ko define kiya
function hello(){
    console.log("Hello");
}

//function ke and jo jo chiz likhi h sb run ho jaayegi,function ko execute krne ke liye or use krne ke liye hmko call krna pdta h-jitni baar call krna ho kr skte h
hello();//'Hello'
hello();//'Hello'
hello();//'Hello'
hello();//'Hello'
hello();//'Hello'
hello();//'Hello'


//function2 definition
function printName(){//function ke andr multiple line bhi print kr va skte h
    console.log("My name is Jagrati!");
    console.log("I am studing in SGSITS college!");
}
//call function
printName();


//function ke andr loops bhi lga skte h
function print1to5(){
    for(let i=0; i<=5; i++){
        console.log(i);
    }
}
print1to5();
//print1to5();

//function ke and if else use krenge
function isAdult(){
    let age=15;
    if(age>=18){
        console.log("It is adult : and it is eligible to give vote.");
    }else{
        console.log("It is  not adult : and it is  not eligible to give vote.");

    }
}
isAdult();


//taking user se input in fuction
function add(){
   let num1 = Number(prompt("Enter a num1: "));
   let num2 = Number(prompt("Enter a num2: "));
   
   alert("sum of two number is: "+(num1+num2));
   //alert ke andr , nhi + use krte remember it
}
add();

//note-baar baar bhut sara code or logic likhne ke kaam ko km krta h hmara function bs hm usko ek baar likh ke baar baar call kr ke use kr skte h programming me