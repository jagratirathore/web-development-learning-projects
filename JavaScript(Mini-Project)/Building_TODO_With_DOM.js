let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

// btn.addEventListener("click",function(){
//     console.log(inp.value);//jo input me likenge vo value le lega or console pe show krega add hogya task kr ke
//     inp.value="";//empty string because reset ho jaaye input me add krne ke baad task usko hatana nhi pde automatic vo add hone ke baad khali ho jaaye
// });

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

// Problem New Tasks Me Aati Hai

// Jab aap button click karke naya task add karte ho, tab:

// let delBtn = document.createElement("button");

// Ye naya delete button dynamically create hota hai.

// Aur problem ye hai ki:

// ⚠️ querySelectorAll(".delete") dobara run nahi hota

// Isliye naye delete buttons par event listener attach hi nahi hota.

//delete krte h delete ho jaaye-ye problem aati h(eventlistener me),ye existing element(eat or sleep) ke liye work kreg jo naya add krenge vo delte nhi hoga apply hi nhi hoga uspe
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
     let par = this.parentElement;//parent  bhi delete ho jaana chaiye to <li>....</li>
     console.log(par);
     par.remove();//pura parent hi delete ho jaaye
    });
}