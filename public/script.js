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
}
function braw_paddle(){
    rect(mouseX,400,paddleWidth,paddleHeight);
}

class bombaa{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.Width = 30;
        this.Height = 30;
        this.xSpeed = 1;
        this.ySpeed = -1;
        this.gravity = 0.05;
    }
    move(){
        
        image(bomba,this.x,this.y,this.Width,this.Height)
    }
}