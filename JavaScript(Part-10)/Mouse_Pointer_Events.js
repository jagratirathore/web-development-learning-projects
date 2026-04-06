//let btn = document.querySelector("button");
//console.dir(btn);//btn object aayega jis me bhut saari properties dikhegi hmko,usme dekho jitni bhi events vaali property h vo  on se start hogi like-onclick,oncopy,onclose etc

//abhi koi action perform nhi hota button ko click krne pr,kuch nhi aayega agr btn.onclick krungi h vo valid property but abhi uske andr kuch nhi h
//console.log(btn.onclick);//null

//ab hm esko set kr skte h btn ko koi specific function ke liye
// btn.onclick = function(){
  
//     console.log("Button was clicked");//ab jb bhi onclick krenge ye function trigger ho jaayega or hmane pass aa jaayega button was clicked kr ke
//     //alert("Button was clicked!");//alert bhi generate kr skte h hm yaha

// };


// ek alag se function bhi create kr skte h hm
// function sayHello(){
//     alert("Hello Jagrati");
// }
// btn.onclick = sayHello;//serf name assign krva rhe function ka directly execute nhi kr va rhe esilye hm ne () nhi lgaya,jese hi hm button ko click krenge alert ke andr hello jagrati aa jaayega

//instagram  like ke liye(ek sath sb ko de diya )-btns 
let btns = document.querySelectorAll('button');
for (btn of btns){
    btn.onclick=sayHello;//()-nhi lgana h hmko agr yaha pe hm lga denge parathesis eska mtlb hoga hm hmare function ko yahi directly execute kr rhe h
    //onmouseenter
    btn.onmouseenter = function(){
        console.log("you entered a button");
    };
    console.dir(btn);//onmouseenter ke button object ko print krana to jis ke andr saari property hogi
}

function sayHello(){
    alert("Hello");
}
