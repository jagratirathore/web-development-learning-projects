let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(event){
     event.stopPropagation();//ye stop kr dega li ki event bubbling ko
     console.log("div was clicked");
})


ul.addEventListener("click",function(event){
    event.stopPropagation();//ye stop kr dega li ki event bubbling ko
    console.log("ul was clicked");
})

for (let li of lis){
li.addEventListener("click",function(event){
    event.stopPropagation();//ye stop kr dega li ki event bubbling ko
    console.log("li was clicked");
})
}

// Output : Before using stopPropagation()
// agar div pe click krenge → div was clicked
// agar ul pe click krenge → ul was clicked, div was clicked
// agar li pe click krenge → li was clicked, ul was clicked, div was clicked
// is process ko Event Bubbling kehte hain

// After using stopPropagation()->stopPropagation() sirf li ki bubbling nahi, balki jis element par lagaya hai us event ko parent tak jane se rokta hai.
// agar div pe click krenge → div was clicked
// agar ul pe click krenge → ul was clicked
// agar li pe click krenge → li was clicked