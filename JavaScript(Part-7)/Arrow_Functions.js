const sum = (a,b)=>{
    console.log(a+b);
};
sum(2,3);//5
console.log(sum);//f nhi dega q ki ye normal function nhi arrow function h->hota to ye bhi function hi h bus f nhi dega


//cube print kraayenge arrow function ko use kr ke
const cube=(num) =>{//sinlge argument h (num) to ye bina ()->ke bhi chlega serf double me paranthesis lgana jaruri h arrow function me
    return num*num*num;
};
console.log(cube(2));//8
console.log(cube(28));
console.log(cube(50));
console.log(cube(100));

//a to the ki power b (a**b)
const power=(a,b)=>{
    return a**b;
};
console.log(power(2,2));//4
console.log(power(2,4));//16
console.log(power(9,9));//387420489

//agr kuch nhi h argument to bhi paranthesis lgana pdega nito error aa jaayega
const hello = ()=>{
    console.log("hello");
};
hello();//hello