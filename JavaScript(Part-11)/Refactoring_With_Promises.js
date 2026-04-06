// 👉 Asynchronous function me hum Promise return karte hain
// 👉 Isse code ki readability improve hoti hai (callback hell kam hota hai)
// 👉 Kaam karwane ke bajaye ye ek Promise object return karta hai


// 👉 Ye function ek naya Promise return karega
// 👉 Internet speed abhi bhi calculate hogi (same logic)
// 👉 Lekin ab result Promise ke through milega

function saveToDb(data) {

  return new Promise((resolve, reject) => { // success = resolve, failure = reject

    // 👉 Random internet speed generate ho rahi hai
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    // 👉 Agar speed achhi hai → Promise resolve hoga
    if (internetSpeed > 4) {
      resolve("Success: data was saved");
    } 
    // 👉 Agar speed slow hai → Promise reject hoga
    else {
      reject("Failure: weak connection");
    }

  });
}


// 👉 Function ko call karne ke liye:
// saveToDb("apna college"); // console me call kar sakte hain


// 👉 Promise ki 3 states hoti hain:

// 1. Pending:
// - Initial state
// - Abhi pata nahi hai promise complete hua hai ya nahi

// 2. Fulfilled (Resolved):
// - Kaam successfully complete ho gaya

// 3. Rejected:
// - Kaam me error aa gaya / fail ho gaya


// 👉 Important:
// - Promise me 2 main functions hote hain:
//   ✔ resolve() → success case
//   ✔ reject() → failure case

// 👉 Inke basis par hum aage ka kaam handle karte hain
// 👉 (.then for success, .catch for failure)