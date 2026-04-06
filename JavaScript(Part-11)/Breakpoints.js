function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three(); // output: 3


// Note: Breakpoints

// Breakpoints debugging ke liye use hote hain.
// Jab code bada ya complex hota hai aur hume samajhna hota hai ki kaunsi line kaise execute ho rahi hai,
// to hum us line par breakpoint laga dete hain.

// Breakpoint lagane ke baad:
// - Program execution us line par pause ho jata hai
// - Hum step-by-step code ko run kar sakte hain

// Kaise use kare (Browser DevTools me):
// 1. Inspect open karo (Right click → Inspect)
// 2. "Sources" tab me jao
// 3. Apni JS file (jaise app.js / Breakpoints.js) open karo
// 4. Jis line par rokna hai us line 14 number par click karo → breakpoint set ho jayega

// Features:
// - Yellow highlight line → current executing line dikhati hai
// - "Paused in debugger" → code ruk gaya hai breakpoint par
// - Call Stack panel → kaunsa function run ho raha hai wo dikhata hai

// Step Controls:
// - Step Over → next line execute karega
// - Step Into → function ke andar le jayega
// - Step Out → current function se bahar le aayega

// Important:
// - Hum multiple breakpoints bhi laga sakte hain
// - Call Stack se dekh sakte hain kaunsa function kis order me call ho raha hai
// - Isse complex programs ko samajhna easy ho jata hai

// Conclusion:
// Breakpoints ki help se hum JavaScript ke call stack ko easily observe kar sakte hain
// aur debugging process ko simple bana sakte hain.