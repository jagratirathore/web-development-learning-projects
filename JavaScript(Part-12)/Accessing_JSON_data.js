// Just calling API response in console
// Abhi hum JSON data par deal kar rahe hain, JS object par nahi.
// Isliye jsonResponse.fact karke console me call nahi kar sakte, kyunki ye valid nahi hoga.

let jsonResponse = '{"fact":"Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby. Legend says that tabby cats have an \u201cM\u201d for Mohammed on top of their heads because Mohammad would often rest his hand on the cat\u2019s head.","length":210}';

console.log(jsonResponse);

// console.log(jsonResponse.fact); // Ye print nahi hoga kyunki jsonResponse ek string hai


// Use parse method:
// Parse ka matlab hota hai ek data format se dusre format me convert karna.
// Yaha hum JSON string ko JavaScript object me convert kar rahe hain.

let validResponse = JSON.parse(jsonResponse);

console.log(validResponse); 
// Ab jo output aayega wo JavaScript object ke form me hoga

console.log(validResponse.fact); 
// Ab hum fact ko access kar sakte hain


// Use stringify method:
// Ye parse ka opposite hota hai.
// Isme hum JavaScript object ko JSON string me convert karte hain.
// Ye tab use hota hai jab hum apni APIs banate hain ya data send karte hain.

let student = {  // Ye JavaScript object hai
    name: "jagrati",
    marks: 99,
};

console.log(student);

// JS object ko JSON string me convert kar rahe hain

let validResponse1 = JSON.stringify(student);

console.log(validResponse1);