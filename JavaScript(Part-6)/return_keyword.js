//return keyword ki help se return kre value
function sum(a,b){
    //console.log(a+b);//print kr va rha value
    return a+b;//print nhi kr va rha value,return kr va rha h ,q ki us value ko console.log to kiya hi nhi,to usko variable ke andr store kr ke call krenge
}
//sum(5,5);//esko call krenge phir bhi console pe kuch print nhi hoga
let s = sum(5,5);//ese variable me store kr ke print kr vaayegne
console.log(s);//10

//bina call kre bhi direct print kra skte h 
console.log(sum(10,10));//20

//sum of three number bhi direct kr skte h hm 1+2+3=6,sum function ke and bhi sum function ko calculate kr skte h hm ye bhi possible h
console.log(sum(sum(1,2),3));//6


//note-return krte h ye sb fuction-slice function (tukda return krta h ye)

//agr me do number ko - kr va rhi to hmesha dhyaan rakhna return ke phele jitna bhi print krva skte but return ke baad hmara function ruk jata h hm uske baad kuch bhi print nhi kr va skte h
function minus(d,e){
    console.log("Hello minus");//Hello minus
    console.log("Hello subtract");//Hello subtract
    return d-e;//ye call kr ke print krenge to run hoga
    console.log("return ke bad me ruk jata hu(function ka execution ruk jaayega yaha), Hello minus");//ye output me nhi aayega return ke baad vaale statement nhi chlte vhi ruk jata function return ke baad,vs code warnning bhi dega unreachable code
    console.log("return ke bad me ruk jata hu(function ka execution ruk jaayega yaha),Hello subtract");//ye output me nhi aayega return ke baad vaale statement nhi chlte vhi ruk jata function return ke baad,vs code warnning bhi dega unreachable code
}
console.log(minus(10,5));//5

//output
//Hello minus
//Hello subtract
//5

//bye-bye return ke baad print krenge to nhi hoga print q ki return ke baad function ruk jata h nhi chlta h agr phir bhi print krvana hi h to hm esko return ke upr likh ke print kr va skte h
function isAdult(age){
    if(age>=18){
        return "adult";
    }else{
        return "not adult";
    }
    console.log("bye-bye");//ye nhi hoga print q ki return ke baad likha h ye function return krne ke baad bnd ho jata h
}

console.log(isAdult(22));//adult-or hmesha single value return krta h return function jese abhi adult or agr sum krte to serf sum deta esa nhi ki not adult bhi sath me de 
