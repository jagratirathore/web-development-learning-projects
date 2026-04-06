// Async Function: isme do main keywords hote hain — async aur await.

// Async Keyword:
// Hum kisi bhi normal function ke aage "async" likhkar usse async function bana dete hain.
// Async function hamesha Promise return karta hai, chahe hum explicitly Promise return karein ya nahi.
// Agar hum koi normal value (jaise string) return karte hain, to wo automatically Promise me wrap ho jati hai.
// Aur Promise par hum .then() aur .catch() methods apply kar sakte hain.


// create async function and this function returns a Promise
// async function greet() {
//     return "hello world!";
// }

// console.log(greet()); //it shows promise fullfilled by string hello world.
// ye automatically Promise return karega
// yani "hello world!" ek fulfilled Promise ke form me return hoga


// Note:
// 1. Agar async function koi value return kare → Promise fulfilled hota hai
// 2. Agar error throw ho → Promise reject ho jata hai

//ye line error throw kregi-abc.abc(); q ki eska kuch mtlb nhi hota h
// async function greet() {
//     abc.abc();
//     return "hello world!";
// }

// console.log(greet()); //it shows promise rejected

//throw kr vaayenge random error to
// async function greet() {
//     throw  "abc.abc() some random error" ;
//     return "hello world!";
// }

// console.log(greet()); 

//using then and catch in promises
async function greet() {
    //throw "weak connection";//throw krenge ek random error result: Promise was rejected with err:  weak connection
    // throw "404 page not found";//Promise was rejected with err:  404 page not found
    return "hello world!";
}

greet()
.then((result)=>{
  console.log("promise was resolved");
  console.log("result was: ",result);
})
.catch((err)=>{
    console.log("Promise was rejected with err: ", err);
})

//reult-promise was resolved
//async_Functions.js:49 result was:  hello world!

//note:infact hm hmare arrow function ko bhi async bna skte h
// let demo = async()=>{
//     return 5;
// }
// console.log(demo());//promise fulfilled 5