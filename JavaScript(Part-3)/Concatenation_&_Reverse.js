let primary = ["red","yellow","blue"];
let secondary = ["orange","green","violet"];

//concatenation(add)->original array me change nhi kr ke deta h(jo element phele lilkte uske elemnet phele add hote ),two array using concat method,ye new array bnta h usi me change nhi hota
console.log(primary.concat(secondary));//(6)["red","yellow","blue","orange","green","violet"];
console.log(secondary.concat(primary));//(6)["orange","green","violet","red","yellow","blue"]

//but concatenation se hmari original array change nhi hogi vo as it rhegi agr hm fir se primary kr vaaye to bhi vo vesi hi rhegi or sencondary bhi
console.log(primary);
console.log(secondary);



//or variable bna ke bhi kr skte h concatenation
let allcolors = (primary).concat(secondary);
console.log(allcolors);


//reverse(ulta)->(original array me change kr ke deta h ye)krenge kisi bhi array ko to reverse method use krenge hm
console.log(primary.reverse());// (3)["blue""yellow","red"]
console.log(primary);//usi me changes ho rhe(original array me) naya array nhi bn ke aa rha h