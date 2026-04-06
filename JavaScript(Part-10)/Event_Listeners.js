let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click",sayHello);//click krte h function sayHello kaam krna chaiye
    btn.addEventListener("click",sayName);//dono function ek ke baad ek execute honge ye onlick ke sath kr pana possible nhi hota h esliye hm use krte h addEventListener
    //dblclick-double click
//     btn.addEventListener("dblclick",function(){
//       console.log("you double clicked me!");
//     });
 }

function sayHello(){
    alert("Hello");
}


function sayName(){
    alert("Jagrati Rathore");
}

//note-mdn pe ja ke events pd lo bhut saare hote h or types ke bhi types hote h dbclick-double click,bhut saare event hote h mouse ke bhi keyboard ke bhi