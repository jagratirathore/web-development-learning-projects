//Add following attributes to the element:
// -change placeholder value of input to "username"
// -change the id of button to "btn"

let newinput = document.createElement('input');
newinput.type = "text";
newinput.placeholder = "username";

let btn = document.createElement('button');
btn.innerText = "ClickMe";
btn.id = "btn";

document.body.append(newinput, btn);