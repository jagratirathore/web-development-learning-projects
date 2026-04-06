function multipleGreet(func,count){//higher order function-q ki kisi or function ko as a argument le rha h
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}

//greet()- greet ko execute(calling) kr vaana ese pass krte toString,or greet -to direct hm usko define kr  rhe(esliye defination bhejna h calling statement nhi)
multipleGreet(greet,100);//yaha variable pass h or count kitni baar kr vaana-jese 100
//direct call krte vakt ek fuction bhi pass kr skti hu ,yaha mene koi variable pass nhi kiya dekh lo
multipleGreet(function(){console.log("namaste")},100);