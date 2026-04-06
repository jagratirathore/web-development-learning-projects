console.log("Hi there");

// setInterval(()=>{
//     console.log("Apna College");
// },2000);//2000=2s rukega par baar baar 2s ruk ke deta rhega apna college as a output
//output-
// Hi there
//Apna College(har 2 second me baar baar)
//ese ye interval chlta rhega to indefinite baar chlta rhega to esko rokne ke liye hm id store kr va skte h -jitne setintervals honge utni id1 ,id2 bna ke rok skte h clearInterval(id) kr ke rok paate function ko

//har call-ki individual id bna rhe hm setInterval function ki
let id = setInterval(()=>{
    console.log("Apna College");
},2000);//2s
console.log(id);//id1 h eski-setinterval ki
clearInterval(id);//stop kr vaana h to

let id2 = setInterval(()=>{
    console.log("Hello World");
},3000);//3s
console.log(id2);//id2 h eski-setinterval ki
 //or abhi esko stop nhi kiya to ye chlta rhega  print hoga hello world hr 3s me continuously-esko stopr krane ke liye likhna pdta,clearInterval(id2);