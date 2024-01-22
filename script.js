const square = document.querySelector("#Icetang");

let squarePositionY = 230;
let squarePositionX = 100;

let keyWPressed = false;
let keyAPressed = false;
let keySPressed = false;
let keyDPressed = false;

let squareSpeed = 1;

document.addEventListener("keydown", (e) => {
    if (e.key == "w" || e.key == "W") {
        keyWPressed = true;
    }

    if (e.key == "a" || e.key == "A") {
        keyAPressed = true;
    }

    if (e.key == "s" || e.key == "S") {
        keySPressed = true;
    }

    if (e.key == "d" || e.key == "D") {
        keyDPressed = true;
    }
})

document.addEventListener("keyup", (e) => {
    if (e.key == "w" || e.key == "W") {
        keyWPressed = false;
    }

    if (e.key == "a" || e.key == "A") {
        keyAPressed = false;
    }

    if (e.key == "s" || e.key == "S") {
        keySPressed = false;
    }

    if (e.key == "d" || e.key == "D") {
        keyDPressed = false;
    }
})

setInterval(function() {
    if (keyWPressed) {
        squarePositionY -= squareSpeed;
    }

    if (keyAPressed) {
        squarePositionX -= squareSpeed;
    }

    if (keySPressed) {
        squarePositionY += squareSpeed;
    }

    if (keyDPressed) {
        squarePositionX += squareSpeed;
    }

    if (squarePositionX <= document.querySelector("#background").style.left - 5) {
        squarePositionX += squareSpeed;
    } else if (squarePositionX >= document.querySelector("#background").style.left + 885) {
        squarePositionX -= squareSpeed;
    }

    if (squarePositionY <= document.querySelector("#background").style.top - 5) {
        squarePositionY += squareSpeed;
    } else if (squarePositionY >= document.querySelector("#background").style.top + 485) {
        squarePositionY -= squareSpeed;
    }

    square.style.top = squarePositionY + "px";
    square.style.left = squarePositionX + "px";
}, 5)