//access img
let img = document.querySelector('img');
console.log(img);

console.dir(img);//img#mainImg

console.log(img.style);//CSSStyleDeclaration


//access heading
let heading = document.querySelector('h1');
console.log(heading);

console.dir(heading);//h1

console.log(heading.style);//CSSStyleDeclaration

//heading ko change krna h purple color me
console.log(heading.style.color='purple');//h1 change  into purple color


//green
console.log(heading.style.color='green');//h1 change  into green color

//backgroundColor-light pink
console.log(heading.style.backgroundColor='yellow');

//box ke andr jitne bhi anchar tags h unka color change kr  do-l
let links =document.querySelectorAll(".box a");

for(let i=0; i<links.length; i++){
    links[i].style.color="violet";//sbhi anchor link violet me convert ho gai h
}

//using for-of
let links1 =document.querySelectorAll(".box a");

for(linkss of links1){
    linkss.style.backgroundColor="seagreen";//sbhi anchor  background link purple me convert ho gai h
}

//css  file ke andr vaala styling es property se access ya set krvana possible nhi h jese dekho css file me box h usko change kr ke btati hu
let box = document.querySelector('.box');
console.log(box);
console.log(box.style);//eske andr ja kr dekhenge to border,background-color,width,padding ->sb enmty dikha rha jb ki hmne main css me set kri h h usme bcs style property se hm ye sb access nhi kr paayenge q ki style property inline deti h,but agr html me inline me diya hota to dikh ta jese color:red dikh rha h q ki vo inline me diya gya h