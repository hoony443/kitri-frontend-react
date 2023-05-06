// form, input, greeting 변수 정의
// 함수 실행 init() > loadName() > askForName(), paintGreeting() > handleSubmit() > saveName

const form = document.getElementById('js-form'),
    input = document.querySelector("input"),
    greeting = document.getElementById('greeting');
    

function saveName(text) {
    localStorage.setItem("currentUser", text);
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerHTML = `hello ${text}`
}
function loadName() {
    const currentUser = localStorage.getItem("currentUser");
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
    
function init() {
    loadName();
}

init();