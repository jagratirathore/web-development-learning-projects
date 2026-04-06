//Qs1. Try out the following events in Event Listener on your own:- 
// mouseout-Jab mouse pointer kisi element ke upar se hatkar bahar chala jaata hai, tab mouseout event trigger hota hai.
// keypress-Jab user keyboard ki koi key press karta hai, tab keypress event trigger hota hai.
// Scroll-Jab user keyboard ki koi key press karta hai, tab keypress event trigger hota hai.
// load-Jab webpage ya koi resource (image, script, etc.) completely load ho jaata hai, tab load event trigger hota hai.
// [UseMDNforhelp]

 // 1️⃣ mouseout
// let box = document.querySelector("#box");

// box.addEventListener("mouseout", function() {
//     box.style.backgroundColor = "white";
//     box.style.color = "black";
// });


// // 2️⃣ keypress
// let input = document.querySelector("#inputBox");

// input.addEventListener("keypress", function(event) {
//     console.log("Key Pressed:", event.key);
// });//Key Pressed: z


// // 3️⃣ scroll
// window.addEventListener("scroll", function() {
//     console.log("Page is scrolling");
// });// Page is scrolling


// 4️⃣ load
window.addEventListener("load", function() {
    alert("Page is fully loaded!");
});//alert box generate hoga or aayega likha huva page is fully loaded


//✅ Mouse box se bahar jaayega → background white ho jayega
//✅ Input me type karoge → console me key show hogi
//✅ Page scroll karoge → console me message aayega
//✅ Page open hote hi → alert show hoga