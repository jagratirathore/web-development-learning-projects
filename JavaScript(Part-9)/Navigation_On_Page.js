let h4 = document.querySelector('h4');
console.log(h4);

//parent (single hi hota h h4 ka parent nikalenge hm)
console.log(h4.parentElement);//div h class=box vala

//h4 ke kitne children h
console.log(h4.children);//h hi nhi  koi children to khali html collection[] print hoga

//box kr ke vaynge ab
let box = document.querySelector('.box');

//box ke children?
console.log(box.children);//0,1 ->2 h
//or
console.log(box.childElementCount);//2,ye ek method hoti h es se bhi count kr skte h

//unordered list ke kitne children h ye bhi hm find kr skte h
let ul=document.querySelector('ul');
console.log(ul.parentElement);//div
console.log(ul.childElementCount);//3
console.log(ul.children);//0:li,1:li,2:li

// not-siblings means parent ke 3 bache un 3no bacho ke aaps ke relation ko siblings bolte h,hariom me or bhya hm siblings h
//children ko index se bhi access kr skte h
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].previousElementSibling);//[1] vaala aayega
console.log(ul.children[1].previousElementSibling);//[0] vaala aayega
console.log(ul.children[1].nextElementSibling);//[2] vaala aayega
console.log(ul.children[2].previousElementSibling);//[3] vaala aayega

//navigation ko access kr ke styling bhi possible h esme-img or h1 ek dusre ke siblings h 
let img = document.querySelector('img');
console.log(img.previousElementSibling.style);//.style diya h last me dhyan rakhna then style ke andr ja ke color property change kr skte h
console.log(img.previousElementSibling.style.color="green");//h1 ko img ke form me access kr ke indirectly change kr di green me