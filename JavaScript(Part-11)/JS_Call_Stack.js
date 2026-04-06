//es tarah se call execute hoti h call stack me jb function ek dusre ko call krte h to-or ye saari call stack ke andr store hoti h mtlb hmne ek 2 function bnaya- hello(){} demo{} then call kiya demo(); se stack ke andr hmari function ki call store hoti h stack me sb se phele demo ko call jaayega then demo ke andr hello ko call krenge to demo ke upr hello add ho jaayega stack me  then hello ki call complete hui to hello completely ht jaayega then demo bura complete huva to demo bhi ht jaayega es tarah se js me programming me apna call stack hota h internally ek call stack hota h hr website ke pass jo hmko dikhai nhi deta jisme pura track kiya jata h ki konsa js ka function chl rha h
function hello(){
   console.log("inside hello function");//output me print hoga phele ye- 3rd
   console.log("hello"); //output me print hoga phele ye- 4th
}
//hello();//ye hota h call



//ek function dusre ko call lgata h hmare js me
function demo(){
    console.log("calling hello function");//output me print hoga phele ye- 2nd
    hello();
}

console.log("calling demo function");//output me print hoga phele ye- 1st
demo();
console.log("my demo call is completed - done,byeee");//output me print hoga phele ye- 5th

//note: call stack:generally ek data structure h jo track krta h ki konse function ki call chl rhi h phele call hota h vo niche store hota jo baad me call hota vo upr ki tarah store hota h stack me