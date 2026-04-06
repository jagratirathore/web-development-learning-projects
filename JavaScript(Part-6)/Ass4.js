//Interview question very imp-Write a JavaScript function to count the number of vowels in a String argument.

function countVowel(str){
    let count=0;
    let vowels ="aeiouAEIOU";

    for(let i=0; i<str.length; i++){
       if(vowels.includes(str[i])){
        count++;
       }
    }
    return count;
}
console.log(countVowel("Hello WorlD!"));