const square = document.querySelector("#Icetang");

let squarePositionX = 300;
let squarePositionY = 300;

let keyWPressed = false;
let keyAPressed = false;
let keySPressed = false;
let keyDPressed = false;

//마우스로 움직임(주석)
// document.addEventListener("mousemove", (e) => {
//    square.style.left = e.clientX + "px";
//    square.style.top = e.clientY + "px";
// })

document.addEventListener("keydown", (e) => {
    if (e.key == "w" || e.key == "W") {
        keyWPressed = true;
    }

    else if (e.key == "a" || e.key == "A") {
        keyAPressed = true;
    }

    else if (e.key == "s" || e.key == "S") {
        keySPressed = true;
    }

    else if (e.key == "d" || e.key == "D") {
        keyDPressed = true;
    }
})

document.addEventListener("keyup", (e) => {
    if (e.key == "w" || e.key == "W") {
        keyWPressed = false;
    }

    else if (e.key == "a" || e.key == "A") {
        keyAPressed = false;
    }

    else if (e.key == "s" || e.key == "S") {
        keySPressed = false;
    }

    else if (e.key == "d" || e.key == "D") {
        keyDPressed = false;
    }
})

setInterval(function() {
    if (keyWPressed) {
        squarePositionX -= 1;
    }

    else if (keyAPressed) {
        squarePositionY -= 1;
    }

    else if (keySPressed) {
        squarePositionX += 1;
    }

    else if (keyDPressed) {
        squarePositionY += 1;
    }

    square.style.top = squarePositionX + "px";
    square.style.left = squarePositionY + "px";
}, 5)