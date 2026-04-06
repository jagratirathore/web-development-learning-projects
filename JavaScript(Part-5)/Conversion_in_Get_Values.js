//javascript object keys ko automatically string me convert kr deta, bhale vo number ho 1,2 ya datatypes -true,null,undefined, sb ko string me kr deta automatic sbhi keys ko or vo data serf likhs hota h key me ko datatype ke form me store nhi hota h esliye sb keys ko string me convert kr deta h objects   or js esko datatype ke form me nhi pdta esko string ke form me pdta h,Example-
const obj = {
 1: "a",
 2: "b",
 true: "c",
 null: "d",
 undefined: "e"
}

//console pe agr ek ek value access krenge to-(interviwer que most imp)
//obj[1]//as a index use  nhi kr rhe hm 1 ko ye 1 ek number h jo automatically ja ke phele string me convert huva h  phir 1 string ko 1 se compare kiya h key ko or phir vo match kr rha h value se
//'a'//ye output aayega

//obj[2]
//'b'//ye output aayega

//obj[true]
//'c'


//obj[null]
//'d'

//obj[undefined]
//'e'


//note-jo bhi chiz square brackets[], me likhi jaati h agr vo string nhi h to javascript usko string me convert krta h fir uski value return kr ke deta h automatically


//but if hmne .operator use kiya to hmko milega error -unexpected number q ki ye automatic change nhi kr rha h
//obj.1//error

//obj.null
//'d'  //ye sb de  denge(null,undefined,true) serf number error dega 

//note-key simply word hota h usme kbhi bhi hm (" ") nhi lgaate h,generally hm key ko create krte vakt wrods likhte h bhut rarely hm number use krenge

