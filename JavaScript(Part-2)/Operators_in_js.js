//Arithmetic operators-
let a=10;
let b=5;
console.log("Add :",a+b);
console.log("Subtract :",a-b);
console.log("Multiply :",a*b);
console.log("Division :",a/b);
console.log("Modulo :",a%b);
console.log("Power :",a**b);


//Unary operator-(a=10 h abhi)
console.log("preincrement",++a);//preincrement-change then use,11
console.log(a);//11

console.log("postincrement",a++);//postincrement-use then change,(abhi a=11 h ),11
console.log(a);//change ke baad-12

console.log("predecrement",--a);//predecrement-change then use bs minus hogi value(abhi a=11 h),11
console.log(a);//11

console.log("postdecrement",a--);//postdecrement-use then change,(abhi a=10 h ),11
console.log(a);//change ke baad-10

//Assignment operator(= ka means a=b,it means b ki vale a me ja ke store kr vana or assign kr vaana)
let equalsto = (b=a);
console.log("equalsto operator: ",b);//10

let plusequalsto = (b+=a);
console.log("plusequalsto operator: ",b);//b=b+a=20(b=10)

let minusequalsto = (b-=a);
console.log("minusequalsto operator: ",b);//b=b-a=(20-10)=10

let multiplyequalsto = (b*=a);
console.log("multiplyequalsto operator: ",b);//(10*10)=100

let divideequalsto = (b/=a);
console.log("divideequalsto operator: ",b);//()100/10)=10

let moduloequalsto = (b%=a);
console.log("moduloequalsto operator: ",b);//0

let powerequalsto = (b**=a);
console.log("powerequalsto operator: ",b);//0