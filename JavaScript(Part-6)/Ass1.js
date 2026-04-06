//Write a Javascript function that returns array elements larger than a number.

let arr = [10, 20, 30, 40, 60];
let n = 40;

function largerNumber(arr, n) {
    return arr.filter(function(element) {
        return element > n;
    });
}

console.log(largerNumber(arr, n)); 