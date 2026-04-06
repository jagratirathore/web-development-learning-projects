//What will be the output?

let greet = "hello";

function changeGeet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreen(){
        console.log(greet);
    }
}
console.log(greet);//error-under se bhaar execute nhi hota h
changeGreet();

//hello-global scope h ye
//error-lexical scope h