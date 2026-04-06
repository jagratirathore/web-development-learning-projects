let img = document.querySelector('img');
console.log(img);

//console.log(img.classList);//0 aa rha mtlb empty abhi koi class di nhi hmne img ko 
console.log(img.classList);//abc xyz


//heading ki bhi classList bnate h
let heading = document.querySelector('h1');

//print classList
console.log(heading.classList);



//classes ko hm manipulate/change bhi kr skte h hm
//1)ADD:new class add kr rhe
console.log(heading.classList.add("hik"));


console.log(heading.classList);

//css  file me class add kr di green jese hi green krenge class vese hi color change ho jaayega
console.log(heading.classList.add("green"));//jese hi green class add ki automatic css ki file se class ko fetch kr ke color change kr dega
console.log(heading.classList);//hik  green


console.log(heading.classList.add("underline"));

//2)REMOVE:agr phir se green remove krna h to
console.log(heading.classList.remove("green"));

//setattributes->me ek time me serf hm ek hi value le skte esliye esko use nhi krte itna abhi me agr heading ko krti hu green color me to automatic vo undeline hta dega setAttribute or ek time me ek hi value dikhayega green
console.log(heading.setAttribute("class","green"));//styling ke liye multiple class ka use krenge to hm classList use krte q ki set ek time me ek hi styling set krta h(set-saari styling ko reset kr ke single attribute value me convert kr deta h)

//3)CONTAINS:ye btati h ki kisi bhi object ke liye  classList exist krti h ya nhi

//check heading ke liye underline class h ya nhi?
console.log(heading.classList.contains("underline"));//false
console.log(heading.classList.contains("green"));//true

//4)TOGGLE(basically switch,on-press->off,off-press->on,koi state 0 or 1 ke bich zhulti rehti h to usko toogle bolte h) method-class ko add or remove krne ke liye use krte h,agr class exist krti h to hta denge us class ko,or agr nhi exist krti to add kr denge
console.log(heading.classList);//value:green h exist krti h
console.log(heading.classList.toggle("green"));//false y ki toogle ke baad hta di gai exist nhi krti ab green
console.log(heading.classList);//value:"",empty ho gai ab

console.log(heading.classList.toggle("underline"));//underline phele se add nhi thi to true return kr diya esne
console.log(heading.classList.toggle("green"));//true phir add kr degi q ki nhi h green

console.log(heading.classList.toggle("underline"));//false

//hm apne boc ke color ko bhi change kr skte h or reset kr skte h
let box =document.querySelector(".box");
console.log(box.classList);
console.log(box.classList.add("yellowBg"));
console.log(box.classList);