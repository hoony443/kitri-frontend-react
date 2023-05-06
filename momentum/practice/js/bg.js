const body = document.querySelector("body");


function paintImage(randomNumber) {
    const image = new Image();
    image.src = `../images/${randomNumber}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
}

function genRandom() {
    const number = Math.floor(Math.random()*5);
    return number;
}
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();