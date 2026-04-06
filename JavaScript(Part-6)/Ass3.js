//Write a JAvascript function that accepts a list of country names as input and returns the longest country name as output.
//Example: country=["Australia","Germany","United States of America"] 
// output:"United States of America


let country = ["Australia","Germany","United States of America"];

function longestCountry(country){
    let longest=country[0];
    for(let i=0; i<country.length; i++){
        if(country[i].length>longest.length){
            longest=country[i];
        }
    }
    return longest;
}
console.log(longestCountry(country));
