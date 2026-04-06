//internally reference(address) ese kaam krte h array me-
console.log("name"=="name");//true,value compare hui==
console.log("name"==="name");//true,(value ke sath datatype bhi compare huva)string compare hui yaha===

//array me krte same chiz-console vaali screen pe en sb ko try krna h
console.log([1]==[1]);//false
//console.log([1] === [1]);//false
//jese jese naye array bnaate jaayenge vese vese usko nai memory milti h or alag alag address pe hote h memory me esliye false aaya[1]==[1],bhi or [1]===[1]etc,address same nhi hote or memory ke and ek address pe kuch or store h to ek address pe kuch or esliye false aaya h 
console.log([]==[]);//false
//console.log([] === []);//false

//note-array me ye esliye hota h q ki jb bhi hm array create krte usme memory ke and refernce variable create hota h
// refernce variable=num esko pta h kha h hmara address kha1,kha2,kha3
let arr1=[1] //ye memory ke and aar1(refernce variable btaayega ki kha h eska address jese [1] ka address h 123)memory me
let arr2=[1]///ye memory ke and aar2(refernce variable btaayega ki kha h eska address jese [1] ka address h 456)memory me


let arr=['a','b'];
let arrCopy =arr;//same chiz memory me copy ho jaayegi using arrCopy to add same rhega dono ka memory me,array me jo changes honge vo arrcopy me dikhayenge or vice versa.
console.log(arrCopy);//(2)['a','b']
//ek or add krungi me arrayCopy me push ki help se
arrCopy.push('c');//last me add hoga array ke
console.log(arrCopy);
console.log(arr);

console.log(arr==arrCopy);//true(address same h dono ka) ,beacase copy ki baat ki h apn ne array me
console.log(arr===arrCopy);//true

//Note-RAFERence ka mtlb hi address hota h js me