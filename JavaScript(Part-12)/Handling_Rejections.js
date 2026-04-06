// Error handle hone ke baad bhi niche wala code execute hota hai
// jab hum rejection ko try...catch se handle kar lete hain

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;

            // Agar random number 3 se bada hai to Promise reject ho jayega
            if(num > 3){
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    });
}

async function demo(){
   try{ await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
   }catch(err){
     console.log("error caught and error is: ",err);
   }
    let a = 5;
    console.log(a);
    console.log("new number =", a + 3);
}

console.log(demo());


// Note:
// Agar beech me kisi bhi step par Promise reject ho jata hai,
// to async function wahi par stop ho jata hai aur aage ke statements execute nahi hote.

// Is example me agar kisi color change ke time random number ki wajah se
// Promise reject ho gaya, to uske baad wale color changes execute nahi honge.

// Is problem ko handle karne ke liye hume error handling (try...catch)
// ka use karna chahiye, taaki program abruptly stop na ho aur hum error ko manage kar sakein.