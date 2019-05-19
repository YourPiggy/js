var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var duck = new Image();
var bg = new Image();
var fg = new Image();
var wallUp = new Image();
var wallBottom = new Image();

duck.src = "img/duck.png";
bg.src = "img/bg.png";
fg.src = "img/ground.png";
wallUp.src = "img/wallBottom.png";
wallBottom.src = "img/wall.png";


var gap = 90;

document.addEventListener("keydown", moveUp);

function moveUp() {
 yPos -= 25;
}


var wall = [];

wall[0] = {
 x : cvs.width,
 y : 0
}

var score = 0;

var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw() {
 ctx.drawImage(bg, 0, 0);

 for(var i = 0; i < wall.length; i++) {
 ctx.drawImage(wallUp, wall[i].x, wall[i].y);
 ctx.drawImage(wallBottom, wall[i].x, wall[i].y + wallUp.height + gap);

 wall[i].x--;

 if(wall[i].x == 125) {
 wall.push({
 x : cvs.width,
 y : Math.floor(Math.random() * wallUp.height) - wallUp.height
 });
 }


 if(xPos + duck.width >= wall[i].x
 && xPos <= wall[i].x + wallUp.width
 && (yPos <= wall[i].y + wallUp.height
 || yPos + duck.height >= wall[i].y + wallUp.height + gap) || yPos + duck.height >= cvs.height - fg.height) {
 location.reload();
 }

 if(wall[i].x == 5) {
 score++;
 }
 }

 ctx.drawImage(fg, 0, cvs.height - fg.height);
 ctx.drawImage(duck, xPos, yPos);

 yPos += grav;

 ctx.fillStyle = "#000";
 ctx.font = "24px Verdana";
 ctx.fillText("Счет: " + score, 10, cvs.height - 20);

 requestAnimationFrame(draw);
}

wallBottom.onload = draw;
