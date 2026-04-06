// await: iska basic matlab hota hai "wait karna".
// await kisi Promise ke resolve/reject hone tak async function ko temporarily pause kar deta hai.
// Dhyan rahe: await sirf async function ke andar hi use ho sakta hai.


// function getNum() {
//     // ye function ek Promise return karta hai jo random number generate karta hai
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log("random number is:", num);
//             resolve(); // number print hote hi Promise resolve ho jayega
//         }, 1000);
//     });
// }

// async function demo() {

    // Agar hum multiple baar getNum() ko bina await ke call karein,
    // to saari calls ek saath (parallel) execute hongi (~1 second me)

    // getNum();
    // getNum();
    // getNum();
    // getNum();
    // getNum();
    // getNum();


    // Agar hume calls ke beech gap chahiye (sequential execution),
    // to hum await ka use karte hain.
    // Har await ke baad next line tabhi execute hogi jab current Promise resolve ho jaye.

    // Example:
    // await getNum(); // ~1 sec wait karega
    // getNum();      // ye baaki calls ek saath execute ho jayengi


    // Agar hume har call ke beech ~1 second ka gap chahiye,
    // to har call ke aage await lagayenge

//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }


// demo() ek Promise return karta hai
// console.log(demo());


// Final Note:
// await tab use karte hain jab hume sequential execution chahiye,
// yani ek task complete hone ke baad hi next task start ho.



// Promise ke saath async/await use karke hum code ko chhota,
// readable aur callback hell se free bana sakte hain.
// Yahan hum color changing example par same concept apply kar rahe hain.

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        h1.style.color = color;
        console.log(`color changed to ${color}!`);
        resolve("color changed!");
      }, delay);
    });
}

async function demo() {
   await changeColor("red", 1000);
   await changeColor("blue", 1000);
   await changeColor("pink", 1000);
   await changeColor("green", 1000);
   await changeColor("brown", 1000);
   await changeColor("yellow", 1000);
   await changeColor("orange", 1000);
   await changeColor("peach", 1000); // "pitch" ki jagah "peach"
   await changeColor("grey", 1000);
   await changeColor("red", 1000);
}

console.log(demo());


// Note:
// Pehle jo bada code callback hell ke saath tha,
// usse humne async/await aur Promises ka use karke
// zyada clean, readable aur maintainable bana diya hai.

// Asynchronous calls ka use isliye karte hain:
// 1. Code ko non-blocking banane ke liye
// 2. Better readability ke liye
// 3. Clean aur easy-to-understand structure ke liye