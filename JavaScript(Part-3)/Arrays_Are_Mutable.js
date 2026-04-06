//string(immutable-nochange)example
let name="rohit";//rohit ko change ke ke mohit krna h abhi ye string h
name[0]='m';
console.log(name);//('rohit')no change beacuse in js string are immutable hoti h(changes nhi hote usi me agr change krna ho to dusre varibale me store hoga)


//array(mutable-changed) example
let fruits = ["mango","banana","litchi"];
console.log(fruits);//(3)
console.log(fruits[0]);//mango
console.log(fruits[1]);//banana
//after change in array-
fruits[1]="pinapple";
console.log(fruits[1]);//pineapple
//direct we give fruits[10]="papaya";
fruits[10]="papaya";
console.log(fruits);//(11-length h),empty*7 ,and 10 me papaya change ho jaayega
console.log(fruits[5]);//undefined ku ki kuch h hi nhi index 3,4,5,6,7,8,9-thats why it shows empty*7 and in 10th place we are giving papaya