function sum(...args){//sum function saare arguments ko collect kr ke single argument sum me bta rha h
    //arguments
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ",args[i]);
    }
  
}
console.log(sum(1));//ek argument pass krne pr bta rha:you gave us: 1
console.log(sum(1,2));//you gave us:  1->2 baar btayega
console.log(sum(1,2,3));//you gave us:  1->3 baar btayega
console.log(sum(1,2,3,4));//you gave us:  1->4 baar btayega
console.log(sum(1,2,3,4,5));//you gave us:  1->5 baar btayega


//JS me inbuit arguments or collection -array ki method use nhi kr skte ser arguments[0] se access kr skte hota h 
function min(a,b,c,d){
    console.log(arguments);
    //console.log(arguments.length);//length bhi print kr skte arguments ke age.length kr ke output=4
    //arguments.push(1);//error aa jaayegi push krne pe
}


console.log(min(1,2,3,4));//eske andr 4 value pass kregne to argument print ho jaayega-output,Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
console.log(min);
// ƒ min(a,b,c,d){
//     console.log(arguments);
// }

//sum1
function sum1(...args){
    return args.reduce((sum1,el)=>sum1+el);
}

console.log(sum1(54,86,32,10));//sb ka addition-182

//min1
function min1(msg,...args){
    console.log(msg);//hello
    return args.reduce((min1,el)=>{
        if(min1>el){
            return el;
        }else{
            return min1;
        }
    });
}
console.log(min1("hello",52,-85,95,3,-90));//-90(or agr hello ki place pe 10 hota to msg me 10 print hota hello nhi)
//extra parameter add krna hota to hm uske rest se phele likhte nito error aa jaata h-example->function test(...args, msg) // ERROR