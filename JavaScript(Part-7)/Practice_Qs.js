//Write an arrow function that returns the square of a number 'n'?
const square = (n)=>(n*n);
console.log(square(2));//4
console.log(square(8));//64



//Write a function that prints "Hello World" 5 times at intervals of 2s each. 
let count=0;

let id=setInterval(()=>{
    console.log("Hello World");
    count++;

    if(count==5){
        clearInterval(id);
    }
},2000);//2000=2s

//console.log(id);//1-id