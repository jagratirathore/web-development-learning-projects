//hmare document me ek paragrph add krna h add kiya -ye khi dikhai nhi dega jb hm create krenge but jb variable ke andr daal denge to dikhega,document.createElement('p')
console.log(document.createElement('p'));//<p></p> insert ho gya

//add para into variable,newP 
let newP = document.createElement('p');

//dekhenge ki newP me abhi sb empty h,console.dir
console.dir(newP);//p

//ab inner text daal denge p ke andrnew ,variableName.innerText
newP.innerText = "Hi, I am a new p";
console.dir(newP);//ab ye p javascript me bhi create ho gya,or document object me bhi create ho gya but p hmare document object or web page pe khi dikh nhi rha to hm use krenge insert krne ke liye append function

//naye element ko create krne ke baad usko insert bhi krna hota h jb document hmko dikhna chaiye web page pe tb insert krna pdta using append-phele body ko select krnege q ki uske andr para chaiye hmko nesting hoti to phele select kr ke body ko append kr denge insert kr denge newP
let body = document.querySelector('body');//select body using querySelector
body.appendChild(newP);//insert kr diya body ke andr newP (paragraph ko)->dekh lo last me paragph add ho gya web page pe Hi i am newP ke name se

//box ko select kr skte h or uske andr paragraph ko insert krenge box ke andr last me or append ke through last me box ke para add hoga
let box = document.querySelector('.box');
box.appendChild(newP);//box ke andr para add hoga nesting ke form me using appendChild

//button bhi create kr skte h
let btn = document.createElement('button');
console.dir('btn');
console.dir(btn);//btn
console.log(btn.innerText="click Me");//button
box.appendChild(btn);//button aa gya box ke niche

//ek or function hota h-append(element):es  ke multiple use hote h kisi element ko bhi append kr skte h+string ko bhi append kr skte h+ text ko bhi apend kr skte h,
// newtext ko bhi or add kr skte h hm newP me thoda text or add kr denge h,additional kuch add krna to vo bhi add kr skte h hm append se
newP.append(",this is my remaining new text");//to usi paragraph ke aage add ho jaayega

//hm chahte h ki hmara jo button h vo paragraph ke andr hi aana chaiye to
newP.append(btn);

//or text bhi add kr skte h button ke aage bhi
newP.append("do not click this button");

//box ke statring me para chaiye to prepend kr denge hm
box.prepend(newP);//box ke statring me pura para chle jaayega 

//ek button create krenge
let btn1 = document.createElement('button');
console.log(btn1.innerHTML = "NEW BUTTON!!!!");
let p = document.querySelector('p');
console.log(btn1);
// button paragraph ke suru hone se phele hmko add krna h  to use krnege beforebegin position
p.insertAdjacentElement("beforebegin",btn1);//suru hone se phele
p.insertAdjacentElement("afterbegin",btn1);//suru hone se baad (as a first child add ho jaayeg)
p.insertAdjacentElement("beforeend",btn1);// para khtam hone se phele ek dm last me (paragraph ke last me add ho jaayega(as last child)
p.insertAdjacentElement("afterend",btn1);//khtam hone ke baad(paragraph ke khtm hone ke baad) ek line ka gap lete huve show hoga 


//note-generally appendChild se bhi jada use hota h append ka
