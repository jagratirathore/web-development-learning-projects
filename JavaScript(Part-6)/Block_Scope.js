//var-block scope
{
    // let a=25;
    var a=25;
}
console.log(a);//25

//let,const-block scope
{
    // let b=25;
    const b=25;
}
console.log(b);//error(b is not defined), ku ki bhaar use kr rhe h block scope ko or agr let ki place pe const bhi kr dete to same error aata but var krte to output de dega

// //loop me -block scope-bhaar i ko defined krenge to error aayega andr{}vaala print ho jaata h
// for(let i=0; i<=10; i++){
//     console.log(i);//block scope h ye-print 1 to 10
// }
// console.log(i);//error

//if else-block scope
// let age = 25;
// if(age>=18){
//     let str = "adult";
//     console.log(str);//print
// }
// console.log(str);//error