const toDoform = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function toDoDelete(event){
    const li =(event.target.parentElement);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newToDo){
const li = document.createElement("li");
li.id=newToDo.id;
const span = document.createElement("span");
const button = document.createElement("button");
span.innerText = newToDo.text;
button.innerText ="X";
button.addEventListener("click",toDoDelete);
li.appendChild(span);
li.appendChild(button);
toDoList.appendChild(li);
}

function submitPrevent(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos()
}

toDoform.addEventListener("submit",submitPrevent);


const savedToDos= localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo);
}