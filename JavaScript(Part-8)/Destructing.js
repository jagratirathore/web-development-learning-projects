let names = ["tony","bruce","peter","streve","abc","xyz","pyq"];
// let winner=names[0];//jo first aaya 
// let runnerup = names[1];//jo second aaya
// let secondRunnerup = names[2];//jo third aaya

//let [winner,runnerup,secondRunnerup,others]=names; //others=streve store hoga
let [winner,runnerup,secondRunnerup,...others]=names; //(destructuring or rest ke concept ko combine kr ke use kiya h)remaining sb store ho jaayenge

console.log(winner);//winner=0 index 
console.log(runnerup);//runnerup=1 index
console.log(secondRunnerup);//secondRunneru=2 index
//console.log(others);//agr ... nhi lgaate others me to serf streve  store hota


//en sb names ko alg se koi or array me store krana h to uske liye hm destructuring ke concept ko use krenge[...others] others name ka ek array bnaayenge jo rest concept ko use kr rha h jitne bhi name bach jaayenge vo sb others me collect ho jaayennge.
console.log(others);//(4) ['streve', 'abc', 'xyz', 'pyq']
