
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
});//jo me input me type krungi vo paragraph me hoga or  backspace kr ke delete bhi kr skte h hm