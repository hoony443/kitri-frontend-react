const toDoList = document.getElementById("toDoList");
const contents = document.getElementById("contents");
const jsToDoList = document.getElementById("js-toDoList");

// init, submit 이벤트 핸들러
// 이벤트 핸들러 함수 생성
// 
// 1. form 전송
// 2. input value 로컬 스토리지에 배열로 저장
// 3. 배열 값 가져오기
// 4. 삭제

let toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos))
}
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode; 
    jsToDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(item) {
        return item.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(currentValue) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerHTML = currentValue;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    jsToDoList.appendChild(li);
    const toDoObj = {
        currentValue: currentValue,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function loadToDos() {
    const loadToDos = localStorage.getItem("toDos");
    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(
            function(item){
                paintToDo(item.currentValue);
            }
        );
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = contents.value;
    paintToDo(currentValue);
}

function init() { 
    toDoList.addEventListener("submit", handleSubmit);
    loadToDos();
}

init();