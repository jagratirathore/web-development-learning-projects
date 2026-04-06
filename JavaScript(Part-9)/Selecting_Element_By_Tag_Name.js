//page ke saare paragraph tag ko select krne ke liye,tag name captial("P")ya("p")mattern nhi krega saare case me shi answer aayega hmara
console.log(document.getElementsByTagName("p"));
//HTMLCollection(2) [p, p#description, description: p#description]

//paragraph ki value directly possible h change krna
console.log(document.getElementsByTagName("p")[1].innerText = "abc");//p ka name h abc me convert kr diya hmne

//span tag ek bhi baar usne nhi h hmare document me to empty html collection[] aayega..
console.log(document.getElementsByTagName("span"));//HTMLCollection [],p ka name h abc me convert kr diya hmne
