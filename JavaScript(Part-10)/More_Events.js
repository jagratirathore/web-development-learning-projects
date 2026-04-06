let user = document.querySelector("#user");

user.addEventListener("submit", function(event){
    event.preventDefault();
});

//jb meri input ki value change ho jaayegi to ye eventlistener trigger hogs or input ki value change ho jaayegi
user.addEventListener("change",function(){//abcd likha jese to a initial huva b final then c likha to b intnitail or c final ese finale value ko shor krta h console pe,phele jo state me tha or laste me jo hmne state pe choda uske bich me changed
 console.log("input changed");
 console.log("final value=",this.value);
});
//changed=intial or final ke bich ko trake krta h 
//input=har chote chote track ho jese a type kiya to a b type kiya to b to hm use krte  h input event
user.addEventListener("input",function(){//abcd likha jese to a initial huva b final then c likha to b intnitail or c final ese finale value ko shor krta h console pe,phele jo state me tha or laste me jo hmne state pe choda uske bich me changed
 console.log("input value");
 console.log("final value=",this.value);
});
//note- in input:jb bhi hm abcd type krte charater keys to to trigger hote h but jb non character keys shift,arrow keys,control ye input ko triggern nhi krti h
//submit event sirf form pe lagta hai, input pe nahi.
//#user ek input hai — uspe submit kabhi trigger nahi hoga.