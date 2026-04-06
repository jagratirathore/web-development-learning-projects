//ye default hoti h js me esme sb methods hoti h inbuilt
console.log(window);

//console.log nhi krte document ko access krne ke liye console.dir krte h
console.dir(document);

//ab document ke and all kr le index ko access krne ke liye (8) collection index likho ya all bhi likh skte ho h1 ko access krne ke liye
console.log(document.all);
console.dir(document.all[8]);//h1
console.dir(document.all[8].innerText);//spider man


//ab es property ko change kr rhe spider man se peter parker
console.dir(document.all[8].innerText="Peter Parker");//Peter Parker-changes html file me bhi dikhenge

//note-refresh krne pe chiz gayab nhi hogi q ki hmne js me proper changes kiye h agr hm console pe direct ye sb likhte to instant refresh pe chla jata vaaps sb changes mtlb gayab ho jaata