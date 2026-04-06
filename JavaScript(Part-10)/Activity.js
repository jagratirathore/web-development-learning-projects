let btn = document.querySelector("button");

btn.addEventListener("click",function(){
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText =randomColor;
  
  let div= document.querySelector("div");
  div.style.background = randomColor;
  
  console.log("color updated");
});
function getRandomColor(){
    //rgb->(0-255) sbhi hoti h
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
//console.log(getRandomColor());//random number generate krega