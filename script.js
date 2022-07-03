let moveImg1 = document.getElementById("move1")
let moveImg2 = document.getElementById("move2")
let moveImg3 = document.getElementById("move3")

let posX = 0;
let posY = 0;
function showCoords(event){
    var x = event.clientX;
    var y = event.clientY;
    moveImg1.style.left=-(x/5)+"px";
    moveImg1.style.top=-(y/5)+"px";
    moveImg2.style.left=-(x/6)+"px";
    moveImg2.style.top=-(y/6)+"px";
    moveImg3.style.left=-(x/7)+"px";
    moveImg3.style.top=-(y/7)+"px";
}
