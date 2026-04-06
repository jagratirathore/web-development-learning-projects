//push method(js me end me ja ke kuch bhi add krna to hm use krte h puch method)
let cars = ["toyota","BMW","Audi","XUV"];
console.log(cars);//(4=length),index-0,1,2,3


//add using push method-end me add
cars.push("maruti");//brakets dyaan rakhna
console.log(cars);//(5),index=4 pe maruti show hoga (last me add ho jaayegi ending me)
// add 1 more car using push method
cars.push("farari");//brakets dyaan rakhna
console.log(cars);//(6),index=5 pe farari show hoga (last me add ho jaayegi ending me)


//pop(delete hoga bydefault last se hi esliye eske and kuch bhi mention nhi krna pdta hm ko)-end me remove
cars.pop();
console.log(cars);//(5)farai remove ho jaayega


//unshift-start me add
console.log(cars);//(5)
cars.unshift("Thar");
console.log(cars);//(6) thar index 0 pe add hogi (starting me)-bcz of unshift method

//shift-start me remove
console.log(cars);//(6)
cars.shift();//starting me jo thar h vo remove ho jaayegi delete mtlb
console.log(cars);//(5)thar starting me add kiya tha vo hat 

//a vaale person ko block bhi kr de or follower vaali list se bhi hta de to hm kya krenge
let followers = ["a","b","c"];
let blocked=followers.shift();//shift mtlb starting index ko delete krna
console.log(followers);//(2)b,c
console.log(blocked);//a