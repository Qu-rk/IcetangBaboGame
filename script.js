const square = document.querySelector("#Icetang");
square.addEventListener("mousemove", function (e){
    square.style.left = e.clientX + "px";
    square.style.top = e.clientY + "px";
});