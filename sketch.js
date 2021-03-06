var bg,bgImage;
var bird,birdImage;
var ship,shipImage;


function preload(){
  bgImage=loadImage("bg.png");
  birdImage=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png","bird9.png",
  "bird10.png","bird11.png","bird12.png","bird13.png","bird14.png");
  shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
} 

function setup() {
  createCanvas(1600,800);
  bg=createSprite(800,400,1600,800);
  bg.addImage("bg",bgImage);
  bg.velocityX=-4;

  bird=createSprite(200,200,50,50);
  bird.addAnimation("bird",birdImage);

}

function draw() {
  background("blue");
  
  if(bg.x<0){
    bg.x=800;
  }

  if(keyDown(UP_ARROW)){
    bird.velocityY=-5;
  }
  bird.velocityY+=0.5;

  spawnShip();
  drawSprites();
}

function spawnShip(){
  if(frameCount%200===0){
    ship=createSprite(1600,600,50,50);
    ship.addAnimation("ship",shipImage);
    ship.velocityX=-4;
    ship.scale=0.2;
     
  }
}