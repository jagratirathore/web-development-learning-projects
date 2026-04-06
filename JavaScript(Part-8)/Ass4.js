//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments .The function should return a new array with the original array values and all of the additional arguments doubled.


function doubleAndReturnArgs(arr, ...args) {
    const doubled = args.map(num => num * 2);
    return [...arr, ...doubled];
}

console.log(doubleAndReturnArgs([1,2,3], 4,5,6));