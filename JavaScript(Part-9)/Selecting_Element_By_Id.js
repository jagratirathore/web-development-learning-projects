//img ke pass jese id = mainImg
console.log(document.getElementById(mainImg));//null, bcz ye mainImg ko js variable ki trh treat kr rha h q ki without("")diya h hmne
console.log(document.getElementById("mainImg"));//img ki link de degaye ,ye img tag,ya ye img element nhi h ,

//ye img ka object h-esko hm store kra skte h kisi variable ke andr
let imgObj = document.getElementById("mainImg");
console.log(imgObj);//print link
console.dir(imgObj);//img#mainImg,bhut sari key values aa jaayegi(bhut saari property dekhne milegi jese-id:"mainImg",or tagName(element ka ky tag h vo mil jata h)="IMG",source/src(kha se link h hmari img-file se h to file dikh jaayegi,or agr link internet ki uthai h to vo bhi souce me dikha jaati h)) ,eske andr imgObject aayegi 

//img object ki property ko print bhi kra skte h jis se hm us img ki link ka use kr ske
console.log(imgObj.src);//object ka source print krana

//object ka tagName print krana
console.log(imgObj.tagName);//IMG

//object ka id print krana
console.log(imgObj.id);//mainImg

//change krna h img object souce ko dusri value assign krna h to kr skte h,source change hoga to image hi change ho jaayegi
console.log(imgObj.src="assets/creation_1.png");//spiderman vaali photo change ho ke niche jo photo h vhi aa jaayegi q ki uski link daal rakhi h hmne eske an dr


//document ke and hmko paragraph access krna h to vo bhi hm kr skte h
console.log(document.getElementById("description"));//id name=description daal do

//paragraph ka object form chaiye to likhenge hm
console.dir(document.getElementById("description"));//p#description

//eshi id ko access krna chahte hm js me jo h hi nhi to vo hmko null deta h js
console.log(document.getElementById("abc"));//null

//note:hmne jitne bhi code likha h sb js file me likha h jo refresh ke baad gayab nhi ho ga or changes bhi kiye jo sb saved rhenge jb hm console pe krte to refresh hone ke baad sb changes chle jaate h ya gayab ho jaate h