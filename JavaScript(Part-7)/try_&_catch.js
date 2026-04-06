//error ke phele vaala kaam to sb ho rha h pr jese hi error aa jaati to uske baad ka kaam ruk jata h
console.log("hello");
console.log("hello");
console.log("hello");
//let a=5;//try true ho gya(error throw hi nhi kiya to else me catch print hi nhi hoga)
try{//hmesha js me try ke sath catch statement likhna neccessary h nito error aa jaayega missing catch ka
    console.log(a);//Error a is not defined(ye run time me pta chlta h error to eske liye hm try use krte )
}catch{
   console.log("caught an error..a is not defined"); //try true nhi huva error aa gya(or error throw kr diya) to vo false catch print kr va dega,bhaaki ka niche hello2 normaaly execute hoga
   
}
console.log("hello2");
console.log("hello2");

//Note-jb bhi website create krte h hm to ek error ki vjha se baad vala code shi bhi ho error ke phele vaala to sb execute hota h but error ke baad vaala kuch bhi execute nhi hota h us ek error ki vjha se bhale hmara baad vaala code shi bhi ho to eshi situation se bachna ki puri website crash na ho to ,  hm use krte h try and catch ka
//try-error bake ta history(like if)
//catch-us error ko catch krta h jo try ne fekaa(like else)-
//catch ko function format me bhi likh skte h jese->catch(e)or err ye error h or us error ko print bhi kra skte h ,console.log(err);
//ex-(jha koi bhi code pe shak hota usko try me daal dete hm or catch ke through find out krte error or niche vaali jo chiz h vo bhi chlti es se)
// try{
//     console.log(a);
// }catch(error){
//    console.log("caught an error..a is not defined"); //try true nhi huva error aa gya(or error throw kr diya) to vo false catch print kr va dega,bhaaki ka niche hello2 normaaly execute hoga
//    console.log(error);
// }//output-ReferenceError: a is not defined
//     at try_&_catch.js:21:17


//note-niche vaali chiz esliye nhi chlti hello2 ye ki runtime error execution rok deta h js me