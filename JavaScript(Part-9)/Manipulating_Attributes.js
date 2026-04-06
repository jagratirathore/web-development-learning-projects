let img = document.querySelector('img');
console.log(img);

//img ke liye uski id ko get kr skte h,id ki abhi value ky h pta chl jaayegi
console.log(img.getAttribute("id"));//mainImg

//id ko change bhi kr skte h
console.log(img.setAttribute('id','spidermanImg'));//jb hm change krte h value to jo styling di hoti h vo vha se hat jaati h to jb bhi set kre dhyan rakhe

//img ke liye img ka src attribute change kr rhe h
console.log(img.setAttribute('src',"assets/creation_3.jpeg"));//3rd img upr aa jaayegi spiderman vaali me img

//class ki value null h to hm esko set kr skte h
console.log(img.getAttribute('class'));//null
console.log(img.setAttribute('class',"images"));//undefined
console.log(img.getAttribute('class'));//images