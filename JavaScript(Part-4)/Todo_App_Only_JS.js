//Todo App
// ~list-to show all todos
// ~add-to add a todo
// ~delete-to delete a task
// ~quit-to exit the todo

//Note -game ke prompt pe quit likhenge tab hi chalu hoga phir right click kr ke inspect kr ke dekhenge then refresh kr ke add krenge items
let todo=[];//todo console pe direct likhne se jitne bhi item list me h array me show krta h app
let req=prompt("please enter your request: ");

while(true){

    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        console.log("------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------------");
    }

    else if(req=="add"){
       let task= prompt("please enter the task you want to add");
       todo.push(task);
       console.log("task added");
    }

    else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
        }else{
        console.log("wrong request");
        }
    
        req=prompt("please enter your request: ");
    
}
