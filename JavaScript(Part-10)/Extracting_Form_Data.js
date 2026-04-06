// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let inp=document.querySelector("input");
//     console.dir(inp);//dir kr ke object ke input ke andr dekhne ki innertext kisko bila h fir usko console se print kr vaayenge  value ke andr innertext h 
//     console.log(inp.value);
// });

let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let user=document.querySelector("#user");//ye jo value enter kr rha user ye hm dekh skte h console pe or es value ko hm database me bhi store kr va skte h
//     let pass=document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value},your password is set to ${pass.value}`);//alert me bhi show kr skte h hm

    
// });

//abhi hm sb ke liye individually querselector use kr ke access kr rhe the but ek or tereka hota h jisme hmko individual sb ki id nhi bnana pdega direct hm access kr lenege using hmare  form object ->console.dir(form);
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);//forms object ke and elements open krna uske andr saari  hiz form ke and h vo aviabale mil jaayegi user ,pass, button sb sb mil jaayega aapko
//     console.log(form.elements);//saare elements ko access kr skte h jo form ke andr h
//     console.log(form.elements[0]);//first input ko access krna to
//     console.log(form.elements[1]);//second input ko access krna to
//     console.log(form.elements[2]);//third element button ko access krna to
// });

form.addEventListener("submit", function(event){
    event.preventDefault();
   
    //form ki help se internal value ko access kr rhe h hm
    let user=this.elements[0];//or hm form.elements[0]
    let pass=this.elements[1];//or hm form.elements[1]

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value},your password is set to ${pass.value}`);//alert me bhi show kr skte h hm

    
});
