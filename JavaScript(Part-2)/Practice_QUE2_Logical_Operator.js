//Q-Predict the output of following code:

let num=12;

if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){//T&&F||T=T&&T=T(safe)
  console.log("safe");
}else{
    console.log("unsafe");
}