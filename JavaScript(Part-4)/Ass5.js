//Find the largest number in an array with only positive numbers.

let arr=[10,20,-2,50];

let largest=arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest=arr[i];
      }
}

  console.log("largest is: ",largest);
