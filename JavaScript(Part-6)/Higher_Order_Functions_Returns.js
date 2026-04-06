function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            return !(n % 2 == 0);
        };
    }
    else if(request == "even"){
        return function(n){
            return n % 2 == 0;
        };
    }
    else{
        return "wrong request";
    }
}

// let request = "odd";

// let func = oddOrEvenFactory(request);

// console.log(func(3)); // true
// console.log(func(2)); // false

let request = "even";

let func = oddOrEvenFactory(request);

console.log(func(3)); // false
console.log(func(2)); // true