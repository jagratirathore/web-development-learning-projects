//tag ke basis pe select
console.dir(document.querySelector("h1"));//h1 object aa jaayega

//id ke basis pe select kr skte h
console.dir(document.querySelector("#description"));//p#description object aa jaayega

//class ke basis pe select kr skte h hm
console.dir(document.querySelector(".oldImg"));//img.oldImg object aa jaayega

//div ke saare anchor tag chaiye to
console.dir(document.querySelector("div a"));//a boc link-ye basically first anchor tag h hmare pass



//note-querySelector:it used for single element select  krne ke liye object serf 1 st deta h Ex=agr p diya h to serf first paragraph la ke dega agr 
// sb chaiye to all likhna pdta h (pura html collection chaiye to saare ke saare anchor tag chaiye agr to )
console.dir(document.querySelectorAll("div a"));//NodeList(4)

//note-multiple tareke hote h html me select krne ke liye object ko but hm sb se frequently(jada) use krenge querSelector or querySelectorAll ko q ki vo easy h  q ki Id ,className or tagName se to