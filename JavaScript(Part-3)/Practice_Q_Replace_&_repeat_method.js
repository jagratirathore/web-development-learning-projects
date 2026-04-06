//1)For the give String:
// let mst ="help!";
// Trim it & convert it to uppercase.Trim

//2)For the String->let name="ApnaCollege",predict the output for following:
// name.slice(4,9)
// name.indexOf("na")
// name.replace("Apna","Our")
    

//3)Separate the "college" part in above string and replace "l" with "t"?


//1)
let msg=  "help!";
console.log(msg.trim().toUpperCase());

//2)
let name="ApnaCollege";
console.log(name.slice(4,9));//Colle
console.log(name.indexOf("na"));//2(starting index n ka 2 h to)
console.log(name.replace("Apna","Our"));//OurCollege

//3)
let name1="ApnaCollege";
console.log(name1.slice(4).replace("l","t").replace("l","t"));
