let cars= ["toyota","gwagon","xuv","maruti","bmw","ferrari"];
console.log(cars);//(6)

//sort();->ye hmko ascending order me sort kr ke de degi alphabet wise
console.log(cars.sort());//(6)["bmw","ferrari","gwagon","maruti","toyota","xuv"]

//one more ex- of characters
let chars=['b','e','d','a'];
console.log(chars.sort());//(4)['a','b','d','e']




//note-sort hm tb hi use krenge jb hmare pass character ho ya string ku ki sorting number pe nhi hota h numer ko string me convert kr ke phir short krta h agr mene 99,89,67,42,100 diya to sb se phele sb string me automatic convert ho jaayenge phir increasing order me aayenge to ans esa aayega 100,42,67,89,99
let marks=[99,89,67,42,100];

console.log(marks.sort());//5[100,42,67,89,99]