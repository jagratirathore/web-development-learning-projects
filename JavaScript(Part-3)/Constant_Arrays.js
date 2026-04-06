let a=5;//we change it
const b=5;//fixed,we can't change it
const g=10;
//g=9.8 krna chahte ye nhi hoga ku ki cont bnaya h vo fixed hota h changeable nhi

//array me const variable
const arr=[1,2,3];
console.log(arr);//(3)
arr.push(4);
console.log(arr);//(4)
arr.pop();
console.log(arr);//3

//const bna ne ke baad completely naye array me nhi kr skte bhaki sb kr sktr h lrngth change vgera
//new arrays create
arr=[1,2,3]; //ye nhi hoga q ki addrress same rehta h(overwrite nhi kr skte h)

//constant apn esliye bnate h ku ki hmare variable ko koi null ya undefined na bna de esliye