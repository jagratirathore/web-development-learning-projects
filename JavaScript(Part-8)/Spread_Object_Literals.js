//facebook ka data user se liya
const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

//es data ko copy kr denge hm spread ko use kr ke
const dataCopy = {...data};//esme bhi add kr skte , kr ke items

console.log(data);
// Object
// email: "ironman@gmail.com"
// password: "abcd"
// [[Prototype]]: Object
console.log(dataCopy);
// Object
// email: "ironman@gmail.com"
// password: "abcd"
// [[Prototype]]: Object


//dataCopy  me id bhi dena h or country bhi or update kr diya usko
const dataUpdate = {...dataCopy,id:123,country:"india"};
console.log(dataUpdate);
console.log(dataCopy);
console.log(data);

//arr ke jitne bhi items h unko object me convert krna chahte h 
let arr = [1,2,3,4,5];//arr->serf values hoti h
let obj1={...arr};//obj->kel:value pair me hoti h
console.log(obj1);//sbhi index print honge -{0: 1, 1: 2, 2: 3, 3: 4, 4: 5},index =key,value=inner object bn jaayegi

//string ke case me
let obj2={..."hello"};
console.log(obj2);//sbhi index print honge{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}