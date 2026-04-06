//button ke click hote hi new fact aana chaiye
let btn = document.querySelector("button");
 
btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText = fact;
});
//fetch ki place pe es baar axios krenge hm or axios se data fetch krne ke liye differnet methods hoti h get request ke liye hoti h axios.get,
//post se bhejna h to axios.post
//axios.get()-.get method hmko promise return krega or us promise ko phir hm different different apni methods ko ya async or await ko apply kr skte h


//axios ko use krne ki ku jarurat pdi jb hmare pass already fetch method tha to?
//actually fetch ke pass hmara response readable string  me aata tha pr exact json data nhi tha to hmko us data ko parse krna pd rha tha but axios ke andar directly json data aata h reponse me hmare pass exact jo hme chaiye

let url = "https://catfact.ninja/fact";

 async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
        }catch(e){
        console.log("error - ",e);
        return "No fact found";
    }
 }
 getFacts();

 //ab hm js ko thoda sa html ke sath bhi connect krenge (abhi hm chahte h jo hmara fact h vo html me bhi print ho ke aa jaaye jb ki abhi tk hm fact ko console me print kr va rhe the)