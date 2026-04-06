let url = "https://catfact.ninja/fact";
//let url = "https://catfact.ninja/fact2";//error

async function getFacts(){
try{
   let response =   await fetch(url);
   let data =  await response.json();
   console.log(data.fact);//undefined aa jaayega


   let response2 =   await fetch(url);
   let data2 =  await response2.json();
   console.log(data2.fact);
}catch(err){
     cnsole.log("Error is: ",err);
 }
}

getFacts();//fetch url ko call chlegai pr promise ki value undefined h abhi api ne response hi nhi diya esliye await lagayenge