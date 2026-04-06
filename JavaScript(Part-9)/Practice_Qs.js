// Que: Add the following Elements to the container using only JavaScript and the DOM methods.
// i) a <p>  with red text that says "Hey I'm red!"
// ii) an <h3> with blue text that says "I'm" a blue h3!"
// iii) a <div> with a black border and pink background color with the following elements inside of it:
//  ~ another <h1> that says "I'm in a div"
//  ~a <p> that says "ME TOO!"


let container = document.body;

let redPAra = document.createElement("p");
redPAra.innerText = "Hey I am red!";
redPAra.style.color="red";
container.appendChild(redPAra);

let h3tag = document.createElement("h3");
h3tag.innerText = "Hey I am blue!";
h3tag.style.color="blue";
container.appendChild(h3tag);


let newDiv = document.createElement("div");
newDiv .style.border="2px solid black";
newDiv .style.backgroundColor="pink";

let h1tag = document.createElement("h1");
h1tag.innerText = "I am in a div!";
let para = document.createElement("p");
para.innerText = "ME TOO!";

newDiv.appendChild(h1tag);
newDiv.appendChild(para);
container.appendChild(newDiv);