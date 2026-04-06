//jo bhi jo promises hote h jb bhi vo reject ya resolve hote to usme hmesha valid results or errors aate h hm ne already dekha h results aate ya error aata h 

//ek argument rakhte jese- result to then me to resolve huva vo result me dikhega or jb reject huva to error argument me aayega kya return kr rha h reject.
//es trh ki situation bhut common hoti h programming me or apis call me ye situation hm deal krte h prmoise me

function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}

savetoDb("apna college")
   .then((result)=>{
    console.log("data 1 saved");
    console.log("result of promise: ",result);
     return savetoDb("helloworld");
     })
     .then(()=>{
        console.log("data 2 saved");
        console.log("result of promise: ",result);
        return savetoDb("jagrati");
    })
    .then(()=>{
        console.log("data 3 saved");
        console.log("result of promise: ",result);
    })
   
.catch(()=>{
    console.log("promise was rejected/failed");
});