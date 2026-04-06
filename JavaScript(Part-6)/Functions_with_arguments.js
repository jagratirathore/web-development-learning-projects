//name users se aaye esa function bnana ho 1 argument 
function printName(name){//(pass kr rhe value)eske and kbhi bhi double inverted nhi aata 
    console.log(name);//(print kr vaayenge value)esko bhi double inverted nhi denge ku ki apne ko as it is print nhi krana h name ke andr jo h vo chaiye hm ko user se to hm direct call krenge function ke ("Jagrati")andr
}
printName("Jagrati");//call krenge value(jo pass ki h hmne eske andr))//JAgrati parameter h yaha
printName("Bittu");
printName("Heena");
printName("Harsha");

//2 argument bhi pass kr skte h hm,argument or parameter dono bolte h hm esko
function printInfo (rollno , subject){
    console.log(rollno,subject);
}
printInfo("101","Maths");

//agr hmko pura statement jese chaiye to hm ` ` ka use kr ke bhi kr skte h
function bioData(Name,Age,City,Married){
    console.log(`My name is ${Name}  Rathore and my age is ${Age} and  i am leaving in city ${City} i am married is ${Married}`);
}
bioData("Jagrati",24,"Alirajpur","No");
bioData("Harsha")//agr ek hi parmeter ke liye value pass ki to bhi error nhi aayega baakhi parameter ko undefined(ki value nhi pata mujhe) bolega 
bioData(56);//(jo value phele pass ki vo phele vaale argument me hi ja ke sve hogi ,baad vaali value baad vaale me hi save hogi )ye age daali pr phir bhi ye name ki place pe aayega q ki order impotant h starting se hi chalu hoga esa nhi bich ka direct ya last ka de diya,js ko nhi pata ye age ek number honi chaiye or string ek name js ko serf  ye pta h random variables h or eske andr koi value store hona h -esliye order bhut imp h
//Note-jitne marzi argument pass kr skte starting se or ending se jitne marzi missout(nhi bhi krenge pass value to chlega) kr skte vo undefined de useDebugValue,pr esa nhi kr skte ki last vala pass kr diya or suru vala missout kr diya q ki function me order bhut important h 

//sum ka ex
function sum(a,b){
    console.log(a+b);
}
sum(5,5);//10
sum(2,5)//7