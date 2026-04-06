//Create a new input and button element on the page using Javascript only .Set the text of button to "Click me";

let newinput = document.createElement('input');
newinput.type="text";

let btn= document.createElement('button');
btn.innerText="ClickMe";

document.body.append(newinput);
document.body.append(btn);