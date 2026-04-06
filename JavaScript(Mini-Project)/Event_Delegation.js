// Jab hum event listener lagate hain to wo sirf existing elements par hi apply hota hai.
// Jo naye elements dynamically add hote hain un par event listener apply nahi hota.
// Is problem ko solve karne ke liye hum parent element par event listener lagate hain, jise Event Delegation kehte hain.
// Isse naye aur purane dono elements par event work karta hai.


//Event Delegation:Event listener ko parent element par lagana taaki uske child elements par bhi event handle ho sake, chahe wo dynamically create hue ho.

//note-bubbling ke phenomena ko use kr ke hm event delegation kr vaate h chlid element(new)->parent me kr dete h (ul) pe krenge hm q ki vo parent hlet btn = document.querySelector("button");
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    //add krte hi task ke sath delete button bhi aa jaaye to
    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";

});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){//ye btata h konsi chiz ko press kiya gaya konsi chiz ko target kiya h ,eat ke upr click krenge to console pe name aayega nodename kisne trigger kiya to LI(list ne kiya eat ko),agr delelte pr click krenge to console pe button aayega
      let listItem = event.target.parentElement;
      listItem.remove();
      console.log("delete");
    }
});
