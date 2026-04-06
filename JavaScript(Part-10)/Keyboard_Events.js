let btn = document.querySelector("button");

//single click mouse event
// btn.addEventListener("click", function(event){//callback ke andr bydefault event(e,evt,event) hota hi h es me bhut saari chiz hoti h print kr ke btate h pointerevent aayega jese hi click kiya or aa jaayega console pe single click mouse event
//  console.log(event);
//  console.log("button clicked.");
// });

// //double click mouse event
// btn.addEventListener("dblclick", function(event){//callback ke andr bydefault event(e,evt,event) hota hi h es me bhut saari chiz hoti h print kr ke btate h pointerevent aayega jese hi click kiya or aa jaayega console pe single click mouse event
//  console.log(event);//pinterevent bcz mouse event h
//  console.log("button clicked.");
// });//ab double click krege button pe to output aayega //dbl ki vjha se

//keyboard events 

//access input
let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(){//addEventListener me search kr lo keyboard event like-keydown,keypress,keyup etc
//  console.log("key was pressed");//kedown-koi bhi key dbaayenge to count hogi bhale vo backspace hi q na ho keyboard pe keydown triger hoga hr baar koi key down krne pr
// });

// inp.addEventListener("keyup", function(event){//addEventListener me search kr lo keyboard event like-keydown,keypress,keyup etc
//  console.log("key = ",event.key);//keyboardevent  bcz keyboard event h,jese hi mene koi key press ki in textbox output aa jaayega  keyboard event kr ke,ex-a press kiya mene textbox ke andr to code:"keyA" or key:"a" or keycode=65,ese hi space ,;,a,b sb ka dekh skte h
//  console.log("code = ",event.code);
//  console.log("key was released");//keyup-koi bhi key dbaayenge or chide denge,or jese hi release krenge to ex-bht der tk press krenge koi button or jese hi chodenge realese aa jaayega key
// });

//note:keyboard events->event(code( us particular character ka exactly  code ky h ),key(screen pe jo visible h vo dikhaati h,input ke and kya dikh rha h ))
// inp.addEventListener("keydown", function(event){
//  console.log("code=",event.code);//ArrowUp,ArrowDown,ArrowLeft,ArrowRight-arrow press krte hi output aayega
// if(event.code=="ArrowUp"){
//     console.log("Character moves forward");
// }else if(event.code=="ArrowDown"){
//     console.log("Character moves backward");
// }else if(event.code=="ArrowLeft"){
//     console.log("Character moves left");
// }else if(event.code=="ArrowRight"){
//     console.log("Character moves right");
// }

// });

inp.addEventListener("keydown", function(event){
 console.log("code=",event.code);//ArrowUp(U),ArrowDown(D),ArrowLeft(L),ArrowRight(R)-up ke liye hmesa key U press ho to hi up jaayega as it is L,R ,D
if(event.code=="KeyU"){
    console.log("Character moves forward");
}else if(event.code=="KeyD"){
    console.log("Character moves backward");
}else if(event.code=="KeyL"){
    console.log("Character moves left");
}else if(event.code=="KeyR"){
    console.log("Character moves right");
}

});
//event.key- Screen pe jo character print hota hai -"u", event.code- Keyboard ka physical key name -"KeyU"
