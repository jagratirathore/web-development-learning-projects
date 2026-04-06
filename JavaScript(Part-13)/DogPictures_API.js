let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";
 
btn.addEventListener("click",async()=>{
    let link = await getImage();
    //console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);

});


 async function getImage() {
    try{
        let res = await axios.get(url);
        return res.data.message;
        }catch(e){
        console.log("error - ",e);
        return "No Image found";
    }
 }
 //getImage();

 //note jb bhi hm apis call krte generally hmari APIs hoti h ye free APIs h jese hr APIs ki limit hoti h ki 1 minute me 15 calls kr skte h ese free apis ki limit hoti h esliye loop kabhi nhi lgana h apis me error aa jaaye missuse nhi krna koi free api ka limit me hi use krna apis ka.