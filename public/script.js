let paddleWidth = 100
let paddleHeight = 20
let paddleYposition = 400
let bombaOlio;
let screenHeight
let screenWidth
let bombaOlio2;
let bombaimage;
function preload(){
    bombaimage = loadImage("image/bomba.png");
}
function setup(){
    screenHeight = windowWidth /3
    screenWidth = windowWidth
    createCanvas(screenWidth,screenHeight);
    background("black");
    bombaOlio = new bombaa();
    bombaOlio2 = new bombaa();
}
function draw(){
    background("red")
    braw_paddle()
    bombaOlio.move();
    bombaOlio2.move();
}
function braw_paddle(){
    rect(mouseX,paddleYposition,paddleWidth,paddleHeight);
}

class bombaa{
    constructor(){
        this.x = 0;
        this.y = random(0,40);
        this.Width = 30;
        this.Height = 30;
        this.xSpeed = random(5,10);
        this.ySpeed = -1;
        this.gravity = 0.05;
    }
    move(){
        this.x = this.x + this.xSpeed;
        this.ySpeed = this.ySpeed + this.gravity;
        if(this.y > paddleYposition){
            if(this.x > mouseX && this.x < mouseX + paddleWidth){

                this.ySpeed = -abs(this.ySpeed) 
            }           
        }
        this.y = this.y + this.ySpeed
        image(bombaimage,this.x,this.y,this.Width,this.Height);
        
    }
}