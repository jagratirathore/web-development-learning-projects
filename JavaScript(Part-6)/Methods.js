const calculator = {//object
  num:55,//object ke liye property bna rhe hm num=55
    add:function(a,b){
    return a+b;
  },
    sub:function(a,b){
    return a-b;
  },
    mul:function(a,b){
    return a*b;
  }

};

console.log(calculator);
console.log(calculator.num);//55
console.log(calculator.add(1,2));//3
console.log(calculator.sub(10,2));//8
console.log(calculator.mul(5,2));//10

//note-array or string me bhut saari methods use ki js me,ye esliye possible h q ki methods internally js me object hi the vo sb-
//example-typeof[1,2,3] to apne ko object deta tha

//Methods(shorthand)-function keyword likhne ki jarurat nhi add ke phele or sub ke phele syntax dekh ke hi js(javascript) smjh jaata h
// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// }