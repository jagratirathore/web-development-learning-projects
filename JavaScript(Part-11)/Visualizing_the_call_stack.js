function one(){
    return 1;
}

function two(){
    return one() + one(); // two() ke andar do baar one() call hota hai
}

function three(){
    let ans = two() + one(); 
    // pehle two() call hota hai (left to right execution)
    // two() -> one() + one() = 1 + 1 = 2 return karega
    // phir one() call hoga -> 1 return karega
    // final: ans = 2 + 1 = 3

    console.log(ans); // output: 3
}

three(); // sabse pehle ye call stack me add hota hai

// Call Stack Working:

// 1. three() call hota hai → stack me add hota hai

// 2. three() ke andar:
//    let ans = two() + one();

// 3. Sabse pehle two() call hota hai → stack me add

// 4. two() ke andar:
//    one() + one()

//    - first one() call → return 1 → stack se remove
//    - second one() call → return 1 → stack se remove

//    => two() return karta hai 2 → stack se remove

// 5. wapas three() me:
//    ab one() call hota hai → return 1 → stack se remove

// 6. final calculation:
//    ans = 2 + 1 = 3

// 7. console.log(ans) → output 3

// 8. three() complete → stack se remove

// Note:
// - Call Stack LIFO (Last In First Out) follow karta hai
// - Har function call stack ke top par add hota hai
// - Complete hone par remove ho jata hai
// - 'ans' ek local variable hai jo sirf three() ke andar accessible hai