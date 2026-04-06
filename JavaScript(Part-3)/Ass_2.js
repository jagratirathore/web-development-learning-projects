//Write a JS program to get the last n elements of an array.[n can be any positive number].
//For ex-for array[7,9,0,-2] and n=3,Print[9,0,-2]

let array=[7,9,0,-2];
let n=3;
console.log(array.slice(array.length-n));
