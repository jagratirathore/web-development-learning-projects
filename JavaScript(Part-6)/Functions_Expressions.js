//variable ke name se hi fuction ko call krte hm js me-enhi ko fuction expression bolte h

let sum = function(a,b){
    return a+b;
}

console.log(sum);//pura f(function) print hoga
//eske baad console window pe direct type kro sum(5,5);//10


//ek or bna lete h
// let hello = function(){
//     console.log("hello");
// }

// console.log(hello);//pura f(function) print hoga
// console.log(hello());//hello

//value change bhi kr skte h hm jese hello me hi namaste kr rhe ab
let hello = function(){
    console.log("hello");
}
hello=function(){
    console.log("namaste");
}

console.log(hello);//f bhi namaste vaala change ho ke aayega
console.log(hello());//namaste



//note-jo variable ke sath kr skte h vo sb fuction ke sath bhi kr skte h change update sb usi ko function expression khete h hm