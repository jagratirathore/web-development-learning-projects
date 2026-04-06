
let sum =54;//Global Scope-kisi bhi jagha puri file me sum ko use kiya ja skta h

function calSum(a,b){
    let sum=a+b;//Functional Scope
    //console.log(sum);//3,yaha krenge call to print ho jaayega ,q ki andr hi call kr rhe hm function ke usko pta h sum kya h
}
calSum(1,2);//call kr do phele
console.log(sum);//54,(3)nhi aayega kuch bhi print hoke q ki function ke andr vaali chiz bhaar access nhi hogi,bhaar vaale ko nhi pata ki sum naam ka kuch exist bhi krta h

//Note- jb bhi kisi code me same name ke variable hote jese (sum)-ek ke pass global sope ho or ek sum ke pass functional scope to functional scope or global scope me se dono fight krte(function ke andr) to jitta h fuctional scope q ki vo jada specific(jada pass h ,jada meaning clear ho rha),andr use hoga to functional print hoga,3 or agr bhaar use hoga to global,54,or agr bhaar ki baat kre dono fight krte to global jitta h
//or agr functional ke pass nhi ho sum to usme global hi print hoga q ki global khi bhi use ho jata h