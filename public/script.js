

let paddleWidth = 100
let paddleHeight = 20
let paddleYposition = 50
let screenHeight
let screenWidth
let bombaimage;
let kiviäimage
let olioLista = [];
//let bombaOlio;
//let bombaOlio2;

let score = 0
let lives = 3
let nappiWid

function preload(){
    bombaimage = loadImage("image/bomba.png");
    kiviäimage = loadImage("image/kiviä.JPG")
}
function setup(){
    screenHeight = 450
    screenWidth = 1250

    paddleYposition = screenHeight - paddleHeight;
    createCanvas(screenWidth,screenHeight);
    background("black");
    luo_olio();
    //bombaOlio = new Ghost();
    //bombaOlio2 = new Ghost();
}
function draw(){
    //backgraund("black")
    bgimage()
    braw_paddle()
     //bombaOlio.Move();
    //bombaOlio2.Move();
    liikuta_olioita();
    draw_pisteet()
}
function braw_paddle(){
    rect(mouseX,paddleYposition,paddleWidth,paddleHeight);
}
function bgimage(){
    image(kiviäimage,0,0,screenWidth,screenHeight)
}
function luo_olio(){
    let uusiOlio = new bombaa();
    olioLista.unshift(uusiOlio);
    //console.log(olioLista);
    setTimeout(luo_olio,2000);
}
function liikuta_olioita(){
    olioLista.forEach(function(olio,index){
        olio.Move();

        if(olio.y > screenHeight){
            olioLista.splice(index,1);
            lives = lives -1   
            if(lives<= 0){
                gameOver()
            }
        }

        if(olio.x > screenWidth){
            console.log("Lisätään piste");
            olioLista.splice(index,1)
            score = score + 1
         }
    })
}
function draw_pisteet(){
textSize(30)
fill("white")
textAlign(LEFT, TOP)
text('score:' + score + '\nlives:' + lives,5,10)
}
function gameOver(){
    noLoop()
    textSize(50)
    textAlign(CENTER)
    fill("white")
    text("GAME OVER",screenWidth/2,screenHeight/2)
}
class bombaa{
    constructor(){
        
        this.x = 0;
        this.y = random(0,50);
        this.Width = 30;
        this.Height = 30;
        this.xSpeed = random(3,5);
        this.ySpeed = -1;
        this.gravity = 0.05;
    }
    Move(){
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