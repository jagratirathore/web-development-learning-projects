function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);//5,->ye line execute nhi hogi,pr jb inner function call lgaayega to print hogi ye line bhi,according to lexical scope ye kr paana possible h
    }
    innerFunc();//inner function ko andr se bhi call lgaai ja skti h bhar se bhi
}
console.log(outerFunc());//call lgayenge jese hi outer function ko 5 aa jayega


//hoisting() - JavaScript variables aur functions ko execution se pehle memory me upar le jaata hai.,ki vjha se ye bhi possible ho jaayega ki x or y ko baad me likhu
// function outerFunc(){
    
//     function innerFunc(){
//         console.log(x);//5
//     }
//     let x=5;
//     let y=6;
//     innerFunc();
// }
// console.log(outerFunc());

//lexical scope-bhaar se andr work krta h ,andr se bhaar work nhi krta thats why-Note-The opposite is NOT true
// function outerFunc(){
    
//     function innerFunc(){
//         let a=10;//inner se outer work nhi krta to error aayega
//         console.log(x);//5
//     }
//     let x=5;
//     let y=6;
//     innerFunc();
// }
// console.log(a);//error-inner se outer work nhi krta to error aayega
// console.log(outerFunc());