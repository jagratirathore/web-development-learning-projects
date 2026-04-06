let step1=Math.random();
console.log(step1);//jitni baar esko copy paste kr vaayenge utni baar 1 se 9 tk ye random number dusre dusre dega

let step2=step1*10;
console.log(step2);

let step3=Math.floor(step2);
console.log(step3);//range(0 to 9 )value generate hogi 

let step4=(step3+1);
console.log(step4);


//or 4 ro step ko ek sath ese bhi likh skte or integer random number generate kr skte(1 to 10)ki range ki bich,ese hi 1 to 20,1 to 30 sb nikaal skte h
console.log(Math.floor(Math.random()*10)+1);//serf (0 se 9 tk random number generate honge)-esliye +1 add krte taaki 10 tk ke range me number generate kre 1 to 10
