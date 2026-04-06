// 👉 Sabse pehle h1 element ko access karte hain using querySelector
// let h1 = document.querySelector("h1");


// 👉 setTimeout asynchronous hota hai (immediately execute nahi hota)
// 👉 Yaha hum 1 sec, 2 sec, 3 sec ke delay ke baad color change kar rahe hain

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000); 

// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000); 

// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000); 


// 👉 Problem:
// Har kaam ke liye alag-alag delay dena pad raha hai
// Agar kaam zyada ho gaye to code messy ho jayega

// 👉 Solution: Function bana lete hain

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   setTimeout(() => {
//       h1.style.color = color;
//   }, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);


// 👉 Problem:
// Agar pehle wale step me error aa gaya to next steps execute nahi honge
// Matlab dependency handle nahi ho rahi

// 👉 Solution: Callback use karte hain (nextColorChange)
// 👉 Isse ek kaam complete hone ke baad hi next kaam chalega

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
      h1.style.color = color;

      // 👉 Agar next callback diya hai to usse call karo
      if (nextColorChange) nextColorChange();

  }, delay);
}


// 👉 Yaha 7 colors change kar rahe hain using callback nesting
// 👉 Har next color, previous ke complete hone ke baad hi aayega

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("pink", 1000, () => {
          changeColor("blue", 1000, () => {
            changeColor("grey", 1000);
          });
        });
      });
    });
  });
});


// 👉 Note (Important):
// Is type ka nested callback code confusing ho jata hai
// Isse samajhna mushkil hota hai

// 👉 Is problem ko "Callback Hell" kehte hain

// 👉 Real life me (APIs, Database calls) me bhi aisa hota hai
// Jahan ek kaam dusre par depend hota hai

// 👉 Callback Hell se bachne ke liye:
// ✔ Promises use karte hain
// ✔ async/await use karte hain

// 👉 Ye code ko clean, readable aur easy banata hai