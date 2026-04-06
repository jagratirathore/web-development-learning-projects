let p = document.querySelector('p');
p.addEventListener("click",function(){
  console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
  console.log("mouse inside box");//jese hi cursor ko box ke upr le jaayenge mouse inside box print hoga with the help of mouseenter
});


//note-page ke har ek element pe hm event listener lga skte h multiple element pe hm event listener lga skte h