//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.-imp interview mw puchte h

function mergeObjects(ob1,ob2){
     return {...ob1,...ob2};
}


const ob1 = {
    name:"Jagrati",
    age:24,
    city:"Alirajpur"
};

const ob2 = {
    name1:"Harsha",
    age1:22,
    city1:"Indore"
};



console.log(mergeObjects(ob1,ob2));