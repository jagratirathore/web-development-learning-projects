// let a = 25;
// console.log(a); // 25
// let b = 10;
// console.log(b); // 10
// console.log(a + b); // 35


// 👉 setTimeout use hota hai delay ke liye (asynchronous)

// 👉 Yaha breakpoint laga ke tum check kar sakti ho:
// - JavaScript single-threaded hai
// - Ek time par ek hi function call stack me execute hota hai

setTimeout(() => {
    console.log("hello world");
}, 2000); 
// 2000 ms = 2 seconds
// 👉 JS is function ko turant execute nahi karti
// 👉 JS isse browser ko de deti hai (timer handle karne ke liye)


setTimeout(() => {
    console.log("hello world");
}, 2000); 
// 👉 Ye bhi browser ko chala jata hai
// 👉 Dono timers parallel start hote hain (browser handle karta hai)


console.log("hello..");
// 👉 Ye line sabse pehle execute hogi (synchronous code)


// 🔥 Final Execution Flow:
// 1. console.log("hello..") → pehle print hoga
// 2. 2 seconds baad → first setTimeout ka callback call stack me aayega → print
// 3. phir second setTimeout ka callback → print

// 👉 Important:
// - JS single-threaded hai
// - Waiting ka kaam browser karta hai
// - Call stack me ek time par ek hi function aata hai