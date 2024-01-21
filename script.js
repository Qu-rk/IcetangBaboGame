const square = document.querySelector("#Icetang");

let squarePositionX = 300;
let squarePositionY = 200;

let keyWPressed = false;
let keyAPressed = false;
let keySPressed = false;
let keyDPressed = false;

let squareSpeed = 1;
let squareXYMoveSpeed = 1;

// 마우스로 움직임(주석)
// document.addEventListener("mousemove", (e) => {
//    square.style.left = e.clientX + "px";
//    square.style.top = e.clientY + "px";
// })

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
        squarePositionX -= squareXYMoveSpeed;
    }

    if (keyAPressed) {
        squarePositionY -= squareXYMoveSpeed;
    }

    if (keySPressed) {
        squarePositionX += squareXYMoveSpeed;
    }

    if (keyDPressed) {
        squarePositionY += squareXYMoveSpeed;
    }

    if (squarePositionY <= document.querySelector("#background").style.left - 5) {
        squarePositionY += squareXYMoveSpeed;
    } else if (squarePositionY >= document.querySelector("#background").style.left + 885) {
        squarePositionY -= squareXYMoveSpeed;
    }

    if (squarePositionX <= -5) {
        squarePositionX += squareXYMoveSpeed;
    } else if (squarePositionX >= 485) {
        squarePositionX -= squareXYMoveSpeed;
    }

    square.style.top = squarePositionX + "px";
    square.style.left = squarePositionY + "px";
}, 5)