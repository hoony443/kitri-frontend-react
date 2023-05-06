const toDoForm = document.getElementById("js-toDoForm"),
    input = document.querySelector(".toDoInput"),
    toDoList = document.querySelector(".js-toDoList");

let toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    
}

function loadToDos() {
    const loadToDos = localStorage.getItem("toDos");
    if(loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(item) {
            paintToDo(item.text);
        })
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();