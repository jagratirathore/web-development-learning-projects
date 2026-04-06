//favorite topic h ye interviewer ka puchte hi h
const student = {
    name:"jagrati",
    marks:95,
    property:this,//global scope h-ye window(object) ho jaayegi
    getName: function(){//normal function use huva-
        console.log(this)//this calling object(this=student)h
        return this.name;
    },
    getMarks: () =>{//arrow function use huva h
        console.log(this);//this calling object nhi hoti arrow ke liye, parent's scope h eske liye(this=window)window parent h
        return this.marks;
    },
    //faaide -arrow this ke (settimeout me hote h)
    getInfo1: function(){
        setTimeout(()=>{//arrow function pass kiya
            console.log(this);//student object
        },2000);
    },
     getInfo2: function(){
        setTimeout(function (){//nomal function pass kiya
            console.log(this);//window object
        },2000);
    },
};



//console(output)
console.log(student.getName());
console.log(student.getMarks());//arrow me undefined aa rha h output me
console.log(student.getInfo1());//undefined,student object 2s baad aayega
console.log(student.getInfo2());//window object 2s baad