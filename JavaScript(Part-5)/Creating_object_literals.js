//create object student1->jo phele add ki usi index me milegi ye jaruri nhi h upr niche ho jaayegi property jitni baar refresh hoga(order same  nhi rhega change ho jaayega),serf key value sath me rehta h
//generally hm objects ko const keyword se bnaate h,object ka address(reference) h vo kbhi change nhi hoga const ki vjha se but key value pair change ho jaayenge
//Note-hm object ko const esliye bnate q ki koi bde se program me koi glti se usko null na defined kr de  esliye
let student1 = {
    name: "Jagrati",
    age: 24,
    marks: 95.5
};//console pe jese hi student1 type krenge or enter krenge sb data dikh jaayega hmko

//create array student2->jo phele add ki usi index me milegi(order same rhega)
//generally hm array ko const bnaate h using -reference(address) memory ka address nhi change krte pr value change kr dete h
let student2 = ["Jagrati",24,95.5];

// Note :same data ko object or array me store kraya ja skta h but difference itna h-
// object:clearity jada hogi compare to array q ki key se value ka pta chl rha h 


//ek or object create kr rhe h hm or usme key value pair me array bhi add kr skte h 
const item ={
    price: 100.99,
    discount: 50,
    colors: ["red","pink"]//array add kiya h object ki value me ye bhi kr skte h hm or array,number,string,boolean sb store kr va skte h jitne bhi sikhe h hmne datatypes,object ki key ke andar multiple values store kra skte hm using array etc
};