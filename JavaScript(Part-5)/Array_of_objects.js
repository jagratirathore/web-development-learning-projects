const classInfo = [
{
    name: "Jagrati",
    grade: "A+",
    city: "Delhi"
},
{
    name:"Anay",
    grade: "A+",
    city: "Pune"
},
{
    name:"karan",
    grade:"O",
    city: "Mumbai"
}
];

//en sb operation ko hm direct console pe bhi perform kr kste h withou using console.log -only direct

//print array classInfo
console.log(classInfo);

//index[0]-vaale element ko access krenge to
console.log(classInfo[0]);

//index[1]-vaale element ko access krenge to
console.log(classInfo[1]);

//index[2]-vaale element ko access krenge to
console.log(classInfo[2]);

//1 index me name jaan na to
console.log(classInfo[1].name);

//chain bhi bna skte jo jo chaiye usko(.) kr ke likhte jaao
console.log(classInfo[1].city);//pune


//change pune ko gurgaon me
console.log(classInfo[1].city="gurgaon");//gurgaon
console.log(classInfo[1].city);// after change gurgaon
console.log(classInfo);//overall me bhi city ka change aa jaayega