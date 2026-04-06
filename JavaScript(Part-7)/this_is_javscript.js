//object create-bydefault hm call krne ke liye window object use krte hi h vo this hoti h
const student = {
    name: "Jagrati",
    age:23,
    eng:23,
    math:93,
    phy:97,
    getAvg() {//object ke andr method define kr rhe h getAvg()
        console.log(this);
        let avg =(this.eng+this.math+this.phy)/3; //ye access nhi krega error dega(eng undefined kr ke) q ki function ke andr h to esko  nhi pta ki eng,math ,phy kha h esliye this use krenge hm
       console.log("avg is:",avg);//this(object ki property ko use krte h hm)-student object ki property ko use krna to likhenge baar baar this or us property ko access krenge
    }
}

console.log(student);
console.log(student.name);
console.log(student.getAvg());

// function getAvg(){
//     console.log(this);
// }
// console.log(getAvg());//(jb koi bhi object nhi hoti to window object to hoti hi h)koi bhi function-window object hoti h bydefault value (hiher level object tab ke andr yahi hoti h or saara code eske andr hi aata h sbhi method or functions hoti h esme)-consol.log(window) kro pta chl jaayega