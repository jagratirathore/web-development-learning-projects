//spread for string-individual character or tukdo me bat jana
let str = "IamJagratiRathore";//(spread=...)
console.log(...str);//I a m J a g r a t i R a t h o r e


//spread for arr-individual character or tukdo me bat jana
let arr=[1,2,5,7,6,3,-6,6,3,76,-4];//(spread=...)
console.log(...arr);//1 2 5 7 6 3 -6 6 3 76 -

//normal array print
console.log(arr);//(11) [1, 2, 5, 7, 6, 3, -6, 6, 3, 76, -4]

// note-Definition:
// → Array / String ko individual elements me break karta hai.
// → Tukdo me spread kar deta hai.

// Syntax:
// ...

//direct spread ke through string print krna
console.log(..."apnacollege");//a p n a c o l l e g e