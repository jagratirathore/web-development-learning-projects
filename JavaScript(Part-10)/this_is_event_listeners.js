let btn = document.querySelector("button");//access kr lete h button ko

//jese hi button click ho vese hi hmko function mtlb this print kr vaana h
btn.addEventListener("click",function(){
 console.log(this);//button hi hmara object h to aayega-<button>Click Me</button>
 console.dir(this.innerText);//button ka innertext print krana -Click Me
 this.style.background="pink";//click me button pe click krne ke badd background color pink me convert ho jaayega
});

//note-this it means object h yaha pr