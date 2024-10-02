let paddleWidth = 100
let paddleHeight = 20
let bomba;
function preload(){
    bomba = loadImage("image/bomba.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    background("black");
}
function draw(){
    background("white")
    braw_paddle()
    image(bomba,0,0,64,64)
}
function braw_paddle(){
    rect(mouseX,400,paddleWidth,paddleHeight);
}
