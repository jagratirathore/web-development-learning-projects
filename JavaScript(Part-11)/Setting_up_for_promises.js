// 👉 Callback Hell ka example + uski problem samajhne ke liye
// 👉 Baad me dekhenge ki Promises is problem ko kaise solve karte hain

// 👉 Yaha hum ek fake database ka concept use kar rahe hain
// 👉 Ye actual database me save nahi karega, sirf console me print karega

// function saveToDb(data) {
//   // 👉 Internet speed random maan rahe hain (1 se 10 tak)
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   // 👉 Agar speed fast hai to data save ho jayega
//   if (internetSpeed > 4) {
//     console.log("Your data was saved:", data);
//   } else {
//     console.log("Weak connection, data not saved");
//   }
// }

// console.log(saveToDb("apna college"));


// 👉 Ab hum Callback Hell ka example bana rahe hain
// 👉 Isme success aur failure ke liye alag callbacks pass kar rahe hain

function saveToDb(data, success, failure) {

    // 👉 Internet speed random generate ho rahi hai
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    // 👉 Agar speed achhi hai to success callback call hoga
    if (internetSpeed > 4) {
        success();
    } 
    // 👉 Warna failure callback call hoga
    else {
        failure();
    }
}


// 👉 Yaha hum sequential kaam kara rahe hain:
// 👉 Pehle data1 save hoga → phir data2 → phir data3
// 👉 Agar beech me failure aaya to process wahi ruk jayega

saveToDb("apna college", () => {
    console.log("success: your data was saved.");

    saveToDb("hello world", () => {
        console.log("success2: data2 saved");

        saveToDb("jagrati", () => {
            console.log("success3: data3 saved");
        }, () => {
            console.log("failure3: weak connection");
        });

    }, () => {
        console.log("failure2: weak connection");
    });

}, () => {
    console.log("failure: weak connection, data not saved");
});


// 👉 Note (Important):
// Yaha hum dependent tasks kara rahe hain:
// ✔ Pehla kaam complete → tabhi dusra chalega
// ✔ Dusra complete → tabhi teesra chalega

// 👉 Problem:
// Code bahut zyada nested ho gaya hai (callback ke andar callback)
// Isse code samajhna aur maintain karna difficult ho jata hai

// 👉 Isi problem ko "Callback Hell" kehte hain

// 👉 Real life me:
// APIs, database calls me bhi aisi situation aati hai

// 👉 Solution:
// ✔ Promises
// ✔ async / await

// 👉 Ye code ko clean, readable aur easy bana dete hain