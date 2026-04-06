let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];//en button me se koi random button choose krna h,index-0,1,2,3 koi bhi random index choose kr lo

let started = false;//kya hmara game start ho gya false mtlb nhi start huva
let level=0;//false mtlb nhi huva start to 0 pe h abhi hm
let h2 = document.querySelector("h2");


//hm chah te h document(window) ke upr koi bhi key press ho to vo detect ho jaaye or game start ho jaaye
// document.addEventListener("keypress",function(){// document(window) pe cursor hona chaiye, or key board se (koi bhi key jese)a key press krenge b ya c ya d to game started show krega console pe 
//     console.log("game started");
// });

//step1-keypress->gamestart
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;//abhi tk game hmara start nhi huva tha pr jese hi ek baar click key keyboard se to game start ho gya or vo bhi ek hi baar
 
    levelUp();//jese hi hmara  game start ho jaayega hm level up ko call kr denge niche bnaya h function vo call ho jaayega
}

});

//baar baar flash krvaana h esliye hm function bna lete h user bhi flash kr vaayega or js bhi
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },500);// 500(1 by 2 h ye),1000=1second me remove kr va dega flash hona 
}
//user flash function
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },500);// 500(1 by 2 h ye),1000=1second me remove kr va dega flash hona 
}  

//flash(chamakna)-kuch miliseconds ke liye background white ho jaayega
//step2-btnflash(random button chmkega)+level 1
function levelUp(){
    level++;//jo chl rha h level us se ek bd jaayega
    h2.innerText = `Level ${level}`;//koi bhi key press (a)krte hi levelup ho jaayega level 1 heading me
    
    let randIdx = Math.floor(Math.random()*btns.length);//random number generate krega ye 0,1,2,3 tk
    let randColor = btns[randIdx];//color choose krenge 
    let randBtn = document.querySelector(`.${randColor}`);//class choose krenge
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    //flash krvaane se phele hmko button choose bhi krna pdega koi (random button choose)
    gameFlash(randBtn);//random button choose kr ke flash kr vaayenge
}

//step3-btn press(using event listener(target))->check(user<->game),check(levelup(same),gameOver(different)) 
function btnPress(){
    console.log(this);//button ko track kr va skte konsa flash huva
    let btn=this;//this-detect krna h console pe ki konsa button hmara press huva
    // btnFlash(btn);
      userFlash(btn);//user press kr rha tho userflash ko call krenge hm
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
//gameflash-white color krta h  background color
//userflash-green color krta h background color