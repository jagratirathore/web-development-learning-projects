//Qs1.Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.?

let arrayAverage =(arr) => {

    let sum=0;
    for(let i=0; i<arr.length; i++){
      sum=sum+arr[i];
      
    }
    return sum/arr.length;
}
console.log(arrayAverage([10,20,30]));//60/3=20