let para = document.querySelector('p');
console.log(para);//<p>...</p>

console.dir(para);//p,object print ho jaayega uske baad hm property change kr paayenge

//property me changes kr ke html me changes la skte h hm
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);

// style="display:none"->Marvel Comics ,jese hi hmne display none set kr diya vo nhi dikhega na to innerhtml me na innertext me serf innercontent me dikhega,published by ke baad se marvel comics hat gya 
console.log(para.innerText);//en dono me nhi dikhega
console.log(para.innerHTML);//en dono me nhi dikhega
console.log(para.textContent);//published by ke baad print nhi huva phir bhi dikhega q ki actual html file me likha h or hmne none set kiya h

//pure paragraph ki value change hoke abc ho jaayegi
para.innerText = "abc";//abc

//ab kr dege hm "Hi,I am Peter Parker!"
para.innerText = "Hi,I am Peter Parker!";//Hi,I am Peter Parker!

//peter parker ko bold bnana h to bold tag ke andr likh denge hm innerHTML me possible,innerText me nhi
para.innerText = "Hi,I am <b>Peter Parker!</b>";//ye possible nhi hoga q ki innertext saari chizo ko text smjhta h esliye bold me nhi krega
para.innerHTML = "Hi,I am <b>Peter Parker!</b>";//ye possible  hoga innHTML me q ki ye sb tag ko recognise kr ke ans deta h 

//main heading j spider man esko underline krna chahte to hm innerHTML ka use krenge q ki ye sb tag ko recognise krta h-phele access krenge hm querSelector se
let heading = document.querySelector('h1');
console.log(heading);

console.dir(heading);

//heading ki value bhi print kr va skte h hm
console.log(heading.innerText);

//underline krne ke liye underline tag use kr skte h
//heading.innerHTML = "<u>Spider Man</u>";
//or
heading.innerHTML =`<u>${heading.innerText}</u>`;

//note-en hi sb chizo ko dom manipulation bolte h or changes krna start kr diya hmne hmare document object model me
