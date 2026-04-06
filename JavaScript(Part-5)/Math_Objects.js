//sb object dikhai degi JS ki file me jb console.log kr ke math type krenge
console.log(Math);//sbhi mathematical constant de dega hmko jo js me h already

//PI-funtion or method
console.log(Math.PI);//3.14

//E-Euler's number method
console.log(Math.E);//2.718


//absolute method
console.log(Math.abs(12));//12,absolute method-koi bhi number pass krenge absolute value la ke dega agr (-12) pass kiya to ye - hta ke jo absolute number reh jata vo la ke dega ,positive number pass krenge to vhi positive return kr deta h
console.log(Math.abs(-12));//12
console.log(Math.abs(-12.5));//12.5

//power method-a ki power b 
console.log(Math.pow(2,4));//2**4=16

//floor(fars) method-(nearest smallest value pe round off krne ke liye integer value ko)jo number hota h usko round off kr deta h-ya less than ya equal to value dega,1 number km kr ke round off kr ke deta h
console.log(Math.floor(5));//5
console.log(Math.floor(5.5));//5
console.log(Math.floor(5.99999999999999));//5
console.log(Math.floor(-5));//-5
console.log(Math.floor(-5.5));//us taraf round of krega jisme -5 se chota ho(jitna number -ve hota jata utna chota hote jata h), -6

//ceil(chat) method-(larger integer value pe round off krta h ye ),1 number bda kr ke round off kr ke deta h
console.log(Math.ceil(5));//5
console.log(Math.ceil(5.5));//6
console.log(Math.ceil(5.0000000000000009));//6
console.log(Math.ceil(-5));//-5
console.log(Math.ceil(-5.5));//-5.5

//sb se jada use krte h esko-random method-koi bhi random value dega(range-0 se 1 ke bich),serf kbhi bhi 1 nhi dega q ki exclusive h 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

