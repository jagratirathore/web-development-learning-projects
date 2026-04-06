//a ko value assign nhi h [b=2 default 2 h to] chlega ye-correct way h krne ka q ki default parameter hmesha last me hona chaiye
function sum(a, b = 2){
  return a + b;
}

console.log(sum(1,4)); // 1+4 = 5
console.log(sum(1));   // 1+2 = 3  (b default 2 ho gaya)

//[c=2 default 2 h]but b ko koi value assign nhi h to nhi chlega q ki order matters-ye correct way nhi h
function minus(c=2,d){
  return c-d;
}

console.log(minus(3,1));//c=3,d=1,3-1=2
console.log(minus(3));//c=3,d=undefined=undefined or NAN(nota a number)
