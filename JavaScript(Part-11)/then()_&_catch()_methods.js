//here request ek promise object h

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
//  let request = savetoDb("apna college");//request=promise object
//  request.then(()=>{
//     console.log("promise was completed/resolved");
//     console.log(request);
//  })
//  .catch(()=>{
//     console.log("promise was failed/rejected");
//     console.log(request);
//  });//es baar error print nhi hoga promise print krava rha hm


 //compact version same function ko or acche se likhna
savetoDb("apna college")
.then(()=>{
    console.log("promise was completed/resolved");
   
 })
.catch(()=>{
    console.log("promise was failed/rejected");
   
 });