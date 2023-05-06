const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode; 
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(abc){
        return abc.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
     localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        //forEach는 기본적으로 함수를 실행하는데, array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는거!
        //괄호안에 바로 function을 만드는데, 이 함수를 parsedToDos에 있는 것들 각각에 대해 실행해줄 것이므로 이름을 정하면 됨 ex. asdf, todo etc.
        parsedToDos.forEach(function(asdf) {
            //console.log(asdf.text);
            paintToDo(asdf.text);
        })        
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();