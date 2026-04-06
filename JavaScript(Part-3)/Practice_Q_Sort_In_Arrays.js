//1)For the given start state of an array,change it to final form using splice.
start:["january","july","march","august"]
final:["july","june","march","august"]

//2)Return the index of the "javascript" from the given array,if it was reversed.
["C","C++","html","javascript","python","java","C#","sql"]


//1)using splice-start,delete,add
let months = ['january','july','march','august'];
console.log(months);//(4)

console.log(months.splice(0,1));//0index pe 1 chiz delte ho jaayegi -january
console.log(months);//(3)["july","march","august"]

console.log(months.splice(1,0,"june"));//[]-jo delete krte vhi deta splice
console.log(months);//(4)["july","june","march","august"]


//2)
let lang=['C','C++','html','javascript','python','java','C#','sql'];
console.log(lang);//['C','C++','html','javscript','python','java','C#','sql']

//reverse
console.log(lang.reverse());//puri string ulti ho jaayegi
console.log(lang.indexOf('javascript'));//4