let msg="hello";
console.log(msg.slice(0,4));//agr hm ko hell chaiye(ending index jitna chaiye us se plus 1 likhte h always)


let msg1="apnaCollege";
console.log(msg1.slice(4,11));//agr college chaiye to or ending index nhi bhi dete to bhi chlta by dafault vo length le leta
//or
console.log(msg1.slice(4));//agr college chaiye to or ending index nhi bhi dete to bhi chlta by dafault vo length le leta

//not-slice me ek or string hoti h->jisme hm hmari negative value bhi pass kr skte h ,if agr mene str.slice(-ve)=str.length-2 kr dega or return kr dega length me se -2 kr ke
console.log(msg1.slice(-1));//length of string is (11 )-1=10(e)letter print hota
console.log(msg1.slice(-2));//length of string is (11 )-1=9(ge)letter print hota uske baad vaala letter bhi 9 digit ke baad vala bhi
console.log(msg1.slice(-5));//length of string is (11 )-5=6(e)llege