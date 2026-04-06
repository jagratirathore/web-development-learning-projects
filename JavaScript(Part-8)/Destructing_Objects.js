//note- object destruting-esme hm {} use krte h,arr destruting me[] use krte the hm
//object
const student = {
    name:"Jagrati",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username: "jagrati@123",
    password: "abcd",
    //city:"pune",
};




//object se specific information nikalna h destructing se student ka username or password chaiye hmko
// let username=student.username;
// let password=student.password;

// console.log(username);//jagrati@123
// console.log(password);//abcd

//pr jb user ke pass bhut saari property hui to us case me ye accha nhi lge ga-to destruting use krenge-esme hm {} use krte h
// let {username,password}=student;//and ke taraf variable likh skte h jese username or password aa jaaye
// console.log(username);//jagrati@123
// console.log(password);//abcd
// console.log(student.user);//undefined(h hi nhi user name ki key student object me)


//object ke alwa bhi ki ki value change kr skte hm,user ,secret me assign kr va diya
let{username: user,password: secret,city="Mumbai"}=student;//city add kr ke usko value bhi assign kr skte h ,student ki city kuch nhi hogi to mumbai hogi
console.log(user);//jagrati@123
//console.log(username);//error
console.log(secret);//abcd
//console.log(password);//error
console.log(city);//default value mumbai aayegi or agr already set h object me city:pune to mumbai nhi pune hi aayega-q ki object highest prefernce order leti h as a output
