//hm cat fact vaale url ko access krenge using fetch(url) kr ke request bhejenge-
let url = "https://catfact.ninja/fact";
//let url = "https://catfact.ninja/fact2";//or if glt request bhete url ke aage 2 lga dete to error show krega, network me 404 error bhi aa rha h page not found
//fetch(url);//ese kuch dikhege nhi output me pr inspect kr ke network me ja ke dekhenge different request kis kis ko gai h .html,.css,js or fact ko usme reponse bhi dikhega ga hmko vha visible h reponse hmara network tab me serf bhaar nhi dikh rha h

//console.log(fetch(url));//api ko request gai or hmko ye promise return krta h to hm promise ka use krenge ,to then or catch method use kr skte h hm promise ki or en hi methods ke sath kaam krte h hm apis ke sath
// fetch(url)
// .then((response)=>{
//     console.log(response);//(data h pr read nhi kr paayenge to hm  use json()  yaha parse ho rha data kr ke  data access krenge)console ke andr reponse sccessful gai 200 se pta chl rha h ,  exact vo to nhi aa rha pr 200 success bta rha h body ke andr readable stream 
//     return response.json().then((data)=>{
//         console.log(data);//or ye json data print krvaayenge
//     });//ye return krega json data jisko hm read kr paayenge
// })
// .catch((error)=>{
//     console.log("Error is: ",error);
// });


//chaining-api call asynchronous h js wait nhi krta inka call resolve hone ka js wait nhi kr rha h
fetch(url)
 .then((res)=>{
    return res.json();
 })
 .then((data)=>{
    console.log("data1 = ",data.fact);//1st random fact aa jaayega
    return fetch(url);
 })
 .then((res)=>{
    return res.json();
 })
 .then((data2)=>{
    console.log("data2 = ",data2.fact);//2nd random fact aa jaayega
 })
 .catch((err)=>{
    console.log("Error- ",err);
 });