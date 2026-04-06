let fruits=["mango","apple","banana","litchi","orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);//variable index aa gya fruits[i]
// }
//o mango
//1 apple
//2 banana
//3 litchi
//4 orange

//odd index vaale fuit ko access krna h to
for(let i=1; i<fruits.length; i=i+2){
    console.log(i,fruits[i]);//variable index aa gya fruits[i]
}
//1 apple
//3 litchi

//even vaale ko
for(let i=0; i<fruits.length; i=i+2){
    console.log(i,fruits[i]);//variable index aa gya fruits[i]
}
//o mango
//2 banana
//4 orange

//ek or fruit add kr diya
fruits.push("pineapple");
console.log(fruits);//(0,1,2,3,4,5-pineapple)

//reverse of fruits
// let fruits=["mango","apple","banana","litchi","orange"];
// fruits.push("guvava");//last me add hota h push but ulta hone ke baad first me dikhega

// for(let i=fruits.length-1; i>=0; i--){
//    console.log(i,fruits[i]);//variable index aa gya fruits[i]
//  }
 
 //5 guvava
 //4 orange
 //3 litchi
 //2 banana
 //1 apple
 //0 mango
