//For the given start state of an array ,change it to final form using methods.
// start: ['january','july','march','august']
// final: ['july','june','march,'august']


let months = ['january','july','march','august'];
console.log(months);//(4) index :0,1,2,3

months.shift();//remove(strating me) january
months.shift();//remove(strating me)  july
months.unshift("june");//add(strating me) 
months.unshift("july");//add(strating me) 


console.log(months);//(4),'july','june','march','august'
