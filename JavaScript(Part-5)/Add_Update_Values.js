const student = {
     name: "Jagrati",   //string h value
     age: 24,
     marks: 94.4,
     city: "Delhi"     //string h value
};

//pura data jitna object me store h vo access krna to
console.log(student);

 //key city jo value h vo access krna to-using dot operator
console.log(student.city);//delhi

//update(= ki help se update kr skte koi bhi value ko)-change city delhi to mumbai
console.log(student.city=("Mumbai"));//Mumbai
console.log(student.city);// after change -Mumbai
 
//gender nhi h to undefined btaayega ki kuch nhi h eshi key object student me
console.log(student.gender);//undefined

//add-create kr rhe h hm gender name ki key yaha object ke andr
console.log(student.gender=("female"));//female
console.log(student.gender);//after add in object female show kr dega
console.log(student);//esme bhi ek new key vale pair add ho ke aayegi gender:female se 

//change the marks to A,number ko update kr ke string bhi kr skte har chiz ko update kr skte h,array bhi create kr skte h
console.log(student.marks);//phele kitne marks h 94.4
console.log(student.marks=("A"));//"A"
console.log(student.marks);//after change -"A"

//array bhi create kr skte h-3 subjects ke marks store kr vaayengea array me
console.log(student.marks=[90,80,70]);
console.log(student);

//delete bhi kr skte h-age htvana h
console.log(delete (student.age));//true
console.log(student);//age hat gai hogi