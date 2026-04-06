let cars=['audi','bmw','xuv','maruti'];
console.log(cars);

//found bmw ka index?
console.log(cars.indexOf('bmw'));//1

//found xuv ka index?
console.log(cars.indexOf('xuv'));//2



//found xuv ka index me uppercase change kr diya to aayega hmare pass-1
console.log(cars.indexOf('Xuv'));//-1


//find out kro jis student ke 100 marks aaye
let marks = [99,89,67,42,100];
console.log(marks.indexOf(100));//4

//if we check 97 marks kis student ke aaye 
console.log(marks.indexOf(97));//-1(q ki pure array me 97 h hi nhi avialable)


//include-found-T,notfound-F
console.log(cars);//4
console.log(cars.includes("audi"));//agr audi exis kr rhi cars array me to ye True dega found hone pe or nhi krti to false ,ans-T

console.log(cars.includes("Toyoto"));//agr Toyoto exis kr rhi cars array me to ye True dega found hone pe or nhi krti to false ,ans-F
