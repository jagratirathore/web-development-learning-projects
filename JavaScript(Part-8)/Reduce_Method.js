let nums =[1,2,3];
let finalVal =nums.reduce((res,el)=>res+el);
console.log(finalVal);//6

//how to work reduce function
                  //(res,el) => res+el;
                 //    |          |
                //     |          |

//first time call->  (0,1) => 0+1=1
//second time call-> (1,2) => 1+2=3
//third time call->  (3,3) => 3+3=6(final value)


//har baar yahi value print hogi ye check kr lete ab hm
let nums1 =[1,2,3];
let finalVal1 =nums1.reduce((res,el)=>{
    console.log(res);//res=result,el=element
     return res+el;
});
console.log(finalVal1);
//1
//3
//6 

//or ye logic h saare ke saare array ke element ka sum calculate krne ka
let nums2 =[1,2,3];
let finalVal2 =nums2.reduce((res,el)=>{
    return res+el;
});
console.log(finalVal2);//sum=6