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
// savetoDb("apna college")
// .then(()=>{
//     console.log("data 1 saved");
//     savetoDb("helloworld").then(()=>{
//         console.log("data 2 saved");
//     });
//    })
// .catch(()=>{
//     console.log("promise was rejected/failed");
// });

//or improve kra code ko ye jada readable code h,ye or efficient(accha) code h jo hmne call back hell me kaam kiya tha vhi same kaam esme bhi ho rha h
savetoDb("apna college")
.then(()=>{
    console.log("data 1 saved");
     return savetoDb("helloworld");
     })
     .then(()=>{
        console.log("data 2 saved");
        return savetoDb("jagrati");
    })
    .then(()=>{
        console.log("data 3 saved");
    })
   
.catch(()=>{
    console.log("promise was rejected/failed");
});