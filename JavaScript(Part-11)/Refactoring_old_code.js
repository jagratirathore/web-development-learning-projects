//hmne jitne bhi promise ke concept sikhe usko color vaale callback hell pr apply krenge


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
   return new Promise((resolve, reject)=>{
      setTimeout(() => {
        h1.style.color = color;
        resolve("color changed!");
      }, delay);
    });
}

changeColor("red",5000)//5000= "5000=5 sec pending state aayegi color change hone ke baad state change ho jaayegi"
   .then(()=>{
    console.log("red color was completed");
     return changeColor("green",1000);
     })
     .then(()=>{
        console.log("green color was completed");
        return changeColor("pink",1000);
    })
    .then(()=>{
        console.log("pink color was completed");
        return changeColor("blue",1000);
    })
   .then(()=>{
        console.log("blue color was completed");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("orange color was completed");
        return changeColor("brown",1000);
    })
     .then(()=>{
        console.log("brown color was completed");
    })
//fail hone ke chances bhut km h esliye hmne catch ko nhi likha comment out kr diya h
 .catch((err)=>{
   console.log("Error:",err);
});//jese jese color change hote jaayega promise ki help se console pr output aate jaayega synchronosly- ek ke baad ek