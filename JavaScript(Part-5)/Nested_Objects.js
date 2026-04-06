//creating nested objects-key value pair bhi esme object h
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city:"Mumbai"
    }
}

//overall object me kya kya h show krega
console.log(classInfo);

//information chaiye aman ki
console.log(classInfo.aman);

//chain bhi bna skte jo jo chaiye usko(.) kr ke likhte jaao
console.log(classInfo.shradha.city);//pune

//change pune ko gurgaon me
console.log(classInfo.shradha.city="gurgaon");//gurgaon
console.log(classInfo.shradha.city);// after change gurgaon
console.log(classInfo);//overall me bhi city ka change aa jaayega