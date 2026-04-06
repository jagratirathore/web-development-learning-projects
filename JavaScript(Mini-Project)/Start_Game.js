let gameSeq=[];
let userSeq=[];

let started = false;//kya hmara game start ho gya false mtlb nhi start huva
let level=0;//false mtlb nhi huva start to 0 pe h abhi hm

//hm chah te h document(window) ke upr koi bhi key press ho to vo detect ho jaaye or game start ho jaaye
// document.addEventListener("keypress",function(){// document(window) pe cursor hona chaiye, or key board se (koi bhi key jese)a key press krenge b ya c ya d to game started show krega console pe 
//     console.log("game started");
// });

//step1-keypress->gamestart
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;//abhi tk game hmara start nhi huva tha pr jese hi ek baar click key keyboard se to game start ho gya or vo bhi ek hi baar
    }
});

//step2-btnflash(random button chmkega)+level 1


//step3-btn press(using event listener(target))->check(user<->game),check(levelup(same),gameOver(different))